import { ArrowRight, Users, Briefcase, LogIn, UserPlus } from "lucide-react";
import heroBackground from "@/assets/hero-background-v2.jpg";
import talentConnectLogo from "@/assets/talentconnect-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Navigation */}
      <nav className="nav">
        <div className="flex items-center">
          <img 
            src={talentConnectLogo} 
            alt="TalentConnect Logo" 
            className="nav-logo z-10 filter-drop-shadow-sm" 
          />
        </div>
        <div className="nav-buttons">
          <button className="btn btn-ghost btn-sm">
            <LogIn className="mr-2 h-4 w-4" />
            Sign In
          </button>
          <button className="btn btn-hero btn-sm">
            <UserPlus className="mr-2 h-4 w-4" />
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative flex items-center" style={{minHeight: "calc(100vh - 80px)"}}>
        {/* Background Video with Overlay */}
        <div className="absolute inset-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            controls={false}
            preload="auto"
            className="w-full h-full object-cover opacity-40"
            poster={heroBackground}
            onLoadedData={(e) => {
              const video = e.target;
              video.play().catch(console.error);
            }}
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-businesspeople-working-in-a-modern-office-4609-large.mp4" type="video/mp4" />
            <source src="https://assets.mixkit.co/videos/preview/mixkit-businesspeople-working-in-a-modern-office-4609-large.webm" type="video/webm" />
            <img src={heroBackground} alt="Modern office with AI technology" className="w-full h-full object-cover opacity-40" />
          </video>
          <div className="absolute inset-0 bg-gradient-hero opacity-60" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl container section">
          <div className="grid lg-grid-cols-2 gap-12 items-center">
            <div className="text-center lg-text-left">
              <h1 className="hero-title text-white mb-6" style={{lineHeight: "1.1"}}>
                Experience the Future of
                <span className="block bg-clip-text text-transparent bg-gradient-to-r">
                  AI-Powered Recruitment
                </span>
              </h1>
              <p className="large-text text-white-90 mb-8 max-w-xl">
                Revolutionary AI-driven platform that intelligently matches candidates with opportunities using advanced machine learning, predictive analytics, and automated screening processes.
              </p>
              
              {/* AI Features Showcase */}
              <div className="mb-8 grid md-grid-cols-3 gap-4 small-text">
                <div className="flex items-center text-white-90">
                  <div className="w-2 h-2 bg-accent-rounded mr-2"></div>
                  Smart Resume Parsing
                </div>
                <div className="flex items-center text-white-90">
                  <div className="w-2 h-2 bg-accent-rounded mr-2"></div>
                  AI-Generated Matches
                </div>
                <div className="flex items-center text-white-90">
                  <div className="w-2 h-2 bg-accent-rounded mr-2"></div>
                  Predictive Analytics
                </div>
                <div className="flex items-center text-white-90">
                  <div className="w-2 h-2 bg-accent-rounded mr-2"></div>
                  Bias-Free Screening
                </div>
                <div className="flex items-center text-white-90">
                  <div className="w-2 h-2 bg-accent-rounded mr-2"></div>
                  Auto Interview Scheduling
                </div>
                <div className="flex items-center text-white-90">
                  <div className="w-2 h-2 bg-accent-rounded mr-2"></div>
                  Real-time Insights
                </div>
              </div>
              
              <div className="flex flex-col sm-flex-row gap-4 justify-center lg-justify-start">
                <button className="btn btn-hero btn-lg group">
                  <Briefcase className="mr-2 h-5 w-5" />
                  Post a Job
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover-translate-x-1" />
                </button>
                <button className="btn btn-outline-hero btn-lg group">
                  <Users className="mr-2 h-5 w-5" />
                  Find Talent
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover-translate-x-1" />
                </button>
              </div>
              
              <div className="mt-12 grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="h2 text-white" style={{fontWeight: "bold"}}>50K+</div>
                  <div className="small-text text-white-80">Active Jobs</div>
                </div>
                <div>
                  <div className="h2 text-white" style={{fontWeight: "bold"}}>100K+</div>
                  <div className="small-text text-white-80">Candidates</div>
                </div>
                <div>
                  <div className="h2 text-white" style={{fontWeight: "bold"}}>5K+</div>
                  <div className="small-text text-white-80">Companies</div>
                </div>
              </div>
            </div>
            
            <div className="hidden lg-block">
              <div className="relative">
                <div className="bg-white-10 backdrop-blur-sm rounded-lg p-8 shadow-glow border-white-20">
                  <h3 className="h3 text-white mb-4" style={{fontWeight: "600"}}>Quick Apply</h3>
                  <div className="space-y-4">
                    <div className="bg-white-5 rounded p-3">
                      <div className="small-text text-white-70">Latest Position</div>
                      <div className="text-white" style={{fontWeight: "500"}}>Senior Frontend Developer</div>
                      <div className="small-text text-accent">TechCorp • $120k-150k</div>
                    </div>
                    <div className="bg-white-5 rounded p-3">
                      <div className="small-text text-white-70">Featured Role</div>
                      <div className="text-white" style={{fontWeight: "500"}}>Product Manager</div>
                      <div className="small-text text-accent">InnovateCo • $100k-130k</div>
                    </div>
                  </div>
                  <button className="btn btn-secondary w-full mt-4">
                    View All Jobs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;