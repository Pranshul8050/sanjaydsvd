import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Clock, Users, CheckCircle, TrendingUp } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "100% Secure",
      description: "RBI Compliant",
      color: "from-primary/20 to-primary/5",
    },
    {
      icon: Award,
      title: "Certified",
      description: "ISO Verified",
      color: "from-secondary/20 to-secondary/5",
    },
    {
      icon: Clock,
      title: "35+ Years",
      description: "Industry Experience",
      color: "from-accent/20 to-accent/5",
    },
    {
      icon: Users,
      title: "3000+",
      description: "Happy Customers",
      color: "from-gold/20 to-gold/5",
    },
    {
      icon: CheckCircle,
      title: "98%",
      description: "Approval Rate",
      color: "from-primary/20 to-secondary/5",
    },
    {
      icon: TrendingUp,
      title: "₹100+ Cr",
      description: "Loans Disbursed",
      color: "from-secondary/20 to-gold/5",
    },
  ];

  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <Card
                key={index}
                className="text-center hover-lift transition-all border-0 shadow-sm"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="pt-6 pb-6">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${badge.color} flex items-center justify-center mx-auto mb-3`}>
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg text-foreground mb-1">{badge.title}</h4>
                  <p className="text-xs text-muted-foreground">{badge.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
