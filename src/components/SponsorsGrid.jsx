import React from "react";
import gradly from "../assets/Gradly.png";
import wee from "../assets/Wee.png";
import easyTransfer from "../assets/EasyTransfer.png";
import radioEvents from "../assets/RadioEvents.png";
import bih from "../assets/BIH.png";

const SPONSORS = [
  { name: "Gradly", badge: "Platinum Sponsor", logo: gradly, url: "https://gradly.us/", size: "large" },
  { name: "Wee", badge: "Bronze Sponsor", logo: wee, url: "http://sayweee.com/en", size: "medium" },
  // { name: "Easy Transfer", badge: "Bronze Sponsor", logo: easyTransfer, url: "https://www.easytransferglobal.com/", size: "medium" },
  { name: "Radio Events", badge: "Media Sponsor", logo: radioEvents, url: "https://www.radio5events.com/", size: "small" },
  // { name: "BIH", badge: "Media Sponsor", logo: bih, url: "https://www.instagram.com/bihevents/", size: "small" },
];

export default function SponsorsGrid() {
  return (
    <section className="py-14 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <div className="mb-10 text-center">
          <div className="text-xs tracking-widest uppercase text-gray-500 mb-3 font-light">
            Our Partners
          </div>
          <h2 className="text-4xl font-light">Sponsors</h2>
        </div>

        {/* Sponsors Layout */}
        <div className="space-y-6">
          {/* Large - Gradly */}
          <div
            onClick={() => window.open(SPONSORS[0].url, '_blank')}
            className="cursor-pointer border border-gray-200 rounded-lg p-8 bg-gray-50 transition-all hover:shadow-lg hover:-translate-y-1"
          >
            <div className="aspect-square max-w-xs mx-auto bg-white border border-gray-100 flex items-center justify-center mb-4 overflow-hidden rounded">
              <img
                src={SPONSORS[0].logo}
                alt={`${SPONSORS[0].name} logo`}
                className="w-full h-full object-contain p-6"
              />
            </div>
            <div className="text-center">
              <div className="inline-block px-3 py-1 text-xs rounded-full bg-gray-900 text-white font-light">
                {SPONSORS[0].badge}
              </div>
            </div>
          </div>

          {/* Medium - Wee & Easy Transfer */}
          <div className="grid grid-cols-2 gap-6">
            {SPONSORS.slice(1, 3).map((s, i) => (
              <div
                key={i}
                onClick={() => window.open(s.url, '_blank')}
                className="cursor-pointer border border-gray-200 rounded-lg p-6 bg-gray-50 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="aspect-square bg-white border border-gray-100 flex items-center justify-center mb-3 overflow-hidden rounded">
                  <img
                    src={s.logo}
                    alt={`${s.name} logo`}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <div className="text-center">
                  <div className="inline-block px-2 py-1 text-[10px] rounded-full bg-gray-900 text-white font-light">
                    {s.badge}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Small - Radio Events & BIH */}
          <div className="grid grid-cols-2 gap-6">
            {SPONSORS.slice(3, 5).map((s, i) => (
              <div
                key={i}
                onClick={() => window.open(s.url, '_blank')}
                className="cursor-pointer border border-gray-200 rounded-lg p-5 bg-gray-50 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="aspect-square bg-white border border-gray-100 flex items-center justify-center mb-3 overflow-hidden rounded">
                  <img
                    src={s.logo}
                    alt={`${s.name} logo`}
                    className="w-full h-full object-contain p-3"
                  />
                </div>
                <div className="text-center">
                  <div className="inline-block px-2 py-0.5 text-[10px] rounded-full bg-gray-900 text-white font-light">
                    {s.badge}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}