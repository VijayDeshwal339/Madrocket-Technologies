import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-teal-500 p-8 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-semibold mb-2">Springdale Public School</h3>
          <p className="text-sm">123 Education Lane, Cityville, State, ZIP Code</p>
          <p className="text-sm">Phone: +1 (123) 456-7890</p>
          <p className="text-sm">Email: <a href="mailto:info@springdale.edu" className="underline">info@springdale.edu</a></p>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-6 md:mb-0">
          <Link href="/about-us" className="mx-2 text-sm hover:text-gray-300">About Us</Link>
          <Link href="/academics" className="mx-2 text-sm hover:text-gray-300">Academics</Link>
          <Link href="/admissions" className="mx-2 text-sm hover:text-gray-300">Admissions</Link>
          <Link href="/contact-us" className="mx-2 text-sm hover:text-gray-300">Contact Us</Link>
        </div>

        <div className="flex items-center">
          <a href="https://facebook.com/springdale" target="_blank" rel="noopener noreferrer" className="mx-2">
            <img src="https://img.icons8.com/material-outlined/24/ffffff/facebook.png" alt="Facebook" />
          </a>
          <a href="https://twitter.com/springdale" target="_blank" rel="noopener noreferrer" className="mx-2">
            <img src="https://img.icons8.com/material-outlined/24/ffffff/twitter.png" alt="Twitter" />
          </a>
          <a href="https://instagram.com/springdale" target="_blank" rel="noopener noreferrer" className="mx-2">
            <img src="https://img.icons8.com/material-outlined/24/ffffff/instagram-new.png" alt="Instagram" />
          </a>
          <a href="https://linkedin.com/company/springdale" target="_blank" rel="noopener noreferrer" className="mx-2">
            <img src="https://img.icons8.com/material-outlined/24/ffffff/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
      </div>

      <div className="mt-6 text-center text-sm">
        <p>&copy; 2024 Springdale Public School. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
