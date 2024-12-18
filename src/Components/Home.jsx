import React from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import Experts from "./Experts";
import Talks from "./Talks";

import Homeimg from "../Assets/Home/Rectangle 4.png";
import WeAre from "../Assets/Home/Weare.png";
import WebIcon from "../Assets/Home/Icons/Webicon.png";
import AppIcon from "../Assets/Home/Icons/Appicon.png";
import PossIcon from "../Assets/Home/Icons/Possicon.png";
import UIUXIcon from "../Assets/Home/Icons/UIUXicon.png";
import GraphicIcon from "../Assets/Home/Icons/Graphicicon.png";
import MarketingIcon from "../Assets/Home/Icons/Marketingicon.png";
import HomeVideo from "../Assets/Home/video.mp4";

const services = [
    {
        title: "WEB APPLICATION",
        description: "Build captivating, responsive websites that engage your audience and elevate your online presence with our web development services.",
        image: WebIcon
    },
    {
        title: "MOBILE APPLICATION",
        description: "Bring your ideas to life with our expert mobile and web app development services, delivering scalable and high-performance solutions tailored to your needs.",
        image: AppIcon
    },
    {
        title: "POS SYSTEM",
        description: "Enhance your business operations with our customizable POS systems, providing efficient transactions, real-time inventory management, and solutions to boost efficiency and customer service.",
        image: PossIcon
    },
    {
        title: "GRAPHIC DESIGNING",
        description: "Elevate your brand identity with our creative graphic design services, featuring eye-catching visuals and compelling designs.",
        image: GraphicIcon
    },
    {
        title: "UI/UX DESIGNING",
        description: "We specialize in UI/UX design to craft intuitive, visually appealing interfaces that enhance user experiences and improve interaction with your product.",
        image: UIUXIcon
    },
    {
        title: "DIGITAL MARKETING",
        description: "Enhance your online presence and attract customers with our digital marketing services. We provide strategies to boost visibility, increase traffic, and engage your audience.",
        image: MarketingIcon
    }
];

const Home = () => {
    return (
      <div>
        {/* Hero Section Start */}
        <section className="relative bg-[#ffffff] my-[31px] mx-[31px] py-16 md:py-24 md:px-16 rounded-[50px] overflow-hidden">
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 object-cover w-full h-full"
                src={HomeVideo}
            />
            <div className="relative flex flex-col items-center mx-auto max-w-8xl md:flex-row">
                <div className="order-2 mx-5 md:w-1/2 md:order-1">
                    <p className="font-medium text-blue-600">"WE ARE A LEADING PROVIDER OF TECHNOLOGY SOLUTIONS"</p>
                    <h1 className="mb-6 text-4xl font-bold md:text-6xl">LEADING TECHNOLOGY SOLUTIONS FOR A BRIGHTER FUTURE</h1>
                    <p className="mb-6 text-lg">
                        <span className="font-bold text-blue-600">CodeWAYNE</span> delivers all-in-one solutions for web, design, and marketing. From building websites and apps to crafting digital strategies, we guide you from where you are to where you want to be. Let us help you achieve your goals and elevate your business.
                    </p>
                    <Link
                        to="who-we-are"
                        smooth={true}
                        duration={500}
                        className="px-6 py-3 text-white transition duration={300} bg-blue-600 rounded-lg shadow-md cursor-pointer hover:bg-blue-700"
                    >
                        GET STARTED
                    </Link>
                </div>
                <div className="relative flex justify-center order-1 mt-12 md:w-1/2 md:order-2 md:mt-0">
                    <img 
                        className="relative z-10" 
                        src={Homeimg} 
                        alt="Home" 
                        style={{
                            animation: 'upAndDown 3s ease-in-out infinite',
                        }} 
                    />
                    <style>
                        {`
                            @keyframes upAndDown {
                                0%, 100% {
                                    transform: translateY(0);
                                }
                                50% {
                                    transform: translateY(-20px);
                                }
                            }
                        `}
                    </style>
                </div>
            </div>
        </section>
        {/* Hero Section End */}

        {/* Who We Are Section Start */}
        <section id="who-we-are" className="bg-[#ffffff] my-[31px] mx-[31px] py-16 md:py-24 md:px-16 rounded-[50px]">
            <div className="max-w-8xl mx-[auto] flex flex-col md:flex-row items-center">
                <div className="flex justify-center order-1 mt-12 md:w-1/2 md:order-2 md:mt-0">
                    <img className="" 
                            src={WeAre} 
                            style={{
                            animation: 'upAndDown 3s ease-in-out infinite',
                        }} 
                    />
                    <style>
                        {`
                            @keyframes upAndDown {
                                0%, 100% {
                                    transform: translateY(0);
                                }
                                50% {
                                    transform: translateY(-20px);
                                }
                            }
                        `}
                    </style>
                </div>
                <div className="order-2 mx-5 mt-12 md:w-1/2 md:order-2 md:mt-0">
                    <h1 className="text-4xl text-[#0090FF] md:text-6xl font-bold mb-6 uppercase">Who we are</h1>
                    <p className="mb-6 text-lg">
                        <span className="font-bold text-blue-600">TITANCode</span> is a leading technology solutions provider specializing in web development, design, and digital marketing. Our mission is to deliver innovative and tailored solutions that drive business success. With a dedicated team of experts, we transform ideas into impactful digital experiences.
                    </p>
                    <p className="mb-6 text-lg">We offer a full range of services including custom web development, mobile app design, creative graphic design, and strategic digital marketing. From crafting stunning websites to implementing effective digital strategies, we provide the tools and support you need to excel in the digital world.
                    </p>
                    <RouterLink to="/about" className="text-[#0090FF] underline hover:text-blue-700 transition duration-300">More About</RouterLink>
                </div>
            </div>
        </section>
        {/* Who We Are Section End */}

        {/* Our Services Start */}
        <section className="bg-[#ffffff] my-[31px] mx-[31px] py-16 md:py-24 md:px-16 rounded-[50px]">
            <div className="mx-auto max-w-7xl">
                <RouterLink to="/services">
                    <h1 className="text-4xl mx-5 text-[#0090FF] md:text-6xl font-bold mb-16 uppercase text-center">OUR SERVICES</h1>
                    <div className="grid grid-cols-1 gap-8 mx-5 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                        {services.map((service, index) => (
                            <div key={index} className="bg-[#F4F4F5] p-6 rounded-[30px]">
                                <div className="flex items-center justify-end mb-4">
                                    <img src={service.image} alt={service.title} className="w-12 h-12" />
                                </div>
                                <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </RouterLink>
            </div>
        </section>
        {/* Our Services End */}

        {/* Experts Section Start */}
        <Experts />
        {/* Experts Section End */}

        {/* Talks Section Start */}
        <Talks />
        {/* Talks Section End */}

      </div>
    );
}

export default Home;
