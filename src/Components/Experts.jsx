import React, { useState } from 'react';
import groupImage from "../Assets/Home/team.png";

const experts = [
  {
    name: "Chanodya Niyukshi",
    position: "Manager and Accountant",
    company: "TITANCode",
    description: "I oversee day-to-day operations, ensure financial accuracy, and manage budgets to support our team's success and efficiency.",
    positionStyle: { top: '50%', left: '20%' },
    boxPosition: { top: '57%', left: '10%' }
  },
  {
    name: "Samindu Kusalya",
    position: "Founder & CEO, ",
    company: "TITANCode",
    description: "As CEO and Founder of TITANcode, I lead our team with a focus on innovation and excellence, ensuring we deliver top-notch tech solutions and drive our mission forward.",
    positionStyle: { top: '50%', left: '38%' },
    boxPosition: { top: '55%', left: '28%' }
  },
  {
    name: "Ashan Kavindu",
    position: "Founder & CEO, ",
    company: "TITANCode",
    description: "As CEO and Founder of TITANcode, I lead our team with a focus on innovation and excellence, ensuring we deliver top-notch tech solutions and drive our mission forward.",
    positionStyle: { top: '45%', left: '50%' },
    boxPosition: { top: '59%', left: '28%' }
  },
  {
    name: "Sahan Udara",
    position: "Co-Founder & Senior Software Enginner",
    company: "TITANCode",
    description: "As Co-Founder and Senior Software Engineer at TITANcode, I drive innovation and technical excellence, leading our team to deliver top-quality solutions and shape our company's future.",
    positionStyle: { top: '50%', left: '62%' },
    boxPosition: { top: '57%', left: '25%' }
  },
  {
    name: "Kithmi Sansala",
    position: "IT Analytics",
    company: "TITANCode",
    description: "As Co-Founder and Senior Software Engineer at TITANcode, I drive innovation and technical excellence, leading our team to deliver top-quality solutions and shape our company's future.",
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
            className="absolute flex items-center justify-center w-6 h-6 text-white bg-blue-500 rounded-full"
            style={expert.positionStyle}
            onClick={() => handleDotClick(expert)}
          >
            &#9679;
          </button>
        ))}
        {activeExpert && (
          <div
            className=" p-2 px-4 mr-5 mt-5 bg-gray-100 bg-opacity-75 backdrop-blur-md rounded-[20px] shadow-lg absolute"
            style={{ top: activeExpert.boxPosition.top, left: activeExpert.boxPosition.left }}
          >
            <h3 className="text-[10px] font-bold sm:text-[10px] md:text-[8px] lg:text-[18px]">{activeExpert.name}</h3>
            <p className=" font-medium text-[#0090FF] text-[8px] sm:text-[7px] md:text-[8px] lg:text-[15px] ">{activeExpert.position} at {activeExpert.company}</p>
            <p className=" text-[8px] sm:text-[7px] md:text-[8px] lg:text-[15px]">{activeExpert.description}</p>
          </div>
        )}
        {/* <div className="absolute inset-x-0 bottom-2 bg-[#F4F4F5] bg-opacity-75 rounded-[30px] mx-5 p-1 px-10 text-center shadow-lg  o">
        <p className="text-[8px] sm:text-[7px] md:text-[8px] lg:text-[15px] ">
            At <span className='text-[#0090FF] leading-normal font-medium'>TITANCode</span>, our diverse team excels in tech, design, and marketing, delivering innovative solutions with a collaborative and passionate approach.
        </p>
        </div> */}

      </div>
    </div>
  );
};

export default Experts;
