import type { Metadata } from "next";
import localFont from "next/font/local";
import AppShell from "@/components/AppShell"; // Import the new client component
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Agrinvest Ghana - Scaling Up Agricultural Investments",
  description: "Positioned to meet Ghana's increasing demand for high quality grains, cereals and vegetables through comprehensive investment in the smallholder farmer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
