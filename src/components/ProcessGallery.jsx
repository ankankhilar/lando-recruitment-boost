import { ArrowRight } from "lucide-react";
import recruitmentProcess from "@/assets/recruitment-process.jpg";
import successStory from "@/assets/success-story.jpg";
import networking from "@/assets/networking.jpg";
import dashboard from "@/assets/dashboard.jpg";
import BulkResumeUpload from "./BulkResumeUpload";

const ProcessGallery = () => {
  const steps = [
    {
      step: "01",
      title: "Post Your Job",
      description: "Create detailed job postings with our intuitive interface. Define requirements, benefits, and company culture.",
      image: dashboard,
      color: "bg-gradient-primary",
      component: null
    },
    {
      step: "02", 
      title: "Smart Matching",
      description: "Our AI algorithm analyzes candidates and matches them based on skills, experience, and cultural fit.",
      image: recruitmentProcess,
      color: "bg-secondary",
      component: null
    },
    {
      step: "03",
      title: "Bulk Resume Upload",
      description: "Upload multiple resumes at once with our drag-and-drop interface. Process hundreds of applications efficiently.",
      image: networking,
      color: "bg-accent",
      component: <BulkResumeUpload />
    }
  ];

  return (
    <section className="section bg-muted">
      <div className="max-w-7xl container">
        <div className="text-center mb-16">
          <h2 className="h1 mb-4" style={{fontWeight: "bold"}}>
            How It Works
          </h2>
          <p className="large-text text-muted max-w-2xl" style={{margin: "0 auto"}}>
            Our streamlined process makes recruitment efficient and effective. 
            Follow these simple steps to find your perfect match.
          </p>
        </div>
        
        <div style={{marginBottom: "3rem"}}>
          {steps.map((step, index) => (
            <div key={index} className={`grid lg-grid-cols-2 gap-8 items-center ${index !== steps.length - 1 ? 'mb-12' : ''}`} style={{marginBottom: index !== steps.length - 1 ? "3rem" : "0"}}>
              {/* Image */}
              <div style={{order: index % 2 === 1 ? 2 : 1}}>
                <div className="relative overflow-hidden rounded-lg shadow-medium transition-all group">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full object-cover transition-transform group"
                    style={{height: "400px"}}
                  />
                  <div className={`absolute inset-0 ${step.color} transition-all`} style={{opacity: "0.2"}}></div>
                  <div className="absolute" style={{top: "1rem", left: "1rem"}}>
                    <div className={`w-12 h-12 ${step.color} rounded-lg flex items-center justify-center text-white shadow-medium`} style={{fontWeight: "bold", fontSize: "1.125rem"}}>
                      {step.step}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div style={{order: index % 2 === 1 ? 1 : 2}}>
                <div className="card bg-white shadow-soft h-full">
                  <div className="p-8">
                    <div className={`inline-block px-3 py-1 ${step.color} text-white small-text rounded-lg mb-4`} style={{fontWeight: "500"}}>
                      Step {step.step}
                    </div>
                    <h3 className="h2 mb-4" style={{fontWeight: "bold"}}>
                      {step.title}
                    </h3>
                     <p className="text-muted mb-6" style={{lineHeight: "1.6"}}>
                       {step.description}
                     </p>
                     {step.component ? (
                       <div className="mb-6">
                         {step.component}
                       </div>
                     ) : (
                       <button className="btn btn-outline group">
                         Learn More
                         <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover-translate-x-1" />
                       </button>
                     )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="card bg-gradient-primary text-white shadow-large">
            <div className="p-12">
              <h3 className="h2 mb-4" style={{fontWeight: "bold"}}>
                Ready to Transform Your Hiring Process?
              </h3>
              <p className="large-text text-white-90 mb-8 max-w-2xl" style={{margin: "0 auto 2rem auto"}}>
                Join thousands of companies that have revolutionized their recruitment 
                with our platform. Start your journey today.
              </p>
              <div className="flex flex-col sm-flex-row gap-4 justify-center">
                <button className="btn btn-hero btn-lg">
                  Get Started Free
                </button>
                <button className="btn btn-outline-hero btn-lg">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessGallery;