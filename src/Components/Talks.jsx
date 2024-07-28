// src/ContactBanner.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube, FaDribbble, FaBehance, FaLinkedin } from 'react-icons/fa';

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
        <button className="flex items-center px-4 py-2 my-6 text-white bg-black rounded-full hover:bg-gray-800">
          Let’s Talk <span className="ml-2">→</span>
        </button>
        <div className="flex space-x-4">
          <a href="#" className="text-black hover:text-gray-600"><FaLinkedin size="22" /></a>
          <a href="#" className="text-black hover:text-gray-600"><FaTwitter size="22" /></a>
          <a href="#" className="text-black hover:text-gray-600"><FaFacebook size="22" /></a>
          <a href="#" className="text-black hover:text-gray-600"><FaInstagram size="22" /></a>
          <a href="#" className="text-black hover:text-gray-600"><FaDribbble size="22" /></a>
          <a href="#" className="text-black hover:text-gray-600"><FaBehance size="22" /></a>

        </div>
      </div>
    </div>
  );
};

export default Talks;
