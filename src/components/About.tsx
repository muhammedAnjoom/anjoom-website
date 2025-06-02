
const About = () => {
  const technologies = [
    "Flutter",
    "Dart",
    "Firebase",
    "OpenAI API",
    "Gemini AI",
    "Stripe",
    "REST APIs",
    "UI/UX Design",
    "Bloc/GetX/Provider",
    "State Management"
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-100 mb-6">
              <span className="text-emerald-400 text-xl font-mono">01.</span> About Me
            </h2>
            <div className="text-slate-400 space-y-4 leading-relaxed">
              <p>
                I'm Muhammed Anjoom, a Flutter developer from Wayanad with a passion for crafting 
                meaningful mobile experiences that blend design, technology, and AI.
              </p>
              <p>
                With over a year of experience, I've built and launched a variety of Android and iOS 
                applications—from AI-powered astrology and dating apps to business networking platforms 
                and community-driven tools. My focus lies in delivering high-performance, scalable apps 
                with beautiful UI/UX and real-time features using technologies like Firebase, RESTful APIs, 
                and advanced state management (Bloc, GetX, Provider).
              </p>
              <p>
                I love exploring the intersection of mobile development and AI. Some of my most exciting 
                work includes apps like CosmicSpirit (an AI-based personal astrology guide), MadLove 
                (a dating app with a virtual relationship coach), and Genezez (a networking space for 
                entrepreneurs). These projects have allowed me to combine creativity with technical 
                expertise—and make apps that people genuinely love.
              </p>
              <p>
                Whether I'm integrating a complex payment gateway, designing an intuitive interface, or 
                experimenting with OpenAI and Gemini AI, I always build with care, curiosity, and a focus 
                on real-world impact.
              </p>
              <p>
                Here are some technologies I've been working with:
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-6">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-center text-slate-400">
                  <span className="text-emerald-400 mr-2">▹</span>
                  <span className="text-sm font-mono">{tech}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group">
            <div className="relative z-10 rounded bg-emerald-400 transition-all duration-300 group-hover:translate-x-[-8px] group-hover:translate-y-[-8px]">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="Muhammed Anjoom"
                className="rounded w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="absolute top-4 left-4 w-full h-full border-2 border-emerald-400 rounded z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
