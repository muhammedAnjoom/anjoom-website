
const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-100 mb-6">
          <span className="text-emerald-400 text-xl font-mono">03.</span> What's Next?
        </h2>
        <h3 className="text-5xl font-bold text-slate-100 mb-6">Get In Touch</h3>
        <p className="text-slate-400 text-lg leading-relaxed mb-12">
          I'm always excited to discuss new mobile app projects, AI integrations, or collaboration opportunities. 
          Whether you have an innovative app idea or want to chat about Flutter and AI, I'd love to hear from you!
        </p>
        <a
          href="mailto:muhammedanjoom@gmail.com"
          className="inline-block border border-emerald-400 text-emerald-400 px-8 py-4 rounded text-lg hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 hover:transform hover:translate-y-[-2px]"
        >
          Say Hello
        </a>
      </div>
      
      <footer className="mt-20 text-center">
        <div className="flex justify-center space-x-6 mb-8">
          {[
            { name: "GitHub", url: "https://github.com/muhammedanjoom" },
            { name: "LinkedIn", url: "https://linkedin.com/in/muhammedanjoom" },
            { name: "Twitter", url: "https://twitter.com/muhammedanjoom" },
            { name: "Portfolio", url: "#" },
          ].map((social) => (
            <a
              key={social.name}
              href={social.url}
              className="text-slate-400 hover:text-emerald-400 transition-colors"
            >
              {social.name}
            </a>
          ))}
        </div>
        <p className="text-slate-400 text-sm font-mono">
          Built by Muhammed Anjoom
        </p>
      </footer>
    </section>
  );
};

export default Contact;
