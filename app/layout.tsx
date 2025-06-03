import type { Metadata } from "next";
import AppShell from "@/components/AppShell"; // Import the new client component
import { inter, poppins } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agrinvest Limited - Empowering Ghanaian Smallholder Farmers",
  description: "Established in 2018, Agrinvest Limited is a fully licensed agribusiness enterprise providing farm-to-table integrated value chain solutions. Serving 7,487 farmers across 7 regions in Ghana through high-quality inputs, mechanization services, and capacity building programs.",
  keywords: "Ghana agriculture, smallholder farmers, agricultural development, farm inputs, mechanization, USAID, IFAD, AfDB, sustainable farming, Ejisu-Abankro",
  authors: [{ name: "Agrinvest Limited" }],
  openGraph: {
    title: "Agrinvest Limited - Empowering Ghanaian Smallholder Farmers",
    description: "Established in 2018, serving 7,487 farmers across Ghana with comprehensive agricultural solutions.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <body
        className="font-sans antialiased flex flex-col min-h-screen"
      >
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
