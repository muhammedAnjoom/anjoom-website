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
          <div data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-3xl font-bold text-slate-100 mb-6">
              <span className="text-emerald-400 text-xl font-mono">01.</span> About Me
            </h2>
            <div className="text-slate-400 space-y-4 leading-relaxed">
              <p>
                Hi, I'm Muhammed Anjoom, a Flutter developer from Wayanad, Kerala. I enjoy building 
                mobile apps that are smooth, user-friendly, and helpful in everyday life.
              </p>
              <p>
                With over a year of experience, I've developed high-quality apps for both Android and iOS. 
                I focus on clean design, strong performance, and features that truly matter to users.
              </p>
              <p>
                I work with technologies like Firebase, REST APIs, and state management tools like Bloc, 
                GetX, and Provider. I'm passionate about using AI tools to create smarter apps and love 
                staying updated by exploring new tech stacks and frameworks.
              </p>
              <p>
                I'm also currently learning iOS development to deepen my expertise and offer more value 
                to the people I work with.
              </p>
              <p>
                If you're looking for the best mobile app developer in Kerala who blends creativity, 
                technical skill, and real-world problem-solving, I'd love to connect with you.
              </p>
              <p>
                For me, coding isn't just work—it's something I truly enjoy. I love learning, 
                experimenting, and building apps that make a difference.
              </p>
              <p>
                Here are some technologies I've been working with:
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-6" data-aos="fade-up" data-aos-delay="400">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-center text-slate-400">
                  <span className="text-emerald-400 mr-2">▹</span>
                  <span className="text-sm font-mono">{tech}</span>
                </div>
                
              ))}
            </div>
          </div>
          
          <div className="relative group" data-aos="zoom-in" data-aos-delay="300">
            <div className="relative z-10 rounded bg-emerald-400 transition-all duration-300 group-hover:translate-x-[-8px] group-hover:translate-y-[-8px]">
              <img
                src="/lovable-uploads/47caa5a7-878b-4e53-8204-7f9a77bb8d29.png"
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
