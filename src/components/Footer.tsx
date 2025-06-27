import React from "react";

const Footer = () => (
  <footer
    className="max-w-3xl mx-auto px-6 py-5 text-center text-slate-200 border border-emerald-400/30 shadow-xl backdrop-blur-2xl rounded-t-2xl rounded-b-none"
    style={{
      background: "linear-gradient(135deg, rgba(52,211,153,0.18) 0%, rgba(30,41,59,0.40) 100%)",
      boxShadow: "0 8px 32px 0 rgba(16, 185, 129, 0.15)",
    }}
  >
    <span className="font-mono tracking-wide">
      &copy; {new Date().getFullYear()} Muhammed Anjoom. All rights reserved.
    </span>
    <span className="ml-2">
      <a
        href="https://your-portfolio-link.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-emerald-300 hover:text-emerald-400 underline underline-offset-2 transition-colors"
      >
        Portfolio
      </a>
    </span>
  </footer>
);

export default Footer; 