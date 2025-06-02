
const About = () => {
  const technologies = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "Next.js",
    "Tailwind CSS",
    "PostgreSQL",
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
                Hello! I'm Your Name, and I enjoy creating things that live on the internet. 
                My interest in web development started back in 2018 when I decided to try 
                editing custom themes — turns out hacking together HTML & CSS taught me a lot about web development!
              </p>
              <p>
                Fast-forward to today, and I've had the privilege of working at an advertising agency, 
                a start-up, a huge corporation, and a student-led design studio. My main focus these days 
                is building accessible, inclusive products and digital experiences for a variety of clients.
              </p>
              <p>
                Here are a few technologies I've been working with recently:
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
                alt="Profile"
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
