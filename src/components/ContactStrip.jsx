import React, { useState } from "react";

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
            <h3 className="text-sm font-light tracking-wider  text-gray-300 mb-3">Join Newsletter</h3>
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
            <a href="https://www.instagram.com/aisusc/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
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
            </a>
            <a href="https://www.youtube.com/user/USC" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="YouTube">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#FF0000">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/association-of-indian-students-usc/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#0A66C2">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
           <a href="https://x.com/usc" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="X (Twitter)">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFFFFF">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/usc/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="mailto:tech@aisusc.org" className="hover:opacity-80 transition-opacity" aria-label="Email">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M2 6l10 7 10-7"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-light">
          <p>© 2025 AIS USC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="mailto:info@aisusc.org" className="hover:text-white transition-colors">
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