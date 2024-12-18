import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from "../Assets/Home/Logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLinkClick = (path) => {
    setNav(false); // Hide the nav slider
    navigate(path); // Navigate to the clicked page
  };

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
    <div className='flex items-center justify-between max-w-auto mx-8 mt-5 font-bold px-10 text-black bg-[#FFFFFF] rounded-[50px] z-50'>
      <img className='h-[20px] my-5' src={Logo} alt="Logo" />
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'></h1>
      <ul className='hidden font-sans font-normal tracking-wide lg:flex'>
        <li className='p-4'><Link to="/" style={linkStyle('/')}>Home</Link></li>
        <li className='p-4'><Link to="/about" style={linkStyle('/about')}>About&nbsp;Us</Link></li>
        <li className='p-4'><Link to="/services" style={linkStyle('/services')}>Services</Link></li>
        <li className='p-4'><Link to="/portfolio" style={linkStyle('/portfolio')}>Portfolio</Link></li>
        <li className='p-4'><Link to="/careers" style={linkStyle('/careers')}>Careers</Link></li>
        <li className='p-4'><Link to="/contact" style={linkStyle('/contact')}>Contact</Link></li>
      </ul>
      <div onClick={handleNav} className='block cursor-pointer lg:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className={`fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#FFFFFF] ease-in-out duration-500 z-50 transform ${nav ? 'translate-x-0' : '-translate-x-full'}`}>
        <img className='h-[25px] m-8' src={Logo} alt="Logo" />
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'></h1>
        <ul className='p-4 tracking-wide uppercase font-londrina'>
          <li className='p-4'><Link to="/" onClick={() => handleLinkClick('/')} style={linkStyle('/')}>Home</Link></li>
          <li className='p-4'><Link to="/about" onClick={() => handleLinkClick('/about')} style={linkStyle('/about')}>About&nbsp;Us</Link></li>
          <li className='p-4'><Link to="/services" onClick={() => handleLinkClick('/services')} style={linkStyle('/services')}>Services</Link></li>
          <li className='p-4'><Link to="/portfolio" onClick={() => handleLinkClick('/portfolio')} style={linkStyle('/portfolio')}>Portfolio</Link></li>
          <li className='p-4'><Link to="/careers" onClick={() => handleLinkClick('/careers')} style={linkStyle('/careers')}>Careers</Link></li>
          <li className='p-4'><Link to="/contact" onClick={() => handleLinkClick('/contact')} style={linkStyle('/contact')}>Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
