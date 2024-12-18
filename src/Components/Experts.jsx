import React, { useState } from 'react';
import groupImage from "../Assets/Home/team.png";

const experts = [
  {
    name: "Chanodya Niukshi",
    position: "Manager and Director",
    company: "CodeWAYNE",
    description: "As the Manager and Director of CodeWAYNE, I lead our team to deliver outstanding technology solutions with a focus on innovation and excellence.",
    positionStyle: { top: '45%', left: '20%' },
    boxPosition: { top: '57%', left: '10%' }
  },
  {
    name: "Samindi Kusalya",
    position: "Project Manager",
    company: "CodeWAYNE",
    description: "As the Project Manager at CodeWAYNE, I ensure our projects are delivered on time and exceed client expectations through meticulous planning and execution.",
    positionStyle: { top: '50%', left: '38%' },
    boxPosition: { top: '55%', left: '28%' }
  },
  {
    name: "Ashan Kavindu",
    position: "Founder & CEO, ",
    company: "CodeWAYNE",
    description: "As CEO and Founder of CodeWAYNE, I lead our team with a focus on innovation and excellence, ensuring we deliver top-notch tech solutions and drive our mission forward.",
    positionStyle: { top: '45%', left: '50%' },
    boxPosition: { top: '59%', left: '28%' }
  },
  {
    name: "Sahan Udara",
    position: "Co-Founder & Senior Software Enginner",
    company: "CodeWAYNE",
    description: "As Co-Founder and Senior Software Engineer at CodeWAYNE, I drive innovation and technical excellence, leading our team to deliver top-quality solutions and shape our company's future.",
    positionStyle: { top: '50%', left: '62%' },
    boxPosition: { top: '57%', left: '25%' }
  },
  {
    name: "Kithmi Sansala",
    position: "Product Manager",
    company: "CodeWAYNE",
    description: "I drive product vision and strategy to create innovative solutions that meet our clients' needs and exceed their expectations.",
    positionStyle: { top: '50%', left: '75%' },
    boxPosition: { top: '57%', left: '10%' }
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
      <h1 className="text-3xl text-[#0090FF] md:text-6xl font-bold mb-6 uppercase mx-5 text-center ">MEET THE EXPERTS</h1>
      <div className="relative flex justify-center">
        <img src={groupImage} alt="Team" className="w-full rounded-[50px] object-bottom" />
        {experts.map((expert, index) => (
          <button
            key={index}
            className={`absolute flex items-center justify-center w-6 h-6 hover:bg-[#64bcff] text-white rounded-full ${activeExpert === expert ? 'bg-orange-500' : 'bg-blue-500'}`}
            style={expert.positionStyle}
            onClick={() => handleDotClick(expert)}
          >
            &#9679;
          </button>
        ))}
        {activeExpert && (
          <div
            className="p-2 px-4 mr-5 mt-5 bg-gray-100 bg-opacity-75 backdrop-blur-md rounded-[20px] shadow-lg absolute"
            style={{ top: activeExpert.boxPosition.top, left: activeExpert.boxPosition.left }}
          >
            <h3 className="text-[10px] font-bold sm:text-[10px] md:text-[8px] lg:text-[18px]">{activeExpert.name}</h3>
            <p className="font-medium text-[#0090FF] text-[8px] sm:text-[7px] md:text-[8px] lg:text-[15px]">{activeExpert.position} at {activeExpert.company}</p>
            <p className="text-[8px] sm:text-[7px] md:text-[8px] lg:text-[15px]">{activeExpert.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experts;
