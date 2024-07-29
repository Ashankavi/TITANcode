import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaDribbble, FaBehance, FaLinkedin } from 'react-icons/fa';

import Homeimg from "../Assets/Contact/contact.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.subject) formErrors.subject = "Subject is required";
    if (!formData.message) formErrors.message = "Message is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      console.log('Form Data:', formData);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#ffffff] my-[31px] mx-[31px] py-16 md:py-24 md:px-16 rounded-[50px]">
        <div className="flex flex-col items-center mx-auto max-w-8xl md:flex-row">
          <div className="order-2 mx-5 md:w-1/2 md:order-1">
            <p className="font-medium text-blue-600">
              "WE ARE A LEADING PROVIDER OF TECHNOLOGY SOLUTIONS"
            </p>
            <h1 className="my-4 text-4xl font-bold md:text-6xl">LET’S MAKE SOMETHING NEW TOGETHER</h1>
            <p className="text-lg">
              <span className="font-bold text-blue-600">TITANCode</span>  provides expert solutions in web development, mobile apps, UI/UX design, and digital marketing. Our services are designed to enhance your digital presence and drive business success with innovative and effective strategies.
            </p>
            <RouterLink to="/Contact">
          <button className="px-6 py-3 mt-4 text-white transition duration-300 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700">Get Started</button>
          </RouterLink>
          </div>
          <div className="flex justify-center order-1 mt-12 md:w-1/2 md:order-2 md:mt-0">
            <img className="" src={Homeimg} alt="Careers" />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="flex justify-center ">
        <div className="grid w-full grid-cols-1 gap-8 p-8 justify-center bg-[#ffffff] my-[31px] mx-[31px] py-16 md:py-24 md:px-16 rounded-[50px] md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl md:text-5xl text-[#0090FF]  font-bold uppercase">SEND US A MESSAGE</h2>
            <p className="mb-2 text-gray-700 text-[14px] md:text-[16px]">
              We'd love to hear from you! Whether you have a question, need support, or are interested in our services, feel free to reach out to us using the contact details below. Our team is here to assist you and ensure you have the best experience possible.
            </p>
            <div className="mt-10 mb-4">
              <h3 className="font-bold">Phone</h3>
              <p className='mt-2 text-[14px] md:text-[16px]'>+94 77 565 5031</p>
              <p className='text-[14px] md:text-[16px]'>Monday to Friday: 9:00 AM - 6:00 PM</p>
            </div>
            <div className="mb-4">
              <h3 className="font-bold">Email</h3>
              <a href="mailto:sltitancode@gmail.com" className='mt-4 text-[14px] md:text-[16px] hover:text-[#0090FF] cursor-pointer'>sltitancode@gmail.com</a>
            </div>
            <div className="mb-4">
              <h3 className="font-bold">Address</h3>
              <div className='mt-2 text-[14px] md:text-[16px]'>
              <p>St. Anthony's Mawatha,</p>
              <p>Colombo 00300,</p>
              <p>Sri Lanka</p>
              </div>
            </div>
            <div className="my-5 ">
            <h3 className="font-bold">Our Social</h3>
              <div className="flex mt-4 space-x-4">
                <a href="#" className="text-black hover:text-[#0090FF]"><FaLinkedin size="22" /></a>
                <a href="#" className="text-black hover:text-[#0090FF]"><FaTwitter size="22" /></a>
                <a href="#" className="text-black hover:text-[#0090FF]"><FaFacebook size="22" /></a>
                <a href="#" className="text-black hover:text-[#0090FF]"><FaInstagram size="22" /></a>
                <a href="#" className="text-black hover:text-[#0090FF]"><FaDribbble size="22" /></a>
                <a href="#" className="text-black hover:text-[#0090FF]"><FaBehance size="22" /></a>
              </div>
            </div>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block font-medium text-black">Name<span className='text-red-500 '>*</span></label>
              <input
                type="text"
                name="name"
                className="mt-2 w-full p-4 text-[#606060] text-xs bg-[#F4F4F5] rounded-[10px] outline-none hover:ring-1 hover:ring-[#5A9BFC]"
                placeholder="Enter name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p style={{ fontSize: '12px', color: 'red' }}>{errors.name}</p>}
            </div>
            <div>
              <label className="block font-medium text-black">Email<span className='text-red-500 '>*</span></label>
              <input
                type="email"
                name="email"
                className="mt-2 w-full p-4 text-[#606060] text-xs bg-[#F4F4F5] rounded-[10px] outline-none hover:ring-1 hover:ring-[#5A9BFC]"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p style={{ fontSize: '12px', color: 'red' }}>{errors.email}</p>}
            </div>
            <div>
              <label className="block font-medium text-black">Phone <span className='text-[#606060] text-[10px]'>(Optional)</span></label>
              <input
                type="text"
                name="phone"
                className="mt-2 w-full p-4 text-[#606060] bg-[#F4F4F5] text-xs rounded-[10px] outline-none hover:ring-1 hover:ring-[#5A9BFC]"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block font-medium text-black">Subject<span className='text-red-500 '>*</span></label>
              <input
                type="text"
                name="subject"
                className="mt-2 w-full p-4 text-[#606060] text-xs bg-[#F4F4F5] rounded-[10px] outline-none hover:ring-1 hover:ring-[#5A9BFC]"
                placeholder="Enter your subject"
                value={formData.subject}
                onChange={handleChange}
              />
              {errors.subject && <p style={{ fontSize: '12px', color: 'red' }}>{errors.subject}</p>}
            </div>
            <div>
              <label className="block font-medium text-black">Message<span className='text-red-500 '>*</span></label>
              <textarea
                name="message"
                className="mt-2 w-full p-4 text-[#606060] text-xs bg-[#F4F4F5] rounded-[10px] outline-none hover:ring-1 hover:ring-[#5A9BFC]"
                rows="4"
                placeholder="What are you planning to build?"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <p style={{ fontSize: '12px', color: 'red' }}>{errors.message}</p>}
            </div>
            <div>
              <button type="submit" className="w-full p-2 text-[14px] font-medium text-white hover:bg-[#0090FF] bg-[#5A9BFC] rounded-[10px]">Send</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
