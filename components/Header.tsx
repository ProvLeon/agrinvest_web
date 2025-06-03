"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './theme-toggle';
import Logo from '@/components/ui/logo';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface NavLinkItem {
  href: string;
  label: string;
}

const navLinks: NavLinkItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" }
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const navContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.4 } },
  };

  if (!isMounted) {
    // To prevent hydration mismatch for ThemeToggle and active link states
    // Render a simplified, static version or a skeleton
    return (
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-soft">
        <div className="container mx-auto h-16 flex items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-3 group">
            {/* <Leaf className="h-8 w-8 text-agrinvest-green-600" /> */}
            <Image src="/agrinvest_favicon.png" alt="Agrinvest Logo" width={32} height={32} />
            <span className="text-2xl font-bold bg-gradient-to-r from-agrinvest-green-600 to-agrinvest-blue-600 bg-clip-text text-transparent">Agrinvest</span>
          </Link>
          {/* Placeholder for mobile menu button and theme toggle to maintain layout */}
          <div className="flex items-center gap-2 md:hidden">
            <div className="h-9 w-9 bg-muted/50 rounded-md animate-pulse"></div>
            <div className="h-9 w-9 bg-muted/50 rounded-md animate-pulse"></div>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <div className="h-9 w-20 bg-muted/50 rounded-md animate-pulse"></div>
            <div className="h-9 w-20 bg-muted/50 rounded-md animate-pulse"></div>
            <div className="h-9 w-20 bg-muted/50 rounded-md animate-pulse"></div>
            <div className="h-9 w-20 bg-muted/50 rounded-md animate-pulse"></div>
            <div className="h-9 w-9 bg-muted/50 rounded-md animate-pulse ml-2"></div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-soft">
      <div className="container mx-auto h-16 flex items-center justify-between px-4 md:px-6">
        <motion.div variants={logoVariants} initial="hidden" animate="visible">
          <Link href="/" className="group">
            <Logo size="md" variant="color" />
          </Link>
        </motion.div>

        <motion.div
          className="hidden md:flex items-center gap-1"
          variants={navContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <NavigationMenuItem
                    key={link.href}
                    onMouseEnter={() => setHoveredPath(link.href)}
                    onMouseLeave={() => setHoveredPath(null)}
                    className="relative"
                  >
                    <Link href={link.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        active={isActive}
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "!bg-transparent focus:!bg-accent/50 relative",
                          isActive
                            ? "font-semibold text-agrinvest-green-600"
                            : "text-foreground/80 hover:text-agrinvest-green-600",
                          "transition-all duration-300 ease-out hover:bg-agrinvest-green-50 dark:hover:bg-agrinvest-green-950/20"
                        )}
                      >
                        <motion.span variants={navItemVariants} className="z-10 relative">
                          {link.label}
                        </motion.span>
                      </NavigationMenuLink>
                    </Link>
                    <AnimatePresence>
                      {(isActive || hoveredPath === link.href) && (
                        <motion.div
                          className="absolute bottom-[1px] left-0 right-0 h-[3px] bg-gradient-to-r from-agrinvest-green-500 to-agrinvest-blue-500 z-0 rounded-full"
                          layoutId="underline"
                          initial={{ opacity: 0, scaleX: 0 }}
                          animate={{ opacity: 1, scaleX: 1 }}
                          exit={{ opacity: 0, scaleX: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                            opacity: { duration: 0.2 }
                          }}
                        />
                      )}
                    </AnimatePresence>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
          <motion.div variants={navItemVariants} className="ml-2">
            <ThemeToggle />
          </motion.div>
        </motion.div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Toggle menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] sm:w-[320px] pt-10">
              <SheetHeader className="mb-8">
                <SheetTitle className="text-left">
                  <Logo size="sm" variant="color" />
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          "block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300",
                          isActive
                            ? "bg-gradient-brand-soft text-agrinvest-green-700 font-semibold shadow-soft"
                            : "text-foreground/80 hover:text-agrinvest-green-600 hover:bg-agrinvest-green-50 dark:hover:bg-agrinvest-green-950/20"
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
