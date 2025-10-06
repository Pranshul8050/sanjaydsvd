import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, FileText } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Financial Services" 
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0" 
          style={{ background: "var(--gradient-hero)" }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="space-y-6 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-sm font-medium text-gold-foreground">Trusted Since 2010</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              Fueling <span className="text-gradient-gold">Rohtas's</span> Progress
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
              Fast approvals, flexible plans, and expert guidance for Motor Finance & Insurance solutions tailored for farmers, truckers, and families.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                asChild 
                size="lg"
                className="bg-gold hover:bg-gold/90 text-gold-foreground font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                <Link to="/emi-calculator" className="flex items-center">
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate EMI
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground/80 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-lg backdrop-blur-sm"
              >
                <Link to="/contact" className="flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Apply Now
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-2xl font-bold text-gold">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-primary-foreground">Quick Approval</p>
                  <p className="text-sm text-primary-foreground/70">Within 24 Hours</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-2xl font-bold text-gold">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-primary-foreground">Flexible Plans</p>
                  <p className="text-sm text-primary-foreground/70">Tailored for You</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-2xl font-bold text-gold">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-primary-foreground">Local Experts</p>
                  <p className="text-sm text-primary-foreground/70">Rohtas Based</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
