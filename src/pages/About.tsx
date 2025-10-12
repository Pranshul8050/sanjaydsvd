import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Leadership from "@/components/Leadership";
import { Award, Target, Eye, Users } from "lucide-react";
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
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-gradient">Sanjay Finance Company</span> - Your Trusted Loan Partner
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Leading provider of personal loans, business loans, vehicle finance, and insurance solutions in Rohtas district, Bihar since 1992
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Our Story - 35+ Years of Financial Excellence</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Founded in 1992, Sanjay Finance Company has been a cornerstone of financial services in Rohtas district for over three decades. What began as a small office in Takiya Bazar, Sasaram, has grown into a trusted name synonymous with reliable motor finance and comprehensive insurance solutions.
              </p>
              <p>
                With 35+ years of hands-on experience, we've developed an unmatched understanding of our community's financial landscape. From farmers needing harvester financing with seasonal payment flexibility to truckers requiring quick commercial vehicle loans, we've supported every sector with tailored solutions and transparent dealings.
              </p>
              <p>
                Our success is built on trust, integrity, and results. Having facilitated over 3500+ loan approvals and served 2500+ satisfied customers, we take pride in enabling dreams—whether it's purchasing a first vehicle, expanding a transport fleet, or securing the cheapest insurance with guaranteed 100% claim settlement.
              </p>
              <p>
                At Sanjay Finance, we don't just offer financial services; we build lasting relationships rooted in reliability, transparency, and customer-first values. Your financial success is our mission.
              </p>
            </div>
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
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-5xl font-bold text-gold mb-2">24hrs</div>
                <p className="text-lg">Quick Approval Process</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-gold mb-2">35+</div>
                <p className="text-lg">Years of Experience</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-gold mb-2">3000+</div>
                <p className="text-lg">Satisfied Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
