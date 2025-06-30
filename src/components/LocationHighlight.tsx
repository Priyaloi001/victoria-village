import React, { useEffect, useState } from "react";

const LocationHighlight = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Adjust this factor to control parallax speed (0.3 is gentle)
  const parallaxSpeed = 0.06;

  return (
    <section id="location" className="relative w-[100%] bg-[#F7E7CE]">
      <style>
        {`
          @media (max-width: 768px) {
            .mobile-line-height-reduced {
              line-height: 37px !important;
            }
          }
            @media(min-width:1910px){
            .location_content{
            padding-inline-start: 42rem;
            margin-inline-end: 38rem;
            }
            }
        `}
      </style>

      <div className="overflow-visible relative h-[auto] md:h-[60rem] bg-[#F7E7CE]">
        <div className="grid grid-cols-1 md:grid-cols-[62fr_38fr] gap-12 w-[88vw] mx-auto">
          <div className="p x-5 md:p x-[5rem]">
            <h2
              className="section-title font-cabrito text-[#946846] text-3xl md:text-5xl mt-6 md:mt-10 mobile-line-height-reduced"
              style={{ lineHeight: "60px" }}
            >
              Koh Samui <br />
              Quietly bold. <br />
              Beautifully positioned.
            </h2>

            <p className="text-lg font-light mb-6 mt-6 md:mt-10 font-cabrito text-[#946846] leading-tight md:leading-[1.2] mx-1">
              Tucked in the gentle curve of the Gulf of Thailand, this island
              isn't just beautiful – it's quietly magnetic. Lush hills fall into
              white sand beaches. Coconut groves meet sunset coastlines. And in
              between it all, a thriving global community is forming – drawn not
              only to the island's tropical rhythm, but to the clarity of
              lifestyle it offers.
            </p>

            {/* 👉 Mobile image placeholder between paragraphs */}
            <div className="block md:hidden w-full max-w-md mx-auto mb-1">
              <div className="relative w-full pt-[80%] rounded-xl shadow-lg overflow-hidden">
                <img
                  src="https://cdn.cosmos.so/85e9c666-aaa3-416d-b562-d8e01c04dc36?format=jpeg"
                  alt="Koh Samui Mobile View"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end items-start">
            {/* Desktop Visual Layers */}
            <div className="hidden md:block absolute right-0 w-[25rem]">
              <img
                src="https://cdn.cosmos.so/28480f44-498b-4db0-9d48-0cffef30e580?format=jpeg"
                alt="Right Parallax Image"
                className="absolute top-[13rem] right-0 w-[25rem] h-[40rem] object-cover shadow-lg z-10"
                style={{
                  transform: `translateY(${offsetY * parallaxSpeed}px)`,
                }}
              />

              <div className="w-full h-auto object-cover shadow-xl relative z-10 bg-black" />
            </div>

            <div className="hidden md:block absolute top-[36rem] bg-white h-[50rem] w-[100%] left-0 z-5"></div>

            {/* Desktop Paragraph */}
            <p className="hidden md:block absolute text-lg font-light text-right mb-2 top-[42rem] ps-[24rem] me-[27rem] font-cabrito text-[#946846] leading-[1.4] location_content">
              Once a hidden gem, Koh Samui is now a globally recognised
              destination — beautiful, well-connected, and built for living.
              With up to 20% property appreciation projected upon completion and
              estimated rental yields of 12–15%, it offers more than lifestyle—
              it offers strong, <br />
              near-term returns. At Victoria Village, you’re not just buying
              property — you’re stepping into elevated island living with
              strategic upside.
            </p>

            <div className="hidden md:block absolute text-center mb-8 top-[82rem] ps-[30rem] pe-[2rem] text-[#946846]">
              <button
                className="btn btn-secondary inline-flex items-center gap-2 font-cabrito bg-[#946846] text-white p-2 px-8 me-2"
                style={{ borderRadius: "3rem" }}
              >
                Why Invest in Koh Samui
              </button>
            </div>

            {/* --- Mobile-friendly layout --- */}
            <div className="block md:hidden px-5 pt-0 mt-0">
              <p className="text-lg font-light text-[#946846] leading-tight font-cabrito text-right">
                Once a hidden gem, Koh Samui is now a globally recognised
                destination — beautiful, well-connected, and built for living.
                With up to 20% property appreciation projected upon completion
                and estimated rental yields of 12–15%, it offers more than
                lifestyle — it offers strong, near-term returns. At Victoria
                Village, you’re not just buying property — you’re stepping into
                elevated island living with strategic upside.
              </p>

              <div className="text-center">
                <button
                  onClick={() =>
                    window.open(
                      "https://medium.com/@rogerthatvivek/why-koh-samui-is-quietly-becoming-southeast-asias-smartest-real-estate-play-58452ae0d143",
                      "_blank"
                    )
                  }
                  className="mt-6 mb-7 btn bg-[#946846] text-white py-2 px-6 rounded-full font-cabrito"
                >
                  Why Invest in Koh Samui
                </button>
              </div>
            </div>

            {/* Decorative block at bottom-left — hidden on mobile */}
            <div className="hidden md:block absolute left-0 w-[22rem]">
              <img
                src="https://cdn.cosmos.so/85e9c666-aaa3-416d-b562-d8e01c04dc36?format=jpeg"
                alt="Koh Samui Aerial View"
                className="absolute top-[29rem] left-0 w-[22rem] h-[22rem] object-cover shadow-lg z-0"
                style={{
                  transform: `translateY(${offsetY * parallaxSpeed}px)`,
                }}
              />
              <div className="w-full h-auto object-cover shadow-xl relative z-10 bg-black" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationHighlight;
