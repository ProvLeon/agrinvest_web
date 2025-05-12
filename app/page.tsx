"use client"; // Required for Framer Motion hooks and event handlers

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Leaf, Target, ShieldCheck, TrendingUp, Wheat, Sprout, BookOpen, ArrowRight } from 'lucide-react';

const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 dark:from-primary/5 dark:via-background dark:to-secondary/5 text-center py-24 md:py-32 px-4 md:px-6"
      >
        {/* Hero Background Image Placeholder */}
        <Image
          src="/images/hero-background.jpg" // Replace with your actual hero image path e.g. /images/ghana-farmland-wide.jpg
          alt="Scenic view of Ghanaian agriculture"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 opacity-60 dark:opacity-70"
          priority // Good for LCP
        />
        <div className="absolute inset-0 bg-white/30 dark:bg-black/20 z-0"></div> {/* Subtle overlay for text readability */}

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Leaf className="h-16 w-16 text-primary mx-auto mb-4 animate-pulse" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground tracking-tight font-heading">
              Investing in Ghana&apos;s Agricultural Future
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-foreground max-w-3xl mx-auto mb-8 font-bold"
          >
            Agrinvest empowers smallholder farmers, boosting productivity and meeting the growing demand for quality grains, cereals, and vegetables across Ghana.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 150 }}
          >
            <Button size="lg" asChild className="bg-agrinvest-green text-agrinvest-green-foreground hover:bg-agrinvest-green/90 shadow-lg transform hover:scale-105 transition-transform">
              <Link href="/about">
                Learn More About Us
                <TrendingUp className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Features/Highlights Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-background">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-semibold mb-12 text-secondary font-heading"
          >
            How We Support Farmers
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.div variants={featureVariants}>
              <Card className="h-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl dark:hover:shadow-primary/10">
                <CardHeader className="items-center">
                  <div className="p-3 rounded-full bg-primary/10 mb-3">
                    <ShieldCheck className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-primary font-heading">Comprehensive Investment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Providing essential resources and capital to enhance farm productivity and sustainability.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={featureVariants}>
              <Card className="h-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl dark:hover:shadow-primary/10">
                <CardHeader className="items-center">
                  <div className="p-3 rounded-full bg-primary/10 mb-3">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-primary font-heading">Quality Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Meeting Ghana&apos;s demand for high-quality grains, cereals, and vegetables through improved farming practices.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={featureVariants}>
              <Card className="h-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl dark:hover:shadow-primary/10">
                <CardHeader className="items-center">
                  <div className="p-3 rounded-full bg-primary/10 mb-3">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-primary font-heading">Nationwide Reach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Operating across 10 districts in almost 8 regions, supporting diverse agricultural communities.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Focus Areas Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-background/70 dark:bg-gray-900/50">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-semibold mb-12 text-primary font-heading"
          >
            Our Focus Areas
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            We concentrate our efforts on key agricultural sectors to maximize impact and drive sustainable growth for smallholder farmers in Ghana.
          </motion.p>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {[
              {
                title: "Grain Production",
                description: "Boosting yields in essential grains like maize and rice through modern techniques and quality inputs.",
                icon: Wheat,
                color: "text-green-500",
                bgColor: "bg-green-500/10",
                href: "/services#grain-production" // Example link to a section in services page
              },
              {
                title: "Vegetable & Horticulture",
                description: "Supporting farmers in cultivating high-value vegetables and horticultural products for diverse markets.",
                icon: Sprout,
                color: "text-sky-500",
                bgColor: "bg-sky-500/10",
                href: "/services#horticulture"
              },
              {
                title: "Farmer Training",
                description: "Equipping farmers with the knowledge and skills for sustainable practices and improved livelihoods.",
                icon: BookOpen,
                color: "text-amber-500",
                bgColor: "bg-amber-500/10",
                href: "/services#farmer-training"
              }
            ].map((focus, index) => (
              <motion.div variants={featureVariants} key={index}>
                <Card className="h-full transition-all duration-300 ease-in-out hover:shadow-xl dark:hover:shadow-lg dark:hover:shadow-accent/10 flex flex-col group">
                  <CardHeader className={`items-center pt-6 pb-4 ${focus.bgColor}`}>
                    <focus.icon className={`h-10 w-10 mb-3 ${focus.color} group-hover:scale-110 transition-transform duration-300 ease-in-out`} />
                    <CardTitle className={`text-xl ${focus.color} font-heading`}>{focus.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow pt-4 text-center">
                    <p className="text-muted-foreground text-sm mb-4">
                      {focus.description}
                    </p>
                  </CardContent>
                  <div className="p-4 pt-0 mt-auto">
                    <Button variant="ghost" asChild className={`w-full text-sm ${focus.color} hover:${focus.bgColor} hover:text-${focus.color.split('-')[1]}-600 dark:hover:text-${focus.color.split('-')[1]}-400 transition-all duration-300 ease-in-out`}>
                      <Link href={focus.href}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12"
          >
            <Button size="lg" asChild className="bg-agrinvest-green text-agrinvest-green-foreground hover:bg-agrinvest-green/90 shadow-md">
              <Link href="/services">
                Explore All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative overflow-hidden bg-secondary/10 dark:bg-secondary/5 py-16 md:py-24 px-4 md:px-6 text-center">
        {/* CTA Background Image Placeholder */}
        <Image
          src="/images/cta-background-placeholder.jpg" // Replace with e.g. /images/community-farming.jpg
          alt="Farmers working together"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 opacity-10 dark:opacity-5"
        />
        <div className="absolute inset-0 bg-background/30 dark:bg-black/30 z-0"></div> {/* Overlay */}
        <div className="container mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-semibold mb-4 text-foreground font-heading"
          >
            Join Us in Growing Ghana&apos;s Agriculture
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Discover how Agrinvest is making a difference in the lives of smallholder farmers and contributing to national food security.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 150 }}
          >
            <Button size="lg" asChild className="bg-agrinvest-blue text-agrinvest-blue-foreground hover:bg-agrinvest-blue/90 shadow-lg transform hover:scale-105 transition-transform">
              <Link href="/about">
                Explore Our Mission
                <Leaf className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
