import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-container py-section">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-h3 font-bold mb-4">TalentConnect</h3>
            <p className="text-primary-foreground/80 mb-6">
              Connecting exceptional talent with innovative companies. 
              Building the future of work, one connection at a time.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* For Job Seekers */}
          <div>
            <h4 className="font-semibold mb-4">For Job Seekers</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Browse Jobs</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Career Advice</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Resume Builder</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Salary Guide</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Job Alerts</a></li>
            </ul>
          </div>
          
          {/* For Employers */}
          <div>
            <h4 className="font-semibold mb-4">For Employers</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Post Jobs</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Search Candidates</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Pricing Plans</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Hiring Resources</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Company Branding</a></li>
            </ul>
          </div>
          
          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Stay Connected</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-primary-foreground/80">hello@talentconnect.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-primary-foreground/80">San Francisco, CA</span>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-2">Newsletter</h5>
              <div className="flex gap-2">
                <Input 
                  placeholder="Your email" 
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button variant="secondary" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/80 text-small">
              © 2024 TalentConnect. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-primary-foreground/80 hover:text-accent text-small transition-colors">Privacy Policy</a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent text-small transition-colors">Terms of Service</a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent text-small transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;