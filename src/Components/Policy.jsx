import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import Talks from "./Talks";

const Policy = () => {
  return (
    <div>
    <div className="bg-white my-8 mx-8 py-6 md:px-16 rounded-[50px] flex flex-col lg:flex-row  ">
      <div className="mx-5 my-6 lg:text-left lg:mb-0">
        <h1 className="text-[20px]  lg:text-4xl text-[#0090FF] font-bold uppercase ">Privacy Policy</h1>

        {/* Effective Date */}
        <h2 className="text-[18px]  lg:text-2xl text-[#0090FF] font-bold  uppercase mt-8 mb-5">Effective Date: 02 July 2024</h2>
        <p className="sm:text-left text-[12px] lg:text-[15px] text-[#727272]">
        At TITANcode, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your information when you use our website and services.
            </p>

        {/* 1. Information We Collect */}
        <h2 className="text-[18px]  lg:text-2xl text-[#0090FF] font-bold  uppercase mt-8 mb-5">1. Information We Collect</h2>
        <p className="sm:text-left text-[12px] lg:text-[15px] text-[#727272]"> <span className='font-bold '>Personal Information:: </span>
                We may collect personal information such as your name, email address, phone number, and payment details when you interact with our services or contact us.
                <br /> <span className='font-bold '>Usage Data: </span>
                We collect information about your use of our website and services, including IP addresses, browser types, and browsing activities through cookies and other tracking technologies.
            </p>      

        {/* 2. How We Use Your Information */}
            <h2 className="text-[18px]  lg:text-2xl text-[#0090FF] font-bold  uppercase mt-8 mb-5">2. How We Use Your Information</h2>
                <p className="sm:text-left text-[12px] lg:text-[15px] text-[#727272]">
                <span className='font-bold '>Service Delivery:: </span>
                We use your information to provide and improve our services, process transactions, and communicate with you. <br /> 
                <span className='font-bold '>Marketing: </span>
                With your consent, we may use your contact information to send you promotional materials and updates about our services.<br /> 
                <span className='font-bold '>Analytics: </span>
                We use data to analyze website usage and improve our offerings.
                </p>   

        {/* 3. How We Share Your Information */}
        <h2 className="text-[18px]  lg:text-2xl text-[#0090FF] font-bold  uppercase mt-8 mb-5">3. How We Share Your Information</h2>
                <p className="sm:text-left text-[12px] lg:text-[15px] text-[#727272]">
                <span className='font-bold '>Service Providers: </span>
                We may share your information with third-party service providers who assist us in operating our website, processing payments, or performing other functions on our behalf.
                <br /> <span className='font-bold '>Legal Requirements: </span>
                We may disclose your information if required by law or in response to legal requests, such as subpoenas or court orders.
                </p> 

        {/* 4. Data Security */}
        <h2 className="text-[18px]  lg:text-2xl text-[#0090FF] font-bold  uppercase mt-8 mb-5">4. Data Security</h2>
                <p className="sm:text-left text-[12px] lg:text-[15px] text-[#727272]">
                We implement appropriate security measures to protect your personal information from unauthorized access,
                alteration, disclosure, or destruction. However, no data transmission over 
                the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
                </p> 

        {/* 5. Cookies and Tracking Technologies */}
        <h2 className="text-[18px]  lg:text-2xl text-[#0090FF] font-bold  uppercase mt-8 mb-5">5. Cookies and Tracking Technologies</h2>
                <p className="sm:text-left text-[12px] lg:text-[15px] text-[#727272]"> 
                Our website uses cookies and other tracking technologies to enhance user experience and analyze website performance. 
                You can manage your cookie preferences through your browser settings.
                </p>        

        {/* 6. Your Rights */}
        <h2 className="text-[18px]  lg:text-2xl text-[#0090FF] font-bold  uppercase mt-8 mb-5">6. Your Rights</h2>
            <p className="sm:text-left text-[12px] lg:text-[15px] text-[#727272]">
                <span className='font-bold '>Access and Correction: </span>
                You have the right to access and correct your personal information held by us.
                <br /> <span className='font-bold '>Opt-Out:: </span>
                You may opt out of receiving marketing communications from us by following the unsubscribe instructions in the emails we send.
            </p>         

        {/* 7. Third-Party Links */}
        <h2 className="text-[18px]  lg:text-2xl text-[#0090FF] font-bold  uppercase mt-8 mb-5">7. Third-Party Links</h2>
                <p className="sm:text-left text-[12px] lg:text-[15px] text-[#727272]"> 
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. Please review their privacy policies before providing any personal information.
                </p>      

        {/* 8. Children’s Privacy */}
        <h2 className="text-[18px]  lg:text-2xl text-[#0090FF] font-bold  uppercase mt-8 mb-5">8. Children’s Privacy</h2>
                <p className="sm:text-left text-[12px] lg:text-[15px] text-[#727272]"> 
                Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children. If we become aware of any such information, we will take steps to delete it.
                </p>              

        {/* 9. Changes to Privacy Policy */}
        <h2 className="text-[18px]  lg:text-2xl text-[#0090FF] font-bold  uppercase mt-8 mb-5">9. Changes to Privacy Policy</h2>
                <p className="sm:text-left text-[12px] lg:text-[15px] text-[#727272]"> 
                We may update this Privacy Policy from time to time. The revised policy will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of the updated policy.
                </p>       

        {/* 10. Contact Us */}
        <h2 className="text-[18px]  lg:text-2xl text-[#0090FF] font-bold  uppercase mt-8 mb-5">10. Contact Us</h2>
                <p className="sm:text-left text-[12px] lg:text-[15px] text-[#727272]"> 
                If you have any questions or concerns about this Privacy Policy or how we handle your information, please contact us at:
                </p>                                                                   
      </div>
      </div>
              {/* Talks Section Start */}
              <Talks />
        {/* Talks Section End */}
    </div>
  )
}

export default Policy
