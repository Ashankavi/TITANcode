import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Talks from './Talks';      // Import Talks component

import Homeimg from "../Assets/Services/services.png";
import Web from "../Assets/Services/web.png";
import App from "../Assets/Services/app.png";
import Poss from "../Assets/Services/poss.png";
import UIUX from "../Assets/Services/uiux.png";
import Graphic from "../Assets/Services/graphic.png";
import Marketing from "../Assets/Services/marketing.png";
import HomeVideo from "../Assets/Home/video.mp4";



const Services = () => {
  return (
    <div>
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
            <h1 className="my-4 text-4xl font-bold uppercase md:text-6xl">Our Services</h1>
            <p className="text-lg">
              <span className="font-bold text-blue-600">TITANCode</span> we specialize in delivering top-notch services in web development, mobile app creation, UI/UX design, and digital marketing. Our expert team is dedicated to helping businesses thrive through innovative and high-quality solutions tailored to meet your unique needs. Partner with us to drive your business forward with exceptional technology solutions.
            </p>
            <RouterLink to="/Contact">
              <button className="px-6 py-3 mt-4 text-white transition duration-300 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700">Let's Talk</button>
            </RouterLink>
          </div>
          <div className="flex justify-center order-1 mt-12 md:w-1/2 md:order-2 md:mt-0">
            <img className="" src={Homeimg} />
          </div>
        </div>
      </section>

      {/* Web Section */}
      <section className="bg-[#ffffff] my-[31px] mx-[31px] py-16 md:py-24 md:px-16 rounded-[50px] ">
        <div className="max-w-8xl mx-[auto] flex flex-col md:flex-row items-center">
          <div className="flex justify-center order-1 mt-12 md:w-1/2 md:order-2 md:mt-0">
            <img className="" src={Web} />
          </div>
          <div className="order-2 mx-5 mt-12 md:w-1/2 md:order-2 md:mt-0">
            <h1 className="text-4xl text-[#0090FF] md:text-6xl font-bold mb-6 uppercase">Web Application</h1>
            <p className="mb-6 text-lg">
              At <span className="font-bold text-blue-600">TITANCode</span>, our web application services are designed to transform your ideas into powerful, scalable, and high-performance applications. We specialize in creating custom web solutions that are responsive, user-friendly, and visually eye-catching. From initial concept to deployment and maintenance, our expert team ensures seamless user experiences and robust functionality, delivering innovative applications that drive growth and efficiency for your business.
            </p>
          </div>
        </div>
      </section>

      {/* App Section */}
      <section className="bg-[#ffffff] my-[31px] mx-[31px] py-16 md:py-24 md:px-16 rounded-[50px] ">
        <div className="flex flex-col items-center mx-auto max-w-8xl md:flex-row">
          <div className="flex justify-center order-1 mt-12 md:order-2 md:mt-0 md:w-1/2">
            <img src={App} alt="Vision" />
          </div>
          <div className="order-2 mx-5 mt-12 md:order-1 md:mt-0 md:w-1/2">
            <h1 className="text-4xl text-[#0090FF] md:text-6xl font-bold mb-6 uppercase">Mobile Application</h1>
            <p className="mb-6 text-lg">
              Our mobile application services focus on creating high-performance, user-friendly, and visually appealing apps for both iOS and Android platforms. We develop custom mobile solutions tailored to your business needs, ensuring seamless user experiences across all devices. From concept to deployment and ongoing support, our expert team delivers innovative mobile applications that drive engagement and growth for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Poss Section */}
      <section className="bg-[#ffffff] my-[31px] mx-[31px] py-16 md:py-24 md:px-16 rounded-[50px] ">
        <div className="max-w-8xl mx-[auto] flex flex-col md:flex-row items-center">
          <div className="flex justify-center order-1 mt-12 md:w-1/2 md:order-2 md:mt-0">
            <img className="" src={Poss} />
          </div>
          <div className="order-2 mx-5 mt-12 md:w-1/2 md:order-2 md:mt-0">
            <h1 className="text-4xl text-[#0090FF] md:text-6xl font-bold mb-6 uppercase">Pos system</h1>
            <p className="mb-6 text-lg">
              We offer advanced POS system solutions tailored for various industries including food city, hardware stores, and retail shops. Our customizable systems ensure efficient transactions, real-time inventory management, and comprehensive reporting. User-friendly and reliable, our POS solutions enhance customer service and drive operational efficiency for your business.
            </p>
          </div>
        </div>
      </section>

      {/* UIUX Section Start */}
      <section className="bg-[#ffffff] my-[31px] mx-[31px] py-16 md:py-24 md:px-16 rounded-[50px] ">
        <div className="flex flex-col items-center mx-auto max-w-8xl md:flex-row">
          <div className="flex justify-center order-1 mt-12 md:order-2 md:mt-0 md:w-1/2">
            <img src={UIUX} alt="Vision" />
          </div>
          <div className="order-2 mx-5 mt-12 md:order-1 md:mt-0 md:w-1/2">
            <h1 className="text-4xl text-[#0090FF] md:text-6xl font-bold mb-6 uppercase">UI/UX designing</h1>
            <p className="mb-6 text-lg">
              Our UI/UX design services cover web and mobile app interfaces, ensuring intuitive and visually appealing user experiences. Using tools like Figma and Adobe XD, we create designs that are both user-friendly and engaging, tailored to meet the specific needs of your business and audience.
            </p>
          </div>
        </div>
      </section>

      {/* UIUX Section End */}

      {/* Graphic Section Start */}
      <section className="bg-[#ffffff] my-[31px] mx-[31px] py-16 md:py-24 md:px-16 rounded-[50px] ">
        <div className="max-w-8xl mx-[auto] flex flex-col md:flex-row items-center">
          <div className="flex justify-center order-1 mt-12 md:w-1/2 md:order-2 md:mt-0">
            <img className="" src={Graphic} />
          </div>
          <div className="order-2 mx-5 mt-12 md:w-1/2 md:order-2 md:mt-0">
            <h1 className="text-4xl text-[#0090FF] md:text-6xl font-bold mb-6 uppercase">graphic Designing</h1>
            <p className="mb-6 text-lg">
              At <span className="font-bold text-blue-600">TITANCode</span>, our graphic design services encompass social media posts, flyers, banners, logos, labels, packages, tickets, and more. Utilizing Adobe Photoshop, Illustrator, and InDesign, we ensure high-quality, visually appealing designs that effectively communicate your brand's message and captivate your audience.
            </p>
          </div>
        </div>
      </section>

      {/* Graphic Section End */}

      {/* Marketing Section Start */}
      <section className="bg-[#ffffff] my-[31px] mx-[31px] py-16 md:py-24 md:px-16 rounded-[50px] ">
        <div className="flex flex-col items-center mx-auto max-w-8xl md:flex-row">
          <div className="flex justify-center order-1 mt-12 md:order-2 md:mt-0 md:w-1/2">
            <img src={Marketing} alt="Vision" />
          </div>
          <div className="order-2 mx-5 mt-12 md:order-1 md:mt-0 md:w-1/2">
            <h1 className="text-4xl text-[#0090FF] md:text-6xl font-bold mb-6 uppercase">Digital Marketing</h1>
            <p className="mb-6 text-lg">
              Our digital marketing services include Search Engine Optimization (SEO), Pay-Per-Click Advertising (PPC), Content Marketing, Social Media Management, and Email Marketing. We develop comprehensive strategies to enhance your online presence, drive targeted traffic, and engage your audience, helping your business achieve its digital goals.
            </p>
          </div>
        </div>
      </section>
      {/* Marketing Section End */}

        {/* Talks Section Start */}
        <Talks />
        {/* Talks Section End */}

    </div>
  );
}

export default Services;
