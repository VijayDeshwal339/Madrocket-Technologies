import React from 'react';
import Global from '../assests/Global.png';
import Phone from '../assests/Phone.png';
import Facebook from '../assests/Facebook.png';
import Instagram from '../assests/instagram.png';
import Twitter from '../assests/Twitter.png';
import YouTube from '../assests/YouTube.png';

const Top = () => {
  return (
    <div className="w-full h-16 bg-gradient-to-r from-blue-600 to-teal-400 flex justify-between items-center px-8">
      <div className="flex gap-10 items-center text-white">
        <div className="flex gap-2 items-center">
          <img src={Global} alt="Global icon" className="w-5 h-5" />
          <p>info@springdale.edu</p>
        </div>

        <div className="flex gap-2 items-center">
          <img src={Phone} alt="Phone icon" className="w-5 h-5" />
          <p>+1 (123) 456-7890</p>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <img src={Facebook} alt="Facebook icon" className="w-6 h-6 hover:opacity-75 transition-opacity" />
        <img src={Instagram} alt="Instagram icon" className="w-6 h-6 hover:opacity-75 transition-opacity" />
        <img src={Twitter} alt="Twitter icon" className="w-6 h-6 hover:opacity-75 transition-opacity" />
        <img src={YouTube} alt="YouTube icon" className="w-6 h-6 hover:opacity-75 transition-opacity" />
      </div>
    </div>
  );
};

export default Top;
