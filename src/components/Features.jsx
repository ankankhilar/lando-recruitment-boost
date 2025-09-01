import { Card, CardContent } from "@/components/ui/card";
import { Search, Target, Users, BarChart3, Shield, Clock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Search,
      title: "Smart Matching",
      description: "AI-powered algorithm matches candidates with perfect job opportunities based on skills, experience, and preferences."
    },
    {
      icon: Target,
      title: "Precision Hiring",
      description: "Advanced filtering and screening tools help employers find exactly the right talent for their specific needs."
    },
    {
      icon: Users,
      title: "Global Network",
      description: "Access to a worldwide network of professionals and companies across all industries and experience levels."
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive insights and reporting to track hiring performance and optimize recruitment strategies."
    },
    {
      icon: Shield,
      title: "Verified Profiles",
      description: "All profiles are thoroughly verified to ensure authenticity and professional credibility."
    },
    {
      icon: Clock,
      title: "Fast Results",
      description: "Streamlined process delivers quality matches quickly, reducing time-to-hire significantly."
    }
  ];

  return (
    <section className="py-section bg-muted">
      <div className="max-w-7xl mx-auto px-container">
        <div className="text-center mb-16">
          <h2 className="text-h1 font-bold text-foreground mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-large text-muted-foreground max-w-2xl mx-auto">
            We combine cutting-edge technology with human expertise to create 
            the most effective recruitment experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="mb-4 bg-neutral-50">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-h3 font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
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

export default Features;