import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Talks from "./Talks";

import Homeimg from "../Assets/Portfolio/rocket.png"
import Photographer from "../Assets/Portfolio/photographer.png"
import Fashion from "../Assets/Portfolio/fashion.png"
import Coffee from "../Assets/Portfolio/coffee.png"

const cards = [
    { category: 'E-Commerce', title: 'Photographer Portfolio Web Design', image: Photographer },
    { category: 'Fashion Store', title: 'Fashion Store Portfolio Web Design', image: Fashion },
    { category: 'Health', title: 'Health Portfolio Web Design', image: Coffee },
    { category: 'Health', title: 'Health Portfolio Web Design', image: Coffee },
    { category: 'Health', title: 'Health Portfolio Web Design', image: Coffee },
    { category: 'Health', title: 'Health Portfolio Web Design', image: Coffee },
    { category: 'Health', title: 'Health Portfolio Web Design', image: Coffee },
    // Add more card data here as needed
  ];

const Portfolio = () => {
    const [filter, setFilter] = useState('All');
    const [currentPage, setCurrentPage] = useState(0);
  
    const filteredCards = filter === 'All' ? cards : cards.filter(card => card.category === filter);
  
    const cardsPerPage = 3;
    const totalPages = Math.ceil(filteredCards.length / cardsPerPage);
    const currentCards = filteredCards.slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage);
  
    const handleFilterChange = (e) => {
      setFilter(e.target.value);
      setCurrentPage(0); // Reset to the first page whenever the filter changes
    };
  
    const handlePrevPage = () => {
      setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
    };
  
    const handleNextPage = () => {
      setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
    };

  return (
    <div>
      
      <section className="bg-[#ffffff] my-[31px] mx-[31px] py-16 md:py-24 md:px-16 rounded-[50px] ">
      <div className="flex flex-col items-center mx-auto max-w-8xl md:flex-row">
        <div className="order-2 mx-5 md:w-1/2 md:order-1">
          <p className="font-medium text-blue-600 ">"WE ARE A LEADING PROVIDER OF TECHNOLOGY SOLUTIONS"</p>
          <h1 className="my-4 text-4xl font-bold uppercase md:text-6xl">Our Success Stories</h1>
          <p className="text-lg ">
            <span className="font-bold text-blue-600 ">TITANCode</span>  we are dedicated to providing top-notch technology solutions. Our team excels in web development, mobile apps, UI/UX design, and digital marketing. We are committed to turning your ideas into powerful digital experiences and driving your business success.
          </p>
          <RouterLink to="/Home">
          <button className="px-6 py-3 mt-4 text-white transition duration-300 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700">Let's Talk</button>
          </RouterLink>
        </div>
        <div className="flex justify-center order-1 mt-12 md:w-1/2 md:order-2 md:mt-0">
          <img className="" src={Homeimg} /></div>
      </div>
    </section>

    <div className=" bg-[#ffffff] my-[31px] mx-[31px] py-16 md:py-24 md:px-16 rounded-[50px] p-4">
    <div className="flex items-center mb-8 filter-dropdown">
        <span className="mr-2">Filter:</span>
        <select
          value={filter}
          onChange={handleFilterChange}
          className="p-3 mx-5 bg-[#F4F4F5] rounded-[10px]"
        >
          <option value="All">All</option>
          <option value="E-Commerce">E-Commerce</option>
          <option value="Fashion Store">Fashion Store</option>
          <option value="Health">Health</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-8 cards-grid sm:grid-cols-2 md:grid-cols-3">
        {filteredCards.map((card, index) => (
          <div key={index} className="overflow-hidden bg-gray-100 bg-opacity-75 backdrop-blur-md rounded-[30px] shadow-md card">
            <div className="relative">
              <img src={card.image} alt={card.title} className="object-cover w-full h-48" />
              <div className="absolute px-4 py-1 text-xs text-white bg-gray-100 bg-opacity-[50px] backdrop-blur-md rounded-tl-[20px] top-2 left-2">
                {card.category}
              </div>
            </div>
            <div className="p-4">
              <h2 className="mb-2 text-lg font-semibold">{card.title}</h2>
              <p className="text-gray-600 text-[8px] sm:text-[7px] md:text-[8px] lg:text-[15px]">
                At TITANCode, our web application services are designed to transform your ideas into
                powerful, scalable, and high-performance applications. We specialize in creating
                custom web solutions that are responsive, user-friendly, and visually eye-catching.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

        {/* Talks Section Start */}
        <Talks />
        {/* Talks Section End */}

    </div>
  )
}

export default Portfolio
