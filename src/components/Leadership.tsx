import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Leadership = () => {
  const leaders = [
    {
      name: "Mr. Sanjay Kumar",
      role: "Director",
      message: "At Sanjay Finance, we believe in empowering our community through accessible and transparent financial services. Our commitment is to be more than just a finance company – we are your partners in progress, dedicated to understanding your unique needs and providing solutions that truly make a difference in your life and business.",
      messageHindi: "संजय फाइनेंस में, हम सुलभ और पारदर्शी वित्तीय सेवाओं के माध्यम से अपने समुदाय को सशक्त बनाने में विश्वास करते हैं। हमारी प्रतिबद्धता केवल एक वित्त कंपनी से अधिक होने की है - हम प्रगति में आपके साथी हैं, आपकी अनूठी जरूरतों को समझने और ऐसे समाधान प्रदान करने के लिए समर्पित हैं जो वास्तव में आपके जीवन और व्यवसाय में अंतर लाते हैं।",
      initials: "SK",
    },
    {
      name: "Mr. Rahul Sharma",
      role: "Manager",
      message: "With over 15 years of experience in the financial sector, our team at Sanjay Finance is dedicated to providing quick, reliable, and customer-centric services. We take pride in our local expertise and understanding of the agricultural and transport sectors, ensuring that every client receives personalized attention and the best possible financial solutions.",
      messageHindi: "वित्तीय क्षेत्र में 15 से अधिक वर्षों के अनुभव के साथ, संजय फाइनेंस की हमारी टीम त्वरित, विश्वसनीय और ग्राहक-केंद्रित सेवाएं प्रदान करने के लिए समर्पित है। हम अपनी स्थानीय विशेषज्ञता और कृषि तथा परिवहन क्षेत्रों की समझ पर गर्व करते हैं, यह सुनिश्चित करते हुए कि प्रत्येक ग्राहक को व्यक्तिगत ध्यान और सर्वोत्तम संभव वित्तीय समाधान मिले।",
      initials: "RS",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Message from Our <span className="text-gradient">Leadership</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Guided by vision, driven by commitment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {leaders.map((leader, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden hover-lift hover-glow transition-all"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-24 h-24 text-primary" />
              </div>

              <CardContent className="pt-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-2xl shadow-xl">
                    {leader.initials}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{leader.name}</h3>
                    <p className="text-lg text-primary font-semibold">{leader.role}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="relative pl-4 border-l-4 border-primary/30">
                    <p className="text-muted-foreground leading-relaxed italic">
                      "{leader.message}"
                    </p>
                  </div>
                  <div className="relative pl-4 border-l-4 border-secondary/30">
                    <p className="text-muted-foreground leading-relaxed italic text-sm">
                      "{leader.messageHindi}"
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground flex items-center justify-end">
                    <span className="font-semibold text-foreground mr-2">With warm regards,</span>
                    <span className="font-signature text-lg text-primary">{leader.name}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
