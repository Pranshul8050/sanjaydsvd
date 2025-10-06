import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Tractor, Car, Shield, ArrowRight } from "lucide-react";
import truckImage from "@/assets/truck-finance.jpg";
import harvesterImage from "@/assets/harvester-finance.jpg";
import carImage from "@/assets/car-finance.jpg";
import insuranceImage from "@/assets/insurance-services.jpg";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Truck Finance",
      description: "Fast approvals and competitive rates for commercial vehicles. Support for logistics and transport businesses.",
      image: truckImage,
      features: ["Up to 90% financing", "Quick approval in 24 hours", "Flexible tenure"],
      color: "from-primary to-primary-light",
    },
    {
      icon: Tractor,
      title: "Harvester Finance",
      description: "Tailored for farmers with flexible, seasonal repayment plans aligned with crop cycles.",
      image: harvesterImage,
      features: ["Seasonal payment structure", "Minimal documentation", "Agricultural expertise"],
      color: "from-secondary to-secondary-light",
    },
    {
      icon: Car,
      title: "4-Wheeler Finance",
      description: "Easy personal and commercial vehicle loans with minimal processing fees and hassle-free documentation.",
      image: carImage,
      features: ["Low processing fees", "Zero prepayment charges", "Instant loan approval"],
      color: "from-accent to-accent-light",
    },
    {
      icon: Shield,
      title: "Insurance Services",
      description: "Comprehensive Vehicle, Health, and Life insurance under one roof. Your one-stop insurance solution.",
      image: insuranceImage,
      features: ["Vehicle Insurance", "Health Insurance", "Life Insurance"],
      color: "from-gold/80 to-secondary",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-gradient">Financial Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive finance and insurance services designed for the unique needs of Rohtas district
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover-lift hover-glow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60`} />
                  <div className="absolute top-4 left-4">
                    <div className="w-14 h-14 rounded-xl bg-background/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button asChild className="w-full group/btn">
                    <Link to="/services" className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="border-2">
            <Link to="/emi-calculator">
              Calculate Your EMI
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
