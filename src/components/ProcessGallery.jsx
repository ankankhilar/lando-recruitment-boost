import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import recruitmentProcess from "@/assets/recruitment-process.jpg";
import successStory from "@/assets/success-story.jpg";
import networking from "@/assets/networking.jpg";
import dashboard from "@/assets/dashboard-new.jpg";
import BulkResumeUpload from "./BulkResumeUpload";

const ProcessGallery = () => {
  const steps = [
    {
      step: "01",
      title: "Post Your Job",
      description: "Create detailed job postings with our intuitive interface. Define requirements, benefits, and company culture.",
      image: dashboard,
      color: "from-primary to-primary-light",
      component: null
    },
    {
      step: "02", 
      title: "Smart Matching",
      description: "Our AI algorithm analyzes candidates and matches them based on skills, experience, and cultural fit.",
      image: recruitmentProcess,
      color: "from-secondary to-secondary-light",
      component: null
    },
    {
      step: "03",
      title: "Bulk Resume Upload",
      description: "Upload multiple resumes at once with our drag-and-drop interface. Process hundreds of applications efficiently.",
      image: networking,
      color: "from-accent to-accent-light",
      component: <BulkResumeUpload />
    }
  ];

  return (
    <section className="py-section bg-muted">
      <div className="max-w-7xl mx-auto px-container">
        <div className="text-center mb-16">
          <h2 className="text-h1 font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-large text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process makes recruitment efficient and effective. 
            Follow these simple steps to find your perfect match.
          </p>
        </div>
        
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group overflow-hidden rounded-lg shadow-medium hover:shadow-large transition-shadow duration-300">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-medium`}>
                      {step.step}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <Card className="bg-card border-0 shadow-soft h-full">
                  <CardContent className="p-8">
                    <div className={`inline-block px-3 py-1 bg-gradient-to-r ${step.color} text-white text-small font-medium rounded-full mb-4`}>
                      Step {step.step}
                    </div>
                    <h3 className="text-h2 font-bold text-foreground mb-4">
                      {step.title}
                    </h3>
                     <p className="text-muted-foreground mb-6 leading-relaxed">
                       {step.description}
                     </p>
                     {step.component ? (
                       <div className="mb-6">
                         {step.component}
                       </div>
                     ) : (
                       <Button variant="outline" className="group">
                         Learn More
                         <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                       </Button>
                     )}
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-primary text-white border-0 shadow-large">
            <CardContent className="p-12">
              <h3 className="text-h2 font-bold mb-4">
                Ready to Transform Your Hiring Process?
              </h3>
              <p className="text-large text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of companies that have revolutionized their recruitment 
                with our platform. Start your journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Get Started Free
                </Button>
                <Button variant="outline-hero" size="lg">
                  Schedule Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProcessGallery;