import { Button } from "./ui/moving-border";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-100 mb-6" data-aos="fade-up">
          <span className="text-emerald-400 text-xl font-mono">02.</span> What's Next?
        </h2>
        <h3 className="text-5xl font-bold text-slate-100 mb-6" data-aos="fade-up" data-aos-delay="200">Get In Touch</h3>
        <p className="text-slate-400 text-lg leading-relaxed mb-12" data-aos="fade-up" data-aos-delay="400">
        I'm always open to new mobile app projects, creative ideas, or collaboration opportunities. Whether you have an app concept in mind or just want to connect over Flutter or mobile development, I’d love to hear from you!
        </p>
        {/* <a
          href="mailto:muhammedanjoom@gmail.com"
          className="inline-block border border-emerald-400 text-emerald-400 px-6 py-2 rounded text-base hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 hover:transform hover:translate-y-[-2px]"
          data-aos="fade-up" 
          data-aos-delay="600"
        >
          Say Hello
        </a> */}
          <div data-aos="fade-up" data-aos-delay="1000">
            <a href="https://wa.me/9526020931"
            >
         <Button
       borderRadius="1.75rem"
        >
      Say Hello
      </Button>
      </a>
      </div>
      </div>
      
      <footer className="mt-20 text-center">
        <div className="flex justify-center space-x-6 mb-8" data-aos="fade-up" data-aos-delay="800">
          {[
            { name: "GitHub", url: "https://github.com/muhammedAnjoom" },
            { name: "LinkedIn", url: "https://www.linkedin.com/in/muhammed-anjoom/" },
            { name: "instagram", url: "https://www.instagram.com/anjoom.pa/" },
            { name: "Portfolio", url: "#" },
          ].map((social, index) => (
            <a
              key={social.name}
              href={social.url}
              className="text-slate-400 hover:text-emerald-400 transition-colors"
              data-aos="fade-up" 
              data-aos-delay={800 + index * 100}
            >
              {social.name}
            </a>
          ))}
        </div>
        <p className="text-slate-400 text-sm font-mono" data-aos="fade-up" data-aos-delay="1200">
          Built by Muhammed Anjoom
        </p>
      </footer>
    </section>
  );
};

export default Contact;
