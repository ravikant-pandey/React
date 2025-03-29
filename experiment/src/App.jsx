import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

function App() {
  return (
    <Router>
      {/* Full Width & Height */}
      <div className="w-full min-h-screen bg-gray-800 text-white flex flex-col ">
        
        {/* Navbar (Full Width) */}
        <Navbar />

        {/* Content Section (Full Width & Expands) */}
        <div className="w-full flex-grow flex justify-center items-center px-8 py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
          </Routes>
        </div>

        {/* Footer (Full Width) */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;
