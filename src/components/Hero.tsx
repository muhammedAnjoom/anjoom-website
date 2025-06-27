import { ArrowDown } from "lucide-react";


const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center relative">
        <div>
          <p className="text-emerald-400 text-lg mb-4" data-aos="fade-up" data-aos-delay="200">
            Hi, my name is
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4" data-aos="fade-up" data-aos-delay="400">
            Muhammed Anjoom
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-8" data-aos="fade-up" data-aos-delay="600">
            I build mobile apps with AI.
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed" data-aos="fade-up" data-aos-delay="800">
            I'm a passionate mobile app developer specializing in Flutter and AI-powered applications. 
            With over a year of experience, I create scalable, cross-platform solutions that deliver real-world impact.
          </p>
          <a
            href="#projects"
            className="inline-flex items-center border border-emerald-400 text-emerald-400 px-8 py-4 rounded text-lg hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 hover:transform hover:translate-y-[-2px]"
            data-aos="fade-up" 
            data-aos-delay="1000"
          >
            Check out my work!
          </a>
          <div className="flex justify-center mt-8 animate-bounce" data-aos="fade-up" data-aos-delay="1200">
            <ArrowDown className="text-slate-400" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
