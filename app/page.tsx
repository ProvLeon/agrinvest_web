"use client";

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Leaf,
  Target,
  ShieldCheck,
  TrendingUp,
  Wheat,
  Sprout,
  BookOpen,
  ArrowRight,
  Users,
  Globe,
  Award,
  Star,
  Play,
  MapPin,
  Phone,
  Mail,
  ChevronDown
} from 'lucide-react';

const stats = [
  { icon: Users, value: "3,500+", label: "Farmers Empowered", color: "text-agrinvest-green" },
  { icon: TrendingUp, value: "47%", label: "Average Yield Increase", color: "text-agrinvest-blue" },
  { icon: Target, value: "12", label: "Districts Covered", color: "text-amber-600" },
  { icon: Award, value: "8", label: "Regions Active", color: "text-teal-600" }
];

const features = [
  {
    icon: ShieldCheck,
    title: "Comprehensive Investment",
    description: "Strategic funding and resources to enhance farm productivity and ensure sustainable agricultural growth across Ghana.",
    color: "text-agrinvest-green",
    bgColor: "bg-agrinvest-green/10"
  },
  {
    icon: Target,
    title: "Quality Excellence",
    description: "Meeting Ghana&apos;s demand for premium grains, cereals, and vegetables through innovative farming practices.",
    color: "text-agrinvest-blue",
    bgColor: "bg-agrinvest-blue/10"
  },
  {
    icon: Globe,
    title: "Nationwide Impact",
    description: "Operating across 12 districts in 8 regions, creating lasting change in diverse agricultural communities.",
    color: "text-amber-600",
    bgColor: "bg-amber-600/10"
  }
];

const focusAreas = [
  {
    title: "Grain Production Excellence",
    description: "Revolutionizing maize, rice, and sorghum cultivation through precision agriculture and quality inputs.",
    icon: Wheat,
    image: "/images/grain-production.jpg",
    color: "text-agrinvest-green",
    bgColor: "bg-agrinvest-green/10",
    href: "/services#grain-production",
    metrics: "45% yield increase"
  },
  {
    title: "Premium Horticulture",
    description: "Elevating vegetable and fruit production with greenhouse technology and export-quality standards.",
    icon: Sprout,
    image: "/images/vegetable-farming.jpg",
    color: "text-agrinvest-blue",
    bgColor: "bg-agrinvest-blue/10",
    href: "/services#horticulture",
    metrics: "60% market value boost"
  },
  {
    title: "Expert Development",
    description: "Comprehensive farmer education combining traditional wisdom with cutting-edge agricultural science.",
    icon: BookOpen,
    image: "/images/farmer-training.jpg",
    color: "text-amber-600",
    bgColor: "bg-amber-600/10",
    href: "/services#farmer-training",
    metrics: "500+ farmers trained"
  }
];

const testimonials = [
  {
    quote: "Agrinvest transformed our maize yields beyond expectations. The support and training have been invaluable.",
    author: "Kwame Asante",
    role: "Lead Farmer, Ashanti Region",
    image: "/images/testimonial-1.jpg"
  },
  {
    quote: "Access to premium markets doubled our farming income. We now export our vegetables internationally.",
    author: "Grace Owusu",
    role: "Vegetable Farmer, Greater Accra",
    image: "/images/testimonial-2.jpg"
  },
  {
    quote: "The modern equipment and training revolutionized our farming operations completely.",
    author: "Joseph Osei",
    role: "Commercial Farmer, Northern Region",
    image: "/images/testimonial-3.jpg"
  }
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-background.jpg"
            alt="Ghana's agricultural landscape"
            fill
            style={{ objectFit: "cover" }}
            className="scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-agrinvest-green/40" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Badge className="mb-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <Leaf className="w-4 h-4 mr-2" />
              Transforming Agriculture Since 2020
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 tracking-tight">
              Investing in
              <span className="block text-agrinvest-green">Ghana&apos;s Future</span>
              <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light mt-2 md:mt-4 opacity-90">
                Through Agricultural Excellence
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-10 max-w-4xl mx-auto opacity-90 leading-relaxed px-4">
              Empowering smallholder farmers with innovative solutions, premium resources,
              and market access to create sustainable prosperity across Ghana.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-12 px-4">
              <Button size="lg" className="bg-agrinvest-green hover:bg-agrinvest-green/90 text-white shadow-xl px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto">
                <Link href="/services" className="flex items-center justify-center">
                  Explore Our Solutions
                  <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10 backdrop-blur-sm px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto">
                <Link href="/about" className="flex items-center justify-center">
                  <Play className="mr-2 h-4 md:h-5 w-4 md:w-5" />
                  Our Story
                </Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto px-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm opacity-80">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown className="h-6 w-6" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-4" variant="outline">
              Why Choose Agrinvest
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 px-4">
              Comprehensive
              <span className="text-agrinvest-green"> Agricultural </span>
              Support
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              We provide end-to-end solutions that transform farming operations and create lasting prosperity
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-transparent hover:border-agrinvest-green/20 transition-all duration-300 group">
                  <CardHeader className="text-center pb-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${feature.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className={`h-8 w-8 ${feature.color}`} />
                    </div>
                    <CardTitle className={`text-xl ${feature.color} font-heading`}>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-agrinvest-green/5 via-background to-agrinvest-blue/5">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-4" variant="outline">
              Our Expertise
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Focus
              <span className="text-agrinvest-green"> Areas</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized solutions across key agricultural sectors to maximize impact and drive sustainable growth
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full overflow-hidden border-2 border-transparent hover:border-agrinvest-green/20 transition-all duration-300">
                  <div
                    className="relative h-64 overflow-hidden">
                    <Image
                      src={area.image}
                      alt={area.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <div className={`p-3 rounded-full bg-white/90 backdrop-blur-sm`}>
                        <area.icon className={`h-6 w-6 ${area.color}`} />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-white/90 text-gray-800">
                        {area.metrics}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle className={`text-xl ${area.color} font-heading`}>
                      {area.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {area.description}
                    </p>
                    <Button variant="ghost" asChild className={`w-full ${area.color} hover:${area.bgColor} transition-all duration-300 group`}>
                      <Link href={area.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center
 mt-16"
          >
            <Button size="lg" className="bg-agrinvest-green text-white hover:bg-agrinvest-green/90 shadow-lg px-8 py-4">
              <Link href="/services" className='flex flex-row'>
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-4" variant="outline">
              Success Stories
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              What Our
              <span className="text-agrinvest-green"> Farmers </span>
              Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real stories from farmers who have transformed their operations with Agrinvest
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full p-8 border-2 border-transparent hover:border-agrinvest-green/20 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-lg font-medium text-foreground mb-6 italic">
                      &quot;{testimonial.quote}&quot;
                    </blockquote>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-agrinvest-green/20 flex items-center justify-center">
                        <Users className="h-6 w-6 text-agrinvest-green" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-agrinvest-green/10 via-background to-agrinvest-blue/10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-4" variant="outline">
              Our Impact
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Measurable
              <span className="text-agrinvest-green"> Results</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Numbers that demonstrate our commitment to transforming agriculture across Ghana
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "3,500+", label: "Farmers Supported", description: "Active farming partnerships" },
              { icon: TrendingUp, value: "47%", label: "Yield Increase", description: "Average productivity gain" },
              { icon: Globe, value: "12", label: "Districts", description: "Geographic coverage" },
              { icon: Award, value: "8", label: "Regions", description: "Operational presence" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="mb-4 relative">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-agrinvest-green/20 to-agrinvest-blue/10 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-10 w-10 text-agrinvest-green" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-agrinvest-green mb-2">
                  {stat.value}
                </div>
                <div className="font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cta-background.jpg"
            alt="Agricultural transformation"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-agrinvest-green/95 via-agrinvest-blue/90 to-agrinvest-green/95" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Transform Your Farm?
            </h2>
            <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed">
              Join thousands of successful farmers who have revolutionized their agricultural practices.
              Let&apos;s grow together and build Ghana&apos;s agricultural future.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="bg-white text-agrinvest-green hover:bg-white/90 shadow-xl px-8 py-4">
                <Link href="/contact" className="flex items-center">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4">
                <Link href="/services">
                  Explore Solutions
                </Link>
              </Button>
            </div>

            {/* Contact Info Quick Access */}
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto text-sm">
              <div className="flex items-center justify-center space-x-2 opacity-80">
                <MapPin className="h-4 w-4" />
                <span>Ejisu, Ashanti Region</span>
              </div>
              <div className="flex items-center justify-center space-x-2 opacity-80">
                <Phone className="h-4 w-4" />
                <span>+233 XX XXX XXXX</span>
              </div>
              <div className="flex items-center justify-center space-x-2 opacity-80">
                <Mail className="h-4 w-4" />
                <span>info@agrinvestghana.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
