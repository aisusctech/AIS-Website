import React from "react";
import gradly from "../assets/gradly.png";
import wee from "../assets/wee.png";
import easyTransfer from "../assets/easyTransfer.png";
import radioEvents from "../assets/radioEvents.png";
import bih from "../assets/bih.png";

const SPONSORS = [
  { name: "Gradly", badge: "Platinum Sponsor", logo: gradly, url: "https://gradly.us/" },
  { name: "Wee", badge: "Bronze Sponsor", logo: wee, url: "http://sayweee.com/en" },
  { name: "Easy Transfer", badge: "Bronze Sponsor", logo: easyTransfer, url: "https://www.easytransferglobal.com/" },
  { name: "Radio Events", badge: "Media Sponsor", logo: radioEvents, url: "https://www.radio5events.com/" },
  { name: "BIH", badge: "Media Sponsor", logo: bih, url: "https://www.instagram.com/bihevents/" },
];

export default function SponsorsGrid() {
  return (
    <section className="py-14 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {SPONSORS.map((s, i) => (
          <div 
            key={i} 
            onClick={() => window.open(s.url, '_blank')}
            className="cursor-pointer border rounded-lg p-4 text-center bg-gray-50 transition-all hover:shadow-lg hover:-translate-y-1"
          >
            <div className="aspect-square bg-white border flex items-center justify-center mb-3 overflow-hidden">
              <img 
                src={s.logo} 
                alt={`${s.name} logo`}
                className="w-full h-full object-contain p-2"
              />
            </div>
            {/* <div className="font-medium text-sm">{s.name}</div> */}
            <div className="mt-1 inline-block px-2 py-0.5 text-[10px] rounded-full bg-gray-900 text-white">
              {s.badge}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}