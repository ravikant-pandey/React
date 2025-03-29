import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for hamburger menu

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <h1 className="text-2xl font-bold">
          <a href="/" className="text-blue-500 hover:underline">
            TheTechMind
          </a>
        </h1>

        {/* Hamburger Icon (for mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg">
          <NavLink to="/" className="hover:text-blue-400">Home</NavLink>
          <NavLink to="/about-us" className="hover:text-blue-400">About</NavLink>
          <NavLink to="/contact-us" className="hover:text-blue-400">Contact</NavLink>
          <NavLink to="/faq" className="hover:text-blue-400">FAQ</NavLink>
          <NavLink to="/privacy-policy" className="hover:text-blue-400">Privacy</NavLink>
          <NavLink to="/terms-and-conditions" className="hover:text-blue-400">Terms</NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-gray-800 text-white space-y-4 p-4 absolute top-16 left-0 w-full shadow-md">
          <NavLink to="/" className="hover:text-blue-400" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about-us" className="hover:text-blue-400" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/contact-us" className="hover:text-blue-400" onClick={() => setMenuOpen(false)}>Contact</NavLink>
          <NavLink to="/faq" className="hover:text-blue-400" onClick={() => setMenuOpen(false)}>FAQ</NavLink>
          <NavLink to="/privacy-policy" className="hover:text-blue-400" onClick={() => setMenuOpen(false)}>Privacy</NavLink>
          <NavLink to="/terms-and-conditions" className="hover:text-blue-400" onClick={() => setMenuOpen(false)}>Terms</NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
