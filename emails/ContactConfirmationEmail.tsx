import {
  Body,
  Button,
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

interface ContactConfirmationEmailProps {
  name: string;
  subject: string;
  contactPageUrl: string; // URL to your contact page
  companyName: string;
  companyEmail: string; // Public contact email for the company
}

const ContactConfirmationEmail = ({
  name,
  subject,
  contactPageUrl,
  companyName = "Agrinvest Ghana",
  companyEmail = "info@investinagric.com", // Fallback, ideally from env
}: ContactConfirmationEmailProps) => {
  const previewText = `Thank you for contacting ${companyName}`;
  const currentYear = new Date().getFullYear();

  return (
    <Html>
      <Head>
        <title>Thank you for contacting {companyName}</title>
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
                background: "#f8fafc",
                foreground: "#1E293B",
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
          <Container className="mx-auto my-[40px] w-[600px] rounded-lg border border-solid border-border bg-card p-[20px] shadow-sm">
            {/* Header with logo */}
            <Section className="bg-primary rounded-t-lg py-4 px-6 -m-[20px] mb-0">
              <Img src="https://i.ibb.co/HXF8RJj/agrinvest-logo.png" width="150" height="40" alt={`${companyName} Logo`} className="mx-auto" />
            </Section>

            <Section className="mt-[32px] text-center">
              <Heading className="mx-0 my-[30px] p-0 text-center text-[28px] font-bold text-primary">
                Thank You For Your Message!
              </Heading>
            </Section>

            <Section className="px-[25px]">
              <Text className="text-[18px] leading-[28px] text-foreground font-medium">
                Dear {name},
              </Text>
              <Text className="text-[15px] leading-[24px] text-foreground/90">
                Thank you for reaching out to {companyName}. We have successfully
                received your message regarding:
              </Text>
              <Text className="my-5 rounded-md bg-primary/10 p-4 text-center text-[16px] font-medium italic text-primary border-l-4 border-primary">
                &quot;{subject}&quot;
              </Text>
              <Text className="text-[15px] leading-[24px] text-foreground/90">
                Our team will review your inquiry and get back to you as soon
                as possible. We appreciate your interest in {companyName}.
              </Text>

              <Hr className="mx-0 my-[30px] w-full border border-solid border-border" />

              <Section className="bg-secondary/10 rounded-lg p-4 border border-secondary/20">
                <Text className="text-[15px] leading-[24px] text-foreground m-0 mb-3">
                  <strong>What happens next?</strong>
                </Text>
                <Text className="text-[14px] leading-[22px] text-foreground/90 m-0 mb-2">
                  • Our team will review your message within 24-48 hours
                </Text>
                <Text className="text-[14px] leading-[22px] text-foreground/90 m-0 mb-2">
                  • You&apos;ll receive a personalized response from one of our specialists
                </Text>
                <Text className="text-[14px] leading-[22px] text-foreground/90 m-0">
                  • We may request additional information if needed
                </Text>
              </Section>

              <Section className="mt-6 text-center">
                <Button
                  href={contactPageUrl}
                  className="bg-primary text-white font-medium py-3 px-5 rounded-md no-underline text-center text-[14px]"
                >
                  Visit Our Contact Page
                </Button>
              </Section>
            </Section>

            <Section className="mt-[30px] px-[25px] mb-[10px]">
              <Text className="text-[15px] leading-[24px] text-foreground">
                Best regards,
                <br />
                <strong>The {companyName} Team</strong>
              </Text>
            </Section>

            <Hr className="mx-[25px] my-[20px] w-auto border border-solid border-border" />

            <Section className="bg-gray-50 rounded-b-lg py-6 px-6 -m-[20px] mt-0 text-center">
              <Img src="https://i.ibb.co/HXF8RJj/agrinvest-logo.png" width="120" height="30" alt={`${companyName} Logo`} className="mx-auto mb-4" />

              <Text className="text-[13px] leading-[20px] text-foreground/70 mb-2">
                Have questions? Contact us at{" "}
                <Link href={`mailto:${companyEmail}`} className="text-secondary font-medium">
                  {companyEmail}
                </Link>
              </Text>

              <Text className="text-[13px] leading-[20px] text-foreground/70">
                Accra, Ghana • <Link href="https://investinagric.com" className="text-secondary">investinagric.com</Link>
              </Text>

              <Hr className="mx-auto my-4 w-16 border border-solid border-border" />

              <Text className="text-[12px] text-muted">
                © {currentYear} {companyName}. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactConfirmationEmail;
