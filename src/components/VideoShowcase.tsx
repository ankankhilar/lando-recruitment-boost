import { Button } from "@/components/ui/button";
import { Play, CheckCircle } from "lucide-react";
import videoInterviewImage from "@/assets/video-interview.jpg";

const VideoShowcase = () => {
  const stats = [
    { number: "95%", label: "Success Rate" },
    { number: "48h", label: "Average Time to Match" },
    { number: "85%", label: "Candidate Satisfaction" },
    { number: "200+", label: "Partner Companies" }
  ];

  return (
    <section className="py-section bg-gradient-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-y-12"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Content */}
          <div className="order-2 lg:order-1">
            <div className="relative group cursor-pointer">
              <img 
                src={videoInterviewImage} 
                alt="Professional conducting video interview"
                className="w-full rounded-lg shadow-large group-hover:shadow-glow transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center group-hover:bg-black/20 transition-colors duration-300">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/50 backdrop-blur-sm rounded p-3">
                  <p className="text-white text-sm font-medium">
                    See How Our Platform Transforms Hiring
                  </p>
                  <p className="text-white/80 text-xs">
                    Watch our 2-minute demo video
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-h1 font-bold mb-6">
              Experience the Future of 
              <span className="block text-accent-light">Recruitment</span>
            </h2>
            <p className="text-large text-white/90 mb-8">
              Our innovative platform streamlines the entire hiring process, 
              from candidate discovery to final placement. See real success 
              stories and learn how we're revolutionizing recruitment.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent-light mr-3" />
                <span>AI-powered candidate matching</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent-light mr-3" />
                <span>Streamlined interview scheduling</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent-light mr-3" />
                <span>Real-time collaboration tools</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent-light mr-3" />
                <span>Comprehensive analytics dashboard</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent-light mr-3" />
                <span>Automated resume screening & parsing</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent-light mr-3" />
                <span>Bias-free candidate evaluation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent-light mr-3" />
                <span>Multi-channel job posting integration</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent-light mr-3" />
                <span>Customizable hiring workflow automation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent-light mr-3" />
                <span>Advanced talent pipeline management</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent-light mr-3" />
                <span>Integrated background check services</span>
              </div>
            </div>
            
            <Button variant="hero" size="lg" className="mb-8">
              Watch Full Demo
            </Button>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-h2 font-bold text-accent-light">{stat.number}</div>
                  <div className="text-small text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;