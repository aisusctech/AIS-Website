import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Calendar, MapPin, ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import holiImg from "../assets/img7.jpg";
import diwaliImg from "../assets/img2.jpg";
import garbhaImg from "../assets/img6.jpg";
import ganeshaImg from "../assets/img5.svg";

// Event data
const eventsData = {
  diwali: {
    name: "Diwali",
    tagline: "Festival of Lights",
    date: "Nov, 2025",
    location: "USC McCarthy Quad",
    image: diwaliImg,
    isUpcoming: false,
    galleryFolder: "diwali",
    description: `Association of Indian students celebrated the Festival of Lights, in collaboration with USC Hindu Student Organisation, with scrumptious food, sparkling lights and vibrant cultural performances representing art forms from various states of India 🌟`,
    highlights: [
      "1,500+ attendees from across USC and LA community",
      "Traditional Diya lighting ceremony",
      "10+ cultural performances and dance acts",
      "Authentic Indian cuisine from 5 different regions",
      "Grand fireworks display",
      "Rangoli and Henna art stations"
    ]
  },
  holi: {
    name: "Holi",
    tagline: "Festival of Colors",
    date: "March, 2026",
    location: "USC McCarthy Quad",
    image: holiImg,
    isUpcoming: true,
    galleryFolder: "holi",
    description: `Holi, often known as the Festival of Colors, is a significant festival that celebrates renewal, community, and the arrival of spring. Our annual Holi event has become one of the largest cultural celebrations on campus. The event is open to the entire USC community and brings together students from diverse backgrounds to celebrate culture, faith, and unity.`,
    highlights: [
      "2,000+ participants in vibrant color celebration",
      "Traditional dhol drummers and live DJ performances",
      "Authentic Holi delicacies - gujiya, thandai, and more",
      "Multiple color zones and water play areas",
      "Cultural presentation on Holi traditions",
      "Photo booth with traditional Holi backdrops"
    ]
  },
  "ganesha-chaturthi": {
    name: "Ganesha Chaturthi",
    tagline: "Celebrating the Elephant God",
    date: "August, 2026",
    location: "Bovard Auditorium",
    image: ganeshaImg,
    isUpcoming: false,
    galleryFolder: "ganesh",
    description: `In collaboration with the Hindu Student Organization, AIS celebrates a blissful Ganesh Chaturthi with captivating performances that'll fill your heart with joy and a Ganesh idol making competition`,
    highlights: [
      "Traditional Ganesh Sthapana ceremony",
      "Classical music and devotional singing performances",
      "Modak-making workshop and cooking demonstrations",
      "Eco-friendly idol awareness and sustainability focus",
      "Cultural storytelling sessions",
      "Grand aarti ceremony with 800+ attendees"
    ]
  },
  "navratri-garba": {
    name: "Navratri & Garba Night",
    tagline: "Nine Nights of Dance",
    date: "September, 2026",
    location: "USC McCarthy Quad",
    image: garbhaImg,
    isUpcoming: false,
    galleryFolder: "navratri",
    description: `Groove to the beats of Bollywood, swirl to the rhythm of Garba, and savor delicious food at Navratri! ✨ McCarthy Quad witnesses an unforgettable night of DJ, dance, music and so much more. 🎶`,
    highlights: [
      "1,800+ dancers in traditional attire",
      "Professional garba and dandiya instructors",
      "4+ hours of non-stop dancing",
      "Traditional and contemporary music fusion",
      "Best dressed competition with prizes",
      "Authentic Gujarati snacks and refreshments"
    ]
  }
};

// Function to load gallery images dynamically
function loadGalleryImages(folderName) {
  // Import all image files
  const imageModules = import.meta.glob('/public/gallery/**/*.{jpg,jpeg,png,gif,webp,JPG,JPEG,PNG,GIF,WEBP}', { eager: true, as: 'url' });
  
  // Import all video files
  const videoModules = import.meta.glob('/public/gallery/**/*.{mp4,mov,avi,MP4,MOV,AVI}', { eager: true, as: 'url' });
  
  const items = [];
  
  // Process images
  for (const [path, url] of Object.entries(imageModules)) {
    if (path.includes(`/gallery/${folderName}/`)) {
      items.push({
        url: url,
        type: 'image',
        path: path
      });
    }
  }
  
  // Process videos
  for (const [path, url] of Object.entries(videoModules)) {
    if (path.includes(`/gallery/${folderName}/`)) {
      items.push({
        url: url,
        type: 'video',
        path: path
      });
    }
  }
  
  console.log(`Found ${items.length} items for ${folderName}:`, items);
  
  return items;
}

export default function EventDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [gallery, setGallery] = useState([]);

  const event = eventsData[slug];

  useEffect(() => {
    if (!event) return;
    
    // Load images from the public folder
    const items = loadGalleryImages(event.galleryFolder);
    
    if (items.length > 0) {
      setGallery(items);
    } else {
      // Fallback to event hero image
      setGallery([{ 
        url: event.image, 
        type: 'image',
        name: event.name 
      }]);
    }
  }, [event]);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-4">Event Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setSelectedImage(gallery[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % gallery.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(gallery[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentImageIndex - 1 + gallery.length) % gallery.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(gallery[newIndex]);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={event.image} alt={event.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <button
          onClick={() => navigate('/')}
          className="absolute top-8 left-8 z-20 flex items-center gap-2 text-white hover:text-gray-200 transition-colors"
        >
          <ArrowLeft size={24} />
          <span className="text-sm uppercase tracking-wider">Back to Events</span>
        </button>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          {/* <p className="text-xs uppercase tracking-[0.3em] text-white/90 mb-4 font-light">
            {event.tagline}
          </p> */}
          {/* <h1 className="text-6xl md:text-7xl font-extralight tracking-tight text-white mb-6">
            {event.name}
          </h1>
          
          <div className="flex flex-wrap justify-center gap-6 text-white/90 text-sm mb-10">
            <span className="flex items-center gap-2">
              <Calendar size={18} />
              {event.date}
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={18} />
              {event.location}
            </span>
          </div> */}

          <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-10 md:p-12 shadow-2xl max-w-2xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-extralight tracking-tight text-white mb-6">
            {event.name}
          </h1>
          
          <div className="flex flex-wrap justify-center gap-6 text-white/90 text-sm mb-10">
            <span className="flex items-center gap-2">
              <Calendar size={18} />
              {event.date}
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={18} />
              {event.location}
            </span>
          </div>
            {event.isUpcoming ? (
              <div>
                {/* <div className="inline-block px-4 py-1.5 bg-white/20 rounded-full text-xs uppercase tracking-widest mb-6 text-white">
                  Registration Open
                </div>
                <h2 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-tight">
                  Secure Your Spot Today
                </h2> */}
                <p className="text-white/90 font-light mb-8 leading-relaxed">
                  Limited spots available—register now to be part of this year's {event.name}.
                </p>
                <button className="w-full px-6 py-3 text-white border text-xs tracking-widest uppercase font-medium hover:bg-white/10 transition-all duration-300 rounded-lg rounded-full">
                  Register Now
                </button>
              </div>
            ) : (
              <div>
                {/* <h2 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-tight">
                  Stay Updated
                </h2> */}
                <p className="text-white/90 font-light mb-8 leading-relaxed">
                  Join the waitlist and we'll notify you as soon as tickets are available.
                </p>
                <button className="w-full px-10 py-4 bg-white/90 text-gray-900 text-sm tracking-widest uppercase font-semibold hover:bg-white transition-all duration-300 rounded-full">
                  Join Waitlist
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-extralight text-gray-900 mb-8 tracking-tight">
              About the Event
            </h2>
            <div className="prose prose-lg max-w-none">
              {event.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-6 font-light">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="mb-16 bg-gray-50 rounded-2xl p-10">
            <h2 className="text-3xl font-extralight text-gray-900 mb-8 tracking-tight">
              Event Highlights
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {event.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 flex-shrink-0" />
                  <p className="text-gray-700 font-light">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-extralight text-gray-900 mb-8 tracking-tight">
              Photo Gallery
            </h2>
            <p className="text-gray-600 font-light mb-8">
              Relive the memories from last year's celebration
            </p>
            
            {gallery.length > 0 ? (
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
                        alt={`${event.name} gallery ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />
                    ) : (
                      <div className="relative w-full h-full bg-black">
                        <video
                          src={item.url}
                          className="w-full h-full object-cover"
                          muted
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-gray-900 border-b-8 border-b-transparent ml-1"></div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-10">Gallery images coming soon!</p>
            )}
          </div>
        </div>
      </section>

      {selectedImage && (
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
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <ChevronLeft size={48} strokeWidth={1.5} />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <ChevronRight size={48} strokeWidth={1.5} />
          </button>

          {selectedImage.type === 'image' ? (
            <img
              src={selectedImage.url}
              alt="Gallery"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <video
              src={selectedImage.url}
              controls
              autoPlay
              className="max-w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            />
          )}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {currentImageIndex + 1} / {gallery.length}
          </div>
        </div>
      )}
    </div>
  );
}
