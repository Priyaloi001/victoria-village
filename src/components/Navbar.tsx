import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Koh Samui", href: "#location" },
  { name: "Villas", href: "#villas" },
  { name: "Amenities", href: "#amenities" },
  { name: "Investment", href: "#investment" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-7xl px-4 md:px-6 py-2 md:py-3 rounded-3xl border shadow-md ${
        scrolled
          ? "backdrop-blur-lg bg-white/10 border-[0.5px] border-white/40"
          : "bg-[#F7F3E3]/80 border-[0.5px]"
      }`}
      style={{ borderRadius: "4rem" }}
    >
      <div
        className="container-custom flex flex-wrap md:flex-nowrap items-center gap-2 relative"
        style={{ position: "relative" }}
      >
        {/* Left placeholder for mobile (same width as hamburger) */}
        <div className="md:hidden w-10 flex-shrink-0" />

        {/* Logo */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`absolute left-[9rem] transform -translate-x-1/2 md:static md:transform-none flex items-center gap-2 font-serif font-semibold text-xl md:text-2xl transition-colors duration-300 ${
            scrolled ? "text-primary" : "text-white"
          }`}
          style={{ zIndex: 60 }}
        >
          <div className="relative h-11 w-32 md:w-40">
            <img
              src="/assets/logo_default.svg"
              alt="Victoria Village Logo"
              className="absolute left-0 top-1/2 -translate-y-1/2 scale-110 h-14 md:h-16 w-auto object-contain"
            />
          </div>
        </motion.a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex flex-grow justify-center">
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex space-x-8"
          >
            {navLinks.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.1 },
                }}
              >
                <a
                  href={link.href}
                  className={`font-medium transition-all duration-300 hover:text-accent relative group ${
                    scrolled ? "text-black" : "text-black"
                  }`}
                  style={{
                    opacity: 0.6, // Reduce opacity for middle options
                  }}
                >
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </nav>

        {/* Book a Call button - visible only on desktop */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`transition-all duration-300 hidden md:block ${
            scrolled ? "text-primary" : "text-white"
          }`}
        >
          <a
            href="#contact"
            className="inline-block px-6 py-2 text-center font-small text-black border-2 border-white rounded-full shadow-md hover:bg-accent transition-all duration-300"
            style={{
              fontSize: "0.875rem", // Adjust size of the button
              opacity: 1,
            }}
          >
            Book a call
          </a>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`md:hidden ml-auto w-10 flex-shrink-0 focus:outline-none ${
            scrolled ? "text-primary" : "text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden backdrop-blur-lg bg-white/10 border-t border-white/20 px-6 pb-4"
          >
            <nav className="container-custom py-4">
              <ul className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: { delay: index * 0.1 },
                    }}
                  >
                    <a
                      href={link.href}
                      className="block font-medium text-primary hover:text-accent transition-colors duration-300 py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}

                {/* Add Book a Call button inside mobile menu */}
                <li>
                  <a
                    href="#contact"
                    className="block text-center font-small text-black border-2 border-white rounded-full shadow-md hover:bg-accent transition-all duration-300 px-6 py-2"
                    style={{ fontSize: "0.875rem" }}
                    onClick={() => setIsOpen(false)}
                  >
                    Book a call
                  </a>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
