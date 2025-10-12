import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Award, Clock } from "lucide-react";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: TrendingUp,
      value: 3500,
      suffix: "+",
      label: "Loans Approved",
      color: "text-secondary",
    },
    {
      icon: Users,
      value: 3000,
      suffix: "+",
      label: "Happy Customers",
      color: "text-primary",
    },
    {
      icon: Award,
      value: 35,
      suffix: "+",
      label: "Years Experience",
      color: "text-accent",
    },
    {
      icon: Clock,
      value: 24,
      suffix: "hrs",
      label: "Quick Approval",
      color: "text-gold",
    },
  ];

  const CountUp = ({ end, suffix, isVisible }: { end: number; suffix: string; isVisible: boolean }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000;
      const steps = 60;
      const increment = end / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [end, isVisible]);

    return (
      <span className="text-5xl md:text-6xl font-bold">
        {count.toLocaleString()}{suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Thousands: Our <span className="text-gradient">Success Story</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Over 3000+ satisfied customers with instant loan approvals and 100% transparency in personal loans, business loans, and insurance services
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-card rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 hover-lift border border-border">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${
                    stat.color === "text-secondary" ? "from-secondary/20 to-secondary/10" :
                    stat.color === "text-primary" ? "from-primary/20 to-primary/10" :
                    stat.color === "text-accent" ? "from-accent/20 to-accent/10" :
                    "from-gold/20 to-gold/10"
                  } mb-6`}>
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className={`mb-2 ${stat.color}`}>
                    <CountUp end={stat.value} suffix={stat.suffix} isVisible={isVisible} />
                  </div>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
