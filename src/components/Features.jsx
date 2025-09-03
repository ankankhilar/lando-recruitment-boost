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
    <section className="section bg-muted">
      <div className="max-w-7xl container">
        <div className="text-center mb-16">
          <h2 className="h1 mb-4" style={{fontWeight: "bold"}}>
            Why Choose Our Platform?
          </h2>
          <p className="large-text text-muted max-w-2xl" style={{margin: "0 auto"}}>
            We combine cutting-edge technology with human expertise to create 
            the most effective recruitment experience.
          </p>
        </div>
        
        <div className="grid md-grid-cols-2 lg-grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card bg-gradient-card shadow-soft transition-all group" style={{border: "none"}}>
              <div className="card-content">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 transition-transform group-hover-scale-110">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="h3 mb-2" style={{fontWeight: "600"}}>
                    {feature.title}
                  </h3>
                  <p className="text-muted">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;