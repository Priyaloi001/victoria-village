import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-[100vw] bg-[#F7E7CE] overflow-hidden">
      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes slowZoom {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.09);
            }
          }

          .animated-scale {
            animation: slowZoom 15s ease-in-out infinite;
            transform-origin: center center;
          }

          @media (max-width: 768px) {
            // .hero-heading {
            //   line-height: 1.1;
            //   text-align: left !important;
            //   white-space: normal;
            //   margin-top: 6rem !important;
            //   /* Make sure visible */
            //   margin-right: 1.3rem;
            //   z-index: 30;
            // }

            // .hero-tagline {
            //   font-size: 12.4px !important;
            //   line-height: 1.3 !important;
            //   max-width: 90% !important;
            //   margin: 3rem auto 2rem 10.7rem !important;
            //   text-align: left !important;
            //   position: relative;
            //   z-index: 30;
            // }

            // .scroll-button {
            //   margin: 0 auto 3rem 10rem !important;
            //   display: flex !important;
            //   justify-content: center !important;
            //   position: relative;
            //   z-index: 30;
            // }

            // .hero-container {
            //   bottom: auto !important; /* remove fixed bottom */
            //   top: 50% !important;     /* place roughly middle of viewport */
            //   left: 50% !important;
            //   transform: translate(-50%, -50%) !important; /* center */
            //   max-width: 90vw !important;
            //   width: 90vw !important;
            //   padding: 0 1rem !important;
            //   display: flex !important;
            //   flex-direction: column !important;
            //   align-items: center !important;
            //   margin-bottom: 0 !important;
            // }

            /* ONLY MOBILE: adjust image container height for 4:5 ratio */
            .image-container-mobile-ratio {
              height: calc(88vw * 1.25) !important; /* 88vw width * 1.25 = 4:5 ratio height */
            }

            /* Override marginTop on mobile */
            .mobile-margin-top {
              margin-top: 7rem !important;
            }

            /* Overlay z-index lower so text shows on top */
            .image-overlay {
              z-index: 20 !important;
            }
          }
        `}
      </style>

      {/* Logo / Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="absolute mt-[5.6rem] md:mt-[6.2rem] px-5 sm:px-10 xl:px-20 text-[#946846] text-[2.6rem] md:text-[4.6rem] lg:text-[90px] xl:text-[9.2rem] font-cabrito mb-0 pb-0 z-10 text-left">
          Victoria Village
        </h1>
      </motion.div>
      {/* Image Container */}
      <div
        className="relative mx-auto w-[88vw] overflow-hidden mt-[8.2rem] md:mt-[16rem] "
        style={{ height: "calc(88vw * 0.6)" }}
      >
        <img
          src="/assets/images/hero_img3.png"
          alt="Luxury Villa"
          className="w-[100%] h-full object-cover animated-scale"
        />

        {/* Added class for overlay so we can control z-index */}
        <div className="absolute inset-0 bg-[#403B36] opacity-20 image-overlay"></div>
      </div>

      {/*  Tagline + Scroll */}
      <div className="sm:absolute left-1/2 sm:transform sm:-translate-x-1/2 bottom-10 xl:bottom-[23rem]  w-full sm:max-w-[88vw] z-30 mt-10 sm:mt-12 md:mt-4 flex flex-col text-white text-center hero-container">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -18, 0] }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
            delay: 1, // start after tagline fade-in (1s duration + 0.2s delay)
          }}
          className="relative flex flex-col items-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 10, delay: 0.2 }}
            className="text-lg md:text-[35px] text-left text-black sm:text-white max-w-2xl mx-auto sm:mt-40 mb-1 sm:me-[11.5rem] font-cabrito hero-tagline"
          >
            Live where elegance <br />
            meets elevation
          </motion.p>
        </motion.div>

        {/* Scroll Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-1 mb-2"
        >
          <motion.button
            onClick={() => {
              const scrollTarget = window.scrollY + window.innerHeight;
              const startTime = performance.now();
              const duration = 1200;

              const easeInOutQuad = (t) =>
                t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

              const animateScroll = (currentTime) => {
                const timeElapsed = currentTime - startTime;
                const progress = Math.min(timeElapsed / duration, 1);
                const ease = easeInOutQuad(progress);

                window.scrollTo(
                  0,
                  window.scrollY + (scrollTarget - window.scrollY) * ease
                );

                if (progress < 1) {
                  requestAnimationFrame(animateScroll);
                }
              };

              requestAnimationFrame(animateScroll);
            }}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-row mx-auto items-center text-black sm:text-white group focus:outline-none scroll-button sm:mt-24 sm:me-[15rem]"
          >
            <span className="text-[10px] md:text-[30px] group-hover:text-[#E4A861] transition-colors font-cabrito">
              Begin Your Ascent
            </span>
            <ChevronDown
              size={24}
              className="group-hover:text-[#E4A861] transition-colors"
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
