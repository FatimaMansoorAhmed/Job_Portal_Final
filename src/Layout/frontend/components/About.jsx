import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
// import aboutImage from '../Layout/Frontend/assests/Images-about/about-1.png';
// import faceImage from '../Layout/Frontend/assests/Images-about/facebook-logo.png';
// import linkdinImage from '../Layout/Frontend/assests/Images-about/linkedin.png';
// import instraImage from '../Layout/Frontend/assests/Images-about/instagram.png';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-biegeBackground p-6">
      <div className="container flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full">
        {/* Left Side */}
        <div className="flex flex-col items-center bg-backgroundBlue text-white p-6 w-full md:w-1/3">
          <img src={"/about.jpeg"} alt="About Me" className="w-52 h-52 rounded-full shadow-lg" />
          <h2 className="text-xl font-bold mt-4 text-center">Maya Nelson</h2>
          <span className="text-sm uppercase tracking-widest mt-2">Project Manager</span>
          
          <div className="flex space-x-4 mt-4">
            <Link to='https://www.facebook.com/'><FaFacebookF className="w-6 h-6" /></Link>
            <Link to='https://www.linkedin.com/'><FaLinkedinIn className="w-6 h-6" /></Link>
            <Link to='https://www.instagram.com/'><GrInstagram className="w-6 h-6" /></Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-6 w-full md:w-2/3">
          <h1 className="text-2xl font-bold text-gray-800">Hello</h1>
          <h3 className="text-lg text-gray-600 mt-2">Here's who I am & what I do</h3>

          {/* Buttons */}
          <div className="flex space-x-4 mt-4">
            <Link to='/contact' ><button className="bg-buttonPrimary text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">Contact</button></Link>
            <Link to='/jobs' className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg shadow-md hover:bg-gray-400 transition">Uploaded Jobs</Link>
          </div>

          {/* Description */}
          <p className="text-gray-700 mt-4">At TalentMatch, we are dedicated to connecting job seekers with the right opportunities while providing essential career support.</p>
          <p className="text-gray-700 mt-2">TalentMatch is here to support your journey towards career success. Join us and take the next step in achieving your professional goals!</p>
        </div>
      </div>
    </div>
  );
};

export default About;
