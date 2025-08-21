import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Briefcase, LogIn, UserPlus } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
const Hero = () => {
  return <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-20 flex justify-between items-center px-container py-6">
        <div className="text-xl font-bold text-white">
          TalentConnect
        </div>
        <div className="flex gap-3">
          <Button variant="ghost" size="sm" className="bg-slate-50 text-blue-700">
            <LogIn className="mr-2 h-4 w-4" />
            Sign In
          </Button>
          <Button variant="hero" size="sm">
            <UserPlus className="mr-2 h-4 w-4" />
            Sign Up
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative flex items-center min-h-[calc(100vh-80px)]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Professional team collaboration" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-container py-section">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-hero font-bold text-white mb-6 leading-tight">
              Connect Talent with
              <span className="block bg-gradient-to-r from-accent-light to-accent bg-clip-text text-transparent">
                Opportunity
              </span>
            </h1>
            <p className="text-large text-white/90 mb-8 max-w-xl">
              The leading recruitment platform that brings together exceptional candidates 
              and forward-thinking companies. Build your future today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group">
                <Briefcase className="mr-2 h-5 w-5" />
                Post a Job
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline-hero" size="lg" className="group">
                <Users className="mr-2 h-5 w-5" />
                Find Talent
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-h2 font-bold text-white">50K+</div>
                <div className="text-small text-white/80">Active Jobs</div>
              </div>
              <div>
                <div className="text-h2 font-bold text-white">100K+</div>
                <div className="text-small text-white/80">Candidates</div>
              </div>
              <div>
                <div className="text-h2 font-bold text-white">5K+</div>
                <div className="text-small text-white/80">Companies</div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-glow border border-white/20">
                <h3 className="text-h3 font-semibold text-white mb-4">Quick Apply</h3>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded p-3">
                    <div className="text-small text-white/70">Latest Position</div>
                    <div className="text-white font-medium">Senior Frontend Developer</div>
                    <div className="text-small text-accent-light">TechCorp • $120k-150k</div>
                  </div>
                  <div className="bg-white/5 rounded p-3">
                    <div className="text-small text-white/70">Featured Role</div>
                    <div className="text-white font-medium">Product Manager</div>
                    <div className="text-small text-accent-light">InnovateCo • $100k-130k</div>
                  </div>
                </div>
                <Button variant="secondary" className="w-full mt-4">
                  View All Jobs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>;
};
export default Hero;