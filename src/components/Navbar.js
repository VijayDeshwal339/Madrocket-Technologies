// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Sidebar from './Sidebar';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-gradient-to-r from-blue-500 to-teal-400 px-6 md:px-20 py-4 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex items-center">
//           <img
//             src="https://via.placeholder.com/50"
//             alt="School Logo"
//             className="h-10 w-10 mr-3 rounded-full shadow-md"
//           />
//           <span className="text-white text-2xl italic font-bold">
//             Springdale Public School
//           </span>
//         </div>
//         <div className="hidden md:flex space-x-4">
//           <Link
//             to="/"
//             className="text-white px-4 py-2 hover:bg-white hover:text-blue-500 rounded transition-colors"
//           >
//             Home
//           </Link>
//           <Link
//             to="/about-us"
//             className="text-white px-4 py-2 hover:bg-white hover:text-blue-500 rounded transition-colors"
//           >
//             About Us
//           </Link>
//           <Link
//             to="/academics"
//             className="text-white px-4 py-2 hover:bg-white hover:text-blue-500 rounded transition-colors"
//           >
//             Academics
//           </Link>
//           <Link
//             to="/admissions"
//             className="text-white px-4 py-2 hover:bg-white hover:text-blue-500 rounded transition-colors"
//           >
//             Admissions
//           </Link>
//           <Link
//             to="/faculty"
//             className="text-white px-4 py-2 hover:bg-white hover:text-blue-500 rounded transition-colors"
//           >
//             Faculty
//           </Link>
//           <Link
//             to="/students"
//             className="text-white px-4 py-2 hover:bg-white hover:text-blue-500 rounded transition-colors"
//           >
//             Students
//           </Link>
//           <Link
//             to="/gallery"
//             className="text-white px-4 py-2 hover:bg-white hover:text-blue-500 rounded transition-colors"
//           >
//             Gallery
//           </Link>
//           <Link
//             to="/contact-us"
//             className="text-white px-4 py-2 hover:bg-white hover:text-blue-500 rounded transition-colors"
//           >
//             Contact Us
//           </Link>
//         </div>
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-white focus:outline-none">
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               ></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//       <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} />
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? '' : menu);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-teal-400 px-6 md:px-20 py-4 shadow-lg">
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
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/"
            className="text-white px-4 py-2 hover:bg-white hover:text-blue-500 rounded transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="text-white px-4 py-2 hover:bg-white hover:text-blue-500 rounded transition-colors"
          >
            About Us
          </Link>
          <div className="relative">
            <button
              onClick={() => toggleDropdown('academics')}
              className="text-white px-4 py-2 hover:bg-white hover:text-blue-500 rounded transition-colors"
            >
              Academics
            </button>
            {dropdown === 'academics' && (
              <div className="absolute z-10 mt-2 w-48 bg-white text-black rounded shadow-lg">
                <Link
                  to="/curriculum"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Curriculum
                </Link>
                <Link
                  to="/departments"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Departments
                </Link>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => toggleDropdown('admissions')}
              className="text-white px-4 py-2 hover:bg-white hover:text-blue-500 rounded transition-colors"
            >
              Admissions
            </button>
            {dropdown === 'admissions' && (
              <div className="absolute z-10 mt-2 w-48 bg-white text-black rounded shadow-lg">
                <Link
                  to="/apply"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Apply Now
                </Link>
                <Link
                  to="/requirements"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Admission Requirements
                </Link>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => toggleDropdown('faculty')}
              className="text-white px-4 py-2 hover:bg-white hover:text-blue-500 rounded transition-colors"
            >
              Faculty
            </button>
            {dropdown === 'faculty' && (
              <div className="absolute z-10 mt-2 w-48 bg-white text-black rounded shadow-lg">
                <Link
                  to="/faculty"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Meet Our Faculty
                </Link>
                <Link
                  to="/faculty-research"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Faculty Research
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/gallery"
            className="text-white px-4 py-2 hover:bg-white hover:text-blue-500 rounded transition-colors"
          >
            Gallery
          </Link>
          <Link
            to="/contact-us"
            className="text-white px-4 py-2 hover:bg-white hover:text-blue-500 rounded transition-colors"
          >
            Contact Us
          </Link>
        </div>
        <div className="md:hidden">
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
