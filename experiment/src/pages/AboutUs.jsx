import React from "react";

function AboutUs() {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold text-blue-500">About Us</h2>
      <p className="mt-4 text-white">
        TheTechMind is a platform dedicated to sharing knowledge about the latest technology trends.
      </p>
      <p className="mt-2 text-white">
        We specialize in software development, IT solutions, and cutting-edge innovations. Our mission is to make technology
        accessible to everyone by providing insightful articles, tutorials, and services tailored to your needs.
      </p>
      <p className="mt-2 text-white">
        Whether you're a business looking for custom software solutions or an individual passionate about tech, TheTechMind is
        here to guide you. We are committed to delivering high-quality content, expert advice, and top-tier digital services.
      </p>

      <h3 className="mt-6 text-xl font-semibold text-blue-400">Created by Pandey</h3>
      <p className="mt-2 text-white">
        TheTechMind was founded by <span className="font-semibold text-blue-300 hover:underline cursor-pointer">Pandey</span>, a tech visionary with a passion
        for software innovation, problem-solving, and business transformation. With a strong background in technology, Pandey
        aims to make cutting-edge solutions accessible, reliable, and impactful for individuals and businesses worldwide.
      </p>

    </div>
  );
}

export default AboutUs;
