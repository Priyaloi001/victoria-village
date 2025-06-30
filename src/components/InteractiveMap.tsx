import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { ArrowUpCircle, ArrowDownCircle } from "lucide-react";

// Location data
const locationData = [
  {
    title: "Victoria Village",
    description:
      "Exclusive villa community in Lamai. Luxurious residences surrounded by tropical gardens, offering privacy and easy access to local amenities.",
    coords: { lat: 9.4857074, lng: 100.0384719 },
  },
  {
    title: "Windfield International School",
    description:
      "International school near Lamai, Ko Samui. Offering high-quality education with a diverse curriculum.",
    coords: { lat: 9.4767366, lng: 100.0430948 },
  },
  {
    title: "Lotus Supermarket",
    description:
      "Convenient supermarket in Lamai area. Stocked with a variety of fresh produce, groceries, and daily essentials.",
    coords: { lat: 9.471498, lng: 100.0450441 },
  },
  {
    title: "Koh Fit",
    description:
      "Fitness center in Koh Samui. Equipped with modern gym equipment and offering various classes to suit all fitness levels.",
    coords: { lat: 9.4792006, lng: 100.0429773 },
  },
  {
    title: "Luuma Sauna",
    description:
      "Wellness and sauna center. A peaceful retreat offering traditional sauna treatments to help you relax and rejuvenate.",
    coords: { lat: 9.468434, lng: 100.0459831 },
  },
  {
    title: "Lamai Driving Range",
    description:
      "Golf driving range in Lamai. A scenic outdoor spot to practice your swing, with equipment rentals and coaching available.",
    coords: { lat: 9.4817575, lng: 100.0429942 },
  },
];

// Icon with "V" for Victoria Village
const victoriaIcon = (isActive) =>
  L.divIcon({
    className: "",
    html: `<div style="
      width: 34px;
      height: 34px;
      border-radius: 50%;
      border: 1.4px solid #856242;  /* Thicker brown outline */
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${isActive ? "#016754" : "#009870"};
      font-weight: bold;
      font-size: 24px;
      user-select: none;
      font-family: 'Cabrito', sans-serif;
      background-color: transparent;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.4);
      box-sizing: border-box;
    ">V</div>`,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
    popupAnchor: [0, -10],
  });

// Use existing circle icon as fallback
const getCircleIcon = (isActive) =>
  L.divIcon({
    className: "",
    html: `<div style="
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background-color: ${isActive ? "#3B82F6" : "#856242"};
      border: 2px solid ${isActive ? "#2563EB" : "#856242"};
      box-shadow: 0 0 4px rgba(0,0,0,0.3);
    "></div>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
    popupAnchor: [0, -10],
  });

const LocationHighlight = () => {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section
      id="location"
      className="relative bg-[#00332D] text-white py-20 mt-0 pt-4 pb-0 md:pb-4 mb-0"
    >
      <div className="container mx-auto px-6 md:px-16 max-w-screen-xl md:mb-2 md:pb-36 sm:pb-0 sm:mb-0">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="order-1 md:order-2 text-right mb-0 pb-0">
            <h2 className="text-4xl md:text-5xl font-cabrito text-[#F1E7D0] leading-tight mb-4">
              Close to Everything. <br />
              Far from Ordinary.
            </h2>
            <p className="text-lg font-light font-cabrito text-[#F1E7D0] mb-10 max-w-[24rem] ml-auto leading-[1.2] mt-14 mb-0 pb-0">
              Discover the convenience of Victoria Village’s location. From
              international schools and hospitals to high-end supermarkets and
              Samui’s best beaches—everything you need is just minutes away.
              <br />
              <br />
              Explore the map to see how perfectly placed your future home truly
              is.
            </p>
          </div>

          {/* Map */}
          <div className="order-2 md:order-1 relative w-full md:w-1/2 h-[400px] rounded-xl overflow-hidden z-10 mb-4 ms-0 md:ms-10 mb-14 md:mb-0">
            <MapContainer
              center={[9.477, 100.052]}
              zoom={13.5}
              style={{ height: "100%", width: "100%" }}
              scrollWheelZoom={false}
            >
              <TileLayer
                url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=1nrHwCHPEaMZJEjrErah"
                attribution='&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
              />

              {locationData.map((loc, idx) => {
                const isActive = activeCard === idx;
                // If it's Victoria Village, use the V icon, else circle icon
                const icon =
                  loc.title === "Victoria Village"
                    ? victoriaIcon(isActive)
                    : getCircleIcon(isActive);

                return (
                  <Marker
                    key={idx}
                    position={[loc.coords.lat, loc.coords.lng]}
                    icon={icon}
                    eventHandlers={{
                      click: () => setActiveCard(idx),
                    }}
                  >
                    <Popup>{loc.title}</Popup>
                  </Marker>
                );
              })}
            </MapContainer>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="relative sm:absolute bottom-0 sm:bottom-[-16em] z-50 mx-4 sm:mx-20 mt-0 pt-0 h-[6rem] sm:h-[22rem]">
        <div className="hidden sm:grid grid-cols-6 gap-6 px-0">
          {locationData.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveCard(index)}
              className={`cursor-pointer rounded-2xl border border-white/20 backdrop-blur-md p-2 h-[20rem] flex flex-col justify-between transition-all duration-300 ${
                activeCard === index
                  ? "bg-[#936846]/90 opacity-100"
                  : "bg-[#936846]/80 opacity-60"
              }`}
            >
              <h3 className="text-7xl text-[#F1E7D0] font-cabrito">
                {String(index + 1).padStart(2, "0")}
              </h3>
              <div>
                <h4 className="text-[#F1E7D0] font-cabrito text-[1.3rem] mb-2">
                  {item.title}
                </h4>
                <p className="text-[12px] text-[#F1E7D0] font-cabrito mb-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="sm:hidden ms-8 absolute bottom-[-2em] w-[80%] h-full">
          {/* Background shadow card for stacked look */}
          <div
            className="rounded-2xl border border-white/10 backdrop-blur-md p-3 h-[20rem] w-full absolute top-2 left-2 z-10"
            style={{
              backgroundColor: "rgba(147, 104, 70, 0.4)",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
          ></div>

          {/* Active card on top */}
          <div
            className="rounded-2xl border border-white/20 backdrop-blur-md p-3 h-[20rem] flex flex-col justify-between transition-all duration-300 w-full relative z-20 shadow-xl"
            style={{
              backgroundColor: "rgba(147, 104, 70, 0.9)",
            }}
          >
            <h3 className="text-7xl text-[#F1E7D0] font-cabrito">
              {String(activeCard + 1).padStart(2, "0")}
            </h3>

            <div>
              <h4 className="text-[#F1E7D0] font-cabrito text-[1.75rem] mb-2">
                {locationData[activeCard].title}
              </h4>
              <p className="text-[12px] text-[#F1E7D0] font-cabrito mb-2">
                {locationData[activeCard].description}
              </p>
            </div>

            {/* 🔽 Arrows inside card */}
            <div className="flex justify-end gap-2 mt-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveCard((prev) => Math.max(0, prev - 1));
                }}
                disabled={activeCard === 0}
                aria-label="Previous"
                className="text-[#F1E7D0] hover:text-white disabled:opacity-30"
              >
                <ArrowUpCircle size={24} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveCard((prev) =>
                    Math.min(locationData.length - 1, prev + 1)
                  );
                }}
                disabled={activeCard === locationData.length - 1}
                aria-label="Next"
                className="text-[#F1E7D0] hover:text-white disabled:opacity-30"
              >
                <ArrowDownCircle size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationHighlight;
