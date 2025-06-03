"use client";

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShieldCheck,
  Wheat,
  Sprout,
  BookOpen,
  ArrowRight,
  Users,
  Star,
  ChevronDown,
  MapPin,
  CheckCircle,
  Award,
  Calendar,
  Handshake,
  Trophy,
} from 'lucide-react';

const stats = [
  { icon: Users, value: "7,487", label: "Farmers Served", color: "text-agrinvest-green-600" },
  { icon: Calendar, value: "2018", label: "Established", color: "text-agrinvest-green-600" },
  { icon: MapPin, value: "7", label: "Regions Covered", color: "text-agrinvest-green-600" },
  { icon: Wheat, value: "7", label: "Key Crops", color: "text-agrinvest-green-600" }
];

const brandDifferentiators = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Licensed Excellence",
    subtitle: "Ghana's Premier Agribusiness Enterprise",
    description: "As the only fully licensed and registered agribusiness enterprise of our scale, we operate with unmatched regulatory compliance, professional standards, and corporate governance.",
    keyPoints: ["Government Licensed", "Regulatory Compliant", "Professional Standards", "Corporate Excellence"],
  },
  {
    number: "02",
    icon: Handshake,
    title: "Global Partnerships",
    subtitle: "Backed by World-Class Organizations",
    description: "Strategic alliances with USAID, IFAD, African Development Bank, and Government of Ghana provide unparalleled resources and expertise for transformative impact.",
    keyPoints: ["USAID Partnership", "IFAD Alliance", "AfDB Collaboration", "Government Synergy"],

  },
  {
    number: "03",
    icon: Trophy,
    title: "Proven Impact",
    subtitle: "7,487 Farmers Across 7 Regions",
    description: "Delivering measurable transformation across Ghana's agricultural landscape with comprehensive solutions that drive sustainable growth and prosperity.",
    keyPoints: ["7,487 Farmers Served", "7 Regions Covered", "300% Yield Increase", "Sustainable Growth"],

  }
];

const focusAreas = [
  {
    title: "Premium Agricultural Inputs",
    description: "Providing high-quality improved seeds and organic fertilizers to ensure optimal crop growth for our key focus crops: Maize, Soybeans, Cowpeas, Groundnuts, Pineapples, Cassava, and Rice across Ghana's agricultural regions",
    icon: Wheat,
    image: "/images/agricultural-inputs.jpg",
    color: "text-agrinvest-green-600",
    bgColor: "bg-agrinvest-green-50",
    href: "/services#inputs",
    metrics: "7 Key Crops"
  },
  {
    title: "Complete Mechanization Services",
    description: "End-to-end mechanized solutions including land preparation, ploughing, precision planting, crop protection spraying, threshing, and modern logistics transportation systems for maximum efficiency.",
    icon: Sprout,
    image: "/images/tractor.jpg",
    color: "text-agrinvest-green-600",
    bgColor: "bg-agrinvest-green-50",
    href: "/services#mechanization",
    metrics: "Full Value Chain Coverage"
  },
  {
    title: "Capacity Building Programs",
    description: "Comprehensive training programs equipping farmers with modern agronomic practices to enhance efficiency, sustainability, and improve access to premium markets, particularly focusing on women and youth.",
    icon: BookOpen,
    image: "/images/farmer-training.jpg",
    color: "text-agrinvest-green-600",
    bgColor: "bg-agrinvest-green-50",
    href: "/services#training",
    metrics: "7,487 Farmers Empowered"
  }
];

const partnerships = [
  {
    name: "USAID",
    description: "United States Agency for International Development",
    logo: "/images/partners/usaid-logo.png"
  },
  {
    name: "IFAD",
    description: "International Fund for Agricultural Development",
    logo: "/images/partners/ifad-logo.png"
  },
  {
    name: "AfDB",
    description: "African Development Bank",
    logo: "/images/partners/afdb-logo.png"
  },
  {
    name: "Government of Ghana",
    description: "Ministry of Food and Agriculture",
    logo: "/images/partners/ghana-gov-logo.png"
  }
];

const testimonials = [
  {
    quote: "Agrinvest's integrated approach transformed our maize production. The training and quality inputs have significantly improved our yields and market access.",
    author: "Kwame Asante",
    role: "Smallholder Farmer, Northern Region",
    image: "/images/working.jpeg"
  },
  {
    quote: "The mechanization services reduced our post-harvest losses by 60%. We now have access to premium markets and better prices for our soybeans.",
    author: "Akosua Mensah",
    role: "Women Farmer Group Leader, Upper West",
    image: "/images/women_at_work.jpeg"
  },
  {
    quote: "Through Agrinvest's capacity building programs, our youth farming cooperative has become one of the most successful in our district.",
    author: "Joseph Osei",
    role: "Youth Farmer, Northern Region",
    image: "/images/assessment.jpg"
  }
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-agrinvest-green-100 via-agrinvest-blue-50 to-agrinvest-gray-100">
            <Image src="/images/hero-background1.jpg" alt="Agrinvest Ghana - Empowering Smallholder Farmers" layout="fill" objectFit="cover" priority />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-brand opacity-10"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center text-white px-4 md:px-6 max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 font-heading leading-none">
              <span className="text-white">Agrinvest</span> <br />
              <span className="bg-gradient-to-r from-agrinvest-green-400 to-agrinvest-blue-400 bg-clip-text text-transparent">
                Limited
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-xl md:text-3xl font-light mb-6 leading-relaxed text-agrinvest-green-200">
              Empowering Ghanaian Smallholder Farmers
            </p>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              A fully licensed agribusiness enterprise fostering agricultural development through comprehensive investments in smallholder farmers across 7 regions of Ghana since 2018
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm md:text-base mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-agrinvest-green-400" />
                <span>7 Regions Covered </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-agrinvest-green-400" />
                <span>7,487+ Farmers Served</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-agrinvest-green-400" />
                <span>7 Key Focus Crops</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="text-white px-8 py-4 text-lg font-semibold shadow-brand border-0"
            >
              <Link href="/services">
                Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="glass border-white/30 px-8 py-4 text-lg backdrop-blur-md"
            >
              <Link href="/about">
                Learn About Us
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
        >
          <ChevronDown className="h-8 w-8" />
        </motion.div>
      </section >

      {/* Stats Section */}
      < section className="py-16 md:py-24 bg-gradient-to-br from-agrinvest-green-50 to-agrinvest-blue-50 dark:from-agrinvest-green-900/10 dark:to-agrinvest-blue-900/10" >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-agrinvest-green-100 dark:bg-agrinvest-green-900/20 mb-6">
              <Award className="h-8 w-8 text-agrinvest-green-600" />
            </div> */}
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-heading">
              Our Impact Since 2018
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Building sustainable agricultural development across Ghana through strategic partnerships,
              comprehensive farmer support, and innovative value chain solutions
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 group-hover:-translate-y-1">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${stat.color} bg-current/10 mb-4 transition-transform group-hover:scale-110`}>
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* Features Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
              Why Choose Agrinvest
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Three key advantages that make us Ghana&apos;s trusted agricultural transformation partner
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {brandDifferentiators.map((differentiator, index) => (
              <motion.div
                key={differentiator.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <Card className="p-8 border-0 shadow-soft hover:shadow-medium transition-all duration-300  h-full bg-gradient-to-r from-agrinvest-green-100/10 to-agrinvest-green-200/10 dark:bg-gradient-to-r dark:from-agrinvest-green-900/20 dark:to-agrinvest-gray-900/20">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-agrinvest-green-100 mb-6 transition-transform group-hover:scale-110">
                    <differentiator.icon className="h-8 w-8 text-agrinvest-green-600" />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-bold text-foreground mb-3 font-heading">
                    {differentiator.title}
                  </h3>
                  <p className="text-agrinvest-green-600 font-semibold uppercase tracking-wide text-sm mb-4">
                    {differentiator.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {differentiator.description}
                  </p>

                  {/* Key Points */}
                  <div className="space-y-3 mb-6">
                    {differentiator.keyPoints.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-left">
                        <CheckCircle className="h-5 w-5 text-agrinvest-green-600 flex-shrink-0" />
                        <span className="text-sm font-medium text-foreground">{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    asChild
                    className="text-white w-full"
                  >
                    <Link href="/about">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center gap-6 p-6 rounded-2xl bg-agrinvest-green-50 border border-agrinvest-green-200">
              <div className="w-12 h-12 rounded-full bg-agrinvest-green-600 flex items-center justify-center">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <h4 className="text-xl font-bold text-foreground mb-1">Ready to Get Started?</h4>
                <p className="text-muted-foreground">Transform your agricultural operations today</p>
              </div>
              <Button asChild className="text-white">
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Focus Areas Section */}
      < section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50" >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
              Comprehensive Service Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              End-to-end agricultural solutions optimizing farm productivity and streamlining
              the agricultural value chain for maximum impact
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={area.image}
                      alt={area.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <Badge className="text-xs bg-black/20 text-white border-white/30">
                        {area.metrics}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg ${area.bgColor}`}>
                        <area.icon className={`h-5 w-5 ${area.color}`} />
                      </div>
                      <CardTitle className="text-xl font-semibold font-heading">
                        {area.title}
                      </CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {area.description}
                    </p>
                    <Button asChild className="w-full">
                      <Link href={area.href}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* Regional Coverage Section */}
      < section className="py-16 md:py-24 bg-gradient-to-br from-agrinvest-green-50 to-agrinvest-blue-50 dark:from-agrinvest-green-900/10 dark:to-agrinvest-blue-900/10" >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-brand-soft mb-6">
              <MapPin className="h-8 w-8 text-agrinvest-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-heading">
              Regional Coverage Across Ghana
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Strategically positioned to serve agricultural communities across 7 key regions,
              with headquarters in Ejisu-Abankro for optimal operational efficiency
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-16">
            {["Ashanti", "Upper West", "Northern", "Bono East", "Bono", "North East", "Savannah"].map((region, index) => (
              <motion.div
                key={region}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <Card className="p-6 border-0 shadow-soft hover:shadow-medium transition-all duration-300 group-hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-brand-soft mb-3 transition-transform group-hover:scale-110">
                    <MapPin className="h-6 w-6 text-agrinvest-green-600" />
                  </div>
                  <p className="font-semibold text-sm text-foreground">{region}</p>
                  <p className="text-xs text-muted-foreground mt-1">Region</p>
                </Card>
              </motion.div>
            ))}
          </div>


        </div>
      </section >

      {/* Strategic Partnerships Section */}
      < section className="py-16 md:py-24" >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
              Strategic Partnerships
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Collaborating with leading international and national organizations to implement
              high-impact agricultural development projects across Ghana
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partnerships.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="h-16 mb-4 flex items-center justify-center">
                    <div className="w-24 h-12 bg-gradient-brand-soft rounded-lg flex items-center justify-center group-hover:bg-gradient-brand-radial transition-all duration-300">
                      <span className="text-agrinvest-green-600 font-bold text-sm">{partner.name}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{partner.name}</h3>
                  <p className="text-xs text-muted-foreground">{partner.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* Testimonials Section */}
      < section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50" >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
              Farmer Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from the smallholder farmers whose lives and livelihoods have been transformed
              through our comprehensive agricultural support programs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                      &quot;{testimonial.quote}&quot;
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
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
      </section >

      {/* CTA Section */}
      < section className="py-20 md:py-32 bg-gradient-brand text-white relative overflow-hidden" >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 font-heading leading-tight">
              Join Ghana&apos;s Agricultural
              <br />
              <span className="text-white/90">Transformation</span>
            </h2>

            <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed max-w-3xl mx-auto">
              Partner with Agrinvest Limited to enhance your farm&apos;s productivity, access premium markets,
              and be part of Ghana&apos;s sustainable agricultural future.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button
                variant="secondary"
                asChild
                size="lg"
                className=" px-10 py-4 text-lg font-semibold shadow-large border-0"
              >
                <Link href="/contact">
                  Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="glass border-white/30 px-10 py-4 text-lg backdrop-blur-md"
              >
                <Link href="/services">
                  Explore Our Services
                </Link>
              </Button>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="glass rounded-2xl p-6 backdrop-blur-md border border-white/20">
                <div className="text-xl font-bold mb-2">USAID</div>
                <div className="text-white/80 text-sm">Strategic Partner</div>
              </div>
              <div className="glass rounded-2xl p-6 backdrop-blur-md border border-white/20">
                <div className="text-xl font-bold mb-2">IFAD</div>
                <div className="text-white/80 text-sm">Development Partner</div>
              </div>
              <div className="glass rounded-2xl p-6 backdrop-blur-md border border-white/20">
                <div className="text-xl font-bold mb-2">AfDB</div>
                <div className="text-white/80 text-sm">Financial Partner</div>
              </div>
              <div className="glass rounded-2xl p-6 backdrop-blur-md border border-white/20">
                <div className="text-xl font-bold mb-2">GoG</div>
                <div className="text-white/80 text-sm">Government Partner</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section >
    </>
  );
}
