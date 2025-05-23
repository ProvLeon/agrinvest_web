import { NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import ContactFormEmail from '@/emails/ContactFormEmail';
import ContactConfirmationEmail from '@/emails/ContactConfirmationEmail';

// Define a schema for contact form validation
const contactFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required.' }).max(100),
  email: z.string().email({ message: 'Invalid email address.' }),
  subject: z.string().min(1, { message: 'Subject is required.' }).max(200),
  message: z.string().min(1, { message: 'Message is required.' }).max(5000),
});

export async function POST(request: Request) {
  try {
    // Parse and validate the request body
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          message: 'Invalid form data.',
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = result.data;

    // Check for required environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing email configuration');
      return NextResponse.json(
        { message: 'Server configuration error. Could not send email.' },
        { status: 500 }
      );
    }

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: Number(process.env.EMAIL_PORT) || 465,
      secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      // Render React Email templates to HTML strings (asynchronously)
      const adminEmailHtml = await render(
        ContactFormEmail({
          name,
          email,
          subject,
          message,
        })
      );

      const userEmailHtml = await render(
        ContactConfirmationEmail({
          name,
          subject,
          contactPageUrl: `${process.env.APP_BASE_URL || 'http://localhost:3000'}/contact`,
          companyName: "Agrinvest Ghana",
          companyEmail: process.env.NEXT_PUBLIC_APP_EMAIL || "info@investinagric.com",
        })
      );

      // Send emails with the rendered HTML content
      console.log('Sending notification to admin...');
      await transporter.sendMail({
        from: `"Agrinvest Contact Form" <${process.env.EMAIL_USER}>`,
        to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
        replyTo: email,
        subject: `New Contact Form: ${subject}`,
        html: adminEmailHtml,
      });
      console.log('Admin notification sent successfully');

      console.log('Sending confirmation to user...');
      await transporter.sendMail({
        from: `"Agrinvest Ghana" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'Thank you for contacting Agrinvest Ghana',
        html: userEmailHtml,
      });
      console.log('User confirmation sent successfully');

      return NextResponse.json(
        { message: 'Message sent successfully! We will get back to you soon.' },
        { status: 200 }
      );
    } catch (error) {
      console.error('Failed to send email:', error);
      return NextResponse.json(
        { message: `Error sending email: ${error instanceof Error ? error.message : 'Please try again later.'}` },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Contact form error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Invalid form data.', errors: error.flatten().fieldErrors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { message: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}