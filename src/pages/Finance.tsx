import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Tractor, Car, CheckCircle, ArrowRight, Banknote } from "lucide-react";
import { Link } from "react-router-dom";
import truckImage from "@/assets/truck-finance.jpg";
import harvesterImage from "@/assets/harvester-finance.jpg";
import carImage from "@/assets/car-finance.jpg";

const Finance = () => {
  const financeServices = [
    {
      icon: Truck,
      title: "Truck Finance",
      description: "Quick approvals and competitive rates for commercial vehicles",
      image: truckImage,
      features: [
        "Up to 90% financing available",
        "Flexible repayment tenure (1-7 years)",
        "Minimal documentation required",
        "Quick approval within 24 hours",
        "Competitive interest rates",
        "No hidden charges",
      ],
      eligibility: [
        "Age: 21-65 years",
        "Valid driving license",
        "Income proof (ITR/Bank statements)",
        "Address proof",
      ],
    },
    {
      icon: Tractor,
      title: "Harvester Finance",
      description: "Specialized financing for agricultural equipment",
      image: harvesterImage,
      features: [
        "Seasonal payment structure aligned with crops",
        "Up to 85% financing",
        "Flexible tenure up to 5 years",
        "Minimal documentation",
        "Agricultural expertise",
        "Fast processing",
      ],
      eligibility: [
        "Age: 21-65 years",
        "Land ownership documents",
        "Income proof",
        "Valid ID proof",
      ],
    },
    {
      icon: Car,
      title: "4-Wheeler Finance",
      description: "Easy personal and commercial vehicle loans",
      image: carImage,
      features: [
        "Up to 85% on-road price financing",
        "Tenure up to 7 years",
        "Low processing fees",
        "Zero prepayment charges",
        "Instant loan approval",
        "Insurance bundling available",
      ],
      eligibility: [
        "Age: 21-65 years",
        "Salaried or self-employed",
        "Income proof",
        "Valid driving license",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
              <Banknote className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Personal & Business Loan <span className="text-gradient">Finance Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Instant approval on truck, harvester, and car loans with competitive interest rates and flexible EMI plans
            </p>
          </div>
        </div>
      </section>

      {/* Finance Services Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {financeServices.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center max-w-6xl mx-auto`}>
                  {/* Image */}
                  <div className="flex-1">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl hover-lift group">
                      <img 
                        src={service.image} 
                        alt={`${service.title} - ${service.description} with instant loan approval, competitive interest rates, and flexible EMI plans`}
                        className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                      <div className="absolute bottom-6 left-6">
                        <div className="w-16 h-16 rounded-xl bg-background/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <Card className="border-2 shadow-lg">
                      <CardHeader>
                        <CardTitle className="text-3xl">{service.title}</CardTitle>
                        <CardDescription className="text-lg">{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {/* Features */}
                        <div>
                          <h4 className="font-semibold text-lg mb-3 text-foreground">Key Features</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {service.features.map((feature, i) => (
                              <li key={i} className="flex items-start text-sm text-muted-foreground">
                                <CheckCircle className="w-4 h-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Eligibility */}
                        <div>
                          <h4 className="font-semibold text-lg mb-3 text-foreground">Basic Eligibility</h4>
                          <ul className="space-y-2">
                            {service.eligibility.map((item, i) => (
                              <li key={i} className="flex items-center text-sm text-muted-foreground">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
                          <Button asChild className="flex-1">
                            <Link to="/contact">
                              Apply Now
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          </Button>
                          <Button asChild variant="outline" className="flex-1">
                            <Link to="/emi-calculator">Calculate EMI</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose <span className="text-gradient">Sanjay Finance</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Your trusted partner for hassle-free vehicle and equipment financing
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-2 hover-lift">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <CheckCircle className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Quick Approval</h3>
                  <p className="text-muted-foreground">Get your loan approved within 24 hours with minimal documentation</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 hover-lift">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Banknote className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Competitive Rates</h3>
                  <p className="text-muted-foreground">Lowest interest rates in the market with flexible EMI options</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 hover-lift">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <CheckCircle className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">100% Transparency</h3>
                  <p className="text-muted-foreground">No hidden charges, clear terms, and complete transparency in processing</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 hover-lift">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <CheckCircle className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Expert Guidance</h3>
                  <p className="text-muted-foreground">Dedicated relationship managers to guide you through the entire process</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 hover-lift">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <CheckCircle className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Flexible Tenure</h3>
                  <p className="text-muted-foreground">Choose repayment plans from 1 to 7 years that suit your budget</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 hover-lift">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <CheckCircle className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">35+ Years Trust</h3>
                  <p className="text-muted-foreground">Three decades of excellence serving 3000+ happy customers</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Apply for Instant Vehicle Finance Today
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Get fast loan approvals with competitive interest rates and flexible EMI options
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-gold-foreground font-semibold">
                <Link to="/contact">
                  Apply for Finance
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                <Link to="/emi-calculator">
                  Calculate EMI
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Finance;
