"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Leaf, Wheat, Sprout, Tractor, ShoppingCart, BookOpen, Lightbulb } from 'lucide-react';
import { Badge } from "@/components/ui/badge"; // Assuming you'll add a Badge component
import { Button } from "@/components/ui/button";
import Link from "next/link";

// TODO: Add Badge component to components/ui/badge.tsx if not already present

const services = [
  {
    title: "Investment in Grain Production",
    description: "Strategic investments in maize, rice, sorghum, and other staple grains to boost yields and ensure food security",
    icon: Wheat,
    tags: ["Grains", "Food Security", "Yield Improvement"],
    color: "text-primary", // Uses primary color from globals.css
    bgColor: "bg-primary/10",
  },
  {
    title: "Vegetable & Horticulture Support",
    description: "Empowering farmers with resources and techniques for high-quality vegetable and horticultural produce for local and export markets.",
    icon: Sprout,
    tags: ["Vegetables", "Horticulture", "Market Access"],
    color: "text-secondary", // Uses secondary color
    bgColor: "bg-secondary/10",
  },
  {
    title: "Modern Farming Inputs & Equipment",
    description: "Facilitating access to improved seeds, fertilizers, and modern farming equipment to enhance efficiency and productivity.",
    icon: Tractor,
    tags: ["Inputs", "Mechanization", "Efficiency"],
    color: "text-amber-500", // Example of a different accent
    bgColor: "bg-amber-500/10",
  },
  {
    title: "Farmer Training & Capacity Building",
    description: "Comprehensive training programs on best agricultural practices, financial literacy, and climate-smart farming.",
    icon: BookOpen,
    tags: ["Training", "Capacity Building", "Sustainability"],
    color: "text-teal-500",
    bgColor: "bg-teal-500/10",
  },
  {
    title: "Market Linkages & Value Chain Development",
    description: "Connecting smallholder farmers to reliable markets and improving the entire agricultural value chain.",
    icon: ShoppingCart,
    tags: ["Market Access", "Value Chain", "Logistics"],
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
  },
  {
    title: "Agricultural Advisory Services",
    description: "Providing expert advice and innovative solutions to address farming challenges and promote sustainable practices.",
    icon: Lightbulb,
    tags: ["Advisory", "Innovation", "Consultancy"],
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
];

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const headerVariants = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const cardVariants = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const ServicesPage = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="container mx-auto px-4 md:px-6 py-12 md:py-20"
    >
      <motion.div
        variants={headerVariants}
        className="text-center mb-12 md:mb-16"
      >
        <Leaf className="h-12 w-12 text-primary mx-auto mb-3" />
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Our Services
        </h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
          Agrinvest Ghana offers a comprehensive suite of services designed to empower smallholder farmers and enhance agricultural productivity across the nation.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, index) => (
          <motion.div key={index} variants={cardVariants}>
            <Card className={`h-full flex flex-col overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:border-transparent dark:hover:shadow-lg dark:hover:shadow-${service.color.replace('text-', 'primary')}/20`}>
              <CardHeader className={`items-center text-center p-6 ${service.bgColor}`}>
                <service.icon className={`h-12 w-12 mb-3 ${service.color}`} />
                <CardTitle className={`text-xl ${service.color}`}>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow p-6 flex flex-col">
                <CardDescription className="text-muted-foreground mb-4 flex-grow">
                  {service.description}
                </CardDescription>
                <div className="mt-auto pt-4 border-t border-border/50">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className={`border-${service.color.replace('text-', '')} ${service.color}`}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: services.length * 0.1 + 0.3 }} // Delay after cards animate in
        className="mt-16 md:mt-24 text-center bg-accent/50 dark:bg-accent/20 p-8 md:p-12 rounded-lg"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
          Partner with Agrinvest
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-6">
          Whether you are a farmer, an investor, or an organization, we are open to collaborations that drive sustainable agricultural growth in Ghana.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/contact" passHref>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Let&apos;s Grow Together
            </Button>
          </Link>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default ServicesPage;
