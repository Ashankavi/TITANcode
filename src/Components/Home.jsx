import React from 'react';

import Homeimg from "../Assets/Home/Rectangle 4.png"
import WeAre from "../Assets/Home/Weare.png"
import Titan from "../Assets/Home/logoTitan.png"


const services = [
    {
      title: "WEB APPLICATION",
      description: "Build captivating, responsive websites that engage your audience and elevate your online presence with our web development services.",
      image: Titan
    },
    {
      title: "MOBILE APPLICATION",
      description: "Bring your ideas to life with our expert mobile and web app development services, delivering scalable and high-performance solutions tailored to your needs.",
      image: Titan
    },
    {
      title: "POS SYSTEM",
      description: "Enhance your business operations with our customizable POS systems, providing efficient transactions, real-time inventory management, and solutions to boost efficiency and customer service.",
      image: Titan
    },
    {
      title: "GRAPHIC DESIGNING",
      description: "Elevate your brand identity with our creative graphic design services, featuring eye-catching visuals and compelling designs.",
      image: Titan
    },
    {
      title: "UI/UX DESIGNING",
      description: "We specialize in UI/UX design to craft intuitive, visually appealing interfaces that enhance user experiences and improve interaction with your product.",
      image: Titan
    },
    {
      title: "DIGITAL MARKETING",
      description: "Enhance your online presence and attract customers with our digital marketing services. We provide strategies to boost visibility, increase traffic, and engage your audience.",
      image: Titan
    }
  ];

  
const Home = () => {
  return (
    <div>
    <section className="bg-[#ffffff] my-[31px] mx-[31px] py-16 md:py-24 md:px-16 rounded-[50px] ">
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 order-2 md:order-1 mx-5">
          <p className="text-blue-600 font-medium ">"WE ARE A LEADING PROVIDER OF TECHNOLOGY SOLUTIONS"</p>
          <h1 className="text-4xl md:text-6xl font-bold  mb-6">LEADING TECHNOLOGY SOLUTIONS FOR A BRIGHTER FUTURE</h1>
          <p className="text-lg  mb-6">
            <span className="text-blue-600 font-bold">TITANCode</span> delivers all-in-one solutions for web, design, and marketing. From building websites and apps to crafting digital strategies, we guide you from where you are to where you want to be. Let us help you achieve your goals and elevate your business.
          </p>
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">GET STARTED</button>
        </div>
        <div className="md:w-1/2 order-1 md:order-2 mt-12 md:mt-0 flex justify-center">
          <img className="" src={Homeimg} /></div>
      </div>
    </section>

    <section className="bg-[#ffffff] my-[31px] mx-[31px] py-16 md:py-24 md:px-16 rounded-[50px] ">
      <div className="max-w-8xl mx-[auto] flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 order-1 md:order-2 mt-12 md:mt-0 flex justify-center">
          <img className="" src={WeAre} /> </div>
        <div className="md:w-1/2 order-2 md:order-2 mt-12 md:mt-0 mx-5">
          <h1 className="text-4xl text-[#0090FF] md:text-6xl font-bold mb-6 uppercase">Who we are</h1>
          <p className="text-lg mb-6">
            <span className="text-blue-600 font-bold">TITANCode</span> is a leading technology solutions provider specializing in web development, design, and digital marketing. Our mission is to deliver innovative and tailored solutions that drive business success. With a dedicated team of experts, we transform ideas into impactful digital experiences.
          </p>
          <p className="text-lg mb-6">We offer a full range of services including custom web development, mobile app design, creative graphic design, and strategic digital marketing. From crafting stunning websites to implementing effective digital strategies, we provide the tools and support you need to excel in the digital world.
          </p>
          <button className=" text-[#0090FF] underline hover:text-blue-700 transition duration-300">More About</button>
        </div>
      </div>
    </section>

    <section className="bg-[#ffffff] my-[31px] mx-[31px] py-16 md:py-24 md:px-16 rounded-[50px] ">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl text-[#0090FF] md:text-6xl font-bold mb-6 uppercase text-center">OUR SERVICES</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {services.map((service, index) => (
              <div key={index} className="bg-[#F4F4F5] p-6 rounded-[30px] ">
                <div className="flex items-center justify-end mb-4">
                  <img src={service.image} alt={service.title} className="w-12 h-12 " />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
    
    </div>
  );
}

export default Home;
