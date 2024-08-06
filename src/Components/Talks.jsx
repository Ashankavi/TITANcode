// src/ContactBanner.js
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { FaFacebook, FaTwitter, FaInstagram, FaDribbble, FaBehance, FaLinkedin } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const Talks = () => {
  return (
    <div className="bg-white my-8 mx-8 py-6 md:px-16 rounded-[50px] flex flex-col lg:flex-row justify-between items-center ">
      <div className="mb-6 text-center lg:text-left lg:mb-0">
        <h1 className="text-[25px]  lg:text-4xl text-[#0090FF] font-bold  uppercase mx-5">
          Let's talk about how to transform your business.
        </h1>
      </div>
      <div className="flex flex-col items-center lg:items-start">
        <p className="text-center text-gray-600 lg:mb-1 lg:text-left">Ready to build great products?</p>
        <RouterLink to="/Contact">
        <button className="flex items-center px-4 py-2 my-6 text-white bg-black rounded-full hover:bg-[#0090FF]">
          Let’s Talk <span className="ml-2">→</span>
        </button>
        </RouterLink>
        <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/titancode" className="text-black hover:text-[#0090FF]"><FaLinkedin size="22" /></a>
              <a href="https://x.com/titan_codesl" className="text-black hover:text-[#0090FF]"><SiX size="22" /></a>
              <a href="https://www.facebook.com/profile.php?id=100012056560141&mibextid=LQQJ4d" className="text-black hover:text-[#0090FF]"><FaFacebook size="22" /></a>
              <a href="https://www.instagram.com/ashxn___?igsh=b3FmZDBpemxvMTJz&utm_source=qr" className="text-black hover:text-[#0090FF]"><FaInstagram size="22" /></a>
              <a href="https://dribbble.com/titan_codesl" className="text-black hover:text-[#0090FF]"><FaDribbble size="22" /></a>
              <a href="https://www.behance.net/titancode" className="text-black hover:text-[#0090FF]"><FaBehance size="22" /></a>
        </div>
      </div>
    </div>
  );
};

export default Talks;
