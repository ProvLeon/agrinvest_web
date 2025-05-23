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
        className="text-center mb-12 md:mb-16"
      >
        <Mail className="h-12 w-12 text-primary mx-auto mb-3" />
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-heading">
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
              <CardTitle className="text-2xl text-primary flex items-center gap-2 font-heading">
                <Send className="h-6 w-6" /> Send Us a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {apiResponse && apiResponse.success ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center p-6 bg-primary/10 rounded-md"
                >
                  <Leaf className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="text-xl font-semibold text-primary mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">{apiResponse.message}</p>
                  <Button onClick={handleSendAnother} variant="outline" className="mt-4">
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
          <Card className="shadow-lg dark:shadow-primary/10 h-full">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2 font-heading">
                {/* <MapPin className="h-6 w-6" />  */}
                Get In Touch
              </CardTitle>
              <CardDescription>
                Find us at our office or reach out via phone or email.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 text-foreground/90">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
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
                <Phone className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a href={`tel:+${CONTACT}`} className="text-muted-foreground hover:text-secondary transition-colors">
                    +{CONTACT} {/* Replace with actual number */}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
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
            <CardTitle className="text-xl text-primary font-heading">Our Location</CardTitle>
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
