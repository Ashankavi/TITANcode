import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Experts from "./Experts";
import Talks from "./Talks";

import Homeimg from "../Assets/Careers/careers.png";
import ME from "../Assets/Careers/me.png";
import Arrow from "../Assets/Careers/arrow.png";
import HomeVideo from "../Assets/Home/video.mp4";

const positions = [
  {
    title: 'Intern Software Engineer',
    description: 'Job Description',
    overview: 'We are seeking a passionate Intern Software Engineer to join our team. This internship offers hands-on experience in software development, working on real projects that impact our clients.',
    responsibilities: [
      'Assist in designing, coding, and testing software applications.',
      'Collaborate with senior engineers on various development projects.',
      'Participate in code reviews and contribute to improving code quality.',
      'Troubleshoot and debug software issues.'
    ],
    qualifications: [
      'Currently pursuing a degree in Computer Science, Software Engineering, or related field.',
      'Basic knowledge of programming languages such as JavaScript, Python, or Java.',
      'Understanding of web development technologies (HTML, CSS, React, etc.).',
      'Strong problem-solving skills and attention to detail.',
      'Excellent communication and teamwork abilities.'
    ],
    offer: [
      'Real-world experience on cutting-edge projects.',
      'Mentorship from experienced professionals.',
      'Collaborative and innovative work environment.',
      'Opportunity for growth and potential full-time employment.'
    ],
    apply: 'Apply via email. Please send your resume, a short description about yourself, and your portfolio and CV as PDF files to lktitancode@gmail.com. Use the subject line "Intern Software Engineer Application - [Your Name]". We look forward to hearing from you!',
  },
  {
    title: 'Intern UI/UX Designer',
    description: 'Job Description',
    overview: 'Are you passionate about creating intuitive and engaging user experiences? TITANcode is seeking a creative and motivated Intern UI/UX Designer to join our dynamic team. As an intern, you will have the opportunity to work on real-world projects, collaborate with experienced designers, and gain hands-on experience in UI/UX design. This role is perfect for someone who is eager to learn and contribute to impactful design solutions.',
    responsibilities: [
      'Assist in designing user interfaces for web and mobile applications.',
      'Participate in user research and gather insights to inform design decisions.',
      'Support the design team in various tasks and design reviews',
      'Help maintain design consistency across different platforms and devices.'
    ],
    qualifications: [
      'Currently pursuing a degree in Graphic Design, UI/UX Design, Human-Computer Interaction, or a related field.',
      'Proficiency in design tools such as Adobe XD, Figma, Sketch, or similar.',
      'Strong attention to detail and a passion for creating user-centered designs.',
      'Basic understanding of design principles and best practices for UI/UX.',
      'Good communication skills and a proactive approach to problem-solving.',
      'A portfolio showcasing your design work is required.'
    ],
    offer: [
      'Gain valuable experience in a fast-paced design environment.',
      'Work closely with experienced designers and gain mentorship.',
      'Opportunity to contribute to meaningful projects and see your designs come to life.',
      'Flexible working hours and the possibility of remote work.',
      'Access to industry-standard tools and resources.',
      'Potential for future full-time employment based on performance.'
    ],
    apply: 'Apply via email. Please send your resume, a short description about yourself, and your portfolio and CV as PDF files to lktitancode@gmail.com. Use the subject line "Applicatin for Intern Intern UI/UX Designer - [Your Name]". We look forward to hearing from you!',
  },
  {
    title: 'Intern Front-End Developer',
    description: 'Job Description',
    overview: 'TITANcode is looking for a motivated Intern Front-End Developer to join our team. This is a great opportunity to gain practical experience, work on live projects, and develop your skills in a dynamic environment.',
    responsibilities: [
      'Assist in developing and maintaining web applications using React, Next.js, and Tailwind CSS.',
      'Collaborate with designers to implement user interfaces and responsive designs.',
      'Write clean, efficient, and well-documented code.',
      'Participate in code reviews, debugging, and testing.',
      'Support the development team with various tasks and contribute to project goals.'
    ],
    qualifications: [
      'Pursuing a degree in Computer Science, Web Development, or a related field.',
      'Basic knowledge of HTML, CSS, and JavaScript.',
      'amiliarity with React, Next.js, and Tailwind CSS.',
      'Strong problem-solving skills and attention to detail.',
      'Portfolio or GitHub link required.'
    ],
    offer: [
      'Hands-on experience with modern web technologies.',
      'Mentorship from experienced developers.',
      'Flexible working hours and potential for remote work.',
      'Potential for future full-time employment based on performance.'
    ],
    apply: 'Apply via email. Please send your resume, a short description about yourself, and your portfolio and CV as PDF files to lktitancode@gmail.com. Use the subject line "Applicatin for Intern Front-End Developer - [Your Name]". We look forward to hearing from you!',
  },
  {
    title: 'Intern Full-Stack Developer',
    description: 'Job Description',
    overview: 'TITANcode is looking for an enthusiastic Intern Full-Stack Developer to join our team. This role offers a valuable opportunity to work on both front-end and back-end development tasks, gaining hands-on experience with a range of technologies.',
    responsibilities: [
      'Assist in developing and maintaining full-stack web applications.',
      'Work with front-end technologies like React, Next.js, and Tailwind CSS.',
      'Support back-end development using Node.js, Express, or similar technologies.',
      'Collaborate with the team to integrate APIs and databases.',
      'Write clean, efficient, and well-documented code.',
      'Participate in code reviews and testing.'
    ],
    qualifications: [
      'Pursuing a degree in Computer Science, Software Engineering, or a related field.',
      'Basic knowledge of HTML, CSS, JavaScript, and modern web frameworks.',
      'Familiarity with React, Next.js, Tailwind CSS, and back-end technologies (e.g., Node.js).',
      'Strong problem-solving skills and attention to detail.',
      'Portfolio or GitHub link required.',
    ],
    offer: [
      'Hands-on experience with full-stack development.',
      'Mentorship from experienced developers.',
      'Flexible working hours and potential for remote work.',
      'Potential for future full-time employment based on performance.'

    ],
    apply: 'Apply via email. Please send your resume, a short description about yourself, and your portfolio and CV as PDF files to lktitancode@gmail.com. Use the subject line "Applicatin for Intern Full-Stack Developer - [Your Name]". We look forward to hearing from you!',
  },
  {
    title: 'Intern Back-End Developer',
    description: 'Job Description',
    overview: 'TITANcode is seeking a motivated Intern Back-End Developer to join our team. This role provides an excellent opportunity to work on server-side development, contribute to database management, and gain hands-on experience with modern back-end technologies.',
    responsibilities: [
      'Assist in developing and maintaining server-side applications and APIs.',
      'Work with back-end technologies such as Node.js, Express, or similar frameworks.',
      'Collaborate with front-end developers to integrate APIs and data.',
      'Help manage and optimize databases (e.g., MongoDB, SQL).',
      'Write clean, efficient, and well-documented code.',
      'Participate in code reviews and debugging.'
    ],
    qualifications: [
      'Pursuing a degree in Computer Science, Software Engineering, or a related field.',
      'Basic knowledge of server-side programming and API development.',
      'Familiarity with Node.js, Express, and database management.',
      'Strong problem-solving skills and attention to detail.',
      'Portfolio or GitHub link required.'
    ],
    offer: [
      'Hands-on experience with back-end development and database management.',
      'Mentorship from experienced developers.',
      'Flexible working hours and potential for remote work.',
      'Potential for future full-time employment based on performance.'
    ],
    apply: 'Apply via email. Please send your resume, a short description about yourself, and your portfolio and CV as PDF files to lktitancode@gmail.com. Use the subject line "Applicatin for Intern Back-End Developer - [Your Name]". We look forward to hearing from you!',
  },
];

const Card = ({ title, description, overview, responsibilities, qualifications, offer, apply }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4 transition duration-500 bg-[#F4F4F5] rounded-[50px]">
      <div className="flex items-center justify-between p-4 cursor-pointer" onClick={toggleOpen}>
        <span className="ml-2 font-semibold text-[15px] md:text-[15px] lg:text-[20px]">{title}</span>
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
        <div className="p-4 bg-gray-50">
          <h2 className="mb-2 text-[12px] md:text-[15px] lg:text-[17px] font-semibold">{description}</h2>
          <div
            className="pl-5 mb-4 text-[10px] md:text-[15px] lg:text-[15px] description-container"
            style={{ maxHeight: '500px', overflowY: 'auto', scrollbarWidth: 'thin' }}
          >
            <h3 className="font-bold">Overview</h3>
            <p className="mt-2 mb-4">{overview}</p>
            <h3 className="font-bold">Responsibilities</h3>
            <ul className="mt-2 list-disc">
              {responsibilities.map((item, index) => (
                <li key={index} className="mb-2 ">{item}</li>
              ))}
            </ul>
            <h3 className="mt-4 font-bold">Qualifications</h3>
            <ul className="mt-2 list-disc">
              {qualifications.map((item, index) => (
                <li key={index} className="mb-2">{item}</li>
              ))}
            </ul>
            <h3 className="mt-4 font-bold">What We Offer</h3>
            <ul className="mt-2 list-disc">
              {offer.map((item, index) => (
                <li key={index} className="mb-2">{item}</li>
              ))}
            </ul>
            <h3 className="mt-4 font-bold">How to Apply</h3>
            <p className='mt-2 mb-8'>{apply}</p>
          </div>
          <a href="mailto:lktitancode@gmail.com" className="px-4 py-2 text-white bg-blue-500 rounded">Apply</a>
        </div>
      </div>
    </div>
  );
};

const Careers = () => {
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
            <p className="font-medium text-blue-600">
              "WE ARE A LEADING PROVIDER OF TECHNOLOGY SOLUTIONS"
            </p>
            <h1 className="my-4 text-4xl font-bold md:text-6xl">BECOME A CodeWAYNE</h1>
            <p className="text-lg">
            Elevate your career with <span className="font-bold text-blue-600 "> CodeWAYNE</span> ! Explore our current job openings and join a team dedicated to innovation and excellence. Find your next opportunity and make an impact with us. Apply now and start your journey at CodeWAYNE!
            </p>
            <RouterLink to="/Contact">
              <button className="px-6 py-3 mt-4 text-white transition duration-300 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700">Let's Talk</button>
            </RouterLink>
          </div>
          <div className="flex justify-center order-1 mt-12 md:w-1/2 md:order-2 md:mt-0">
            <img className="" src={Homeimg} alt="Careers" style={{
                            animation: 'upAndDown 3s ease-in-out infinite',
                        }} 
                    />
                    <style>
                        {`
                            @keyframes upAndDown {
                                0%, 100% {
                                    transform: translateY(0);
                                }
                                50% {
                                    transform: translateY(-20px);
                                }
                            }
                        `}
                    </style>
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
            <p className="mx-2 text-[13px] md:text-[13px] lg:text-[15px]">
              Welcome to the TITANcode family! We're thrilled to have you on board. At CodeWAYNE, our mission is to provide exceptional technology solutions that help businesses thrive. We are committed to delivering high-quality web development, mobile apps, UI/UX design, and digital marketing services, driving innovation and excellence in every project we undertake. Dive in, share your ideas, and let’s achieve great things together!
            </p>
            <p className="mx-2 my-4 text-[#4E4E4E] text-[13px] md:text-[13px] lg:text-[15px]">
              <span className="font-bold text-[#000000]">Ashan Kavindu</span> <br />
              Founder & CEO, CodeWAYNE
            </p>
          </div>
        </div>
      </section>

      {/* Available Positions Section */}
      <section className="bg-[#ffffff] my-[31px] mx-[31px] py-16 md:py-24 md:px-16 rounded-[50px]">
        <div className="mx-5 max-w-8xl">
          <h1 className="text-2xl text-[#0090FF] md:text-5xl font-bold mb-10 mx-2 uppercase">AVAILABLE POSITIONS</h1>
          {positions.map((position, index) => (
            <Card 
              key={index} 
              title={position.title} 
              description={position.description} 
              overview={position.overview}
              responsibilities={position.responsibilities}
              qualifications={position.qualifications}
              offer={position.offer}
              apply={position.apply}
            />
          ))}
        </div>
      </section>

      {/* Experts Section Start */}
      <Experts />
      {/* Experts Section End */}

      {/* Talks Section Start */}
      <Talks />
      {/* Talks Section End */}
    </div>
  );
};

export default Careers;
