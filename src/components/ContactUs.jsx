import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center items-center py-10">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
            <FaEnvelope className="inline-block mr-2" />
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 px-4 rounded-md font-semibold hover:bg-blue-800 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ContactUs;