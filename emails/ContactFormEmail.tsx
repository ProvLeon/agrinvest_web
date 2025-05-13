import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface ContactFormEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactFormEmail = ({
  name,
  email,
  subject,
  message,
}: ContactFormEmailProps) => {
  const previewText = `New contact from ${name}: ${subject}`;

  return (
    <Html>
      <Head>
        <title>New Contact Form Submission</title>
        <meta name="color-scheme" content="light dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Preview>{previewText}</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                primary: "#70C184", // Agrinvest Green
                secondary: "#7AC7F4", // Agrinvest Sky Blue
                accent: "#F59E0B", // Warm accent color
                success: "#10B981", // Success green
                background: "#f8fafc", // Light gray background
                foreground: "#1E293B", // Dark text
                card: "#ffffff",
                muted: "#A1A9B8",
                border: "#E2E8F0",
              },
              boxShadow: {
                sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
              },
              fontFamily: {
                sans: ["Helvetica", "Arial", "sans-serif"],
              },
            },
          },
        }}
      >
        <Body className="bg-background font-sans text-foreground">
          <Container className="mx-auto my-[40px] w-[600px] rounded-lg border border-solid border-[#eaeaea] bg-card p-[20px] shadow-sm">
            <Section className="bg-primary rounded-t-lg py-4 px-6 -m-[20px] mb-0">
              <Img src="https://i.ibb.co/HXF8RJj/agrinvest-logo.png" width="150" height="40" alt="Agrinvest Logo" className="mx-auto" />
            </Section>

            <Section className="mt-[32px] text-center">
              <Heading className="mx-0 my-[30px] p-0 text-center text-[28px] font-bold text-primary">
                New Contact Form Submission
              </Heading>
            </Section>

            <Section className="px-[25px]">
              <Text className="text-[15px] leading-[24px] text-foreground font-medium">
                You have received a new message through the Agrinvest Ghana contact form.
              </Text>
              <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />

              <Heading as="h2" className="text-[20px] font-semibold text-secondary">
                Sender Details:
              </Heading>
              <Section className="bg-gray-50 rounded-lg p-4 border border-[#eaeaea]">
                <Text className="text-[15px] leading-[24px] m-0 mb-2">
                  <strong>Name:</strong> {name}
                </Text>
                <Text className="text-[15px] leading-[24px] m-0">
                  <strong>Email:</strong>{" "}
                  <Link href={`mailto:${email}`} className="text-secondary underline">
                    {email}
                  </Link>
                </Text>
              </Section>

              <Hr className="mx-0 my-[30px] w-full border border-solid border-[#eaeaea]" />

              <Heading as="h2" className="text-[20px] font-semibold text-secondary">
                Message Details:
              </Heading>
              <Text className="text-[15px] leading-[24px] px-1 mb-2">
                <strong>Subject:</strong> <span className="bg-primary/10 px-2 py-1 rounded font-medium">{subject}</span>
              </Text>
              <Text className="text-[15px] font-medium text-foreground px-1 mb-2">
                <strong>Message:</strong>
              </Text>
              <Text className="whitespace-pre-line rounded-md border border-solid border-[#e0e0e0] bg-background/50 p-4 text-[15px] leading-[24px] text-foreground/90 shadow-sm">
                {message}
              </Text>

              <Hr className="mx-0 my-[30px] w-full border border-solid border-[#eaeaea]" />

              <Section className="bg-secondary/10 rounded-lg p-4 border border-secondary/20 mb-4">
                <Text className="text-[15px] leading-[24px] text-foreground m-0 mb-3">
                  <strong>Actions:</strong>
                </Text>
                <Text className="text-[14px] leading-[22px] text-foreground/90 m-0">
                  Please respond to this inquiry by replying directly to {name} at{" "}
                  <Link href={`mailto:${email}`} className="text-secondary underline font-medium">
                    {email}
                  </Link>
                </Text>
              </Section>
            </Section>

            <Section className="bg-gray-50 rounded-b-lg py-6 px-6 -m-[20px] mt-8 text-center">
              <Img src="https://i.ibb.co/HXF8RJj/agrinvest-logo.png" width="120" height="30" alt="Agrinvest Logo" className="mx-auto mb-4" />

              <Text className="text-[13px] leading-[20px] text-foreground/70 mb-2">
                This message was sent from the contact form on the Agrinvest Ghana website.
              </Text>

              <Text className="text-[13px] leading-[20px] text-foreground/70">
                Accra, Ghana • <Link href="https://investinagric.com" className="text-secondary">investinagric.com</Link>
              </Text>

              <Hr className="mx-auto my-4 w-16 border border-solid border-[#eaeaea]" />

              <Text className="text-[12px] text-muted">
                © {new Date().getFullYear()} Agrinvest Ghana. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;
