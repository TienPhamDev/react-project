import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 lg:px-20 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <a href="#">Jason</a>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex space-x-8 text-gray-700">
          <a href="#home" className="hover:text-orange-500">
            Home
          </a>
          <a href="#about" className="hover:text-orange-500">
            About
          </a>
          <a href="#services" className="hover:text-orange-500">
            Services
          </a>
          <a href="#portfolio" className="hover:text-orange-500">
            Portfolio
          </a>
          <a href="#contact" className="hover:text-orange-500">
            Contact
          </a>
        </nav>

        {/* Call-to-Action Button */}
        <a
          href="#"
          className="hidden lg:inline-block bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Get Started
        </a>

        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;