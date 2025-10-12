import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, CheckCircle, ArrowRight, Heart, Car, Users } from "lucide-react";
import { Link } from "react-router-dom";
import insuranceImage from "@/assets/insurance-services.jpg";
import insuranceBrands from "@/assets/insurance-brands.jpg";
import vehicleInsuranceImg from "@/assets/vehicle-insurance.jpg";
import healthInsuranceImg from "@/assets/health-insurance.jpg";
import lifeInsuranceImg from "@/assets/life-insurance.jpg";

const Insurance = () => {
  const insuranceTypes = [
    {
      icon: Car,
      title: "Vehicle Insurance",
      description: "Comprehensive coverage for your vehicles",
      image: vehicleInsuranceImg,
      features: [
        "Comprehensive & Third-party coverage",
        "Own damage protection",
        "Zero depreciation add-on available",
        "Quick claim settlement",
        "Cashless garage network",
        "24/7 roadside assistance",
      ],
      eligibility: [
        "Valid vehicle registration (RC)",
        "Valid driving license",
        "Previous insurance policy (for renewal)",
        "Vehicle inspection (for old vehicles)",
      ],
    },
    {
      icon: Heart,
      title: "Health Insurance",
      description: "Protect yourself and your family's health",
      image: healthInsuranceImg,
      features: [
        "Individual & Family floater plans",
        "Cashless hospitalization",
        "Pre & post hospitalization coverage",
        "No claim bonus benefits",
        "Tax benefits under 80D",
        "Critical illness coverage",
      ],
      eligibility: [
        "Age: 18-65 years (varies by plan)",
        "Medical history disclosure",
        "Valid ID proof",
        "Address proof",
      ],
    },
    {
      icon: Users,
      title: "Life Insurance",
      description: "Secure your family's future",
      image: lifeInsuranceImg,
      features: [
        "Term insurance plans",
        "Investment-linked plans",
        "Money-back policies",
        "Retirement planning solutions",
        "Tax benefits under 80C",
        "Flexible premium payment options",
      ],
      eligibility: [
        "Age: 18-65 years",
        "Medical examination (for high sum assured)",
        "Income proof",
        "Valid ID proof",
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
              <Shield className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Insurance <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive insurance solutions to protect what matters most to you
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={insuranceImage} 
                alt="Insurance Services"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
                <div className="p-8 text-primary-foreground">
                  <h2 className="text-3xl font-bold mb-2">Your Protection Partner</h2>
                  <p className="text-lg">Expert guidance for all your insurance needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {insuranceTypes.map((insurance, index) => {
              const Icon = insurance.icon;
              
              return (
                <Card key={index} className="border-2 shadow-lg hover-lift overflow-hidden">
                  {/* Insurance Image */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <img 
                      src={insurance.image} 
                      alt={insurance.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
                      <div className="p-6 text-primary-foreground w-full">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
                            <Icon className="w-7 h-7 text-primary-foreground" />
                          </div>
                          <div>
                            <CardTitle className="text-2xl text-primary-foreground">{insurance.title}</CardTitle>
                            <CardDescription className="text-base text-primary-foreground/90">{insurance.description}</CardDescription>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="grid md:grid-cols-2 gap-8 pt-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-foreground">Coverage Features</h4>
                      <ul className="space-y-2">
                        {insurance.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Eligibility */}
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-foreground">Required Documents</h4>
                      <ul className="space-y-2">
                        {insurance.eligibility.map((item, i) => (
                          <li key={i} className="flex items-center text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA */}
          <div className="max-w-6xl mx-auto mt-12">
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Need Insurance Advice?
                    </h3>
                    <p className="text-muted-foreground">
                      Our experts will help you choose the right insurance plan
                    </p>
                  </div>
                  <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary">
                    <Link to="/contact">
                      Get Free Consultation
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner Brands */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our <span className="text-gradient">Insurance Partners</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                We work with leading insurance providers across India
              </p>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={insuranceBrands} 
                alt="Insurance Company Partners"
                className="w-full h-auto object-contain bg-white p-8"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <p className="text-muted-foreground">Insurance Partners</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-muted-foreground">Claim Assistance</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <p className="text-muted-foreground">Customer Satisfaction</p>
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

export default Insurance;
