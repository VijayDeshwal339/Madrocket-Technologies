import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-blue-600 text-white transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out shadow-lg z-50`}
    >
      <button
        onClick={toggleMenu}
        className="text-white focus:outline-none absolute top-4 right-4"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
      <div className="p-6">
        <Link
          to="/"
          className="block text-white py-2 hover:bg-white hover:text-blue-600 rounded transition-colors"
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          to="/about-us"
          className="block text-white py-2 hover:bg-white hover:text-blue-600 rounded transition-colors"
          onClick={toggleMenu}
        >
          About Us
        </Link>
        <Link
          to="/academics"
          className="block text-white py-2 hover:bg-white hover:text-blue-600 rounded transition-colors"
          onClick={toggleMenu}
        >
          Academics
        </Link>
        <Link
          to="/admissions"
          className="block text-white py-2 hover:bg-white hover:text-blue-600 rounded transition-colors"
          onClick={toggleMenu}
        >
          Admissions
        </Link>
        <Link
          to="/faculty"
          className="block text-white py-2 hover:bg-white hover:text-blue-600 rounded transition-colors"
          onClick={toggleMenu}
        >
          Faculty
        </Link>
        <Link
          to="/students"
          className="block text-white py-2 hover:bg-white hover:text-blue-600 rounded transition-colors"
          onClick={toggleMenu}
        >
          Students
        </Link>
        <Link
          to="/gallery"
          className="block text-white py-2 hover:bg-white hover:text-blue-600 rounded transition-colors"
          onClick={toggleMenu}
        >
          Gallery
        </Link>
        <Link
          to="/contact-us"
          className="block text-white py-2 hover:bg-white hover:text-blue-600 rounded transition-colors"
          onClick={toggleMenu}
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
