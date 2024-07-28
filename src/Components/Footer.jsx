import React from 'react';
import Logo from "../Assets/Home/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#ffffff] my-[31px] mx-[31px] py-[35px] md:px-16 rounded-[50px]">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row">
          <div className="w-full mb-8 sm:w-1/2 sm:mb-0">
            <img src={Logo} alt="TITANCode Logo" className="h-12 mx-auto mb-4 sm:mx-0" />
            <p className="flex flex-col gap-2 text-center sm:text-left mx-5 text-[#727272]">
              TITANCode delivers cutting-edge technology solutions, specializing in web development,
              mobile apps, UI/UX design, and digital marketing. Our expert team is dedicated to
              transforming your ideas into impactful digital experiences, driving your business forward.
            </p>
          </div>
          <div className="w-full mx-5 mb-8 sm:w-1/4 sm:mb-0">
            <h2 className="mb-4 text-lg font-bold">Company</h2>
            <ul className="flex flex-col gap-2 text-sm">
              <li className='hover:text-[#0090FF]'><a href="#">Home</a></li>
              <li className='hover:text-[#0090FF]'><a href="#">About us</a></li>
              <li className='hover:text-[#0090FF]'><a href="#">Services</a></li>
              <li className='hover:text-[#0090FF]'><a href="#">Portfolio</a></li>
              <li className='hover:text-[#0090FF]'><a href="#">Careers</a></li>
              <li className='hover:text-[#0090FF]'><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="w-full mx-5 mb-8 sm:w-1/4 sm:mb-0">
            <h2 className="mb-4 text-lg font-bold">Services</h2>
            <ul className="flex flex-col gap-2 text-sm">
              <li className='hover:text-[#0090FF]'><a href="#">Web Application</a></li>
              <li className='hover:text-[#0090FF]'><a href="#">Mobile Application</a></li>
              <li className='hover:text-[#0090FF]'><a href="#">POS System</a></li>
              <li className='hover:text-[#0090FF]'><a href="#">Graphic Designing</a></li>
              <li className='hover:text-[#0090FF]'><a href="#">UI/UX Designing</a></li>
              <li className='hover:text-[#0090FF]'><a href="#">Digital Marketing</a></li>
            </ul>
          </div>
          <div className="w-full mx-5 mb-8 sm:w-1/4 sm:mb-0">
            <h2 className="mb-4 text-lg font-bold">Help</h2>
            <ul className="flex flex-col gap-2 text-sm">
              <li className='hover:text-[#0090FF]'><a href="#">Terms & Conditions</a></li>
              <li className='hover:text-[#0090FF]'><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="text-xs text-center">
          <p> Copyright © 2023 <span className='font-bold text-blue-600'>TITANcode</span> Corporation. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
