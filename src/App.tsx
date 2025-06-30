import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LocationHighlight from './components/LocationHighlight';
import VillaShowcase from './components/VillaShowcase';
import AmenitiesCarousel from './components/AmenitiesCarousel';
import InteractiveMap from './components/InteractiveMap';
import InvestmentTimeline from './components/InvestmentTimeline';
import AppreciationGraph from './components/AppreciationGraph';
import BookingCalendar from './components/BookingCalendar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <LocationHighlight />
        <VillaShowcase />
        <AmenitiesCarousel />
        <InteractiveMap />
        <InvestmentTimeline />
        <AppreciationGraph />
        <BookingCalendar />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;