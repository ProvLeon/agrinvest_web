"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Leaf, Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
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
  const [isLoading, setIsLoading] = React.useState(false);
  const [apiResponse, setApiResponse] = React.useState<{ message: string; success: boolean; errors?: Record<string, string[]> } | null>(null);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setApiResponse(null); // Clear previous messages

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setApiResponse({ message: result.message || 'Message sent successfully!', success: true });
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
      } else {
        setApiResponse({
          message: result.message || 'An error occurred.',
          success: false,
          errors: result.errors,
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setApiResponse({ message: 'An unexpected network error occurred. Please try again.', success: false });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendAnother = () => {
    setApiResponse(null);
    setFormData({ name: '', email: '', subject: '', message: '' });
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
        className="text-center mb-16 md:mb-20"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-brand-soft mb-8">
          <Mail className="h-10 w-10 text-agrinvest-green-600" />
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground font-heading mb-6 leading-tight">
          Get in <span className="text-gradient-brand">Touch</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Connect with Agrinvest Limited to learn how we can support your agricultural operations.
          Our team is ready to discuss partnerships, services, and opportunities for growth.
        </p>
        <div className="mt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-agrinvest-green-600" />
            <span>Professional Support</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-agrinvest-green-600" />
            <span>Quick Response</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-agrinvest-green-600" />
            <span>Expert Guidance</span>
          </div>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-10 md:gap-12">
        {/* Contact Form */}
        <motion.div variants={itemVariants} className="lg:col-span-3">
          <Card className="shadow-large border-0 bg-white dark:bg-gray-800">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-brand-soft">
                  <Send className="h-6 w-6 text-agrinvest-green-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl md:text-3xl text-foreground font-heading">
                    Send Us a Message
                  </CardTitle>
                  <CardDescription className="text-base mt-1">
                    Fill out the form below and we&apos;ll get back to you within 24-48 hours.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {apiResponse && apiResponse.success ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center p-8 bg-gradient-brand-soft rounded-2xl border border-agrinvest-green-200"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-agrinvest-green-100 mb-4">
                    <Leaf className="h-8 w-8 text-agrinvest-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-agrinvest-green-700 mb-3">Message Sent Successfully!</h3>
                  <p className="text-muted-foreground mb-6">{apiResponse.message}</p>
                  <Button onClick={handleSendAnother} variant="outline" className="border-agrinvest-green-300 text-agrinvest-green-700 hover:bg-agrinvest-green-50">
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {apiResponse && !apiResponse.success && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-destructive/10 rounded-md text-destructive text-sm"
                    >
                      <p className="font-medium">Error: {apiResponse.message}</p>
                      {apiResponse.errors && (
                        <ul className="list-disc list-inside mt-1">
                          {Object.entries(apiResponse.errors).map(([field, messages]) =>
                            messages?.map((msg, i) => <li key={`${field}-${i}`}>{msg}</li>)
                          )}
                        </ul>
                      )}
                    </motion.div>
                  )}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-sm font-medium text-foreground/90">Full Name</label>
                      <Input id="name" name="name" placeholder="Kofi Peprah" required value={formData.name} onChange={handleChange} disabled={isLoading} />
                      {apiResponse?.errors?.name && <p className="text-xs text-destructive">{apiResponse.errors.name.join(', ')}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-sm font-medium text-foreground/90">Email Address</label>
                      <Input id="email" name="email" type="email" placeholder="kofipeprah@gmail.com" required value={formData.email} onChange={handleChange} disabled={isLoading} />
                      {apiResponse?.errors?.email && <p className="text-xs text-destructive">{apiResponse.errors.email.join(', ')}</p>}
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground/90">Subject</label>
                    <Input id="subject" name="subject" placeholder="Inquiry..." required value={formData.subject} onChange={handleChange} disabled={isLoading} />
                    {apiResponse?.errors?.subject && <p className="text-xs text-destructive">{apiResponse.errors.subject.join(', ')}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-medium text-foreground/90">Message</label>
                    <Textarea id="message" name="message" placeholder="Your message here..." rows={5} required value={formData.message} onChange={handleChange} disabled={isLoading} />
                    {apiResponse?.errors?.message && <p className="text-xs text-destructive">{apiResponse.errors.message.join(', ')}</p>}
                  </div>
                  <div>
                    <Button type="submit" size="lg" className="w-full sm:w-auto bg-agrinvest-green-600 hover:bg-agrinvest-green-700 text-white px-8 py-4 shadow-brand" disabled={isLoading}>
                      {isLoading ? (
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full inline-block mr-3"
                        ></motion.span>
                      ) : <Send className="mr-3 h-5 w-5" />}
                      {isLoading ? "Sending Message..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Details */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <Card className="shadow-large border-0 bg-white dark:bg-gray-800 h-full">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-3 mb-4">
                {/* <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-brand-soft">
                  <MapPin className="h-6 w-6 text-agrinvest-blue-600" />
                </div> */}
                <div>
                  <CardTitle className="text-2xl md:text-3xl text-foreground font-heading">
                    Visit Our Office
                  </CardTitle>
                  <CardDescription className="text-base mt-1">
                    Located in Ejisu-Abankro, strategically positioned to serve Ghana&apos;s agricultural regions.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-8 text-foreground">
              <div className="bg-gradient-brand-soft rounded-xl p-6 border border-agrinvest-green-200/50">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg ">
                    <MapPin className="h-5 w-5 text-agrinvest-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-2">Our Office</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Ejisu-Abankro<br />
                      Ashanti Region, Ghana<br />
                      <span className="text-sm text-agrinvest-green-600 font-medium">Strategically positioned to serve Ghana</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg ">
                    <Phone className="h-5 w-5 text-agrinvest-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-2">Phone</h4>
                    <a href={`tel:+${CONTACT}`} className="text-muted-foreground hover:text-agrinvest-blue-600 transition-colors text-lg">
                      +{CONTACT}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg ">
                    <Mail className="h-5 w-5 text-agrinvest-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-2">Email</h4>
                    <a href={`mailto:${EMAIL}`} className="text-muted-foreground hover:text-agrinvest-blue-600 transition-colors text-lg">
                      {EMAIL}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h4 className="font-bold text-lg text-foreground mb-4">Office Hours</h4>
                <div className="space-y-2">
                  <p className="text-muted-foreground flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 5:00 PM</span>
                  </p>
                  <p className="text-muted-foreground flex justify-between">
                    <span>Saturday - Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </p>
                </div>
              </div>

              {/* <div className="bg-gradient-to-br from-agrinvest-blue-50 to-agrinvest-green-50 rounded-xl p-6 border border-agrinvest-blue-200/50">
                <h4 className="font-bold text-lg text-foreground mb-3">Service Areas</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-agrinvest-green-600">Northern</div>
                    <div className="text-sm text-muted-foreground">Region</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-agrinvest-blue-600">Upper West</div>
                    <div className="text-sm text-muted-foreground">Region</div>
                  </div>
                </div>
              </div> */}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Enhanced Map Section */}
      <motion.div variants={itemVariants} className="mt-20 md:mt-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-heading">
            Visit Our Headquarters
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Located in Ejisu-Abankro, our office is strategically positioned to serve agricultural
            communities across Ghana.
          </p>
        </div>

        <Card className="overflow-hidden shadow-large border-0">
          <CardContent className="p-0 relative">
            <iframe
              src={MAPS}
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-80 md:h-[500px] rounded-lg"
            ></iframe>
            {/* <div className="absolute top-6 left-6 glass rounded-xl p-4 backdrop-blur-md border border-white/20">
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-agrinvest-green-600">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Agrinvest Limited</h3>
                  <p className="text-sm text-muted-foreground">Ejisu-Abankro, Ghana</p>
                </div>
              </div>
            </div> */}
          </CardContent>
        </Card>
      </motion.div>

    </motion.div>
  );
};

export default ContactPage;
