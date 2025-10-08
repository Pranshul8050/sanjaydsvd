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
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-gold/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6 animate-fade-in">
              <span className="text-sm font-semibold text-primary">Trusted Since 1990 • 35+ Years of Excellence</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
              About <span className="text-gradient">Sanjay Finance</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
              Your Partner in Financial Progress — Empowering Rohtas District with Motor Finance & Insurance Solutions
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <div className="inline-block px-4 py-1 bg-secondary/10 rounded-full">
                  <span className="text-sm font-semibold text-secondary">Our Journey</span>
                </div>
                <h2 className="text-4xl font-bold text-foreground">35+ Years of Trust & Excellence</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    Since <strong className="text-foreground">1990</strong>, Sanjay Finance Company has been the backbone of financial empowerment in Rohtas district. What started as a humble office in Takiya Bazar, Sasaram has transformed into a trusted financial institution serving thousands of families and businesses.
                  </p>
                  <p>
                    We deeply understand our community's unique needs — from farmers requiring harvester financing with flexible seasonal payments to truckers needing swift commercial vehicle loans. Our 35+ years of local expertise and commitment to personalized service make us stand apart.
                  </p>
                  <p>
                    With over <strong className="text-primary">3,000+ loans approved</strong> and <strong className="text-secondary">2,500+ happy customers</strong>, we've helped countless families buy their first vehicle, expand their fleet, and secure comprehensive insurance. Your success is our legacy.
                  </p>
                </div>
              </div>
              <div className="relative animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl" />
                <div className="relative bg-card p-8 rounded-2xl border-2 border-border shadow-xl space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Award className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-foreground">35+</p>
                      <p className="text-sm text-muted-foreground">Years of Service</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-gold flex items-center justify-center">
                      <Users className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-foreground">2,500+</p>
                      <p className="text-sm text-muted-foreground">Happy Customers</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                      <TrendingUp className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-foreground">3,000+</p>
                      <p className="text-sm text-muted-foreground">Loans Approved</p>
                    </div>
                  </div>
                </div>
              </div>
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
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">Why Choose Sanjay Finance?</h2>
            <p className="text-lg md:text-xl mb-12 text-primary-foreground/90 animate-fade-in" style={{ animationDelay: '100ms' }}>
              The numbers speak for themselves — but our commitment speaks louder
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="animate-scale-in" style={{ animationDelay: '200ms' }}>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all hover-lift">
                  <div className="text-6xl font-bold text-gold mb-3">24hrs</div>
                  <p className="text-xl font-semibold">Quick Approval</p>
                  <p className="text-sm text-primary-foreground/80 mt-2">Fast processing, faster results</p>
                </div>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: '300ms' }}>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all hover-lift">
                  <div className="text-6xl font-bold text-gold mb-3">35+</div>
                  <p className="text-xl font-semibold">Years of Experience</p>
                  <p className="text-sm text-primary-foreground/80 mt-2">Trusted expertise since 1990</p>
                </div>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: '400ms' }}>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all hover-lift">
                  <div className="text-6xl font-bold text-gold mb-3">2,500+</div>
                  <p className="text-xl font-semibold">Happy Customers</p>
                  <p className="text-sm text-primary-foreground/80 mt-2">Building relationships, not transactions</p>
                </div>
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
