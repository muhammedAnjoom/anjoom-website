import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [{
    name: "About",
    href: "#about"
  }, {
    name: "Projects",
    href: "#projects"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  return <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-slate-900/95 backdrop-blur-sm shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <a href="#" className="text-2xl font-bold text-emerald-400 hover:text-emerald-300 transition-colors">Anjoom Coder</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => <a key={item.name} href={item.href} className="text-slate-300 hover:text-emerald-400 transition-colors duration-200 relative group">
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-200 group-hover:w-full"></span>
              </a>)}
            <a href="/resume.pdf" className="border border-emerald-400 text-emerald-400 px-4 py-2 rounded hover:bg-emerald-400 hover:text-slate-900 transition-all duration-200">
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-300 hover:text-emerald-400 transition-colors">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-sm border-t border-slate-700">
            <div className="px-4 py-6 space-y-4">
              {navItems.map(item => <a key={item.name} href={item.href} className="block text-slate-300 hover:text-emerald-400 transition-colors" onClick={() => setIsOpen(false)}>
                  {item.name}
                </a>)}
              <a href="/resume.pdf" className="block border border-emerald-400 text-emerald-400 px-4 py-2 rounded text-center hover:bg-emerald-400 hover:text-slate-900 transition-all duration-200">
                Resume
              </a>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;