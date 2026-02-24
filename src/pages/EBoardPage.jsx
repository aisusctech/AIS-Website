import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import img3 from "../assets/img3.jpg";
import teamPres from "../assets/team-pres.jpeg";
import teamTech from "../assets/team-tech.jpeg";
import teamFinance from "../assets/team-finance.jpeg";
import teamContent from "../assets/team-content.jpeg";
import teamEvents from "../assets/team-events.jpeg";
import teamRelations from "../assets/team-relation.jpeg";
import teamSponsorship from "../assets/team-sponsor.jpeg";
import teamHospi from "../assets/team-hospi.jpeg";

function loadBoardGallery() {
  const imageModules = import.meta.glob(
    '/public/gallery/board/**/*.{jpg,jpeg,png,gif,webp,JPG,JPEG,PNG,GIF,WEBP}',
    { eager: true, as: 'url' }
  );
  const videoModules = import.meta.glob(
    '/public/gallery/board/**/*.{mp4,mov,avi,MP4,MOV,AVI}',
    { eager: true, as: 'url' }
  );

  const items = [
    ...Object.entries(imageModules).map(([path, url]) => ({ url, type: 'image', path })),
    ...Object.entries(videoModules).map(([path, url]) => ({ url, type: 'video', path })),
  ];

  return items;
}

export default function EBoardPage() {
  const [gallery, setGallery] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const teams = [
    { name: "President Team",    description: "Leading the organization's vision and strategy.",  image: teamPres        },
    { name: "Finance Team",      description: "Managing budgets and financial operations.",        image: teamFinance     },
    { name: "Tech Team",         description: "Building and maintaining our digital presence.",    image: teamTech        },
    { name: "Content Team",      description: "Creating engaging content and communications.",     image: teamContent     },
    { name: "Events Team",       description: "Planning and executing memorable experiences.",     image: teamEvents      },
    { name: "Relations Team",    description: "Building community and external partnerships.",     image: teamRelations   },
    { name: "Sponsorship Team",  description: "Securing partnerships and funding.",                image: teamSponsorship },
    { name: "Hospitality Team",  description: "Ensuring comfort and care for all participants.",   image: teamHospi       },
  ];

  useEffect(() => {
    const items = loadBoardGallery();
    setGallery(items);
  }, []);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedItem(gallery[index]);
  };

  const closeLightbox = () => setSelectedItem(null);

  const nextItem = () => {
    const i = (currentIndex + 1) % gallery.length;
    setCurrentIndex(i);
    setSelectedItem(gallery[i]);
  };

  const prevItem = () => {
    const i = (currentIndex - 1 + gallery.length) % gallery.length;
    setCurrentIndex(i);
    setSelectedItem(gallery[i]);
  };

  return (
    <main className="pt-24 pb-20 px-12 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <div className="text-xs tracking-wider uppercase text-gray-500 mb-3 font-light">Leadership</div>
          <h1 className="text-5xl font-light">Executive Board 2026</h1>
        </div>

        {/* Hero image */}
        <div className="mb-12">
          <div className="aspect-[2.5/1] bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center rounded overflow-hidden">
            <img src={img3} className="w-full h-full object-cover" alt="Executive Board" />
          </div>
        </div>

        {/* Team tiles */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {teams.map((team, i) => (
            <div key={i} className="group">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center rounded overflow-hidden transition-opacity hover:opacity-90">
                <img
                  src={team.image}
                  className="w-full h-full object-cover"
                  alt={`${team.name} Photo`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Gallery section — only renders if images are found in public/gallery/board/ */}
        {gallery.length > 0 && (
          <div>
            <div className="text-xs tracking-wider uppercase text-gray-500 mb-3 font-light">Memories</div>
            <h2 className="text-4xl font-extralight text-gray-900 mb-3 tracking-tight">Board Gallery</h2>
            <p className="text-gray-500 font-light mb-10">Behind the scenes with your 2026 executive board</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {gallery.map((item, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                  onClick={() => openLightbox(index)}
                >
                  {item.type === 'image' ? (
                    <img
                      src={item.url}
                      alt={`Board gallery ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                  ) : (
                    <div className="relative w-full h-full bg-black">
                      <video src={item.url} className="w-full h-full object-cover" muted />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-gray-900 border-b-8 border-b-transparent ml-1" />
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            onClick={(e) => { e.stopPropagation(); prevItem(); }}
          >
            <ChevronLeft size={48} strokeWidth={1.5} />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            onClick={(e) => { e.stopPropagation(); nextItem(); }}
          >
            <ChevronRight size={48} strokeWidth={1.5} />
          </button>

          {selectedItem.type === 'image' ? (
            <img
              src={selectedItem.url}
              alt="Gallery"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <video
              src={selectedItem.url}
              controls
              autoPlay
              className="max-w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            />
          )}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {currentIndex + 1} / {gallery.length}
          </div>
        </div>
      )}
    </main>
  );
}