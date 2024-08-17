import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Logo from "../Assets/Home/Logo.png";

const Footer = () => {
  const location = useLocation();

  // Inline styles for active link
  const activeLinkStyle = {
    textDecoration: 'underline',
    textDecorationColor: '#2563eb', // Equivalent to text-blue-600
    textDecorationThickness: '2px', // Adjust thickness if needed
    textUnderlineOffset: '4px', // Adjust the offset value to create space between text and underline
    color: '#2563eb' // Text color when active
  };

  // Inline styles for non-active links
  const defaultLinkStyle = {
    color: '#000000' // Default text color
  };

  // Determine the link style based on current path
  const linkStyle = (path) => 
    location.pathname === path ? activeLinkStyle : defaultLinkStyle;

  return (
    <footer className="bg-[#ffffff] my-[31px] mx-[31px] py-[35px] md:px-16 rounded-[50px]">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row">
          <div className="w-full mb-8 sm:w-1/2 sm:mb-0">
            <img src={Logo} alt="TITANCode Logo" className="h-12 mx-8 mb-4 " />
            <p className="flex flex-col gap-2 text-center sm:text-left mx-5  text-[#727272]">
              TITANCode delivers cutting-edge technology solutions, specializing in web development,
              mobile apps, UI/UX design, and digital marketing. Our expert team is dedicated to
              transforming your ideas into impactful digital experiences, driving your business forward.
            </p>
          </div>
          <div className="w-full mx-5 mb-8 sm:w-1/4 sm:mb-0">
            <h2 className="mb-4 text-lg font-bold">Company</h2>
            <ul className="flex flex-col gap-2 text-sm">
              <li><Link to="/" style={linkStyle('/')}>Home</Link></li>
              <li><Link to="/about" style={linkStyle('/about')}>About Us</Link></li>
              <li><Link to="/services" style={linkStyle('/services')}>Services</Link></li>
              <li><Link to="/portfolio" style={linkStyle('/portfolio')}>Portfolio</Link></li>
              <li><Link to="/careers" style={linkStyle('/careers')}>Careers</Link></li>
              <li><Link to="/contact" style={linkStyle('/contact')}>Contact</Link></li>
            </ul>
          </div>
          <div className="w-full mx-5 mb-8 sm:w-1/4 sm:mb-0">
            <h2 className="mb-4 text-lg font-bold">Services</h2>
            <ul className="flex flex-col gap-2 text-sm">
              <li><Link to="/services" style={linkStyle('/services')}>Web Application</Link></li>
              <li><Link to="/services" style={linkStyle('/services')}>Mobile Application</Link></li>
              <li><Link to="/services" style={linkStyle('/services')}>POS System</Link></li>
              <li><Link to="/services" style={linkStyle('/services')}>Graphic Designing</Link></li>
              <li><Link to="/services" style={linkStyle('/services')}>UI/UX Designing</Link></li>
              <li><Link to="/services" style={linkStyle('/services')}>Digital Marketing</Link></li>
            </ul>
          </div>
          <div className="w-full mx-5 mb-8 sm:w-1/4 sm:mb-0">
            <h2 className="mb-4 text-lg font-bold">Help</h2>
            <ul className="flex flex-col gap-2 text-sm">
              <li><Link to="/terms" style={linkStyle('/terms')}>Terms & Conditions</Link></li>
              <li><Link to="/policy" style={linkStyle('/policy')}>Privacy Policy</Link></li>
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
