import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Truck Owner, Sasaram",
      content: "Sanjay Finance helped me get my second truck within 48 hours. The process was smooth, and their team understood my business needs perfectly.",
      contentHindi: "संजय फाइनेंस ने मुझे 48 घंटे में मेरा दूसरा ट्रक दिलाया। प्रक्रिया सहज थी और उनकी टीम ने मेरी व्यावसायिक जरूरतों को पूरी तरह समझा।",
      rating: 5,
      avatar: "RK",
    },
    {
      name: "Priya Sharma",
      role: "Farmer, Rohtas",
      content: "The harvester loan came with flexible payment terms that match my crop cycles. Very understanding of farmer's challenges. Highly recommended!",
      contentHindi: "हार्वेस्टर लोन लचीली भुगतान शर्तों के साथ आया जो मेरी फसल चक्र से मेल खाता है। किसान की चुनौतियों को बहुत अच्छे से समझा। अत्यधिक अनुशंसित!",
      rating: 5,
      avatar: "PS",
    },
    {
      name: "Amit Singh",
      role: "Small Business Owner",
      content: "Got my car loan approved in record time with minimal documentation. The insurance bundling saved me a lot of hassle. Great local service!",
      contentHindi: "न्यूनतम दस्तावेज़ीकरण के साथ रिकॉर्ड समय में मेरा कार लोन मंजूर हो गया। बीमा बंडलिंग ने मुझे बहुत परेशानी से बचाया। बेहतरीन स्थानीय सेवा!",
      rating: 5,
      avatar: "AS",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from real people in the Rohtas community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden hover-lift hover-glow transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-20 h-20 text-primary" />
              </div>

              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>

                <div className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm italic border-t pt-3">
                    "{testimonial.contentHindi}"
                  </p>
                </div>

                <div className="flex items-center space-x-3 mt-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-semibold shadow-md">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
