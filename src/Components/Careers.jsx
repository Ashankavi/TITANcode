import React, { useState } from 'react';
import Homeimg from "../Assets/Careers/careers.png";
import ME from "../Assets/Careers/me.png";
import Arrow from "../Assets/Careers/arrow.png";

const positions = [
  {
    title: 'Intern Software Engineer',
    description: 'Description for Software Engineer',
    points: [
      'Point 1 for Software Engineer',
      'Point 2 for Software Engineer',
      'Point 3 for Software Engineer'
    ],
  },
  {
    title: 'Intern UI/UX Designer',
    description: 'Description for UI/UX Designer',
    points: [
      'Point 1 for UI/UX Designer',
      'Point 2 for UI/UX Designer',
      'Point 3 for UI/UX Designer'
    ],
  },
  {
    title: 'Intern Front-End Developer',
    description: 'Description for Front-End Developer',
    points: [
      'Point 1 for Front-End Developer',
      'Point 2 for Front-End Developer',
      'Point 3 for Front-End Developer'
    ],
  },
  {
    title: 'Intern Full-Stack Developer',
    description: 'Description for Full-Stack Developer',
    points: [
      'Point 1 for Full-Stack Developer',
      'Point 2 for Full-Stack Developer',
      'Point 3 for Full-Stack Developer'
    ],
  },
  {
    title: 'Intern Back-End Developer',
    description: 'Description for Back-End Developer',
    points: [
      'Point 1 for Back-End Developer',
      'Point 2 for Back-End Developer',
      'Point 3 for Back-End Developer'
    ],
  },
];

const Card = ({ title, description, points }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4 transition duration-500 bg-[#F4F4F5] rounded-[50px] ">
      <div className="flex items-center justify-between p-4 cursor-pointer" onClick={toggleOpen}>
        <span className="ml-2 font-semibold text-[15px] md:text-[15px] lg:text-[20px] ">{title}</span>
        <div className="flex items-center ml-5 text-gray-500">
          <span className="mr-8 text-[10px] md:text-[15px] lg:text-[15px]">Full Time</span>
          <img
            src={Arrow}
            alt="Arrow"
            className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-90' : ''}`}
          />
        </div>
      </div>
      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        {isOpen && (
          <div className="p-4 bg-gray-50">
            <h2 className="mb-2 text-[12px] md:text-[15px] lg:text-[17px] font-semibold ">{description}</h2>
            <ul className="pl-5 mb-4 list-disc text-[10px] md:text-[15px] lg:text-[15px]">
              {points.map((point, index) => (
                <li key={index} className="mb-1">{point}</li>
              ))}
            </ul>
            <button className="px-4 py-2 text-white bg-blue-500 rounded">Apply</button>
          </div>
        )}
      </div>
    </div>
  );
};

const Careers = () => {
  return (
    <div>
      <section className="bg-[#ffffff] my-[31px] mx-[31px] py-16 md:py-24 md:px-16 rounded-[50px]">
        <div className="flex flex-col items-center mx-auto max-w-8xl md:flex-row">
          <div className="order-2 mx-5 md:w-1/2 md:order-1">
            <p className="font-medium text-blue-600">
              "WE ARE A LEADING PROVIDER OF TECHNOLOGY SOLUTIONS"
            </p>
            <h1 className="my-4 text-4xl font-bold md:text-6xl">BECOME A TITANcoder</h1>
            <p className="text-lg">
              <span className="font-bold text-blue-600">TITANCode</span> we are dedicated to providing top-notch technology solutions. Our team excels in web development, mobile apps, UI/UX design, and digital marketing. We are committed to turning your ideas into powerful digital experiences and driving your business success.
            </p>
            <button className="px-6 py-3 mt-4 text-white transition duration-300 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700">
              Let's Talk
            </button>
          </div>
          <div className="flex justify-center order-1 mt-12 md:w-1/2 md:order-2 md:mt-0">
            <img className="" src={Homeimg} alt="Careers" />
          </div>
        </div>
      </section>

      {/* Web Section */}
      <section className="bg-[#ffffff] my-[31px] mx-[31px] py-16 md:py-24 md:px-16 rounded-[50px]">
        <div className="max-w-8xl mx-[auto] flex flex-col md:flex-row items-center">
          <div className="flex justify-center order-1 mx-2 mt-12 md:w-1/2 md:order-2 md:mt-0">
            <img className="" src={ME} alt="Message from our Leader" />
          </div>
          <div className="bg-[#F4F4F5] py-8 md:px-16 rounded-[50px] order-2 mx-5 mt-12 md:w-1/2 md:order-2 md:mt-0">
            <h1 className="text-2xl text-[#0090FF] md:text-5xl font-bold mb-4 mx-2 text-center uppercase">
              Message from our Leader
            </h1>
            <p className="mx-2 text-[8px] md:text-[8px] lg:text-[15px]">
              Welcome to the TITANcode family! We're thrilled to have you on board. At TITANcode, our mission is to provide exceptional technology solutions that help businesses thrive. We are committed to delivering high-quality web development, mobile apps, UI/UX design, and digital marketing services, driving innovation and excellence in every project we undertake. Dive in, share your ideas, and let’s achieve great things together!
            </p>
            <p className="mx-2 my-4 text-[#4E4E4E] text-[8px] md:text-[8px] lg:text-[15px]">
              <span className="font-bold text-[#000000]">Ashan Kavindu</span> <br />
              Founder & CEO, TITANcode
            </p>
          </div>
        </div>
      </section>

      {/* Available Positions Section */}
      <section className="bg-[#ffffff] my-[31px] mx-[31px] py-16 md:py-24 md:px-16 rounded-[50px]">
        <div className="mx-5 max-w-8xl">
          <h1 className="text-2xl text-[#0090FF] md:text-5xl font-bold mb-10 mx-2 uppercase">AVAILABLE POSITIONS</h1>
          {positions.map((position, index) => (
            <Card key={index} title={position.title} description={position.description} points={position.points} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Careers;
