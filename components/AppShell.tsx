"use client"; // This component is a client component

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 5,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    y: -5,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Header />
      <main className="flex-grow flex flex-col overflow-x-hidden">
        <AnimatePresence
          mode="wait"
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <motion.div
            key={pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex-1"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
