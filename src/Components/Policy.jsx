import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import Experts from "./Experts";

const Policy = () => {
  return (
    <div>
    <div className="bg-white my-8 mx-8 py-6 md:px-16 rounded-[50px] flex flex-col lg:flex-row  ">
      <div className="mx-5 mb-6 lg:text-left lg:mb-0">
        <h1 className="text-[20px]  lg:text-4xl text-[#0090FF] font-bold mt-5 uppercase "> Terms & Conditions</h1>

        {/* Effective Date */}
        <h2 className="text-[18px]  lg:text-2xl text-[#0090FF] font-bold  uppercase mt-8 mb-5">Effective Date: 02 July 2024</h2>
        <p className="sm:text-left text-[12px] lg:text-[15px] text-[#727272]">
              TITANCode delivers cutting-edge technology solutions, specializing in web development,
              mobile apps, UI/UX design, and digital marketing. Our expert team is dedicated to
              transforming your ideas into impactful digital experiences, driving your business forward.
            </p>

        {/* 1. Services */}
        <h2 className="text-[18px]  lg:text-2xl text-[#0090FF] font-bold  uppercase mt-8 mb-5">1. Services</h2>
        <p className="sm:text-left text-[12px] lg:text-[15px] text-[#727272]">
        TITANcode provides a range of services, including but not limited to web design, app development, graphic design, UI/UX design, marketing, and point-of-sale (POS) systems.
            </p>     

        {/* 2. Use of Our Services */}
            <h2 className="text-[18px]  lg:text-2xl text-[#0090FF] font-bold  uppercase mt-8 mb-5">2. Use of Our Services</h2>
                <p className="sm:text-left text-[12px] lg:text-[15px] text-[#727272]"> <span className='font-bold '>Eligibility: </span>
                You must be at least 18 years old or have parental consent to use our services. <br /> <span className='font-bold '>Account Responsibilities: </span>
                You are responsible for maintaining the confidentiality of your account information and for all activities under your account.
                </p>   

        {/* 3. Payment Terms */}
        <h2 className="text-[18px]  lg:text-2xl text-[#0090FF] font-bold  uppercase mt-8 mb-5">3. Payment Terms</h2>
                <p className="sm:text-left text-[12px] lg:text-[15px] text-[#727272]"> <span className='font-bold '>Pricing: </span>
                All fees for our services are outlined in the proposal or contract provided to you. We reserve the right to modify our pricing at any time.
                <br /> <span className='font-bold '>Payment: </span>
                Payments must be made according to the agreed-upon terms. Late payments may incur additional charges.
                </p>      
      </div>
      </div>
    </div>
  )
}

export default Policy
