import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import Experts from "./Experts";

const Terms = () => {
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

        {/* 4. Intellectual Property */}
        <h2 className="text-[18px]  lg:text-2xl text-[#0090FF] font-bold  uppercase mt-8 mb-5">3. Payment Terms</h2>
                <p className="sm:text-left text-[12px] lg:text-[15px] text-[#727272]"> <span className='font-bold '>Ownership: </span>
                All content, designs, and materials provided by TITANcode remain the intellectual property of TITANcode. You may not reproduce, distribute, or modify any content without our express written permission.
                <br /> <span className='font-bold '>License: </span>
                We grant you a non-exclusive, non-transferable license to use the deliverables provided for the purpose intended.
                </p> 

        {/* 5. Confidentiality */}
        <h2 className="text-[18px]  lg:text-2xl text-[#0090FF] font-bold  uppercase mt-8 mb-5">5. Confidentiality</h2>
                <p className="sm:text-left text-[12px] lg:text-[15px] text-[#727272]"> 
                Both parties agree to keep all confidential information received during the course of service delivery confidential and not to disclose it to any third party without prior written consent.
                </p>        

        {/* 6. Termination */}
        <h2 className="text-[18px]  lg:text-2xl text-[#0090FF] font-bold  uppercase mt-8 mb-5">5. Confidentiality</h2>
            <p className="sm:text-left text-[12px] lg:text-[15px] text-[#727272]"> <span className='font-bold '>Termination by You: </span>
                You may terminate our services at any time with written notice. Payment for services rendered up to the termination date will still be required.
                <br /> <span className='font-bold '>Termination by US: </span>
                We reserve the right to terminate services if you breach any of these Terms & Conditions or fail to make timely payments.
            </p>         

        {/* 7. Limitation of Liability */}
        <h2 className="text-[18px]  lg:text-2xl text-[#0090FF] font-bold  uppercase mt-8 mb-5">5. Confidentiality</h2>
                <p className="sm:text-left text-[12px] lg:text-[15px] text-[#727272]"> 
                TITANcode is not liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our services. Our total liability is limited to the amount paid for the specific services causing the damage.
                </p>      

        {/* 7. Limitation of Liability */}
        <h2 className="text-[18px]  lg:text-2xl text-[#0090FF] font-bold  uppercase mt-8 mb-5">8. Indemnification</h2>
                <p className="sm:text-left text-[12px] lg:text-[15px] text-[#727272]"> 
                You agree to indemnify and hold TITANcode harmless from any claims, losses, liabilities, damages, costs, or expenses arising from your use of our services or violation of these Terms & Conditions.
                </p>              

        {/* 9. Governing Law */}
        <h2 className="text-[18px]  lg:text-2xl text-[#0090FF] font-bold  uppercase mt-8 mb-5">9. Governing Law</h2>
                <p className="sm:text-left text-[12px] lg:text-[15px] text-[#727272]"> 
                These Terms & Conditions are governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising under these Terms & Conditions will be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].
                </p>     

        {/* 10. Changes to Terms */}
        <h2 className="text-[18px]  lg:text-2xl text-[#0090FF] font-bold  uppercase mt-8 mb-5">10. Changes to Terms</h2>
                <p className="sm:text-left text-[12px] lg:text-[15px] text-[#727272]"> 
                We may update these Terms & Conditions from time to time. The revised terms will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of the updated terms.
                </p>      

        {/* 11. Contact Us */}
        <h2 className="text-[18px]  lg:text-2xl text-[#0090FF] font-bold  uppercase mt-8 mb-5">11. Contact Us</h2>
                <p className="sm:text-left text-[12px] lg:text-[15px] text-[#727272]"> 
                If you have any questions or concerns regarding these Terms & Conditions, please contact us at:
                </p>                                                                   

      </div>
      </div>
    </div>
  )
}

export default Terms
