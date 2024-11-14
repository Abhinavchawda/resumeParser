import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center items-center py-10">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
            <FaInfoCircle className="inline-block mr-2" />
            About Us
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Welcome to MyApp! We are dedicated to providing the best service for you. Our team is committed to making your experience seamless and enjoyable.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Our application is designed to help you manage your tasks efficiently and effectively. We value your feedback and are constantly working to improve our services.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Thank you for choosing MyApp. We hope you have a great experience using our application.
          </p>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;