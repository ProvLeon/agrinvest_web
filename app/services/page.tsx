"use client";

import React from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Wheat,
  Tractor,
  BookOpen,
  Users,
  ArrowRight,
  CheckCircle2,
  Star,
  Award,
  Globe,
  TrendingUp,
} from 'lucide-react';

const services = [
  {
    id: "inputs",
    title: "High-Quality Agricultural Inputs",
    subtitle: "Premium Seeds & Organic Fertilizers",
    description: "Provision of improved seeds and organic fertilizers ensuring optimal crop growth for all seven key focus crops across Ghana's agricultural regions.",
    fullDescription: "We supply carefully selected, high-quality improved seeds and organic fertilizers specifically chosen to maximize yield potential for our key crops: Maize, Soybeans, Cowpeas, Groundnuts, Pineapples, Cassava, and Rice. Our inputs are tailored to Ghana's soil conditions and climate.",
    icon: Wheat,
    image: "/images/agricultural-inputs.jpg",
    features: [
      "Improved seed varieties for 7 key crops",
      "Organic fertilizer formulations",
      "Quality assurance testing",
      "Farmer-specific recommendations",
      "Timely delivery across all 7 regions: Ashanti, Upper West, Northern, Bono East, Bono, North East, Savannah"
    ],
    metrics: { value: "7", unit: "Key Crop Varieties Supported" },
    color: "agrinvest-green-600",
    category: "Input Supply",
    benefits: [
      "Higher germination rates",
      "Improved crop resilience",
      "Enhanced soil health",
      "Sustainable farming practices"
    ]
  },
  {
    id: "mechanization",
    title: "Complete Mechanization Services",
    subtitle: "End-to-End Agricultural Machinery",
    description: "Full mechanized solutions including land preparation, ploughing, precision planting, spraying, threshing, and modern transportation across Ghana.",
    fullDescription: "Our comprehensive mechanization program covers every stage of the agricultural cycle, from initial land preparation through post-harvest handling, utilizing modern equipment and logistics systems designed for Ghana's agricultural landscape.",
    icon: Tractor,
    image: "/images/tractor.jpg",
    features: [
      "Land preparation and ploughing",
      "Mechanized precision planting",
      "Efficient crop protection spraying",
      "Professional threshing services",
      "Modern logistics transportation"
    ],
    metrics: { value: "5", unit: "Core Mechanization Services" },
    color: "agrinvest-green-600",
    category: "Mechanization",
    benefits: [
      "Reduced labor costs",
      "Improved efficiency",
      "Higher crop quality",
      "Minimized post-harvest losses"
    ]
  },
  {
    id: "training",
    title: "Capacity Building Programs",
    subtitle: "Modern Agronomic Training",
    description: "Comprehensive training programs equipping farmers with modern agronomic practices, particularly focusing on women and youth empowerment.",
    fullDescription: "Our capacity building initiatives focus on knowledge transfer, skill development, and best practice implementation to empower farmers with cutting-edge agricultural techniques. We prioritize women and youth, providing them with tools and resources to thrive in Ghana's agricultural sector.",
    icon: BookOpen,
    image: "/images/women1.jpeg",
    features: [
      "Modern agronomic practices training",
      "Sustainable farming techniques",
      "Market access education",
      "Financial literacy programs",
      "Women and youth empowerment programs"
    ],
    metrics: { value: "7,487", unit: "Farmers Trained" },
    color: "agrinvest-green-600",
    category: "Capacity Building",
    benefits: [
      "Enhanced farming knowledge",
      "Improved crop management",
      "Better market positioning",
      "Increased farm income"
    ]
  }
];

const achievements = [
  { icon: Users, value: "7,487", label: "Farmers Served", color: "text-agrinvest-green-600" },
  { icon: Globe, value: "7", label: "Regions Covered", color: "text-agrinvest-green-600" },
  { icon: Wheat, value: "7", label: "Key Crop Varieties", color: "text-agrinvest-green-600" },
  { icon: Award, value: "4", label: "Strategic Partners", color: "text-agrinvest-green-600" }
];

const ServicesPage = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };



  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative py-24 md:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/women_at_work2.jpeg"
            alt="Professional agricultural services in Ghana - Agrinvest Limited"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-brand opacity-20"></div>
        </div>

        <motion.div
          variants={sectionVariants}
          className="relative z-10 container mx-auto px-4 md:px-6 text-center text-white"
        >
          {/* <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
            <Target className="h-10 w-10 text-white" />
          </div> */}
          <Badge variant="outline" className="mb-8 border-white/30 text-white glass backdrop-blur-md">
            Comprehensive Agricultural Solutions
          </Badge>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 font-heading leading-none">
            Our <br />
            <span className="text-gradient-brand bg-gradient-to-r from-agrinvest-green-400 to-agrinvest-blue-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl md:text-3xl mb-6 max-w-4xl mx-auto leading-relaxed font-light">
            Professional Agricultural Excellence
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed text-white/90">
            Delivering comprehensive agricultural solutions that optimize farm productivity and streamline value chains across 7 regions of Ghana through strategic partnerships with USAID, IFAD, AfDB, and Government of Ghana
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="px-10 py-4 text-lg font-semibold shadow-brand border-0">
              <Link href="/contact">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="glass border-white/30 px-10 py-4 text-lg backdrop-blur-md">
              <Link href="/about">
                Learn About Us
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-gradient-to-br from-agrinvest-green-50 to-agrinvest-blue-50 dark:from-agrinvest-green-900/10 dark:to-agrinvest-blue-900/10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={sectionVariants}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-brand-soft mb-6">
              <TrendingUp className="h-8 w-8 text-agrinvest-green-600" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-heading">
              Measurable Professional Impact
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              As a fully licensed agribusiness enterprise, we deliver measurable results across Ghana&apos;s agricultural sector through strategic investments in smallholder farmers, with special focus on women and youth empowerment
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 group-hover:-translate-y-1">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${achievement.color} bg-current/10 mb-4 transition-transform group-hover:scale-110`}>
                    <achievement.icon className={`h-8 w-8 ${achievement.color}`} />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {achievement.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {achievement.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={sectionVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-heading">
              Comprehensive Service Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We provide integrated agricultural solutions designed to maximize value across the entire farming value chain, leveraging strategic partnerships and professional expertise for sustainable impact
            </p>
          </motion.div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Badge variant="outline" className="mb-4">
                    {service.category}
                  </Badge>
                  <h3 className="text-3xl font-bold text-foreground mb-4 font-heading">
                    {service.title}
                  </h3>
                  <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                    {service.fullDescription}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-foreground mb-4">Key Features:</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className={`h-5 w-5 ${service.color} mt-0.5 flex-shrink-0`} />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-foreground mb-4">Benefits:</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Star className={`h-5 w-5 ${service.color} mt-0.5 flex-shrink-0`} />
                          <span className="text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`p-6 rounded-xl mb-8 ${service.color === 'agrinvest-green-600' ? 'bg-agrinvest-green-50 dark:bg-agrinvest-green-900/20' : service.color === 'agrinvest-blue-600' ? 'bg-agrinvest-blue-50 dark:bg-agrinvest-blue-900/20' : 'bg-agrinvest-gray-50 dark:bg-agrinvest-gray-900/20'} border ${service.color === 'agrinvest-green-600' ? 'border-agrinvest-green-200' : service.color === 'agrinvest-blue-600' ? 'border-agrinvest-blue-200' : 'border-agrinvest-gray-200'}`}>
                    <div className="flex items-center gap-4">
                      <service.icon className={`h-8 w-8 ${service.color}`} />
                      <div>
                        <div className={`text-2xl font-bold ${service.color}`}>
                          {service.metrics.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {service.metrics.unit}
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button asChild size="lg" className={`text-white shadow-soft ${service.color === 'agrinvest-green-600' ? 'bg-agrinvest-green-600 hover:bg-agrinvest-green-700 shadow-brand' : service.color === 'agrinvest-blue-600' ? 'bg-agrinvest-blue-600 hover:bg-agrinvest-blue-700 shadow-brand-blue' : 'bg-agrinvest-gray-600 hover:bg-agrinvest-gray-700'}`}>
                    <Link href="/contact">
                      Learn More About This Service <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>

                <div className={`relative h-96 rounded-lg overflow-hidden shadow-xl ${index % 2 === 1 ? 'lg:col-start-1' : ''
                  }`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <Badge className={`text-white mb-2 ${service.color === 'agrinvest-green-600' ? 'bg-agrinvest-green-600' : service.color === 'agrinvest-blue-600' ? 'bg-agrinvest-blue-600' : 'bg-agrinvest-gray-600'}`}>
                      {service.category}
                    </Badge>
                    <p className="text-lg font-semibold">{service.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Crops Section */}
      <section className="py-20 bg-gradient-to-br from-agrinvest-gray-50 to-agrinvest-green-50 dark:from-agrinvest-gray-900/10 dark:to-agrinvest-green-900/10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={sectionVariants}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-brand-soft mb-6">
              <Wheat className="h-8 w-8 text-agrinvest-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-heading">
              Our Focus Crops
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Maximizing value for seven key staple and cash crops through integrated solutions
              across 7 regions of Ghana including Ashanti, Upper West, Northern, Bono East, Bono, North East, and Savannah
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {["Maize", "Soybeans", "Cowpeas", "Groundnuts", "Pineapples", "Cassava", "Rice"].map((crop, index) => (
              <motion.div
                key={crop}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <Card className="p-6 border-0 shadow-soft hover:shadow-medium transition-all duration-300 group-hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
                  <Wheat className="h-8 w-8 text-agrinvest-green-600 mx-auto mb-3 transition-transform group-hover:scale-110" />
                  <p className="font-semibold text-sm text-foreground">{crop}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Coverage */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={sectionVariants}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-brand-soft mb-6">
              <Globe className="h-8 w-8 text-agrinvest-green-600" />
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
                    <Globe className="h-6 w-6 text-agrinvest-green-600" />
                  </div>
                  <p className="font-semibold text-sm text-foreground">{region}</p>
                  <p className="text-xs text-muted-foreground mt-1">Region</p>
                </Card>
              </motion.div>
            ))}
          </div>


        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-brand text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            variants={sectionVariants}
            className="text-center max-w-4xl mx-auto"
          >
            {/* <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
              <Leaf className="h-10 w-10 text-white" />
            </div> */}

            <h2 className="text-4xl md:text-6xl font-bold mb-8 font-heading leading-tight">
              Partner with Ghana&apos;s Leading
              <br />
              <span className="text-white/90">Agribusiness Enterprise</span>
            </h2>

            <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed max-w-3xl mx-auto">
              Join 7,487 farmers who have transformed their agricultural operations through our professional services. Partner with a fully licensed enterprise backed by USAID, IFAD, AfDB, and Government of Ghana.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button
                asChild
                size="lg"
                className="bg-white text-agrinvest-blue-700 hover:bg-white/90 px-10 py-4 text-lg font-semibold shadow-large border-0"
              >
                <Link href="/contact">
                  Partner With Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="glass border-white/30 text-white hover:bg-white hover:text-agrinvest-blue-700 px-10 py-4 text-lg backdrop-blur-md"
              >
                <Link href="/about">
                  Learn About Us
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="glass rounded-2xl p-6 backdrop-blur-md border border-white/20">
                <div className="text-2xl font-bold mb-2">7</div>
                <div className="text-white/80 text-sm">Key Crop Varieties</div>
              </div>
              <div className="glass rounded-2xl p-6 backdrop-blur-md border border-white/20">
                <div className="text-2xl font-bold mb-2">7</div>
                <div className="text-white/80 text-sm">Regions Covered</div>
              </div>
              <div className="glass rounded-2xl p-6 backdrop-blur-md border border-white/20">
                <div className="text-2xl font-bold mb-2">3</div>
                <div className="text-white/80 text-sm">Service Categories</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ServicesPage;
