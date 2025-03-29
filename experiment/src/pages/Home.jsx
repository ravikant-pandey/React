import React from "react";
import desktopImg from "../assets/desktop.png"; // Adjust path if needed
import mobileImg from "../assets/mobile.png";   // Adjust path if needed

function Home() {
  return (
    <div className="container mx-auto p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Currency Converter</h2>

      {/* Clickable Image */}
      <div
        onClick={() => window.open("https://currencyconverterwithpandey.vercel.app/", "_blank")}
        className="cursor-pointer transition transform hover:scale-105"
      >
        {/* Desktop Image (Visible on md and larger) */}
        <img 
          src={desktopImg} 
          alt="Currency Converter Desktop Preview"
          className="hidden md:block rounded-lg shadow-lg w-full"
        />

        {/* Mobile Image (Visible on sm and smaller) */}
        <img 
          src={mobileImg}
          alt="Currency Converter Mobile Preview"
          className="block md:hidden rounded-lg shadow-lg w-full"
        />
      </div>
    </div>
  );
}

export default Home;
