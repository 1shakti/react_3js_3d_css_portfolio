import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Contact from "./components/Contact";
import { StarsCanvas } from "./components"; // Assuming StarsCanvas is properly exported from its module
import Footer from "./components/Footer";

const App = () => {
  // Function to check if the device is a mobile device
  const isMobileDevice = () => {
    return window.innerWidth <= 768; // Adjust the breakpoint as needed
  };

  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          {!isMobileDevice() && <StarsCanvas />} {/* Conditionally render StarsCanvas based on device */}
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
