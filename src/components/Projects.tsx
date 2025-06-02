
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Spotify Profile",
      description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      technologies: ["React", "Styled Components", "Node.js", "Spotify API", "Express"],
      github: "#",
      external: "#",
      image: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=600&h=400&fit=crop"
    },
    {
      title: "Halcyon Theme",
      description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
      technologies: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
      github: "#",
      external: "#",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop"
    },
    {
      title: "Integrating Algolia Search",
      description: "Building a custom search component with Algolia's instantsearch.js and React. The search is deployed to Netlify and includes features like filtering, pagination, and more.",
      technologies: ["Algolia", "React", "Gatsby", "Node.js"],
      github: "#",
      external: "#",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop"
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
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-12 gap-4 items-center ${
              index % 2 === 1 ? 'lg:direction-rtl' : ''
            }`}>
              {/* Project Image */}
              <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:col-start-6' : 'lg:col-start-1'}`}>
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
              <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:col-start-1 lg:text-left' : 'lg:col-start-8 lg:text-right'} relative z-10`}>
                <p className="text-emerald-400 text-sm font-mono mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-slate-100 mb-4">{project.title}</h3>
                
                <div className="bg-slate-800 p-6 rounded shadow-lg mb-4">
                  <p className="text-slate-400 leading-relaxed">{project.description}</p>
                </div>
                
                <div className={`flex flex-wrap gap-2 mb-6 ${index % 2 === 1 ? 'lg:justify-start' : 'lg:justify-end'}`}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-sm font-mono text-slate-400">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className={`flex space-x-4 ${index % 2 === 1 ? 'lg:justify-start' : 'lg:justify-end'}`}>
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
