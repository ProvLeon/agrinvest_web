import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google"; // Import Google Fonts
import AppShell from "@/components/AppShell"; // Import the new client component
import "./globals.css";

// Configure Inter font for body
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Ensures text remains visible during font loading
  variable: "--font-inter", // CSS variable for Inter
  weight: ["400", "500", "600", "700"], // Import desired weights
});

// Configure Lexend font for headings
const lexend = Lexend({
  subsets: ["latin"],
  display: "swap", // Ensures text remains visible during font loading
  variable: "--font-lexend", // CSS variable for Lexend
  weight: ["400", "500", "600", "700"], // Import desired weights
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
        className={`${inter.variable} ${lexend.variable} antialiased flex flex-col min-h-screen`}
      >
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
