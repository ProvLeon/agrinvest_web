"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Leaf, Mail, Phone, MapPin, Send } from 'lucide-react';
import * as React from 'react';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const MAPS = process.env.NEXT_PUBLIC_APP_MAPS
const CONTACT = process.env.NEXT_PUBLIC_APP_CONTACT || ''
const EMAIL = process.env.NEXT_PUBLIC_APP_EMAIL
const ContactPage = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form data submitted:", formData);
    setIsLoading(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    // You would typically send this data to a backend API
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="container mx-auto px-4 md:px-6 py-12 md:py-20"
    >
      <motion.div
        variants={itemVariants}
        className="text-center mb-12 md:mb-16"
      >
        <Mail className="h-12 w-12 text-primary mx-auto mb-3" />
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Contact Us
        </h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
          We&apos;d love to hear from you! Whether you have a question about our services, partnerships, or anything else, our team is ready to answer all your inquiries.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-10 md:gap-12">
        {/* Contact Form */}
        <motion.div variants={itemVariants} className="lg:col-span-3">
          <Card className="shadow-lg dark:shadow-primary/10">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <Send className="h-6 w-6" /> Send Us a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center p-6 bg-primary/10 rounded-md"
                >
                  <Leaf className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="text-xl font-semibold text-primary mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">Thank you for reaching out. We&apos;ll be in touch soon.</p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-4">
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-sm font-medium text-foreground/90">Full Name</label>
                      <Input id="name" name="name" placeholder="John Doe" required value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-sm font-medium text-foreground/90">Email Address</label>
                      <Input id="email" name="email" type="email" placeholder="email@gmail.com" required value={formData.email} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground/90">Subject</label>
                    <Input id="subject" name="subject" placeholder="Inquiry about investments" required value={formData.subject} onChange={handleChange} />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-medium text-foreground/90">Message</label>
                    <Textarea id="message" name="message" placeholder="Your message here..." rows={5} required value={formData.message} onChange={handleChange} />
                  </div>
                  <div>
                    <Button type="submit" className="w-full sm:w-auto bg-agrinvest-green text-agrinvest-green-foreground hover:bg-agrinvest-green/90" disabled={isLoading}>
                      {isLoading ? (
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          className="w-4 h-4 border-2 border-background border-t-transparent rounded-full inline-block mr-2"
                        ></motion.span>
                      ) : <Send className="mr-2 h-4 w-4" />}
                      {isLoading ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Details */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <Card className="shadow-lg dark:shadow-secondary/10 h-full">
            <CardHeader>
              <CardTitle className="text-2xl text-secondary flex items-center gap-2">
                <MapPin className="h-6 w-6" /> Get In Touch
              </CardTitle>
              <CardDescription>
                Find us at our office or reach out via phone or email.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 text-foreground/90">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 text-secondary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Our Office</h4>
                  <p className="text-muted-foreground">
                    {/* <br /> */}
                    Ejisu, Ghana <br />
                    {/* Replace with actual district/region if more specific */}
                    Ashanti Region
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-1 text-secondary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a href={`tel:+${CONTACT}`} className="text-muted-foreground hover:text-secondary transition-colors">
                    +{CONTACT} {/* Replace with actual number */}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-1 text-secondary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href={`mailto:${EMAIL}`} className="text-muted-foreground hover:text-secondary transition-colors">
                    {EMAIL} {/* Replace with actual email */}
                  </a>
                </div>
              </div>
              <div className="pt-4 border-t border-border/50">
                <h4 className="font-semibold mb-2">Opening Hours</h4>
                <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Optional: Map Section */}
      <motion.div variants={itemVariants} className="mt-16 md:mt-24">
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle className="text-xl text-primary">Our Location</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {/* Replace the src attribute with your actual Google Maps embed link */}
            <iframe
              src={MAPS} // Default to Kumasi, Ghana
              width="100%"
              height="400" // You can adjust height as needed, e.g., h-64 md:h-96 for Tailwind
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-64 md:h-96 rounded-b-lg" // Added rounded-b-lg to match card
            ></iframe>
          </CardContent>
        </Card>
      </motion.div>

    </motion.div>
  );
};

export default ContactPage;
