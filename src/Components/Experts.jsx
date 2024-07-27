import React, { useState } from 'react';
import groupImage from "../Assets/Home/team.png";

const experts = [
  {
    name: "Chanodya Niyukshi",
    position: "Manager and Accountant",
    company: "TITANCode",
    description: "I oversee day-to-day operations, ensure financial accuracy, and manage budgets to support our team's success and efficiency.",
    positionStyle: { top: '50%', left: '20%' },
    boxPosition: { top: '5%', left: '10%' }
  },
  {
    name: "Expert 2",
    position: "Position 2",
    company: "TITANCode",
    description: "Description for expert 2.",
    positionStyle: { top: '50%', left: '38%' },
    boxPosition: { top: '60%', left: '28%' }
  },
  {
    name: "Ashan Kavindu",
    position: "Founder & CEO, ",
    company: "TITANCode",
    description: "As CEO and Founder of TITANcode, I lead our team with a focus on innovation and excellence, ensuring we deliver top-notch tech solutions and drive our mission forward.",
    positionStyle: { top: '45%', left: '50%' },
    boxPosition: { top: '5%', left: '50%' }
  },
  {
    name: "Sahan Udara",
    position: "Co-Founder & Senior Software Enginner",
    company: "TITANCode",
    description: "As a Co-Founder and Senior Software Engineer at TITANcode, I’m passionate about crafting innovative solutions and driving our technical vision. I lead our engineering efforts while shaping our company’s future, ensuring we deliver excellence in every project.",
    positionStyle: { top: '50%', left: '62%' },
    boxPosition: { top: '-1%', left: '20%' }
  },
  {
    name: "Expert 5",
    position: "Position 5",
    company: "TITANCode",
    description: "Description for expert 5.",
    positionStyle: { top: '50%', left: '75%' },
    boxPosition: { top: '60%', left: '80%' }
  }
];

const Experts = () => {
  const [activeExpert, setActiveExpert] = useState(null);

  const handleDotClick = (expert) => {
    if (activeExpert === expert) {
      setActiveExpert(null);
    } else {
      setActiveExpert(expert);
    }
  };

  return (
    <div className="bg-[#ffffff] my-[31px] mx-[31px] py-16 md:py-24 md:px-16 rounded-[50px]">
      <h1 className="text-4xl text-[#0090FF] md:text-6xl font-bold mb-6 uppercase ">MEET THE EXPERTS</h1>
      <div className="relative flex justify-center">
        <img src={groupImage} alt="Team" className="w-full rounded-[50px] object-bottom" />
        {experts.map((expert, index) => (
          <button
            key={index}
            className="absolute bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-white"
            style={expert.positionStyle}
            onClick={() => handleDotClick(expert)}
          >
            &#9679;
          </button>
        ))}
        {activeExpert && (
          <div
            className="mt-6 p-4 bg-gray-100 bg-opacity-75 backdrop-blur-md rounded-lg shadow-lg absolute"
            style={{ top: activeExpert.boxPosition.top, left: activeExpert.boxPosition.left }}
          >
            <h3 className="text-xl font-bold mb-2">{activeExpert.name}</h3>
            <p className="text-sm font-medium text-[#0090FF] ">{activeExpert.position} at {activeExpert.company}</p>
            <p className="mt-2">{activeExpert.description}</p>
          </div>
        )}
        <div className="absolute inset-x-0 bottom-5 bg-[#F4F4F5] bg-opacity-75 rounded-[50px] p-4 text-center shadow-lg w-[90%] mx-auto">
          <p className="text-sm md:text-base">
            At TITANCode, our team is a blend of diverse talents and expertise, each contributing to our collective strength. Our members bring a wealth of experience in technology, design, and marketing, working together to deliver innovative solutions. Our collaborative approach, commitment to excellence, and passion for problem-solving drive our success and ensure we meet and exceed client expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experts;
