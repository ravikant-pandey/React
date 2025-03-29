import React from "react";

function PrivacyPolicy() {
  return (
    <div className="container mx-auto p-8">
  <h2 className="text-2xl font-bold text-blue-500">Privacy Policy</h2>
  <p className="mt-4 text-white">
    We take your privacy seriously. Read our policy to understand how we handle your data.
  </p>

  <div className="mt-6 space-y-6">
    {/* Section 1: Data Collection */}
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-blue-600 font-semibold">1. What Information Do We Collect?</h3>
      <p className="text-blue-800 mt-2">
        We collect personal information such as your name, email address, phone number, and any other details 
        you provide when using our website or services. We may also collect non-personal data such as browser type, 
        IP address, and cookies for analytics.
      </p>
    </div>

    {/* Section 2: How We Use Your Information */}
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-blue-600 font-semibold">2. How Do We Use Your Information?</h3>
      <p className="text-blue-800 mt-2">
        We use your data to provide and improve our services, process transactions, send important updates, and enhance 
        user experience. We never sell or share your personal data without your consent.
      </p>
    </div>

    {/* Section 3: Cookies and Tracking */}
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-blue-600 font-semibold">3. Do We Use Cookies?</h3>
      <p className="text-blue-800 mt-2">
        Yes, we use cookies to enhance user experience and track website performance. You can disable cookies in 
        your browser settings if you prefer.
      </p>
    </div>

    {/* Section 4: Data Security */}
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-blue-600 font-semibold">4. How Do We Protect Your Information?</h3>
      <p className="text-blue-800 mt-2">
        We implement strict security measures, including encryption and secure servers, to protect your data from 
        unauthorized access, alteration, or disclosure.
      </p>
    </div>

    {/* Section 5: Third-Party Services */}
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-blue-600 font-semibold">5. Do We Share Your Information With Third Parties?</h3>
      <p className="text-blue-800 mt-2">
        We do not sell your personal data. However, we may share it with trusted third-party services for analytics, 
        payment processing, and website functionality improvements.
      </p>
    </div>

    {/* Section 6: Your Rights */}
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-blue-600 font-semibold">6. Your Rights and Choices</h3>
      <p className="text-blue-800 mt-2">
        You have the right to request access, correction, or deletion of your personal data. If you wish to update or 
        remove your information, please contact us at  
        <a href="mailto:support@thetechmind.com" className="text-blue-500 underline"> support@thetechmind.com</a>.
      </p>
    </div>

    {/* Section 7: Policy Updates */}
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-blue-600 font-semibold">7. Changes to This Privacy Policy</h3>
      <p className="text-blue-800 mt-2">
        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated 
        effective date.
      </p>
    </div>

    {/* Contact Section */}
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-blue-600 font-semibold">8. Contact Us</h3>
      <p className="text-blue-800 mt-2">
        If you have any questions regarding this Privacy Policy, you can contact us at:  
        <br />📧 Email: <a href="mailto:support@thetechmind.com" className="text-blue-500 underline">support@thetechmind.com</a>  
        <br />📞 Phone: +123 456 7890  
      </p>
    </div>
  </div>
</div>

  );
}

export default PrivacyPolicy;
