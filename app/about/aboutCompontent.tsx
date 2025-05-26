"use client"; // Required for Framer Motion

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Users, Quote, CheckCircle } from 'lucide-react';


const AboutComponent = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className="container mx-auto px-4 md:px-6 py-12 md:py-20"
    >
      {/* Page Title */}
      <motion.div variants={sectionVariants} className="text-center mb-12 md:mb-16">
        <Leaf className="h-12 w-12 text-primary mx-auto mb-3" />
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-heading">
          About Agrinvest Ghana
        </h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
          Dedicated to scaling up agricultural productivity through empowering smallholder farmers.
        </p>
      </motion.div>

      {/* Our Mission & Vision Section */}
      <motion.section variants={sectionVariants} className="grid md:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-3xl font-semibold text-primary mb-4 flex items-center gap-2 font-heading">
            {/* <Target className="h-7 w-7" />  */}
            Our Mission
          </h2>
          <blockquote className="border-l-4 border-primary pl-4 py-2 my-4 bg-primary/5 text-lg italic text-primary-foreground/90 dark:bg-primary/10 dark:text-primary/95">
            To meet Ghana&apos;s increasing demand for high quality grains, cereals, and vegetables through a comprehensive set of investments in the smallholder farmer.
          </blockquote>
          <p className="text-foreground/90 leading-relaxed">
            We believe that strategic investment in agriculture is the cornerstone of Ghana&apos;s food security and economic prosperity. By providing essential resources, modern training, and crucial market access, we empower farmers to adopt sustainable practices, significantly improve their yields, and ultimately enhance their livelihoods and communities.
          </p>
        </div>
        <motion.div
          variants={itemVariants}
          className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg order-first md:order-last"
        >
          {/* Placeholder for an actual image */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
            <Image
              // Replace with a relevant, high-quality image
              src="/images/ghana-farm.jpg" // Make sure you have a placeholder or real image
              alt="Ghanaian Farmland Visualization"
              layout="fill"
              objectFit="cover"
              className="opacity-80"
            />
            <span className="absolute inset-0 bg-black/10"></span> {/* Subtle overlay */}
            <p className="text-white font-semibold z-10 bg-black/30 px-4 py-2 rounded">Vibrant Ghanaian Agriculture</p>
          </div>
        </motion.div>
      </motion.section>

      {/* Our Reach Section */}
      <motion.section variants={sectionVariants} className="text-center mb-16 md:mb-24">
        <h2 className="text-3xl font-semibold text-primary mb-8 flex items-center justify-center gap-2 font-heading">
          {/* <MapPin className="h-7 w-7" /> */}
          Our Reach
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Agrinvest Ghana proudly operates across <strong className="text-foreground">10 districts</strong> within nearly <strong className="text-foreground">8 regions</strong> of the country. This widespread presence allows us to understand diverse agricultural needs and make a tangible impact nationwide.
        </p>
        {/* Optional: Add a simple map visual or list of regions */}
      </motion.section>

      {/* Our Values/Impact Section */}
      <motion.section variants={sectionVariants}>
        <h2 className="text-3xl font-semibold text-secondary mb-10 text-center flex items-center justify-center gap-2 font-heading">
          <CheckCircle className="h-7 w-7" /> Core Principles & Impact
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div variants={itemVariants}>
            <Card className="h-full text-center border-primary/30 hover:border-primary transition-colors">
              <CardHeader>
                <Users className="h-10 w-10 text-primary mx-auto mb-2" />
                <CardTitle className="text-primary font-heading">Farmer Empowerment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Placing smallholder farmers at the center of our strategy, providing tools and knowledge for growth.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="h-full text-center border-secondary/30 hover:border-secondary transition-colors">
              <CardHeader>
                <Leaf className="h-10 w-10 text-secondary mx-auto mb-2" />
                <CardTitle className="text-secondary font-heading">Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Promoting environmentally sound and economically viable farming practices for long-term success.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="h-full text-center border-accent/30 hover:border-accent transition-colors">
              <CardHeader>
                <Quote className="h-10 w-10 text-accent-foreground mx-auto mb-2" />
                <CardTitle className="text-accent-foreground font-heading">Quality & Reliability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ensuring the production of high-quality produce to meet market demands and build trust.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

    </motion.div>
  );
};

export default AboutComponent;
