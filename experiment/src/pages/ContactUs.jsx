import React from "react";

function ContactUs() {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold text-blue-500">Contact Us</h2>
      <p className="mt-4 text-white">
        Have questions or need assistance? We're here to help! Reach out to us at
        <a href="mailto:support@thetechmind.com" className="text-blue-300 underline"> support@thetechmind.com</a>.
      </p>

      <h3 className="mt-6 text-xl font-semibold text-blue-400">Our Contact Details</h3>
      <ul className="mt-2 text-white">
        <li>📍 <strong>Address:</strong> 123 Tech Street, Innovation City, 45678</li>
        <li>📧 <strong>Email:</strong> <a href="mailto:support@thetechmind.com" className="text-blue-300 underline">support@thetechmind.com</a></li>
        <li>📞 <strong>Phone:</strong> +123 456 7890</li>
        <li>🌐 <strong>Website:</strong> <a href="http://TheTechMind.vercel.app" className="text-blue-300 underline">TheTechMind</a></li>
      </ul>

      <h3 className="mt-6 text-xl font-semibold text-blue-400">Business Hours</h3>
      <p className="mt-2 text-white">
        🕒 <strong>Monday – Friday:</strong> 9:00 AM – 6:00 PM
        <br />📆 <strong>Saturday & Sunday:</strong> Closed
      </p>

      <h3 className="mt-6 text-xl font-semibold text-blue-400">Get in Touch</h3>
      <form className="mt-4 bg-white p-6 rounded-lg shadow-md">
        <label className="block text-blue-600 font-semibold mb-2">Your Name</label>
        <input type="text" className="w-full p-2 border border-blue-300 rounded-lg mb-4" placeholder="Enter your name" />

        <label className="block text-blue-600 font-semibold mb-2">Your Email</label>
        <input type="email" className="w-full p-2 border border-blue-300 rounded-lg mb-4" placeholder="Enter your email" />

        <label className="block text-blue-600 font-semibold mb-2">Your Message</label>
        <textarea className="w-full p-2 border border-blue-300 rounded-lg mb-4" rows="4" placeholder="Write your message"></textarea>

        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">Send Message</button>
      </form>
    </div>

  );
}

export default ContactUs;
