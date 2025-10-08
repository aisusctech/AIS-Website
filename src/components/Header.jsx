import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import AisLogo from "../assets/ais_logo.svg";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Executive Board", to: "/eboard" },
  { label: "Resources", to: "/resources" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => setOpen(false), [location.pathname]);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (to) => {
    navigate(to);
    setOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-3 shrink-0 cursor-pointer group"
            onClick={() => handleNav("/")}
          >
            <img 
              src={AisLogo} 
              alt="AIS Logo" 
              className="h-9 w-auto transition-transform duration-200 group-hover:scale-105" 
            />
            <span className="hidden sm:block text-sm font-medium text-gray-700 tracking-wide uppercase">
              Association of Indian Students
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <button
                  key={item.to}
                  onClick={() => handleNav(item.to)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/40 ${
                    isActive 
                      ? "text-gray-900" 
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-orange-400 to-green-400 transition-all duration-200 ${
                      isActive
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 -mr-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/40"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white/98 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <button
                  key={item.to}
                  onClick={() => handleNav(item.to)}
                  className={`w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/40 relative ${
                    isActive 
                      ? "text-gray-900 bg-gray-50" 
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}