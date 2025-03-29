import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto max-w-7xl px-6 flex flex-col items-center md:items-start text-center md:text-left space-y-8 md:space-y-0 md:flex-row md:justify-between">
        
        {/* Quick Links */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start space-y-3">
          <h3 className="text-lg font-semibold text-gray-200 hover:underline cursor-pointer">Quick Links</h3>
          <div className="flex flex-col space-y-2 text-gray-400">
            <a href="/about-us" className="hover:text-blue-400">About Us</a>
            <a href="/contact-us" className="hover:text-blue-400">Contact Us</a>
            <a href="/faq" className="hover:text-blue-400">FAQ</a>
            <a href="/privacy-policy" className="hover:text-blue-400">Privacy Policy</a>
            <a href="/terms-and-conditions" className="hover:text-blue-400">Terms & Conditions</a>
          </div>
        </div>

        {/* Branding & Copyright */}
        <div className="w-full md:w-1/3 flex flex-col items-center space-y-2">
          <a href="http://TheTechMind.vercel.app" className="text-xl font-bold text-blue-500 hover:underline">
            TheTechMind
          </a>
          <p className="text-gray-400">Empowering Minds with Technology</p>
          <p className="text-gray-500">
            © {new Date().getFullYear()}{" "}
            <a href="http://TheTechMind.vercel.app" className="hover:text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              TheTechMind
            </a>. All rights reserved.
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-end space-y-3">
          <h3 className="text-lg font-semibold text-gray-200 hover:underline cursor-pointer">Follow Us</h3>
          <div className="flex gap-5">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
              <FaFacebook size={28} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
              <FaTwitter size={28} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500">
              <FaInstagram size={28} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600">
              <FaLinkedin size={28} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaGithub size={28} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
