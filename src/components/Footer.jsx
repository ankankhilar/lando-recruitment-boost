import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl container section">
        <div className="grid lg-grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="h3 mb-4" style={{fontWeight: "bold"}}>TalentConnect</h3>
            <p className="text-white-80 mb-6">
              Connecting exceptional talent with innovative companies. 
              Building the future of work, one connection at a time.
            </p>
            <div className="flex gap-4">
              <button className="btn-ghost text-white">
                <Linkedin className="h-5 w-5" />
              </button>
              <button className="btn-ghost text-white">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="btn-ghost text-white">
                <Facebook className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {/* For Job Seekers */}
          <div>
            <h4 className="mb-4" style={{fontWeight: "600"}}>For Job Seekers</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white-80 transition-all" style={{textDecoration: "none"}}>Browse Jobs</a></li>
              <li><a href="#" className="text-white-80 transition-all" style={{textDecoration: "none"}}>Career Advice</a></li>
              <li><a href="#" className="text-white-80 transition-all" style={{textDecoration: "none"}}>Resume Builder</a></li>
              <li><a href="#" className="text-white-80 transition-all" style={{textDecoration: "none"}}>Salary Guide</a></li>
              <li><a href="#" className="text-white-80 transition-all" style={{textDecoration: "none"}}>Job Alerts</a></li>
            </ul>
          </div>
          
          {/* For Employers */}
          <div>
            <h4 className="mb-4" style={{fontWeight: "600"}}>For Employers</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white-80 transition-all" style={{textDecoration: "none"}}>Post Jobs</a></li>
              <li><a href="#" className="text-white-80 transition-all" style={{textDecoration: "none"}}>Search Candidates</a></li>
              <li><a href="#" className="text-white-80 transition-all" style={{textDecoration: "none"}}>Pricing Plans</a></li>
              <li><a href="#" className="text-white-80 transition-all" style={{textDecoration: "none"}}>Hiring Resources</a></li>
              <li><a href="#" className="text-white-80 transition-all" style={{textDecoration: "none"}}>Company Branding</a></li>
            </ul>
          </div>
          
          {/* Contact & Newsletter */}
          <div>
            <h4 className="mb-4" style={{fontWeight: "600"}}>Stay Connected</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-white-80">hello@talentconnect.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-white-80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-white-80">San Francisco, CA</span>
              </div>
            </div>
            
            <div>
              <h5 className="mb-2" style={{fontWeight: "600"}}>Newsletter</h5>
              <div className="flex gap-2">
                <input 
                  type="email"
                  placeholder="Your email" 
                  className="flex-1 p-2 rounded bg-white-10 border border-white-20 text-white placeholder-white-60"
                  style={{backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)"}}
                />
                <button className="btn btn-secondary btn-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-8" style={{borderColor: "rgba(255,255,255,0.2)"}}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white-80 small-text">
              © 2024 TalentConnect. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-white-80 small-text transition-all" style={{textDecoration: "none"}}>Privacy Policy</a>
              <a href="#" className="text-white-80 small-text transition-all" style={{textDecoration: "none"}}>Terms of Service</a>
              <a href="#" className="text-white-80 small-text transition-all" style={{textDecoration: "none"}}>Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;