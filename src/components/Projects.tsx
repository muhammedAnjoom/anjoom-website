import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "CosmicSpirit: Your Personal Astrology Guide",
      description: "Unlock the mysteries of the stars with CosmicSpirit, the ultimate astrology app designed to provide accurate and insightful astrological readings. Features daily horoscopes, birth chart analysis, personalized predictions, daily affirmations, personal journal, and notifications for important astrological events.",
      technologies: ["Flutter", "OpenAI API", "Firebase", "Dart", "Machine Learning"],
      github: "#",
      external: "https://play.google.com/store/apps/details?id=com.wecodelife.cosmicspirit",
      image: "/lovable-uploads/6a9809ff-ca03-4f54-96fb-3533a03ae1fe.png"
    },
    {
      title: "Virtual Relationship Advisor",
      description: "A mobile app offering AI-driven relationship advice and guidance. Features real-time chat with AI counselors, personalized recommendations, and progress tracking.",
      technologies: ["Flutter", "Gemini AI", "Firebase", "Stripe", "Push Notifications"],
      github: "#",
      external: "#",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop"
    },
    {
      title: "Entrepreneur Network Platform",
      description: "A networking platform connecting entrepreneurs and investors. Features user profiles, matchmaking algorithms, in-app messaging, and event management with payment integration.",
      technologies: ["Flutter", "Firebase", "Stripe", "Cloud Functions", "Real-time Database"],
      github: "#",
      external: "#",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-100 mb-12 text-center">
          <span className="text-emerald-400 text-xl font-mono">02.</span> Some Things I've Built
        </h2>
        
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Project Image */}
              <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:col-start-6 lg:order-2' : 'lg:col-start-1 lg:order-1'}`}>
                <div className="relative group">
                  <div className="bg-emerald-400 rounded overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-emerald-400/20 hover:bg-transparent transition-all duration-300 rounded"></div>
                </div>
              </div>
              
              {/* Project Info */}
              <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:col-start-1 lg:order-1' : 'lg:col-start-8 lg:order-2'} relative z-10`}>
                <p className="text-emerald-400 text-sm font-mono mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-slate-100 mb-4">{project.title}</h3>
                
                <div className="bg-slate-800 p-6 rounded shadow-lg mb-4">
                  <p className="text-slate-400 leading-relaxed">{project.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-sm font-mono text-slate-400">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a href={project.github} className="text-slate-400 hover:text-emerald-400 transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.external} className="text-slate-400 hover:text-emerald-400 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
