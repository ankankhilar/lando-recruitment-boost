import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "HR Director",
      company: "TechFlow Inc.",
      image: testimonial1,
      content: "This platform transformed our hiring process. We found exceptional candidates 50% faster than traditional methods. The quality of matches is outstanding.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Senior Developer",
      company: "InnovateCorp",
      image: testimonial2,
      content: "Found my dream job within two weeks! The personalized job recommendations were spot-on. Best recruitment platform I've ever used.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "StartupXYZ",
      content: "The verification process gave me confidence in the platform. Every interaction was professional and the support team was incredibly helpful.",
      rating: 5
    }
  ];

  return (
    <section className="py-section bg-background">
      <div className="max-w-7xl mx-auto px-container">
        <div className="text-center mb-16">
          <h2 className="text-h1 font-bold text-foreground mb-4">
            Trusted by Professionals Worldwide
          </h2>
          <p className="text-large text-muted-foreground max-w-2xl mx-auto">
            See what our community of professionals and companies have to say 
            about their experience with our platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border shadow-soft hover:shadow-medium transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  {testimonial.image && (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                  )}
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-small text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
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