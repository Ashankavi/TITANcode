import React from 'react'

import Homeimg from "../Assets/Portfolio/rocket.png"

const Careers = () => {
  return (
    <div>
      
      <section className="bg-[#ffffff] my-[31px] mx-[31px] py-16 md:py-24 md:px-16 rounded-[50px] ">
      <div className="flex flex-col items-center mx-auto max-w-8xl md:flex-row">
        <div className="order-2 mx-5 md:w-1/2 md:order-1">
          <p className="font-medium text-blue-600 ">"WE ARE A LEADING PROVIDER OF TECHNOLOGY SOLUTIONS"</p>
          <h1 className="my-4 text-4xl font-bold md:text-6xl">BECOME A TITANcoder</h1>
          <p className="text-lg ">
            <span className="font-bold text-blue-600 ">TITANCode</span>  we are dedicated to providing top-notch technology solutions. Our team excels in web development, mobile apps, UI/UX design, and digital marketing. We are committed to turning your ideas into powerful digital experiences and driving your business success.
          </p>
          <button className="px-6 py-3 mt-4 text-white transition duration-300 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700">Let's Talk</button>
        </div>
        <div className="flex justify-center order-1 mt-12 md:w-1/2 md:order-2 md:mt-0">
          <img className="" src={Homeimg} /></div>
      </div>
    </section>

    </div>
  )
}

export default Careers
