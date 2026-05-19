import { useEffect, useState } from "react";
import {
  ExternalLink,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Smartphone,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { MagicCard } from "@/components/ui/magic-card";
import { PinContainer } from "@/components/ui/3d-pin";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[100] h-1 origin-left bg-gradient-to-r from-emerald-400 to-emerald-600"
      style={{ scaleX }}
    />
  );
};

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

const technologies = [
  "Flutter",
  "Dart",
  "Next.js",
  "Firebase",
  "REST APIs",
  "BLoC",
  "Provider",
  "GetX",
  "OpenAI",
  "Gemini AI",
  "NFC",
  "CI/CD",
];



const experience = [
  {
    period: "May 2025 - Present",
    title: "Senior Flutter Developer",
    company: "DataHex Digital Solutions",
    description:
      "Leading Flutter development in a 10-member team, mentoring 3–4 junior developers. Managing end-to-end project lifecycle including development, deployment, and production maintenance while building scalable cross-platform applications.",
    stack: ["Flutter", "BLoC", "Firebase", "REST APIs"],
  },
  {
    period: "May 2024 - May 2025",
    title: "Flutter Developer",
    company: "WeCodeLife Pvt Ltd",
    description:
      "Collaborated in a 12-member cross-functional team to design and develop Android and iOS applications. Implemented scalable state management, integrated RESTful APIs, and enhanced UI/UX for responsive cross-platform functionality.",
    stack: ["Flutter", "BLoC", "Firebase", "C++"],
  },
];

const projects = [
  {
    title: "EventHex",
    description:
      "A large-scale SaaS-based AI-powered event management platform with face recognition, real-time networking, ticket/badge printing, and cross-platform web support via Next.js.",
    stack: ["Flutter", "Next.js", "AI", "Firebase"],
    href: "https://wa.me/9526020931",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
  },
  {
    title: "ISQ Mind School",
    description:
      "A comprehensive ed-tech platform with mentor and student apps featuring video sessions, study materials, real-time chat, task submissions, and structured learning modules.",
    stack: ["Flutter", "Firebase", "Socket.io"],
    href: "https://wa.me/9526020931",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
  },
  {
    title: "Canteen Mate",
    description:
      "A Bahrain-based school meal management platform with NFC-enabled payments, POS integration, wallet operations, real-time activity tracking, and Mastercard gateway.",
    stack: ["Flutter", "NFC", "Mastercard", "POS"],
    href: "https://wa.me/9526020931",
    image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&h=400&fit=crop",
  },
  {
    title: "Genezez",
    description:
      "A cross-platform entrepreneur networking app with user profiles, dynamic circles, mentoring connections, in-app purchases, and real-time data synchronization.",
    stack: ["Flutter", "Firebase", "In-App Purchase"],
    href: "https://wa.me/9526020931",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/muhammedAnjoom",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammed-anjoom/",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/anjoom.pa/",
    icon: Instagram,
  },
  {
    name: "Email",
    href: "mailto:anjoompa42003@gmail.com",
    icon: Mail,
  },
];

const Index = () => {
  const [activeSection, setActiveSection] = useState(navItems[0].href);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);

    const activeObserver = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(`#${visibleSection.target.id}`);
        }
      },
      {
        rootMargin: "-20% 0px -35% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => activeObserver.observe(section));

    return () => activeObserver.disconnect();
  }, []);

  useEffect(() => {
    const revealItems = document.querySelectorAll("[data-reveal]");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.16,
      }
    );

    revealItems.forEach((item) => revealObserver.observe(item));

    return () => revealObserver.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-900 text-slate-200 antialiased">
      <ScrollProgress />
      <SmoothCursor />
      <div className="monochrome-fog" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1440px] flex-col lg:flex-row">
        <aside className="bg-slate-900/95 px-6 py-10 backdrop-blur-xl sm:px-10 lg:fixed lg:left-0 lg:top-0 lg:flex lg:h-screen lg:w-[25rem] lg:flex-col lg:justify-between lg:px-12 lg:py-20 xl:left-[calc((100vw-1440px)/2)]">
          <div>
            <div className="relative mb-10 h-40 w-40 overflow-hidden rounded-2xl bg-slate-800/60 shadow-[0_24px_70px_rgba(0,0,0,0.14)] ring-1 ring-slate-700/80 sm:h-44 sm:w-44">
              <img
                src="/lovable-uploads/47caa5a7-878b-4e53-8204-7f9a77bb8d29.png"
                alt="Muhammed Anjoom"
                className="h-full w-full object-cover object-top saturate-[0.85] transition duration-500 hover:scale-105 hover:saturate-100"
              />
            </div>

            <h1 className="max-w-xs font-['Space_Grotesk'] text-4xl font-bold leading-none tracking-tight text-slate-100 sm:text-5xl">
              <a href="/">
                Muhammed{" "}
                <AnimatedGradientText
                  speed={1.4}
                  colorFrom="#34d399"
                  colorTo="#6ee7b7"
                >
                  Anjoom
                </AnimatedGradientText>
              </a>
            </h1>
            <h2 className="mt-4 font-['Space_Grotesk'] text-lg font-medium tracking-tight text-slate-100 sm:text-xl">
              Senior Flutter Developer
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              Building scalable, AI-powered mobile apps with 2 years of
              production experience and 15+ projects shipped.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="rounded-xl border-0 bg-slate-800/45 px-3 py-1 font-['Space_Grotesk'] text-[11px] uppercase tracking-wider text-slate-400 shadow-[0_12px_35px_rgba(0,0,0,0.06)] backdrop-blur-xl"
              >
                Wayanad, Kerala
              </Badge>
              <Badge
                variant="outline"
                className="rounded-xl border-0 bg-slate-800/45 px-3 py-1 font-['Space_Grotesk'] text-[11px] uppercase tracking-wider text-slate-400 shadow-[0_12px_35px_rgba(0,0,0,0.06)] backdrop-blur-xl"
              >
                DataHex Digital Solutions
              </Badge>
            </div>

            <nav className="mt-12 hidden flex-col items-start gap-6 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex items-center py-1"
                  aria-current={activeSection === item.href ? "true" : undefined}
                >
                  <span
                    className={`mr-4 h-px transition-all ${activeSection === item.href
                      ? "w-16 bg-emerald-400"
                      : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-emerald-400"
                      }`}
                  />
                  <span
                    className={`font-['Space_Grotesk'] text-xs font-bold uppercase tracking-[0.15em] transition-colors ${activeSection === item.href
                      ? "text-emerald-400"
                      : "text-slate-400 group-hover:text-emerald-400"
                      }`}
                  >
                    {item.name}
                  </span>
                </a>
              ))}
            </nav>

            <div className="mt-10 flex flex-col gap-5 lg:hidden">
              <SocialLinks />
            </div>
          </div>

          <div className="hidden lg:block">
            <SocialLinks />
          </div>
        </aside>

        <main className="w-full lg:ml-[25rem]">
          <div className="ml-auto flex max-w-[780px] flex-col gap-16 px-6 py-16 sm:px-10 lg:gap-20 lg:px-8 lg:py-24">
            <section id="about" className="scroll-mt-12" data-reveal>
              <SectionLabel>About</SectionLabel>
              <div className="space-y-4 text-[15px] leading-7 text-slate-400">
                <p>
                  Hi, I&apos;m{" "}
                  <span className="font-semibold text-slate-100">
                    Muhammed Anjoom
                  </span>
                  , a versatile mobile app developer with 2 years of experience
                  specializing in Flutter. I build dynamic, high-performance
                  applications for both Android and iOS platforms.
                </p>
                <p>
                  With 15+ projects delivered, I bring expertise in state
                  management (BLoC, Provider, GetX), API integration, Firebase
                  services, and responsive UI/UX design. I focus on building
                  scalable, maintainable, and user-friendly applications.
                </p>
                <p>
                  Currently working as a Senior Flutter Developer at DataHex
                  Digital Solutions, leading development teams and shipping
                  production-grade apps with AI integrations, NFC payments, and
                  cross-platform web support via Next.js.
                </p>
              </div>



              <div className="mt-8 flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="rounded-xl border-0 bg-slate-800/45 px-3 py-1 font-['Space_Grotesk'] text-[11px] font-bold uppercase tracking-wider text-emerald-400 shadow-[0_10px_30px_rgba(0,0,0,0.05)] backdrop-blur-xl transition-colors hover:bg-emerald-400/10"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </section>

            <div className="relative flex items-center" data-reveal>
              <div className="flex-grow border-t border-slate-700/60"></div>
              <span className="mx-4 font-['Space_Grotesk'] text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500">Experience</span>
              <div className="flex-grow border-t border-slate-700/60"></div>
            </div>

            <section id="experience" className="scroll-mt-12" data-reveal>
              <SectionLabel>Experience</SectionLabel>
              {/* Mobile: simple cards */}
              <div className="flex flex-col gap-8 lg:hidden">
                {experience.map((item, index) => (
                  <div
                    key={`${item.period}-${item.title}-mobile`}
                    data-reveal
                    style={{ transitionDelay: `${index * 150}ms` }}
                    className="group rounded-2xl bg-slate-800/30 p-5"
                  >
                    <span className="inline-block rounded-full bg-slate-800 px-3 py-1 font-['Space_Grotesk'] text-[11px] font-medium uppercase tracking-[0.05em] text-slate-400 mb-3">
                      {item.period}
                    </span>
                    <h3 className="font-['Space_Grotesk'] text-lg font-semibold tracking-tight text-slate-100">
                      {item.title} · {item.company}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.stack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="rounded-xl bg-slate-700 px-3 py-1 font-['Space_Grotesk'] text-[11px] font-medium uppercase text-slate-400"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {/* Desktop: tracing beam */}
              <div className="hidden lg:block">
                <TracingBeam className="px-6">
                  <div className="flex flex-col gap-10">
                    {experience.map((item, index) => (
                      <div
                        key={`${item.period}-${item.title}`}
                        data-reveal
                        style={{ transitionDelay: `${index * 150}ms` }}
                        className="group"
                      >
                        <span className="inline-block rounded-full bg-slate-800 px-3 py-1 font-['Space_Grotesk'] text-[11px] font-medium uppercase tracking-[0.05em] text-slate-400 mb-3">
                          {item.period}
                        </span>
                        <h3 className="font-['Space_Grotesk'] text-lg font-semibold tracking-tight text-slate-100 transition-colors group-hover:text-emerald-400">
                          {item.title} · {item.company}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {item.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.stack.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="rounded-xl bg-slate-700 px-3 py-1 font-['Space_Grotesk'] text-[11px] font-medium uppercase text-slate-400"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </TracingBeam>
              </div>
            </section>

            <div className="relative flex items-center" data-reveal>
              <div className="flex-grow border-t border-slate-700/60"></div>
              <span className="mx-4 font-['Space_Grotesk'] text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500">Projects</span>
              <div className="flex-grow border-t border-slate-700/60"></div>
            </div>

            <section id="projects" className="scroll-mt-12" data-reveal>
              <SectionLabel>Projects</SectionLabel>
              {/* Mobile: simple cards */}
              <div className="flex flex-col gap-5 lg:hidden">
                {projects.map((project, index) => (
                  <a
                    key={`${project.title}-mobile`}
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-reveal
                    style={{ transitionDelay: `${index * 150}ms` }}
                    className="group block rounded-2xl bg-slate-800/30 overflow-hidden"
                  >
                    <div className="relative h-36 w-full overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-['Space_Grotesk'] text-base font-semibold text-slate-100 mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-400 line-clamp-2 mb-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="border-0 bg-transparent p-0 font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-wider text-emerald-400 hover:bg-transparent"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              {/* Desktop: 3D pin cards */}
              <div className="hidden lg:grid lg:grid-cols-2 lg:gap-x-4 lg:gap-y-12">
                {projects.map((project, index) => (
                  <div
                    key={project.title}
                    data-reveal
                    style={{ transitionDelay: `${index * 150}ms` }}
                    className="flex items-center justify-center"
                  >
                    <PinContainer
                      title={project.title}
                      href={project.href}
                    >
                      <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[18rem] h-[18rem]">
                        <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100 font-['Space_Grotesk']">
                          {project.title}
                        </h3>
                        <div className="text-sm !m-0 !p-0 font-normal">
                          <span className="text-slate-400 line-clamp-3">
                            {project.description}
                          </span>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="border-0 bg-transparent p-0 font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-wider text-emerald-400 hover:bg-transparent"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    </PinContainer>
                  </div>
                ))}
              </div>
            </section>

            <section
              id="contact"
              className="pt-8"
              data-reveal
            >
              <div className="rounded-2xl border border-slate-700/40 bg-slate-800/30 p-8 backdrop-blur-sm sm:p-10">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400 text-slate-900">
                  <Smartphone className="h-6 w-6" />
                </div>
                <h2 className="font-['Space_Grotesk'] text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">
                  Got a mobile app idea?
                </h2>
                <p className="mt-3 max-w-xl text-[15px] leading-7 text-slate-400">
                  I&apos;m available for Flutter projects, AI-powered apps, and
                  collaboration. Let&apos;s turn your idea into a clear build
                  plan.
                </p>
                <Button
                  asChild
                  className="mt-6 h-12 rounded-xl bg-emerald-400 px-6 font-['Space_Grotesk'] text-sm font-bold uppercase tracking-[0.12em] text-slate-900 shadow-[0_18px_45px_rgba(16,185,129,0.18)] hover:bg-emerald-300"
                >
                  <a href="https://wa.me/9526020931">
                    Say Hello
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </section>

            <footer className="border-t border-slate-700/40 pt-10 pb-6">
              <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-5">
                {/* Logo & Tagline */}
                <div className="col-span-2">
                  <h3 className="font-['Space_Grotesk'] text-lg font-bold text-slate-100">
                    Muhammed Anjoom
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-slate-400">
                    Senior Flutter Developer building scalable, AI-powered mobile apps from Kerala, India.
                  </p>
                </div>

                {/* Links */}
                <div>
                  <h4 className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
                    Navigation
                  </h4>
                  <ul className="space-y-2">
                    <li><a href="#about" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">About</a></li>
                    <li><a href="#experience" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">Experience</a></li>
                    <li><a href="#projects" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">Projects</a></li>
                    <li><a href="#contact" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">Contact</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
                    Socials
                  </h4>
                  <ul className="space-y-2">
                    <li><a href="https://github.com/muhammedAnjoom" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/muhammed-anjoom/" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">LinkedIn</a></li>
                    <li><a href="https://www.instagram.com/anjoom.pa/" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">Instagram</a></li>
                    <li><a href="https://wa.me/9526020931" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">WhatsApp</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
                    Contact
                  </h4>
                  <ul className="space-y-2">
                    <li><a href="mailto:anjoompa42003@gmail.com" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">Email</a></li>
                    <li><a href="tel:+919526020931" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">+91 9526020931</a></li>
                    <li><span className="text-sm text-slate-400">Wayanad, Kerala</span></li>
                  </ul>
                </div>
              </div>

              <div className="mt-10 border-t border-slate-800 pt-6">
                <p className="font-['Space_Grotesk'] text-xs text-slate-500">
                  © {new Date().getFullYear()} Muhammed Anjoom. Built with React & Tailwind CSS.
                </p>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
};

const SocialLinks = () => (
  <div className="flex items-center gap-4">
    {socialLinks.map(({ name, href, icon: Icon }) => (
      <Tooltip key={name}>
        <TooltipTrigger asChild>
          <a
            href={href}
            aria-label={name}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="rounded-xl p-2 text-slate-400 transition-all hover:-translate-y-0.5 hover:bg-slate-800/70 hover:text-emerald-400 hover:shadow-[0_12px_30px_rgba(0,0,0,0.1)]"
          >
            <Icon className="h-5 w-5" />
          </a>
        </TooltipTrigger>
        <TooltipContent className="rounded-xl border-0 bg-slate-800 text-slate-100 shadow-[0_18px_45px_rgba(0,0,0,0.12)]">
          {name}
        </TooltipContent>
      </Tooltip>
    ))}
  </div>
);

const SectionLabel = ({ children }: { children: string }) => (
  <h2 className="mb-8 font-['Space_Grotesk'] text-xs font-bold uppercase tracking-[0.15em] text-slate-100 lg:hidden">
    {children}
  </h2>
);

export default Index;
