import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, FileText } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
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
              <span className="text-sm font-medium text-gold-foreground">{t('hero.badge')}</span>
            </div>

            {/* Heading and Tagline in Border */}
            <div className="border-2 border-gold/40 rounded-2xl p-6 md:p-8 bg-primary-foreground/5 backdrop-blur-sm">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-4">
                <span className="text-gradient-gold">{t('hero.title')}</span> {t('hero.subtitle')}
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
                {t('hero.description')}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                asChild 
                size="lg"
                className="bg-gold hover:bg-gold/90 text-gold-foreground font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                <Link to="/emi-calculator" className="flex items-center">
                  <Calculator className="w-5 h-5 mr-2" />
                  {t('hero.cta.calculate')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                size="lg"
                variant="outline"
                className="border-2 border-gold text-gold hover:bg-gold/20 font-semibold text-lg backdrop-blur-sm"
              >
                <Link to="/contact" className="flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  {t('hero.cta.apply')}
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
                  <p className="font-semibold text-primary-foreground">{t('hero.trust.approval')}</p>
                  <p className="text-sm text-primary-foreground/70">{t('hero.trust.approval.desc')}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-2xl font-bold text-gold">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-primary-foreground">{t('hero.trust.flexible')}</p>
                  <p className="text-sm text-primary-foreground/70">{t('hero.trust.flexible.desc')}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-2xl font-bold text-gold">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-primary-foreground">{t('hero.trust.local')}</p>
                  <p className="text-sm text-primary-foreground/70">{t('hero.trust.local.desc')}</p>
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
