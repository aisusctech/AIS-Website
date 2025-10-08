import React, { useEffect, useState, forwardRef } from "react";
import { Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

const EventsCarousel = forwardRef(function EventsCarousel({ events }, ref) {
  const [idx, setIdx] = useState(0);
  
  useEffect(() => {
    if (!events?.length) return;
    const t = setInterval(() => setIdx((p) => (p + 1) % events.length), 5000);
    return () => clearInterval(t);
  }, [events?.length]);

  return (
    <section ref={ref} className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <div className="text-xs tracking-widest uppercase text-gray-400 mb-3 font-medium">
            Annual Events
          </div>
          <h2 className="text-5xl font-extralight text-gray-900 tracking-tight">Our Calendar</h2>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${idx * 100}%)` }}
            >
              {events.map((e) => (
                <div key={e.id} className="w-full shrink-0">
                  <div className="relative h-[32rem] overflow-hidden">
                    {/* Background Image with Blur */}
                    {e.image && (
                      <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ 
                          backgroundImage: `url(${e.image})`,
                          filter: 'blur(8px)',
                          transform: 'scale(1.1)'
                        }}
                      />
                    )}
                    
                    {/* Fallback gradient if no image */}
                    {!e.image && (
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100" />
                    )}
                    
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 ">
                      <h3 className="text-6xl font-extralight text-white mb-4 tracking-tight">
                        {e.name}
                      </h3>
                      
                      <p className="text-lg text-white/95 font-light max-w-xl mb-8 leading-relaxed">
                        {e.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-6 text-sm text-white/90 mb-10 font-light">
                        <span className="flex items-center gap-2">
                          <Calendar size={18} strokeWidth={1.5} />
                          {e.date}
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin size={18} strokeWidth={1.5} />
                          {e.location}
                        </span>
                      </div>
                      
                      <button className="px-8 py-3 bg-white text-black text-xs tracking-widest uppercase font-medium hover:bg-gray-100 transition-colors duration-300 rounded">
                        Join Waitlist
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => setIdx((p) => (p - 1 + events.length) % events.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 hover:bg-white rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
            aria-label="Previous event"
          >
            <ChevronLeft size={24} strokeWidth={1.5} className="text-gray-900" />
          </button>
          
          <button
            onClick={() => setIdx((p) => (p + 1) % events.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 hover:bg-white rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
            aria-label="Next event"
          >
            <ChevronRight size={24} strokeWidth={1.5} className="text-gray-900" />
          </button>

          {/* Indicator Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {events.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === idx ? "bg-gray-900 w-10" : "bg-gray-300 w-1.5 hover:bg-gray-400"
                }`}
                aria-label={`Go to event ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default EventsCarousel;