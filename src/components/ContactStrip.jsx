import React, { useState } from "react";

function SocialIcon({ href, label, children }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative flex items-center justify-center">
      <a
        href={href}
        target={href.startsWith("mailto") ? undefined : "_blank"}
        rel="noopener noreferrer"
        aria-label={label}
        className="hover:opacity-80 transition-opacity"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {children}
      </a>

      {/* Tooltip */}
      <div
        className={`absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1.5 bg-white text-black text-xs font-medium rounded-full shadow-lg pointer-events-none transition-all duration-200 ${
          hovered ? "opacity-100 -translate-y-1" : "opacity-0 translate-y-0"
        }`}
      >
        {label}
        {/* Little arrow */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-white" />
      </div>
    </div>
  );
}

export default function ContactStrip() {
  const [email, setEmail] = React.useState('');
  const [isValid, setIsValid] = React.useState(false);

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(value));
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const handleSubmit = () => {
    if (isValid) {
      alert(`Thank you for subscribing with ${email}!`);
      setEmail('');
      setIsValid(false);
    }
  };

  return (
    <footer id="contact" className="py-16 px-6 bg-black text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          {/* Newsletter */}
          <div className="flex-1">
            <h3 className="text-sm font-light tracking-wider text-gray-300 mb-3">Join Newsletter</h3>
            <div className="flex gap-2 max-w-md">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-white/40 font-light text-sm transition-colors"
              />
              <button
                onClick={handleSubmit}
                disabled={!isValid}
                className={`px-6 py-2.5 text-xs tracking-wider uppercase font-medium transition-colors ${
                  isValid
                    ? 'bg-white text-black hover:bg-gray-200 cursor-pointer'
                    : 'bg-white/20 text-gray-500 cursor-not-allowed'
                }`}
              >
                Join
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">

            {/* WhatsApp — first */}
            <SocialIcon href="https://chat.whatsapp.com/KT7Dja2itiJ9FOV5LlOZXF" label="Join our WhatsApp community">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
            </SocialIcon>

            {/* Instagram */}
            <SocialIcon href="https://www.instagram.com/aisusc/" label="Instagram">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <defs>
                  <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FED373" />
                    <stop offset="50%" stopColor="#F15245" />
                    <stop offset="100%" stopColor="#D92E7F" />
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#instagram-gradient)" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" stroke="url(#instagram-gradient)" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1.5" fill="url(#instagram-gradient)"/>
              </svg>
            </SocialIcon>

            {/* LinkedIn */}
            <SocialIcon href="https://www.linkedin.com/company/association-of-indian-students-usc/posts/?feedView=all" label="LinkedIn">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#0A66C2">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </SocialIcon>

            {/* Email */}
            <SocialIcon href="mailto:tech@aisusc.org" label="Email us">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M2 6l10 7 10-7"/>
              </svg>
            </SocialIcon>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-light">
          <p>© 2026 AIS USC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="mailto:tech@aisusc.org" className="hover:text-white transition-colors">
              tech@aisusc.org
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}