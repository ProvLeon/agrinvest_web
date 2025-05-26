"use client";

import React from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Leaf,
  Wheat,
  Sprout,
  Tractor,
  BookOpen,
  Lightbulb,
  Users,
  // TrendingUp,
  Shield,
  ArrowRight,
  // Target,
  CheckCircle2,
  Play,
  Star,
  Award,
  Globe
} from 'lucide-react';

const services = [
  {
    id: "grain-production",
    title: "Grain Production Excellence",
    subtitle: "Strategic Staple Crop Investment",
    description: "Revolutionizing maize, rice, and sorghum cultivation through cutting-edge agricultural technology and sustainable farming practices.",
    fullDescription: "Our comprehensive grain production program combines precision agriculture, quality inputs, and market intelligence to deliver exceptional yields and profitability for smallholder farmers.",
    icon: Wheat,
    image: "/images/grain-production.jpg",
    features: ["Premium seed varieties", "Precision fertilizer application", "Smart irrigation systems", "Harvest optimization"],
    metrics: { increase: "45%", unit: "yield boost" },
    color: "agrinvest-green",
    category: "Core Production",
    testimonial: "Agrinvest transformed our maize yields beyond expectations",
    client: "Kwame Asante, Lead Farmer"
  },
  {
    id: "horticulture",
    title: "Premium Horticulture",
    subtitle: "High-Value Crop Cultivation",
    description: "Elevating vegetable and fruit production through greenhouse technology, organic methods, and export-quality standards.",
    fullDescription: "From farm to table, we support premium produce cultivation that meets international standards while maximizing farmer income through strategic market positioning.",
    icon: Sprout,
    image: "/images/vegetable-farming.jpg",
    features: ["Climate-controlled greenhouses", "Organic certification support", "Post-harvest technology", "Export market access"],
    metrics: { increase: "60%", unit: "market value" },
    color: "amber-600",
    category: "Specialty Crops",
    testimonial: "Our vegetables now reach international markets with premium pricing",
    client: "Ama Mensah, Horticulture Farmer"
  },
  {
    id: "mechanization",
    title: "Smart Mechanization",
    subtitle: "Advanced Agricultural Technology",
    description: "Implementing state-of-the-art farming equipment and IoT solutions to maximize efficiency and productivity.",
    fullDescription: "Our mechanization program provides access to modern tractors, precision planters, and smart farming tools that reduce labor costs while increasing agricultural output.",
    icon: Tractor,
    image: "/images/farm-equipment.jpg",
    features: ["GPS-guided tractors", "Drone monitoring", "Automated irrigation", "Equipment training programs"],
    metrics: { increase: "50%", unit: "efficiency gain" },
    color: "teal-600",
    category: "Technology",
    testimonial: "Modern equipment has revolutionized our farming operations",
    client: "Joseph Osei, Commercial Farmer"
  },
  {
    id: "market-access",
    title: "Global Market Access",
    subtitle: "Strategic Market Positioning",
    description: "Connecting farmers to premium markets through strategic partnerships and value chain optimization.",
    fullDescription: "We build bridges between farmers and high-value markets, ensuring fair pricing, reliable demand, and sustainable income growth through strategic market positioning.",
    icon: Globe,
    image: "/images/market-access.jpg",
    features: ["Direct buyer connections", "Price optimization", "Quality certification", "Logistics coordination"],
    metrics: { increase: "35%", unit: "income boost" },
    color: "agrinvest-green",
    category: "Market Development",
    testimonial: "Access to premium markets doubled our farming income",
    client: "Grace Owusu, Vegetable Farmer"
  },
  {
    id: "farmer-training",
    title: "Expert Development",
    subtitle: "Comprehensive Farmer Education",
    description: "Empowering farmers with cutting-edge knowledge, digital literacy, and sustainable farming practices.",
    fullDescription: "Our education programs combine traditional wisdom with modern agricultural science, creating confident, skilled farmers ready for tomorrow's challenges.",
    icon: BookOpen,
    image: "/images/farmer-training.jpg",
    features: ["Hands-on workshops", "Digital farming tools", "Financial literacy", "Sustainability training"],
    metrics: { increase: "500+", unit: "farmers trained" },
    color: "amber-600",
    category: "Education",
    testimonial: "The training program completely transformed my farming approach",
    client: "Samuel Adjei, Progressive Farmer"
  },
  {
    id: "advisory",
    title: "Strategic Advisory",
    subtitle: "Expert Agricultural Consultation",
    description: "Providing world-class agricultural expertise and innovative solutions for complex farming challenges.",
    fullDescription: "Our team of agricultural experts delivers personalized consultation services, helping farmers navigate challenges and capitalize on opportunities with data-driven insights.",
    icon: Lightbulb,
    image: "/images/agricultural-advisory.jpg",
    features: ["Soil analysis & testing", "Crop health monitoring", "Pest & disease management", "Sustainability planning"],
    metrics: { increase: "24/7", unit: "expert support" },
    color: "teal-600",
    category: "Consultation",
    testimonial: "Expert guidance helped us overcome every farming challenge",
    client: "Rebecca Ofori, Innovation Farmer"
  }
];

// const stats = [
//   { icon: Users, value: "3,500+", label: "Farmers Empowered", color: "text-agrinvest-green" },
//   { icon: TrendingUp, value: "47%", label: "Average Yield Increase", color: "text-agrinvest-blue" },
//   { icon: Target, value: "12", label: "Districts Covered", color: "text-amber-600" },
//   { icon: Award, value: "8", label: "Regions Active", color: "text-teal-600" }
// ];

const achievements = [
  { icon: Star, title: "Excellence Award", desc: "Best Agricultural Innovation 2024" },
  { icon: Shield, title: "Certified Partner", desc: "Ministry of Agriculture Ghana" },
  { icon: Award, title: "Impact Recognition", desc: "UN Sustainable Development Goals" }
];

const ServicesPage = () => {
  return (
    <>
      {/* Hero Section with Parallax Effect */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-background.jpg"
            alt="Agricultural innovation"
            fill
            style={{ objectFit: "cover" }}
            className="scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-agrinvest-green/30" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Badge className="mb-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <Leaf className="w-4 h-4 mr-2" />
              Premium Agricultural Solutions
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Transforming
              <span className="block text-agrinvest-green">Agriculture</span>
              <span className="block text-2xl md:text-3xl font-light mt-4 opacity-90">
                Through Innovation & Excellence
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90 leading-relaxed">
              We deliver world-class agricultural solutions that empower farmers,
              boost productivity, and create sustainable prosperity across Ghana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-agrinvest-green hover:bg-agrinvest-green/90 text-white shadow-xl">
                <Link href="#services" className="flex items-center">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10 backdrop-blur-sm">
                <Play className="mr-2 h-5 w-5" />
                Watch Our Story
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ArrowRight className="h-6 w-6 rotate-90" />
        </div>
      </section>

      {/* Impact Stats */}
      {/* <section className="py-20 bg-gradient-to-br from-agrinvest-green/5 to-agrinvest-blue/5">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-
5xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-muted-foreground">Measurable results that speak for themselves</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="mb-4 relative">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-${stat.color.replace('text-', '')}/20 to-${stat.color.replace('text-', '')}/10 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`h-10 w-10 ${stat.color}`} />
                  </div>
                </div>
                <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Services Showcase */}
      <section id="services" className="py-28">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-4" variant="outline">
              Our Service Portfolio
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive
              <span className="text-agrinvest-green"> Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From seed to market, we provide end-to-end agricultural solutions designed to maximize productivity and profitability
            </p>
          </motion.div>

          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Content Side */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div>
                    <Badge className={`mb-4 bg-${service.color}/10 text-${service.color} border-${service.color}/20`}>
                      {service.category}
                    </Badge>
                    <h3 className="text-3xl md:text-4xl font-bold mb-3">
                      {service.title}
                    </h3>
                    <p className={`text-lg text-${service.color} font-semibold mb-4`}>
                      {service.subtitle}
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      {service.fullDescription}
                    </p>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle2 className={`h-5 w-5 text-${service.color} flex-shrink-0`} />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className={`inline-flex items-center space-x-4 p-6 rounded-2xl bg-${service.color}/10 border border-${service.color}/20`}>
                    <div className={`text-3xl font-bold text-${service.color}`}>
                      {service.metrics.increase}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">
                        {service.metrics.unit}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Average improvement
                      </div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-background/50 p-6 rounded-2xl border">
                    <p className="text-foreground font-medium mb-3 italic">
                      &quot;{service.testimonial}&quot;
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-full bg-${service.color}/20 flex items-center justify-center`}>
                        <Users className={`h-5 w-5 text-${service.color}`} />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{service.client}</div>
                        <div className="text-xs text-muted-foreground">Verified Client</div>
                      </div>
                    </div>
                  </div>

                  <Button className={`bg-${service.color === 'amber-600' ? 'amber-600' : service.color === 'teal-600' ? 'teal-600' : service.color} hover:bg-${service.color}/90 text-white`}>
                    <Link href={`/contact?service=${service.id}`} className="flex items-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                {/* Image Side */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                    {/* Floating Icon */}
                    <div className="absolute top-6 right-6">
                      <div className={`p-4 rounded-2xl bg-background/40 backdrop-blur-sm shadow-lg `}>
                        <service.icon className={`h-8 w-8 text-${service.color}`} />
                      </div>
                    </div>

                    {/* Bottom Overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-background/90 backdrop-blur-sm p-4 rounded-2xl">
                        <h4 className="font-bold text-foreground mb-1">{service.title}</h4>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-28 bg-gradient-to-br from-agrinvest-green/5 via-background to-agrinvest-blue/5">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Proven Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to agricultural transformation that delivers consistent results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Discovery & Assessment",
                description: "We conduct comprehensive analysis of your current operations, challenges, and growth potential.",
                color: "agrinvest-green",
                image: "/images/assessment.jpg"
              },
              {
                step: "02",
                title: "Strategy & Implementation",
                description: "Custom solutions are designed and deployed with full training and ongoing support.",
                color: "amber-600",
                image: "/images/implementation.jpg"
              },
              {
                step: "03",
                title: "Growth & Optimization",
                description: "Continuous monitoring and optimization ensure sustainable growth and maximum returns.",
                color: "teal-600",
                image: "/images/growth.jpg"
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <Card className="h-full overflow-hidden border-2 border-transparent hover:border-agrinvest-green/20 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={process.image}
                      alt={process.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className={`absolute top-4 left-4 w-12 h-12 rounded-full bg-${process.color}/10 flex items-center justify-center text-white font-bold text-lg`}>
                      {process.step}
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className={`text-xl font-bold text-${process.color} mb-4`}>
                      {process.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {process.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recognition & Partnerships</h2>
            <p className="text-lg text-muted-foreground">Trusted by leading organizations and recognized for excellence</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-agrinvest-green/5 to-agrinvest-blue/5 border"
              >
                <achievement.icon className="h-12 w-12 text-agrinvest-green mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground text-sm">{achievement.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cta-background.jpg"
            alt="Agricultural success"
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
              Ready to Transform Your Agricultural Future?
            </h2>
            <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed">
              Join thousands of successful farmers who have revolutionized their operations with Agrinvest.
              Let&apos;s build something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-agrinvest-green hover:bg-white/90 shadow-xl px-8 py-4">
                <Link href="/contact" className="flex items-center">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4">
                <Link href="/about">Discover Our Story</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
