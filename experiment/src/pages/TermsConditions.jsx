import React from "react";

function TermsConditions() {
  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <h2 className="text-3xl font-bold mb-4 text-blue-300 text-center">Terms & Conditions</h2>
      <p className="text-white text-lg text-center max-w-2xl">
        By using TheTechMind, you agree to the following terms and conditions. Please review them carefully.
      </p>

      <div className="mt-6 space-y-6 w-full max-w-4xl">
        {/* Section Wrapper for Mobile Responsiveness */}
        <div className="space-y-6">

          {/* Section 1: Scope of Agreement */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-blue-600 font-semibold text-lg">1. Scope of Agreement</h3>
            <p className="text-blue-800 mt-2 text-sm md:text-base">
              These Terms & Conditions govern your use of TheTechMind’s website and services. They apply to all users,
              including visitors, clients, and partners.
            </p>
          </div>

          {/* Section 2: Service Availability */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-blue-600 font-semibold text-lg">2. Service Availability</h3>
            <p className="text-blue-800 mt-2 text-sm md:text-base">
              We strive to maintain uninterrupted access to our services, but we do not guarantee that they will always
              be available or free from errors.
            </p>
          </div>

          {/* Section 3: User Obligations */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-blue-600 font-semibold text-lg">3. User Obligations</h3>
            <p className="text-blue-800 mt-2 text-sm md:text-base">
              Users must comply with all applicable laws and refrain from activities that could harm our platform,
              including hacking, unauthorized data access, and fraudulent behavior.
            </p>
          </div>

          {/* Section 4: Payment & Refund Policy */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-blue-600 font-semibold text-lg">4. Payment & Refund Policy</h3>
            <p className="text-blue-800 mt-2 text-sm md:text-base">
              Payments for our services are due upon agreement. Refunds are only provided in cases where services have
              not been delivered as promised.
            </p>
          </div>

          {/* Section 5: Intellectual Property Rights */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-blue-600 font-semibold text-lg">5. Intellectual Property Rights</h3>
            <p className="text-blue-800 mt-2 text-sm md:text-base">
              All software, designs, and content provided by TheTechMind remain our property. Users may not copy,
              distribute, or modify our intellectual property without written consent.
            </p>
          </div>

          {/* Section 6: Liability & Warranty Disclaimer */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-blue-600 font-semibold text-lg">6. Liability & Warranty Disclaimer</h3>
            <p className="text-blue-800 mt-2 text-sm md:text-base">
              TheTechMind provides services "as is" without warranties. We are not liable for any damages resulting
              from the use of our platform.
            </p>
          </div>

          {/* Section 7: Termination of Services */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-blue-600 font-semibold text-lg">7. Termination of Services</h3>
            <p className="text-blue-800 mt-2 text-sm md:text-base">
              We reserve the right to suspend or terminate accounts that violate our terms, engage in misconduct,
              or pose security risks.
            </p>
          </div>

          {/* Section 8: Governing Law */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-blue-600 font-semibold text-lg">8. Governing Law</h3>
            <p className="text-blue-800 mt-2 text-sm md:text-base">
              These terms are governed by the applicable laws of [Your Country/State]. Any disputes will be resolved in
              accordance with legal regulations.
            </p>
          </div>

          {/* Section 9: Contact & Support */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-blue-600 font-semibold text-lg">9. Contact & Support</h3>
            <p className="text-blue-800 mt-2 text-sm md:text-base">
              If you have any questions regarding these Terms & Conditions, contact us at:
              <br />📧 Email: <a href="mailto:support@thetechmind.com" className="text-blue-500 underline">support@thetechmind.com</a>
              <br />📞 Phone: +123 456 7890
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsConditions;
