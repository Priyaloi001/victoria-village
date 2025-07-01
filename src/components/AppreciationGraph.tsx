import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const rentalYieldData = [
  { year: "Year 1", yield: 7 },
  { year: "Year 2", yield: 8 },
  { year: "Year 3", yield: 10 },
  { year: "Year 4", yield: 12 },
  { year: "Year 5", yield: 15 },
];

const propertyValueData = [
  { year: "Year 1", value: 100 },
  { year: "Year 2", value: 110 },
  { year: "Year 3", value: 125 },
  { year: "Year 4", value: 145 },
  { year: "Year 5", value: 170 },
];

const AppreciationGraph = () => {
  const [activeTab, setActiveTab] = useState("rental");

  // Use one intersection observer for the entire card area to trigger count-up
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="section bg-white mt-0 pt-1">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        ></motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Tab selector */}
          <motion.div
            variants={itemVariants}
            className="flex justify-start mb-8"
          >
            <div className="ms-2 md:ms-16 bg-[#936846] rounded-full p-1 h-8 inline-flex">
              <button
                onClick={() => setActiveTab("rental")}
                className={`px-4 py-0 rounded-full text-sm font-medium transition-all ${
                  activeTab === "rental"
                    ? "bg-[#f7e7cd] text-[#946847]"
                    : "hover:bg-[#f7e7cd]/10 text-[#fff]/40"
                }`}
              >
                Rental Yield
              </button>
              <button
                onClick={() => setActiveTab("value")}
                className={`px-4 py-0 rounded-full text-sm font-medium transition-all ${
                  activeTab === "value"
                    ? "bg-[#f7e7cd] text-[#946847]"
                    : "hover:bg-[#f7e7cd]/10 text-[#fff]/40"
                }`}
              >
                Property Value
              </button>
            </div>
          </motion.div>

          {/* Graph */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg md:p-10"
          >
            <div className="h-[280px] md:h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={
                    activeTab === "rental" ? rentalYieldData : propertyValueData
                  }
                  margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis
                    tickFormatter={(value) =>
                      activeTab === "rental" ? `${value}%` : `${value}%`
                    }
                  />
                  <Tooltip
                    formatter={(value) =>
                      activeTab === "rental"
                        ? [`${value}%`, "Annual Yield"]
                        : [`${value}%`, "Growth from initial"]
                    }
                  />
                  <Area
                    type="monotone"
                    dataKey={activeTab === "rental" ? "yield" : "value"}
                    stroke="#946847"
                    fill="#f7e7cd"
                    fillOpacity={0.3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Stat cards with count-up */}
            <div className="mt-6 grid grid-cols-3 gap-4 text-center mx-auto max-w-full px-2 md:px-0 md:mx-14 md:gap-10 xl:gap-24 md:grid-cols-3">
              <div className="bg-[#946847] flex flex-col justify-between p-2 md:p-4 rounded-[0.75rem] md:rounded-[1rem] h-[100px] md:h-auto">
                <h4 className="font-cabrito text-[#f7e7cd] text-[0.45rem] md:text-[15px] leading-snug">
                  Annual Rental Yield
                </h4>
                <div className="md:hidden mt-1">
                  <p className="text-[0.75rem] font-cabrito text-[#f7e7cd] leading-none">
                    Upto
                  </p>
                  <p className="text-[1.5rem] font-cabrito text-[#f7e7cd] leading-none mt-[0.2rem]">
                    {inView ? (
                      <CountUp end={15} duration={3} suffix="%" />
                    ) : (
                      "0%"
                    )}
                  </p>
                </div>
                <p className="hidden md:block text-[2.2rem] font-cabrito text-[#f7e7cd]">
                  Upto{" "}
                  {inView ? <CountUp end={15} duration={3} suffix="%" /> : "0%"}
                </p>
              </div>

              <div className="bg-[#946847] flex flex-col justify-between p-2 md:p-4 rounded-[0.75rem] md:rounded-[1rem] h-[100px] md:h-auto">
                <h4 className="font-cabrito text-[#f7e7cd] text-[0.45rem] md:text-[15px] leading-snug">
                  5-Year Appreciation
                </h4>
                <div className="md:hidden mt-1">
                  <p className="text-[0.75rem] font-cabrito text-[#f7e7cd] leading-none">
                    Upto
                  </p>
                  <p className="text-[1.5rem] font-cabrito text-[#f7e7cd] leading-none mt-[0.2rem]">
                    {inView ? (
                      <CountUp end={70} duration={3} suffix="%" />
                    ) : (
                      "0%"
                    )}
                  </p>
                </div>
                <p className="hidden md:block text-[2.2rem] font-cabrito text-[#f7e7cd]">
                  Upto{" "}
                  {inView ? <CountUp end={70} duration={3} suffix="%" /> : "0%"}
                </p>
              </div>

              <div className="bg-[#946847] flex flex-col justify-between p-2 md:p-4 rounded-[0.75rem] md:rounded-[1rem] h-[100px] md:h-auto">
                <h4 className="font-cabrito text-[#f7e7cd] text-[0.45rem] md:text-[15px] leading-snug">
                  Management Fees
                </h4>
                <div className="md:hidden mt-1">
                  <p className="text-[0.75rem] font-cabrito text-[#f7e7cd] leading-none">
                    Only
                  </p>
                  <p className="text-[1.5rem] font-cabrito text-[#f7e7cd] leading-none mt-[0.2rem]">
                    {inView ? (
                      <CountUp end={10} duration={3} suffix="%" />
                    ) : (
                      "0%"
                    )}
                  </p>
                </div>
                <p className="hidden md:block text-[2.2rem] font-cabrito text-[#f7e7cd]">
                  Only{" "}
                  {inView ? <CountUp end={10} duration={3} suffix="%" /> : "0%"}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppreciationGraph;
