import React, { useState, useEffect } from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
// import img5 from "../assets/img5.svg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.svg";
// import img9 from "../assets/img9.jpg";
// import img10 from "../assets/img10.jpg";
// import img11 from "../assets/img11.jpg";
// import img12 from "../assets/img12.jpg";
// import img13 from "../assets/img13.jpg";
// import img14 from "../assets/img14.jpg";
// import img15 from "../assets/img15.jpg";
// import img16 from "../assets/img16.jpg";
// import img17 from "../assets/img17.jpg";
// import img18 from "../assets/img18.jpg";
// import img19 from "../assets/img19.jpg";

const images = [
  img1, img2, img3, img4, 
  // img5, 
  img6, img7, img8, 
  // img9, img10,
  // img11, img12, img13, img14, img15, img16, img17, img18, img19
];

export default function Hero({ onExploreEvents, onJoinCommunity }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setNextImageIndex((currentImageIndex + 1) % images.length);
      
      setTimeout(() => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 800);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <section className="pt-24 md:pt-28 min-h-[90vh] bg-black text-white flex items-center relative overflow-hidden">
      {/* Indian flag gradient bar */}
      <div
        className="fixed top-0 w-full h-1 z-40"
        style={{
          background:
            "linear-gradient(to right,#FF9933 0%,#FF9933 33%,#FFFFFF 33%,#FFFFFF 66%,#138808 66%,#138808 100%)",
          opacity: 0.3,
        }}
      />

      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90 z-0" />

      <div className="max-w-7xl mx-auto w-full px-6 z-10 relative">
        {/* Header content */}
        <div className="text-center mb-16">
          <div className="inline-block mb-8">
            <p className="text-xs uppercase tracking-[0.3em] text-white-400/80 mb-4 font-light">
              AIS – University of Southern California
            </p>
            <h1 className="text-6xl md:text-8xl font-extralight tracking-tight mb-6 leading-[0.95] bg-gradient-to-b from-gray-100 to-gray-400 bg-clip-text text-transparent">
              Where Culture Meets Community
            </h1>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button
              onClick={onExploreEvents}
              className="group relative inline-flex items-center justify-center h-12 px-8 bg-gradient-to-r from-orange-200 to-green-200 text-black text-xs tracking-[0.15em] uppercase font-medium hover:from-orange-300 hover:to-green-300 transition-all duration-300 rounded-full overflow-hidden"
            >
              <span className="relative z-10">Explore Events</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </button>

            <button
              onClick={onJoinCommunity}
              className="group relative inline-flex items-center justify-center h-12 px-8 text-xs tracking-[0.15em] uppercase font-light transition-all duration-300 backdrop-blur-sm overflow-hidden"
              style={{
                borderRadius: "9999px",
                background: "linear-gradient(black, black) padding-box, linear-gradient(to right, rgb(254 215 170), rgb(187 247 208)) border-box",
                border: "2px solid transparent"
              }}
            >
              <span className="relative z-10 bg-gradient-to-r from-orange-300 to-green-300 bg-clip-text text-transparent">Join Community</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-orange-400/10 to-green-200/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>

        {/* Animated image grid */}
        <div className="relative w-full h-[55vh] md:h-[50vh] overflow-hidden rounded-3xl">
          {/* Current image */}
          <div
            className="absolute inset-0 transition-opacity duration-800"
            style={{
              opacity: isTransitioning ? 0 : 1,
            }}
          >
            <img
              src={images[currentImageIndex]}
              alt="AIS Community"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          </div>

          {/* Next image (for smooth transition) */}
          <div
            className="absolute inset-0 transition-opacity duration-800"
            style={{
              opacity: isTransitioning ? 1 : 0,
            }}
          >
            <img
              src={images[nextImageIndex]}
              alt="AIS Community"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          </div>

          {/* Image counter overlay
          <div className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-xs tracking-wider text-white/80">
            {currentImageIndex + 1} / {images.length}
          </div> */}

          {/* Decorative border glow */}
          <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10" />
        </div>
{/* <div className="flex justify-center gap-2 mt-8 h"></div> */}
        {/* Progress indicators */}
        {/* <div className="flex justify-center gap-2 mt-8">
          {images.slice(0, 8).map((_, idx) => (
            <div
              key={idx}
              className="h-1 w-8 bg-white/20 rounded-full overflow-hidden"
            >
              <div
                className="h-full bg-gradient-to-r from-orange-500 to-green-500 transition-all duration-300"
                style={{
                  width: currentImageIndex === idx ? "100%" : "0%",
                }}
              />
            </div>
          ))}
        </div> */}
      </div>

      {/* Bottom curve transition */}
      {/* <div className="absolute -bottom-6 left-0 right-0 h-8 bg-white rounded-t-3xl" /> */}
    </section>
  );
}