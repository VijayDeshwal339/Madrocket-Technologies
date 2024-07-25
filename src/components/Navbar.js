import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState('');
  const dropdownRef = useRef(null);
  
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

 
  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? '' : menu);
  };

  
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdown('');
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-teal-400 px-6 xl:px-20 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/50"
            alt="School Logo"
            className="h-10 w-10 mr-3 rounded-full shadow-md"
          />
          <span className="text-white text-2xl italic font-bold">
            Springdale Public School
          </span>
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            to="/"
            className="text-white px-4 py-2 hover:bg-white hover:text-blue-500 rounded transition-colors"
            onClick={() => setDropdown('')} 
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="text-white px-4 py-2 hover:bg-white hover:text-blue-500 rounded transition-colors"
            onClick={() => setDropdown('')} 
          >
            About Us
          </Link>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => toggleDropdown('academics')}
              className="text-white px-4 py-2 hover:bg-white hover:text-blue-500 rounded transition-colors"
            >
              Academics
            </button>
            {dropdown === 'academics' && (
              <div className="absolute z-10 mt-2 w-48 bg-white text-black rounded shadow-lg">
                <Link
                  to="/admissions"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setDropdown('')} 
                >
                  Admissions
                </Link>
                <Link
                  to="/students"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setDropdown('')} 
                >
                  Students
                </Link>
                <Link
                  to="/faculty"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setDropdown('')} 
                >
                  Faculty
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/gallery"
            className="text-white px-4 py-2 hover:bg-white hover:text-blue-500 rounded transition-colors"
            onClick={() => setDropdown('')} 
          >
            Gallery
          </Link>
          <Link
            to="/contact-us"
            className="text-white px-4 py-2 hover:bg-white hover:text-blue-500 rounded transition-colors"
            onClick={() => setDropdown('')} 
          >
            Contact Us
          </Link>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
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
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Navbar;

