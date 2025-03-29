import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <a href="/" className="text-blue-500 hover:underline">
            TheTechMind
          </a>
        </h1>
        <div className="flex space-x-8 text-lg">
          <NavLink to="/" className="hover:text-blue-400">Home</NavLink>
          <NavLink to="/about-us" className="hover:text-blue-400">About</NavLink>
          <NavLink to="/contact-us" className="hover:text-blue-400">Contact</NavLink>
          <NavLink to="/faq" className="hover:text-blue-400">FAQ</NavLink>
          <NavLink to="/privacy-policy" className="hover:text-blue-400">Privacy</NavLink>
          <NavLink to="/terms-and-conditions" className="hover:text-blue-400">Terms</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
