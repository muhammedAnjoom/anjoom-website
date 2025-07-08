import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import CursorTracker from "@/components/CursorTracker";
import Footer from "@/components/Footer";

const Index = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Initialize AOS with only top and bottom animations and mirror enabled
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false, // Allow animations to repeat
      mirror: true, // Enable reverse animations
      offset: 100,
    });

    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                           window.innerWidth <= 768;
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className={`min-h-screen bg-slate-900 text-slate-300 ${!isMobile ? 'cursor-none' : ''} relative overflow-hidden`}>
      {/* Blurred background effect */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-slate-800/60 to-emerald-900/30 blur-2xl scale-110" />
      </div>
      <CursorTracker />
      <Navigation />
      <main>
        <Hero />
        <About />
        {/* <Projects /> */}
        <Contact />
      </main>
      {/* <div className="w-full bg-red-300 p-4"> */}
      <Footer />
      {/* </div> */}
 
    </div>
  );
};

export default Index;
