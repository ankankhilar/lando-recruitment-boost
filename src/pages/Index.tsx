import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProcessGallery from "@/components/ProcessGallery";
import VideoShowcase from "@/components/VideoShowcase";
import ScrollingVideoSection from "@/components/ScrollingVideoSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <ProcessGallery />
      <VideoShowcase />
      <ScrollingVideoSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
