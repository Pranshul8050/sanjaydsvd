import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast.success("Thank you! We'll contact you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", enquiryType: "", message: "" });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions? We're here to help you find the right financial solution
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Contact Form */}
            <Card className="lg:col-span-2 shadow-xl border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you soon</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Rajesh Kumar"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="rajesh@example.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="enquiry-type">Enquiry Type *</Label>
                    <Select value={formData.enquiryType} onValueChange={(value) => handleChange("enquiryType", value)}>
                      <SelectTrigger id="enquiry-type">
                        <SelectValue placeholder="Select enquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="truck">Truck Finance</SelectItem>
                        <SelectItem value="harvester">Harvester Finance</SelectItem>
                        <SelectItem value="car">4-Wheeler Finance</SelectItem>
                        <SelectItem value="vehicle-insurance">Vehicle Insurance</SelectItem>
                        <SelectItem value="health-insurance">Health Insurance</SelectItem>
                        <SelectItem value="life-insurance">Life Insurance</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your requirements..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-secondary">
                    Submit Enquiry
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card className="shadow-lg border-2">
                <CardHeader>
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Address</h4>
                      <p className="text-sm text-muted-foreground">
                        Takiya Bazar, Sasaram<br />
                        District Rohtas, Bihar 821113
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                      <p className="text-sm text-muted-foreground">+91 96328 54855</p>
                      <p className="text-xs text-muted-foreground mt-1">Mon-Sat, 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-sm text-muted-foreground">Sanjayfinancecompany@gmail.com</p>
                  </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                      <p className="text-sm text-muted-foreground">
                        Monday - Saturday<br />
                        9:00 AM - 6:00 PM<br />
                        <span className="text-xs">(Sunday Closed)</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp Quick Contact */}
              <Card className="shadow-lg border-2 border-secondary/30 bg-gradient-to-br from-secondary/5 to-secondary/10">
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto">
                      <MessageCircle className="w-8 h-8 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-2">Quick WhatsApp Chat</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Get instant responses to your queries
                      </p>
                      <Button 
                        asChild 
                        className="w-full bg-secondary hover:bg-secondary/90"
                      >
                        <a 
                          href="https://wa.me/919632854855?text=Hi, I'm interested in your financial services" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Chat on WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-12 max-w-7xl mx-auto">
            <Card className="overflow-hidden shadow-xl border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Visit Our Office</CardTitle>
                <CardDescription>Takiya Bazar, Sasaram, District Rohtas, Bihar 821113</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full h-96 bg-muted flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14515.234567890123!2d84.0123456789!3d24.9234567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDU1JzI0LjQiTiA4NMKwMDAnNDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sanjay Finance Location"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="mt-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2 text-foreground">What documents do I need?</h3>
                  <p className="text-sm text-muted-foreground">
                    Basic documents include ID proof, address proof, income proof, and relevant vehicle/property documents. Our team will guide you through the complete list.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2 text-foreground">How long does approval take?</h3>
                  <p className="text-sm text-muted-foreground">
                    Most applications are processed within 24 hours. For urgent cases, we offer same-day approvals subject to document verification.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Are there prepayment charges?</h3>
                  <p className="text-sm text-muted-foreground">
                    No! We offer zero prepayment charges on most of our loan products. You can pay off your loan early without any penalties.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Do you offer doorstep service?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, we provide doorstep service for document collection and verification within Rohtas district for your convenience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
