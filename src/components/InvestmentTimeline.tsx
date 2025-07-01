import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowUpCircle, ArrowDownCircle } from "lucide-react";

const steps = [
  {
    title: "10% – Reservation Payment",
    description:
      "Secure your villa with confidence. A reservation payment locks in your unit and begins your personalised journey with us.",
  },
  {
    title: "20% – Upon Signing the Sale Agreement",
    description:
      "The foundation of trust. This payment formalises your commitment and sets the legal and financial framework for the build.",
  },
  {
    title: "15% – Upon Foundation Installation",
    description:
      "Your investment becomes tangible. With the foundation laid, the vision begins taking physical shape—strong, steady, and structurally sound.",
  },
  {
    title: "25% – Upon Wall Installation",
    description:
      "Walls go up. So does value. This stage reflects major visible progress and marks the halfway point of your investment journey.",
  },
  {
    title: "25% – Upon Roof Installation",
    description:
      "Now it’s a home. The structure is sealed, and the final phase of detailing begins. You’re almost there.",
  },
  {
    title: "5% – Upon Handover & Company Transfer",
    description:
      "The keys. The company. The ownership. This final step formalises the transfer and welcomes you into the Victoria Village community.",
  },
];

const InvestmentTimeline = () => {
  const [current, setCurrent] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="investment"
      className="section bg-[#ffffff] relative overflow-hidden pt-10 mt-64 mb-0 pb-0 "
    >
      <div className="container-custom relative z-10 mt-4 md:mt-0 mb-0 pb-0 px-0  xl:px-20 w-[88vw] mx-auto xl:w-[100vw]">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={itemVariants}
            className="
              text-left 
              text-[#946847] 
              text-[2.3rem]  
              md:text-[3rem]      /* mobile base size */
              lg:text-[5rem]    /* tablet and above */
              xl:text-[7rem]    /* desktop and larger */
              leading-[1.1] 
              font-cabrito 
              mb-4
              ms-4
            "
          >
            Clear Steps, <br />
            Smart Investment
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-left text-[#946847] font-cabrito max-w-[58rem] mt-10 ms-4 mr-auto mb-16 text-lg font-light leading-tight tracking-normal"
          >
            We believe in clarity, not fine print. Your journey with Victoria
            Village is mapped out from day one—with a structured,
            milestone-based investment plan that keeps you informed, involved,
            and in control at every stage of development.
          </motion.p>

          {/* Responsive card container */}
          <div
            className="
              relative
              w-[94%] 
              ms-6
              sm:ms-2
              md:ms-5
              me-10 
              mx-auto 
              h-[100%] 
              max-[639px]:w-[80%] 
              max-[639px]:h-[100%]
            "
          >
            {/* Bottommost layer */}
            <div className="absolute top-6 left-6 w-full h-[100%] rounded-[2rem] bg-[#e4d2c3]/60 z-0 max-[639px]:top-3 max-[639px]:left-2 max-[639px]:rounded-2xl"></div>

            {/* Middle layer */}
            <div className="absolute top-3 left-3 w-full h-[100%] rounded-[2rem] bg-[#d6bfae] z-10 max-[639px]:top-1 max-[639px]:left-1 max-[639px]:rounded-2xl"></div>

            {/* Top card */}
            <motion.div
              key={current} // This forces re-mount and animation on step change
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="relative bg-[#946847] text-white px-6 py-2 rounded-[2rem] shadow-xl h-[100%] z-20
    max-[639px]:rounded-2xl
    max-[639px]:px-4
    max-[639px]:py-4
    max-[639px]:h-auto
  "
            >
              {/* Step number */}
              <div
                className="absolute text-[#f7e7cd] top-6 right-6 text-5xl font-light font-cabrito
    max-[639px]:text-3xl max-[639px]:top-3 max-[639px]:right-3
  "
              >
                {`0${current + 1}/0${steps.length}`}
              </div>

              {/* Step content */}
              <h3
                className="text-[3rem] text-[#f7e7cd] font-cabrito ms-5 mb-4 mt-20
    max-[639px]:text-[1.8rem]
    max-[639px]:mt-12
    max-[639px]:ms-3
    max-[639px]:mb-2
   "
              >
                {steps[current].title}
              </h3>
              <p
                className="text-sm max-w-[32rem] font-cabrito text-[#f7e7cd] ms-5
    max-[639px]:max-w-full
    max-[639px]:ms-3
    max-[639px]:text-base
    
  "
              >
                {steps[current].description}
              </p>

              {/* Navigation Arrows */}
              <div
                className="absolute bottom-6 right-6 flex flex-col gap-2
    max-[639px]:static max-[639px]:flex-row max-[639px]:justify-center max-[639px]:gap-4 max-[639px]:mt-6
  "
              >
                <button
                  onClick={() => setCurrent((prev) => Math.max(0, prev - 1))}
                  disabled={current === 0}
                  aria-label="Previous Step"
                  className="hover:text-[#f7e7cd] disabled:opacity-50"
                >
                  <ArrowUpCircle size={28} />
                </button>
                <button
                  onClick={() =>
                    setCurrent((prev) => Math.min(steps.length - 1, prev + 1))
                  }
                  disabled={current === steps.length - 1}
                  aria-label="Next Step"
                  className="hover:text-[#f7e7cd] disabled:opacity-50"
                >
                  <ArrowDownCircle size={28} />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div variants={itemVariants} className="mt-20">
            <h3
              className="text-right font-cabrito text-4xl md:text-5xl text-[#946847] mb-4 me-4
              max-[639px]:text-left max-[639px]:text-4xl max-[639px]:me-2 max-[639px]:ms-2
            "
            >
              Designed to Rise in Value
            </h3>
            <p
              className="text-right text-[#946847] font-cabrito text-lg font-light max-w-[53rem] ms-auto text-[#8d6e64] me-4
              max-[639px]:text-left max-[639px]:max-w-full max-[639px]:me-2 max-[639px]:ms-2 max-[639px]:text-base
            "
            >
              Victoria Village isn’t just a beautiful place to live—it’s a
              high-performing asset. Based on current market trends, similar
              properties in Koh Samui appreciate by up to 20% upon completion,
              with annual rental yields between 12–15%. Explore the projections
              below to see how your investment could grow over time.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentTimeline;
