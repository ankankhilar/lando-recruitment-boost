import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, Maximize } from "lucide-react";
import teamCollaboration from "@/assets/team-collaboration.jpg";
const ScrollingVideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoFeatures = [{
    title: "Real-Time Collaboration",
    description: "See how teams collaborate seamlessly during the hiring process",
    timestamp: "0:15"
  }, {
    title: "Candidate Experience",
    description: "Watch candidates navigate through our intuitive application process",
    timestamp: "0:45"
  }, {
    title: "Analytics Dashboard",
    description: "Explore comprehensive hiring analytics and performance metrics",
    timestamp: "1:20"
  }, {
    title: "Success Stories",
    description: "Hear from companies that transformed their recruitment",
    timestamp: "2:00"
  }];
  return <section className="py-section bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-h1 font-bold text-foreground mb-4">
            See Our Platform in Action
          </h2>
          <p className="text-large text-muted-foreground max-w-2xl mx-auto">
            Watch real recruitment scenarios and discover how our platform 
            streamlines every step of the hiring journey.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <div className="relative bg-black rounded-lg overflow-hidden shadow-large group">
              {/* Video Placeholder */}
              <div className="aspect-video relative">
                <img src={teamCollaboration} alt="Team collaboration video" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  {!isPlaying ? <Button variant="hero" size="lg" onClick={() => setIsPlaying(true)} className="rounded-full w-20 h-20 group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-8 w-8 ml-1" fill="currentColor" />
                    </Button> : <div className="text-white text-center">
                      <div className="animate-pulse">
                        <div className="w-2 h-2 bg-red-500 rounded-full mx-auto mb-2"></div>
                        <p className="text-sm">Playing Demo Video...</p>
                      </div>
                    </div>}
                </div>
              </div>
              
              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="sm" onClick={() => setIsPlaying(!isPlaying)} className="text-white hover:text-white hover:bg-white/20">
                      {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                    <span className="text-sm">2:45 / 4:12</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Volume2 className="h-4 w-4" />
                    <Maximize className="h-4 w-4" />
                  </div>
                </div>
                <div className="mt-2 bg-white/20 rounded-full h-1">
                  <div className="bg-primary h-1 rounded-full w-2/3 transition-all duration-300"></div>
                </div>
              </div>
            </div>
            
            {/* Video Description */}
            <div className="mt-6 p-6 bg-card rounded-lg shadow-soft">
              <h3 className="text-h3 font-semibold text-foreground mb-2">
                Complete Platform Walkthrough
              </h3>
              <p className="text-muted-foreground">
                This comprehensive demo showcases every aspect of our recruitment platform, 
                from posting jobs to successful placements. See how easy it is to find the 
                perfect match for your team.
              </p>
            </div>
          </div>
          
          {/* Video Chapters */}
          <div className="space-y-4">
            <h3 className="text-h3 font-semibold text-foreground mb-6">
              Video Chapters
            </h3>
            {videoFeatures.map((feature, index) => <div key={index} className="p-4 bg-card rounded-lg shadow-soft hover:shadow-medium transition-shadow duration-300 cursor-pointer group border hover:border-primary">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-small text-muted-foreground mt-1">
                      {feature.description}
                    </p>
                  </div>
                  <span className="text-small text-primary font-medium ml-4">
                    {feature.timestamp}
                  </span>
                </div>
              </div>)}
            
            <div className="pt-4">
              
            </div>
          </div>
        </div>
        
        {/* Additional Video Grid */}
        <div className="mt-16">
          <h3 className="text-h2 font-bold text-foreground text-center mb-8">
            More Success Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => <div key={i} className="relative group cursor-pointer">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <img src={teamCollaboration} alt={`Success story ${i}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="h-8 w-8 text-white" fill="currentColor" />
                  </div>
                </div>
                <div className="mt-3">
                  <h4 className="font-semibold text-foreground">
                    Success Story #{i}
                  </h4>
                  <p className="text-small text-muted-foreground">
                    How Company X found their perfect team
                  </p>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default ScrollingVideoSection;