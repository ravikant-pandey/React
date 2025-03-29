import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0C1022] text-white p-6 text-center">
      {/* Quick Links Section */}
      <div className="flex flex-wrap justify-center space-x-4 text-gray-400 text-sm mb-4">
        <NavLink to="/about" className="hover:text-blue-500">About Us</NavLink>
        <NavLink to="/contact" className="hover:text-blue-500">Contact Us</NavLink>
        <NavLink to="/faq" className="hover:text-blue-500">FAQ</NavLink>
        <NavLink to="/privacy" className="hover:text-blue-500">Privacy Policy</NavLink>
        <NavLink to="/terms" className="hover:text-blue-500">Terms & Conditions</NavLink>
      </div>

      {/* Branding & Slogan */}
      <div className="text-xl font-bold">TheTechMind</div>
      <p className="text-sm mt-2 text-gray-400">Empowering Minds with Technology</p>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-4 text-blue-500 mt-3">
        <NavLink to="#"><FaFacebook size={24} /></NavLink>
        <NavLink to="#"><FaTwitter size={24} /></NavLink>
        <NavLink to="#"><FaInstagram size={24} /></NavLink>
        <NavLink to="#"><FaLinkedin size={24} /></NavLink>
        <NavLink to="#"><FaGithub size={24} /></NavLink>
      </div>

      {/* Copyright */}
      <div className="mt-4 text-sm text-gray-500">
        &copy; 2025 TheTechMind. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
