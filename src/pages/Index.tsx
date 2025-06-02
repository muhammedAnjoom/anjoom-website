
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import CursorTracker from "@/components/CursorTracker";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 cursor-none">
      <CursorTracker />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
