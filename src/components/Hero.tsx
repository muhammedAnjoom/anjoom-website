
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <p className="text-emerald-400 text-lg mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Hi, my name is
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Muhammed Anjoom
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            I build mobile apps with AI.
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: "0.8s" }}>
            I'm a passionate mobile app developer specializing in Flutter and AI-powered applications. 
            With over a year of experience, I create scalable, cross-platform solutions that deliver real-world impact.
          </p>
          <a
            href="#projects"
            className="inline-flex items-center border border-emerald-400 text-emerald-400 px-8 py-4 rounded text-lg hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 hover:transform hover:translate-y-[-2px] animate-fade-in"
            style={{ animationDelay: "1s" }}
          >
            Check out my work!
          </a>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-slate-400" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
