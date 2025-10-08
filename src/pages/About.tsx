import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Leadership from "@/components/Leadership";
import { Award, Target, Eye, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality financial services",
    },
    {
      icon: Target,
      title: "Customer First",
      description: "Your financial goals are our top priority",
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Clear, honest communication in every interaction",
    },
    {
      icon: Users,
      title: "Community",
      description: "Deeply rooted in serving Rohtas district",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Sanjay Finance</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Empowering dreams through trusted financial solutions since 1990
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="mb-6">
                <h2 className="text-3xl font-bold">Our Story</h2>
              </div>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 1990 by Shri Sanjay Kumar Gupta, Sanjay Finance has been a cornerstone 
                  of financial empowerment in our community for over three decades. What started as a 
                  small office with a vision to make vehicle financing accessible to everyone has grown 
                  into a trusted name in the region.
                </p>
                <p>
                  Over the years, we've helped thousands of families and businesses achieve their dreams 
                  by providing tailored financial solutions. From farmers looking to purchase harvesters 
                  to entrepreneurs expanding their fleets, we've been there every step of the way.
                </p>
                <p>
                  Our journey has been marked by trust, transparency, and an unwavering commitment to 
                  our clients' success. With over 3,000 loans approved and 2,500 happy customers, we're 
                  proud to offer comprehensive financial and insurance services, always putting our clients' needs first.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="border-2 hover-glow">
              <CardContent className="pt-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide accessible, transparent, and reliable financial services that empower individuals and businesses in Rohtas district to achieve their dreams and grow sustainably.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover-glow">
              <CardContent className="pt-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-gold flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted and preferred financial partner in Bihar, known for our customer-centric approach, innovative solutions, and unwavering commitment to community development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core <span className="text-gradient">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover-lift hover-glow transition-all">
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <Leadership />

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Competitive Rates",
                  description: "We offer the most competitive interest rates in the market",
                },
                {
                  title: "Quick Approval",
                  description: "Fast processing and approval within 24-48 hours",
                },
                {
                  title: "Expert Guidance",
                  description: "Our experienced team provides personalized financial advice",
                },
                {
                  title: "Trusted Service",
                  description: "Over 35 years of reliable service and customer satisfaction",
                },
              ].map((item, index) => (
                <Card key={index} className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                  <div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
