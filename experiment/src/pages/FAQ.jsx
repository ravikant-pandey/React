import React from "react";

function FAQ() {
  return (
    <div className="container mx-auto p-8">
  <h2 className="text-2xl font-bold text-blue-500">Frequently Asked Questions</h2>
  <p className="mt-4 text-white">Find answers to the most common questions about our platform.</p>

  <div className="mt-6 space-y-6">
    {/* Question 1 */}
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-blue-600 font-semibold">1. What services does TheTechMind offer?</h3>
      <p className="text-blue-800 mt-2">
        We provide software development, IT consulting, cloud solutions, and digital transformation services. Our 
        goal is to make technology accessible and efficient for individuals and businesses.
      </p>
    </div>

    {/* Question 2 */}
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-blue-600 font-semibold">2. How can I contact TheTechMind for support?</h3>
      <p className="text-blue-800 mt-2">
        You can reach us via email at  
        <a href="mailto:support@thetechmind.com" className="text-blue-500 underline"> support@thetechmind.com</a> 
        or call us at +123 456 7890 during business hours.
      </p>
    </div>

    {/* Question 3 */}
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-blue-600 font-semibold">3. Do you offer custom software solutions?</h3>
      <p className="text-blue-800 mt-2">
        Yes! We specialize in custom software development tailored to your business needs, from web and mobile 
        applications to enterprise-level solutions.
      </p>
    </div>

    {/* Question 4 */}
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-blue-600 font-semibold">4. Is my data secure with TheTechMind?</h3>
      <p className="text-blue-800 mt-2">
        Absolutely. We prioritize security by using industry-standard encryption and data protection policies 
        to ensure your information is safe.
      </p>
    </div>

    {/* Question 5 */}
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-blue-600 font-semibold">5. How can I get a quote for a project?</h3>
      <p className="text-blue-800 mt-2">
        Simply visit our <a href="/contact-us" className="text-blue-500 underline">Contact Us</a> page and 
        send us your project details. Our team will get back to you with a tailored quote.
      </p>
    </div>
  </div>
</div>

  );
}

export default FAQ;
