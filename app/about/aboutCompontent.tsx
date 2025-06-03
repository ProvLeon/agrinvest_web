"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  MapPin,
  Calendar,
  Target,
  Handshake,
  TrendingUp,
  CheckCircle,
  Wheat,
  Globe
} from 'lucide-react';

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

  const companyStats = [
    { icon: Calendar, value: "2018", label: "Established", color: "text-agrinvest-green-600" },
    { icon: Wheat, value: "7", label: "Key Crops", color: "text-agrinvest-green-600" },
    { icon: Globe, value: "7", label: "Regions Covered", color: "text-agrinvest-green-600" },
    { icon: MapPin, value: "7,487+", label: "Farmers Served", color: "text-agrinvest-green-600" }
  ];

  const keyFocusCrops = [
    "Maize", "Soybeans", "Cowpeas", "Groundnuts", "Pineapples", "Cassava", "Rice"
  ];

  const partnerships = [
    {
      name: "USAID",
      description: "United States Agency for International Development",
      focus: "Agricultural development and capacity building"
    },
    {
      name: "IFAD",
      description: "International Fund for Agricultural Development",
      focus: "Rural development and poverty reduction"
    },
    {
      name: "AfDB",
      description: "African Development Bank",
      focus: "Agricultural financing and infrastructure"
    },
    {
      name: "Government of Ghana",
      description: "Ministry of Food and Agriculture",
      focus: "National agricultural policy implementation"
    }
  ];

  const services = [
    {
      icon: Wheat,
      title: "High-Quality Agricultural Inputs",
      description: "Provision of improved seeds and organic fertilizers ensuring optimal crop growth for our seven key focus crops: Maize, Soybeans, Cowpeas, Groundnuts, Pineapples, Cassava, and Rice.",
      color: "text-agrinvest-green-600",
      bgColor: "bg-agrinvest-green-50"
    },
    {
      icon: Target,
      title: "Capacity Building Programs",
      description: "Comprehensive training programs equipping farmers with modern agronomic practices, financial literacy, and market access strategies to enhance efficiency and sustainability.",
      color: "text-agrinvest-green-600",
      bgColor: "bg-agrinvest-green-50"
    },
    {
      icon: TrendingUp,
      title: "Complete Mechanization Services",
      description: "End-to-end mechanized solutions including land preparation, ploughing, precision planting, spraying, threshing, and modern logistics transportation systems.",
      color: "text-agrinvest-green-600",
      bgColor: "bg-agrinvest-green-50"
    }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className="container mx-auto px-4 md:px-6 py-12 md:py-20"
    >
      {/* Page Header */}
      <motion.div variants={sectionVariants} className="text-center mb-20">
        {/* <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-brand-soft mb-8">
          <Building2 className="h-10 w-10 text-agrinvest-green-600" />
        </div> */}
        <Badge variant="outline" className="mb-6 border-agrinvest-green-300 text-agrinvest-green-700">
          Established 2018 • Ejisu-Abankro, Ghana
        </Badge>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground font-heading mb-6 leading-tight">
          About <span className="text-gradient-brand">Agrinvest</span> Limited
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          A fully licensed and registered agribusiness enterprise committed to fostering
          agricultural development in Ghana through comprehensive investment in smallholder farmers
        </p>
        <div className="mt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-agrinvest-green-600" />
            <span>Fully Licensed Enterprise</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-agrinvest-green-600" />
            <span>Strategic Partnerships</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-agrinvest-green-600" />
            <span>Professional Excellence</span>
          </div>
        </div>
      </motion.div>

      {/* Company Overview */}
      <motion.section variants={sectionVariants} className="mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6 font-heading">
              Company Overview
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Established in 2018, Agrinvest Limited operates with a dedicated workforce ensuring efficiency,
                innovation, and sustainability in all our operations.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our <strong className="text-foreground">Board of Directors</strong>, plays a pivotal role in overseeing the company&apos;s strategic direction,
                ensuring sound governance, and guiding major business decisions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Headquartered strategically in <strong className="text-foreground">Ejisu-Abankro</strong>,
                we are well-positioned to support agricultural activities across multiple value chains
                throughout Ghana.
              </p>
            </div>
          </div>

          <motion.div
            variants={itemVariants}
            className="relative h-80 rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="/images/grains.jpeg"
              alt="Agrinvest Limited Headquarters in Ejisu-Abankro"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-lg font-semibold">Our Headquarters</p>
              <p className="text-sm opacity-90">Ejisu-Abankro, Ghana</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Company Statistics */}
      <motion.section variants={sectionVariants} className="mb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-heading">
            Our Organization at a Glance
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building agricultural excellence through professional leadership, dedicated workforce,
            and strategic governance across Ghana&apos;s agricultural regions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {companyStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 group-hover:-translate-y-1">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 transition-transform group-hover:scale-110 ${stat.color === 'text-agrinvest-blue-600' ? 'text-agrinvest-blue-600 bg-agrinvest-blue-50' :
                  stat.color === 'text-agrinvest-green-600' ? 'text-agrinvest-green-600 bg-agrinvest-green-50' :
                    stat.color === 'text-agrinvest-gray-600' ? 'text-agrinvest-gray-600 bg-agrinvest-gray-50' :
                      'text-agrinvest-green-700 bg-agrinvest-green-100'
                  }`}>
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
      </motion.section>

      {/* Mission Statement */}
      <motion.section variants={sectionVariants} className="mb-20">
        <Card className="border-0 shadow-soft bg-gradient-to-br from-agrinvest-green-50/20 to-agrinvest-blue-50 dark:from-agrinvest-green-900/20 dark:to-agrinvest-blue-950/20 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-agrinvest-green-200/30 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-agrinvest-blue-200/20 rounded-full blur-3xl"></div>
          <CardContent className="p-8 md:p-16 text-center relative z-10">
            {/* <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-brand-soft mb-8">
              <Target className="h-10 w-10 text-agrinvest-green-600" />
            </div> */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-heading">
              Our Mission & Vision
            </h2>
            <blockquote className="text-xl md:text-3xl font-medium text-foreground mb-8 italic leading-relaxed max-w-4xl mx-auto">
              &ldquo;To meet Ghana&apos;s increasing demand for high quality grains, cereals, and vegetables
              through a comprehensive set of investments in the smallholder farmer.&rdquo;
            </blockquote>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We believe that strategic investment in agriculture is the cornerstone of Ghana&apos;s food security
              and economic prosperity, empowering farmers through resources, training, and market access while
              fostering sustainable agricultural development across 7 regions: Ashanti, Upper West, Northern, Bono East, Bono, North East, and Savannah.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Core Specialization */}
      <motion.section variants={sectionVariants} className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4 font-heading">
            Core Specialization
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Farm-to-table integrated value chain solutions designed to enhance productivity
            and economic well-being of smallholder farmers across Ghana
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Users className="h-6 w-6 text-emerald-600" />
              Farmer Empowerment Focus
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our services particularly prioritize <strong className="text-foreground">women and youth</strong>,
              empowering them with the tools and resources needed to thrive in the agricultural sector.
              We are committed to building inclusive agricultural value chains that create opportunities
              for all members of farming communities.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By leveraging sustainable agricultural practices and cutting-edge technology, we help
              smallholder farmers improve their yields, reduce post-harvest losses, and gain access
              to premium markets.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Wheat className="h-6 w-6 text-amber-600" />
              Key Focus Crops
            </h3>
            <p className="text-muted-foreground mb-4">
              We maximize the value of key staple and cash crops through our integrated approach:
            </p>
            <div className="grid grid-cols-2 gap-2">
              {keyFocusCrops.map((crop) => (
                <Badge key={crop} variant="outline" className="justify-start p-2">
                  {crop}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Regional Coverage Section */}
      <motion.section variants={sectionVariants} className="mb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-heading">
            Regional Coverage Across Ghana
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Strategically positioned to serve agricultural communities across 7 key regions,
            with headquarters in Ejisu-Abankro for optimal operational efficiency
          </p>
        </div>

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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center h-2"
        >
          {/* <Card className="inline-block p-8 border-0 shadow-large bg-white dark:bg-gray-800">
            <div className="flex items-center justify-center gap-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-brand text-white">
                <Award className="h-8 w-8" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-foreground mb-1">Headquarters</h3>
                <p className="text-lg text-muted-foreground">Ejisu-Abankro, Ashanti Region</p>
                <p className="text-sm text-agrinvest-green-600 font-medium">Strategic Location for Regional Operations</p>
              </div>
            </div>
          </Card> */}
        </motion.div>
      </motion.section>

      {/* Services Overview */}
      <motion.section variants={sectionVariants} className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4 font-heading">
            Comprehensive Agricultural Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            End-to-end solutions that optimize farm productivity and streamline the agricultural value chain
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="text-center"
            >
              <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mx-auto mb-4 ${service.color === 'text-emerald-600' ? 'bg-emerald-600/10' :
                    service.color === 'text-blue-600' ? 'bg-blue-600/10' :
                      'bg-amber-600/10'
                    }`}>
                    <service.icon className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold font-heading">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Impact and Coverage */}
      <motion.section variants={sectionVariants} className="mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-foreground mb-6 font-heading">
              Impact and Regional Coverage
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg font-semibold text-foreground">7,487 Farmers Served</p>
                  <p className="text-muted-foreground">
                    Currently supporting thousands of smallholder farmers across Ghanas&apos; Northern and Upper West Regions
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg font-semibold text-foreground">Strategic Regional Focus</p>
                  <p className="text-muted-foreground">
                    Operations across 7 regions with strategic focus on maximizing agricultural impact and farmer empowerment
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg font-semibold text-foreground">Sustainable Development</p>
                  <p className="text-muted-foreground">
                    Contributing significantly to increased agricultural output and improved rural livelihoods
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative h-80 rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="/images/tamale.jpg"
              alt="Agricultural development in Northern Ghana"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-lg font-semibold">Our Coverage Areas</p>
              <p className="text-sm opacity-90">Northern & Upper West Regions</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Strategic Partnerships */}
      <motion.section variants={sectionVariants} className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4 font-heading">
            Strategic Partnerships
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Collaborating with leading national and international organizations to implement
            high-impact agricultural development projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {partnerships.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Handshake className="h-8 w-8 text-blue-600" />
                    <div>
                      <CardTitle className="text-lg font-semibold">{partner.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{partner.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{partner.focus}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Vision Statement */}
      <motion.section variants={sectionVariants}>
        <div className="relative">
          <Card className="border-0 shadow-medium bg-gradient-to-br from-agrinvest-blue-50/20 to-agrinvest-green-50/20 dark:from-agrinvest-blue-900/20 dark:to-agrinvest-green-950/20 overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 bg-agrinvest-blue-200/30 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-56 h-56 bg-agrinvest-green-200/20 rounded-full blur-3xl"></div>
            <CardContent className="p-8 md:p-16 text-center relative z-10">
              {/* <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-brand-soft mb-8">
                <Globe className="h-10 w-10 text-agrinvest-blue-600" />
              </div> */}
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-heading">
                Our Vision for Ghana&apos;s Agricultural Future
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-5xl mx-auto leading-relaxed mb-8">
                With a clear vision for growth and impact, Agrinvest Limited continues to drive
                transformation within Ghana&apos;s agricultural sector, ensuring sustainable development
                that benefits both current and future generations.
              </p>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="glass rounded-xl p-6 backdrop-blur-sm">
                  <h3 className="font-semibold text-agrinvest-green-600 mb-2">Food Security</h3>
                  <p className="text-sm text-muted-foreground">Ensuring sustainable food production for Ghana&apos;s growing population</p>
                </div>
                <div className="glass rounded-xl p-6 backdrop-blur-sm">
                  <h3 className="font-semibold text-agrinvest-blue-600 mb-2">Economic Empowerment</h3>
                  <p className="text-sm text-muted-foreground">Creating prosperity for smallholder farmers and rural communities</p>
                </div>
                <div className="glass rounded-xl p-6 backdrop-blur-sm">
                  <h3 className="font-semibold text-agrinvest-gray-600 dark:text-agrinvest-gray-300 mb-2">Environmental Sustainability</h3>
                  <p className="text-sm text-muted-foreground">Promoting eco-friendly farming practices for long-term viability</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default AboutComponent;
