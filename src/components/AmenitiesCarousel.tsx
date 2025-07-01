import React, { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const amenities = [
  {
    title: "The Resident Club",
    description:
      "A 24/7 private clubhouse designed for both productivity and leisure. Whether you need a serene shared workspace, a spot for casual meetings, or private rooms for intimate events, the Resident Club adapts to your needs with sophistication and ease.",
    imageLarge: "/assets/amenities/one.jpg",
    imageSmall: "/assets/amenities/one.jpg",
  },
  {
    title: "Incognito Infrastructure",
    description:
      "Experience uninterrupted natural beauty. All electrical cabling and transformers are seamlessly integrated underground—preserving the landscape, protecting local wildlife, and maintaining the visual purity of your surroundings.",
    imageLarge: "/assets/amenities/two.jpg",
    imageSmall: "/assets/amenities/two.jpg",
  },
  {
    title: "Triple-Source Water",
    description:
      "Each villa is connected to three independent water systems, ensuring reliable, around-the-clock water access every day of the year. Robust, redundant, and ready—no matter the season.",
    imageLarge: "/assets/amenities/three.jpg",
    imageSmall: "/assets/amenities/three.jpg",
  },
  {
    title: "Premium Essentials",
    description:
      "Step into a fully equipped home. Each villa comes with a custom-designed kitchen, integrated air-conditioning system, and tastefully curated garden and poolside furniture—offering immediate comfort and style from day one.",
    imageLarge: "/assets/amenities/four.jpg",
    imageSmall: "/assets/amenities/four.jpg",
  },
  {
    title: "24/7 Security",
    description:
      "Enjoy total peace of mind with round-the-clock surveillance, gated entry points, and smart access control systems. Trained personnel and advanced monitoring ensure your home remains a safe haven—day and night.",
    imageLarge: "/assets/amenities/five.jpg",
    imageSmall: "/assets/amenities/five.jpg",
  },
  {
    title: "Wi-Fi",
    description:
      "Stay seamlessly connected with high-speed fiber optic internet across every villa and common area. Whether working remotely, streaming, or simply browsing, enjoy uninterrupted access with enterprise-grade stability and coverage.",
    imageLarge: "/assets/amenities/six.jpg",
    imageSmall: "/assets/amenities/six.jpg",
  },
  {
    title: "On-site Parking",
    description:
      "Drive in with ease. Each villa includes designated on-site parking spaces, complete with EV charging stations, wide turning radii, and shaded bays—designed for convenience, sustainability, and modern lifestyles.",
    imageLarge: "/assets/amenities/seven.png",
    imageSmall: "/assets/amenities/seven.png",
  },
];

export default function AmenitiesDisplay() {
  const [selected, setSelected] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const selectedAmenity = amenities[selected];

  // Refs for scrolling active items into view
  const tileRefs = useRef([]);
  const menuRefs = useRef([]);

  useEffect(() => {
    const tileEl = tileRefs.current[selected];
    const menuEl = menuRefs.current[selected];
    const tileContainer = tileEl?.parentElement;
    const menuContainer = menuEl?.parentElement;

    const isDesktop = window.innerWidth >= 1024;
    const tileMargin = isDesktop ? 100 : 34;
    const menuMargin = isDesktop ? 100 : 34;

    if (tileEl && tileContainer) {
      tileContainer.scrollTo({
        left: tileEl.offsetLeft - tileMargin,
        behavior: "smooth",
      });
    }

    if (menuEl && menuContainer) {
      menuContainer.scrollTo({
        left: menuEl.offsetLeft - menuMargin,
        behavior: "smooth",
      });
    }
  }, [selected]);

  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isFullscreen]);

  const handlePrev = () => {
    setSelected((prev) => (prev === 0 ? amenities.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelected((prev) => (prev === amenities.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <style>{`
      .amenity-button-container {
          overflow-x: auto !important;
          white-space: nowrap !important;
          padding-left: 6rem !important;
          padding-right: 2rem !important;
          display: flex !important;
          flex-wrap: nowrap !important;
          gap: 3rem !important;
          justify-content: flex-start !important;
          scrollbar-width: none; /* Firefox */
        }

        .amenity-button-container::-webkit-scrollbar {
          display: none; /* Chrome, Safari */
        }

        @media (max-width: 640px) {
          .mobile-arrows {
            margin-top: -3rem !important;
            margin-right: 15.4rem !important;
          }

          .mobile-arrow-button {
            margin-top: 3.4rem !important;
            border-width: 1.5px !important;
          }

          .counter-arrows-wrapper {
            bottom: 2rem !important;
          }

          .amenity-button-container {
            overflow-x: auto !important;
            white-space: nowrap !important;
            padding-left: 2rem !important;
            padding-right: 1rem !important;
            display: flex !important;
            flex-wrap: nowrap !important;
            gap: 0.75rem !important;
            justify-content: flex-start !important;
          }

          .header-title {
            font-size: 2.5rem !important;
            margin-left: 1.5rem !important;
            padding-left: 0.5rem !important;
          }

          .amenity-tiles {
            flex-wrap: nowrap !important;
            overflow-x: auto !important;
            -webkit-overflow-scrolling: touch !important;
            gap: 1rem !important;
            padding-left: 1rem !important;
          }

          .amenity-tile {
            flex: 0 0 auto !important;
            width: 5rem !important;
            height: 5rem !important;
          }

          .amenity-button {
            font-size: 1.25rem !important;
          }

          .content-grid {
            grid-template-columns: 1fr !important;
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }

          .content-block-large {
            width: 100% !important;
            height: 12rem !important;
            margin: 0 auto !important;
            border-radius: 0.375rem !important;
          }

          .content-block-small {
            width: 6rem !important;
            height: 6rem !important;
            margin: 1.5rem auto 0 auto !important;
            border-radius: 0.375rem !important;
          }

          .counter-arrows-wrapper {
            position: absolute !important;
            bottom: 1.7rem !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            flex-direction: column !important;
            gap: 0.75rem !important;
            justify-content: center !important;
            align-items: center !important;
          }

          .counter {
            font-size: 1.8rem !important;
            text-align: center !important;
            color: #F1E7D0 !important;
            margin-right: 15.5rem !important;
          }

          .counter-arrows-wrapper > div:last-child {
            display: flex !important;
            gap: .3rem !important;
          }

          .counter-arrows-wrapper button {
            padding: 0.75rem !important;
            border-width: 2px !important;
            border-radius: 9999px !important;
          }

          .counter-arrows-wrapper svg {
            width: 8px !important;
            height: 8px !important;
          }
        }
          @media(min-width:1910px){
          .amenities_title{
          padding-left: 5rem;
        padding-right: 5rem;
        margin:auto;
        max-width: 1536px;
          }
          }
      `}</style>

      {/* Fullscreen Viewer */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          onClick={() => setIsFullscreen(false)}
          onKeyDown={(e) => e.key === "Escape" && setIsFullscreen(false)}
          tabIndex={0}
        >
          <div
            className="relative w-full max-w-screen-lg h-[80vh] bg-center bg-contain bg-no-repeat"
            style={{
              backgroundImage: `url(${selectedAmenity.imageLarge})`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 text-white text-3xl font-bold"
              aria-label="Close"
            >
              ×
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-2 rounded-full"
              aria-label="Previous Image"
            >
              <ArrowLeft />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-2 rounded-full"
              aria-label="Next Image"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      )}

      <section className="bg-[#00332D] text-[#F1E7D0] relative pb-32">
        {/* Header Image */}
        <div
          onClick={() => setIsFullscreen(true)}
          className="w-full aspect-[16/9] bg-cover bg-center transition-all duration-500 cursor-zoom-in"
          style={{
            backgroundImage: `url(${selectedAmenity.imageLarge})`,
          }}
        />

        {/* Amenity Tiles */}
        <div className="pt-6 mt-3 flex justify-center gap-10 px-4 amenity-tiles">
          {amenities.map((_, idx) => (
            <div
              key={idx}
              ref={(el) => (tileRefs.current[idx] = el)}
              className={`w-36 h-36 bg-cover bg-center rounded-md cursor-pointer transition amenity-tile ${
                idx === selected ? "ring-2 ring-[#F1E7D0]" : ""
              }`}
              style={{ backgroundImage: `url(${amenities[idx].imageSmall})` }}
              onClick={() => setSelected(idx)}
            />
          ))}
        </div>

        {/* Pagination Dots */}
        <div id="amenities" className="text-center mt-5 mb-8">
          <div className="flex justify-center gap-2">
            {amenities.map((_, idx) => (
              <span
                key={idx}
                className={`w-2 h-2 rounded-full bg-[#F1E7D0] transition ${
                  idx === selected ? "opacity-100" : "opacity-60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Title and Menu */}
        <div className="text-start mb-2">
          <h2 className="ms-[5.4rem] ps-2 text-[#F1E7D0] text-[4rem] lg:text-[5rem] font-cabrito mb-6 header-title amenities_title">
            Amenities
          </h2>
          <div className="flex justify-center gap-12 flex-wrap text-lg amenity-button-container ">
            {amenities.map((item, idx) => (
              <button
                key={idx}
                ref={(el) => (menuRefs.current[idx] = el)}
                onClick={() => setSelected(idx)}
                className={`transition font-light text-[2rem] font-cabrito mb-1 pb-0 amenity-button ${
                  idx === selected ? "text-[#F1E7D0]" : "text-[#F1E7D0]/50"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content Block */}
        <div className="max-w-[100%] mt-6 pt-0 mx-auto grid grid-cols-1 sm:grid-cols-[0.8fr_1fr_1fr] gap-6 px-4 sm:px-8 lg:px-16 items-start content-grid ">
          {/* Mobile-only Description */}
          <div className="sm:hidden col-span-full text-lg font-light font-cabrito leading-tight px-1 text-[#F1E7D0]">
            {selectedAmenity.description}
          </div>

          {/* Image block */}
          <div
            className="h-64 w-full sm:w-64 sm:h-80 bg-cover bg-center rounded-md mx-auto"
            style={{ backgroundImage: `url(${selectedAmenity.imageLarge})` }}
          />

          {/* Desktop-only Description */}
          <div className="hidden sm:flex flex-col justify-between h-[20rem]">
            {/* Description at the top */}
            <div className="text-lg font-light leading-tight font-cabrito text-[#F1E7D0] mt-4">
              {selectedAmenity.description}
            </div>

            {/* Counter at the bottom */}
            <div className="text-[#F1E7D0] text-3xl sm:text-4xl font-cabrito">
              {String(selected + 1).padStart(2, "0")}/
              {String(amenities.length).padStart(2, "0")}
            </div>
          </div>

          {/* Side Image (desktop only) */}
          <div
            className="hidden sm:block h-24 w-24 md:h-32 md:w-32 bg-cover bg-center rounded-md mx-auto"
            style={{ backgroundImage: `url(${selectedAmenity.imageSmall})` }}
          />
        </div>

        {/* Counter and Arrows */}
        <div className="absolute bottom-[1.5rem] md:bottom-[7.5rem] left-1/2 -translate-x-1/2 w-full max-w-6xl px-4 sm:px-8 md:px-16 z-20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div></div>
            {/* Counter */}
            <div className="md:hidden text-[#F1E7D0] text-3xl sm:text-4xl font-cabrito">
              {String(selected + 1).padStart(2, "0")}/
              {String(amenities.length).padStart(2, "0")}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="border border-[#F1E7D0] text-[#F1E7D0] rounded-full p-2 sm:p-2.5 hover:bg-[#F1E7D0]/10 transition"
                aria-label="Previous Amenity"
              >
                <ArrowLeft />
              </button>
              <button
                onClick={handleNext}
                className="border border-[#F1E7D0] text-[#F1E7D0] rounded-full p-2 sm:p-2.5 hover:bg-[#F1E7D0]/10 transition"
                aria-label="Next Amenity"
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
