import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const views = [
  {
    id: "exterior",
    name: "Bedroom",
    image:
      "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Stunning modern architecture with infinity pool overlooking the ocean",
  },
  {
    id: "interior",
    name: "Walk-in Closet",
    image:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Spacious open-concept living areas with premium finishes",
  },
  {
    id: "bedroom",
    name: "Living Room",
    image:
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Luxurious master suite with panoramic ocean views",
  },
  {
    id: "home-office",
    name: "Home Office",
    image:
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Luxurious master suite with panoramic ocean views",
  },
];

const VillaShowcase = () => {
  const [activeView, setActiveView] = useState("exterior");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Track window width to decide mobile or desktop
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 640 : false
  );

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 640);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Variants for animation (unchanged)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="villas" className="section bg-white relative overflow-hidden">
       <style>
        {`
          
            @media(min-width:2300px){
            .villas-inner{
            max-width: 1536px;
            padding-left: 5rem;
        padding-right: 5rem;
        margin:auto;
            }
        .villas-inner h1{
        padding-left: 0;
        padding-right: 0;
        }
        .villas-inner .content-div{
        display:block;
        }
            }
        `}
      </style>
<div className="villas-inner">
      <motion.h1
        variants={itemVariants}
        className="section-title px-4 md:px-[4.8rem] 3xl:px-0 font-cabrito text-left text-[3rem] md:text-[7rem] leading-[1.2]"
      >
        Experience the Villas
      </motion.h1>

      <div className="container-custom relative z-10 md:ms-0 2xl:px-0">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        ></motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          {/* Left column */}
          <div className="w-full h-96 md:h-[40rem] md:order-2 ">
            <iframe
              src="https://mls.kuu.la/share/collection/7cQVz?fs=1&vr=1&sd=0&initload=1&thumbs=1"
              title="3D Interactive Viewer"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              allow="xr-spatial-tracking; gyroscope; accelerometer"
              style={{ borderRadius: "8px" }}
            />
          </div>

          {/* Right column */}
          <div className="text-end w-full px-0 md:px-0 md:order-1">
            {/* Desktop Layout */}
            {!isMobile && (
              <div className=" rounded-lg p-2 sm:p-3 md:p-0 ">
                <div className="content-div rounded-lg pt-6 md:pt-8 flex items-center justify-center h-full 3xl:block">
                  <p className="font-cabrito text-gray-800 text-lg font-light leading-tight text-left max-w-md mx-0 me-6">
                    Immerse yourself in the villa through our interactive 3D
                    experience.
                    <br /> <br />
                    Explore every corner, feel the space, and envision your life
                    here from the comfort of your screen.
                    <br />
                    <br />
                    Step inside and discover the future of luxury living.
                  </p>
                </div>

                <div className=" hidden flex flex-row md:flex-col gap-2">
                  {views.map((view) => (
                    <div key={view.id} className="w-full">
                      <button
                        onClick={() => setActiveView(view.id)}
                        className={`w-full px-3 py-2 sm:p-3 h-10 sm:h-16 whitespace-normal flex items-center justify-end text-right transition-all font-cabrito text-xs sm:text-2xl leading-tight rounded-[5px] ${
                          activeView === view.id
                            ? "bg-primary text-white"
                            : "bg-neutral-200 hover:bg-primary/10 text-gray-800"
                        }`}
                      >
                        {view.name}
                      </button>

                      <AnimatePresence initial={false}>
                        {activeView === view.id && (
                          <motion.div
                            key="desc"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mt-2 pr-2"
                          >
                            <p className="hidden sm:block text-right font-cabrito text-sm sm:text-base text-gray-800 leading-relaxed ms-4 sm:ms-10">
                              {view.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Mobile Layout */}
            {isMobile && (
              <div className="hidden bg-neutral-100 rounded-lg p-2 sm:p-3 md:p-4 md:pb-1">
                <div className="flex flex-row md:flex-col gap-2">
                  {views.map((view) => (
                    <div
                      key={view.id}
                      className="w-full flex items-center"
                      style={{ height: 40 }} // fixed height on mobile
                    >
                      <button
                        onClick={() => setActiveView(view.id)}
                        className={`w-full px-3 py-2 sm:p-3 whitespace-normal flex items-center justify-end text-center transition-all font-cabrito text-xs sm:text-2xl leading-tight rounded-[5px] ${
                          activeView === view.id
                            ? "bg-primary text-white"
                            : "bg-neutral-200 hover:bg-primary/10 text-gray-800"
                        }`}
                        style={{ height: "100%" }} // fill container height
                      >
                        {view.name}
                      </button>

                      <AnimatePresence initial={false}>
                        {activeView === view.id && (
                          <motion.div
                            key="desc"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mt-2 pr-2"
                          >
                            <p className="hidden sm:block text-right font-cabrito text-sm sm:text-base text-gray-800 leading-relaxed ms-4 sm:ms-10">
                              {view.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default VillaShowcase;
