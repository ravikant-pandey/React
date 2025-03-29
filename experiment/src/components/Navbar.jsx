import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for hamburger menu

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to close the menu when clicking outside
  const closeMenu = () => setMenuOpen(false);

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

      {/* Mobile Menu (Improved with Full Screen & Smooth Animation) */}
      {menuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center text-white space-y-6 p-6 z-50 transform transition-transform duration-300 ease-in-out">
          {/* Close Button (X) */}
          <button onClick={closeMenu} className="absolute top-6 right-6 text-white">
            <FaTimes size={30} />
          </button>

          {/* Navigation Links */}
          <NavLink to="/" className="hover:text-blue-400 text-xl" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about-us" className="hover:text-blue-400 text-xl" onClick={closeMenu}>About</NavLink>
          <NavLink to="/contact-us" className="hover:text-blue-400 text-xl" onClick={closeMenu}>Contact</NavLink>
          <NavLink to="/faq" className="hover:text-blue-400 text-xl" onClick={closeMenu}>FAQ</NavLink>
          <NavLink to="/privacy-policy" className="hover:text-blue-400 text-xl" onClick={closeMenu}>Privacy</NavLink>
          <NavLink to="/terms-and-conditions" className="hover:text-blue-400 text-xl" onClick={closeMenu}>Terms</NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
