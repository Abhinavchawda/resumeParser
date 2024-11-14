import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-blue-700 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center text-white">
        <h1 className="text-2xl font-bold flex items-center">
          <FaHome className="mr-2" />
          MyApp
        </h1>
        <div className="space-x-6">
          <NavLink to="/" className="hover:text-gray-300 transition-colors">Home</NavLink>
          <NavLink to="/about" className="hover:text-gray-300 transition-colors">About</NavLink>
          <NavLink to="/contact" className="hover:text-gray-300 transition-colors">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;