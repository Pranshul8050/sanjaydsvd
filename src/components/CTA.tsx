import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calculator, Phone, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-secondary blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10 leading-relaxed">
            Whether you need motor finance or insurance, we're here to help you achieve your goals with flexible solutions and expert guidance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-gold hover:bg-gold/90 text-gold-foreground font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              <Link to="/emi-calculator" className="flex items-center">
                <Calculator className="w-5 h-5 mr-2" />
                Calculate Your EMI
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>

            <Button 
              asChild 
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-lg backdrop-blur-sm"
            >
              <Link to="/contact" className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Contact Us Today
              </Link>
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-primary-foreground/90">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-gold animate-pulse" />
                <span className="font-medium">Quick 24-Hour Approval</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-gold animate-pulse" />
                <span className="font-medium">Flexible Payment Plans</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-gold animate-pulse" />
                <span className="font-medium">Local Expert Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
