
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
                Hello! I'm Muhammed Anjoom, a passionate mobile app developer with a strong focus on 
                Flutter and a growing interest in AI-powered applications. With over a year of hands-on 
                experience, I specialize in building scalable, cross-platform mobile solutions.
              </p>
              <p>
                💡 I've developed and launched multiple production-grade apps—from AI-powered astrology 
                and virtual relationship advisors to entrepreneur networking platforms. I enjoy transforming 
                ideas into intuitive, high-performance apps with modern UI/UX and seamless API integration.
              </p>
              <p>
                🤖 Lately, I've been diving deep into AI and integrating intelligent features into mobile 
                experiences using tools like OpenAI and Gemini AI. I believe the future of mobile lies in 
                blending intuitive design with powerful intelligence—and that's what I strive to create.
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
