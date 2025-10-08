import React from "react";
import { Instagram, Facebook, Linkedin, Mail } from "lucide-react";

export default function ContactStrip() {
  return (
    <section id="contact" className="py-24 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-light mb-8">Stay Connected</h2>
        <p className="text-gray-400 font-light mb-12 text-lg">
          Join our newsletter for updates on events, opportunities, and community news.
        </p>
        <div className="max-w-xl mx-auto mb-12">
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-white/40 font-light text-sm"
            />
            <button className="px-8 py-4 bg-white text-black text-xs tracking-widest uppercase font-light hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex justify-center space-x-8 mb-12">
          <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="mailto:info@aisusc.org" className="text-gray-400 hover:text-white transition-colors" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
        <div className="text-sm text-gray-500 font-light">
          <a href="mailto:info@aisusc.org" className="hover:text-white transition-colors">
            info@aisusc.org
          </a>
          <span className="mx-4">•</span>
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </section>
  );
}
