import React, { useState, useEffect, useRef } from "react";
import { Calendar, MapPin, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import holiImg from "../assets/img7.jpg";
import diwaliImg from "../assets/img2.jpg";
import garbhaImg from "../assets/img6.jpg";
import ganeshaImg from "../assets/img5.svg";

// Import your collage
import collage from "../assets/hero-image.png";

const testimonials = [
  {
    id: 1,
    name: "Dr. Yannis C. Yortsos",
    role: "Dean of USC Viterbi School of Engineering",
    text: "Every academic year the Association of Indian Students holds a number of great events that celebrate community, friendship, and Indian culture that tie as closer together while constantly opening our hearts and minds. It is wonderful to participate in these celebrations and cherish the indomitable spirit of our Indian students and friends, at Viterbi and across USC.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150"
  },
  {
    id: 2,
    name: "Dr. Varun Soni",
    role: "Dean of Religious Life",
    text: "Thank you for your leadership in bringing us together at a time when we needed it most, Through your many cultural celebrations, opportunity, and events, you really created a \"home away from home\" environment right here on campus. Congratulations on a very successful year and looking forward to the next one!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150"
  },
  {
    id: 3,
    name: "Yadi Wang",
    role: "Event Atendee",
    text: "It has been a great pleasure to work closely with AIS to create a home away from home for Indian students and scholars. From new students transition, campus involvement, cultural diversity, safety education to immigration advisement, AIS is one of my irreplaceable sources to know students' needs and enhance their engagement here at Viterbi",
  },
  {
    id: 4,
    name: "Sudha Kumar",
    role: "Director, USC Viterbi India Office",
    text: "Being part of the start of the journey of our graduate Indian students to USC Viterbi, It gives me great joy when I see the success of our students and their potential being realized. Do keep in touch with me, especially if you plan to return to India so that I can connect you to the Trojan family in India. I plan on following your many successes with great interest. Fight On!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
  },
];

const events = [
  {
    id: 1,
    name: "Diwali",
    description: "Festival of Lights celebration with traditional performances and festivities.",
    date: "Nov, 2025",
    location: "USC McCarthy Quad",
    image: diwaliImg
  },
  {
    id: 2,
    name: "Holi",
    description: "Festival of Colors bringing the campus together in vibrant celebration.",
    date: "March, 2026",
    location: "USC McCarthy Quad",
    image: holiImg
  },
  {
    id: 3,
    name: "Ganesha Chaturthi",
    description: "Showcasing India's diverse culture through dance, music, and cuisine.",
    date: "August, 2026",
    location: "Bovard Auditorium",
    image: ganeshaImg
  },
  {
    id: 4,
    name: "Navratri & Garba Night",
    description: "Traditional dance night celebrating the spirit of Navratri.",
    date: "September, 2026",
    location: "USC McCarthy Quad",
    image: garbhaImg
  }
];

export default function AISHomepage() {
  const [currentEvent, setCurrentEvent] = useState(0);
  const eventsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  // Events auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEvent((prev) => (prev + 1) % events.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const scrollToEvents = () => {
    eventsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white">
      {/* Indian flag gradient bar */}


      {/* Hero Section with Collage Background */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Collage Background */}
        <div className="absolute inset-0">
          <img src={collage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Center Content with Hazy Box */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-12 md:p-16 shadow-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-white/90 mb-6 font-light">
              AIS – University of Southern California
            </p>
            <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-8 text-white leading-tight">
              Where Culture<br />Meets Community
            </h1>
            <p className="text-lg text-white/90 mb-10 font-light max-w-xl mx-auto">
              Celebrating Indian heritage, fostering connections, and creating unforgettable experiences at USC
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={scrollToEvents}
                className="px-8 py-3.5 bg-white text-black text-sm tracking-wide uppercase font-medium hover:bg-gray-100 transition-all duration-300 rounded-full"
              >
                Explore Events
              </button>
              <button
                onClick={scrollToContact}
                className="px-8 py-3.5 border-2 border-white/80 text-white text-sm tracking-wide uppercase font-light hover:bg-white/10 transition-all duration-300 rounded-full"
              >
                Join Newsletter
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-white/30" />
        </div> */}
      </section>

      {/* Events Section */}
      <section ref={eventsRef} className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 font-medium">
              Annual Events
            </p>
            <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 tracking-tight">
              Our Calendar
            </h2>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentEvent * 100}%)` }}
              >
                {events.map((event) => (
                  <div key={event.id} className="w-full shrink-0 px-2">
                    <div className="relative h-[450px] rounded-2xl overflow-hidden">
                      {/* Background Image */}
                      <img
                        src={event.image}
                        alt={event.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20" />

                      {/* Info Box on Right */}
                      <div className="absolute right-8 top-1/2 -translate-y-1/2 backdrop-blur-xl bg-white/10 rounded-3xl p-12 md:p-16 shadow-2xl rounded-2xl p-8 max-w-md shadow-xl">
                        <h3 className="text-4xl font-light text-white mb-4 tracking-tight">
                          {event.name}
                        </h3>
                        <p className="text-white font-light mb-6 leading-relaxed">
                          {event.description}
                        </p>
                        <div className="flex flex-col gap-3 text-sm text-white mb-6">
                          <span className="flex items-center gap-2">
                            <Calendar size={18} className="text-white" />
                            {event.date}
                          </span>
                          <span className="flex items-center gap-2">
                            <MapPin size={18} className="text-white" />
                            {event.location}
                          </span>
                        </div>
                        <button className="w-full px-6 py-3 text-white border text-xs tracking-widest uppercase font-medium hover:bg-white/10 transition-all duration-300 rounded-lg rounded-full">
                          Join Waitlist
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Simple Arrow Navigation */}
            <button
              onClick={() => setCurrentEvent((prev) => (prev - 1 + events.length) % events.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300 z-20"
              aria-label="Previous event"
            >
              <ChevronLeft size={48} strokeWidth={1.5} />
            </button>
            <button
              onClick={() => setCurrentEvent((prev) => (prev + 1) % events.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300 z-20"
              aria-label="Next event"
            >
              <ChevronRight size={48} strokeWidth={1.5} />
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-8 gap-2">
              {events.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentEvent(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentEvent ? "bg-gray-900 w-8" : "bg-gray-300 w-1.5"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 font-medium">
              Community Voices
            </p>
            <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 tracking-tight">
              What Our Testimonials Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => {
              // Get initials from name
              const nameParts = testimonial.name.split(' ');
              const initials = nameParts.length > 1
                ? `${nameParts[0][0]}${nameParts[nameParts.length - 1][0]}`.toUpperCase()
                : nameParts[0][0].toUpperCase();

              return (
                <div
                  key={testimonial.id}
                  className="relative bg-white p-10 rounded-xl border border-gray-100 hover:border-gray-200 transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-white-900 flex items-center justify-center flex-shrink-0 outline outline-2 outline-offset-2 outline-gray-600">
                      <span className="text-black font-semibold text-xl">
                        {initials}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="mb-4">
                        <div className="font-medium text-gray-900 text-lg">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                      </div>
                      <p className="text-gray-700 font-light leading-relaxed italic">
                        "{testimonial.text}"
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-8 right-8 text-gray-200">
                    <Quote size={40} strokeWidth={1} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section ref={contactRef} className="py-12 bg-white">
        </section>
    </div>
  );
}