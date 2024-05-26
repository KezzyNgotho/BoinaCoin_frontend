import React from 'react';
import '../index.scss'; // Add your CSS file for styling
import '../fonts/font.css'
import log from '../assets/log.png'; // Replace with your Boina Coin logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faTwitter, faDiscord, faMedium ,faAmazon} from '@fortawesome/free-brands-svg-icons';
import heroImage from '../assets/boina-removebg-preview.png';

const App = () => {
  return (
    <div className="landing-page min-h-screen flex flex-col  bg-blue-100">
      {/* Header */}
      <header className="flex justify-between items-center px-4 py-2 bg-#A0DEFF" >
 
  <div className="w-15 h-14 rounded-full bg-orange-500 flex items-center justify-center">
  <img src={log} alt="Boina Coin" className="w-14 h-14" />
  </div>
    
  {/* Navigation */}
  <nav className="text-center">
          <ul className="space-x-4">
          <li className="inline-block">
            <a href="#about" className="font-calibrated text-orange-400 text-shadow-md hover:text-blue-800 font-bold">HOME</a>

            </li>
            <li className="inline-block">
            <a href="About" className="font-calibrated text-orange-400 text-shadow-md hover:text-blue-800 font-bold">ABOUT</a>

            </li>
            <li className="inline-block">
            <a href="#buy" className="font-cursive text-orange-400 text-shadow-md hover:text-blue-600 font-bold">HOW TO BUY</a>


            </li>
            <li className="inline-block">
              <a href="Tokenomics" className="font-alte-schwabacher text-orange-400 text-shadow-md hover:text-blue-600 font-bold">TOKENOMICS</a>
            </li>
            <li className="inline-block">
              <a href="#roadmap" className="font-calibrated text-orange-400 text-orange text-shadow-md hover:text-orange-600 font-bold">ROADMAP</a>
            </li>
            <li className="inline-block">
              <a href="#roadmap" className="font-calibrated text-orange-400 text-shadow-md hover:text-blue-600 font-bold">FOODIES</a>
            </li>
          </ul>
        </nav>
  {/* Social icons */}
  <div className="flex space-x-4">
    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
      <FontAwesomeIcon icon={faTelegram} size="lg" />
    </div>
    <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center">
      <FontAwesomeIcon icon={faAmazon} fontSize="small" />
    </div>
    <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
      <FontAwesomeIcon icon={faDiscord} fontSize="small" />
    </div>
    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
      <FontAwesomeIcon icon={faMedium} fontSize="small" />
    </div>
  </div>
</header>
 {/* Hero Section */}
 <section className="flex items-center justify-center px-4 py-16 bg-blue-100">
  <div className="w-1/2 pr-8">
    <h1 className="text-5xl font-bold mb-4 text-center text-blue-400">
      Welcome to Boina Coin
    </h1>
    <p className="text-lg text-black-600 font-bold text-center">
      Discover the future of cryptocurrency. Join us on this exciting journey!
    </p>
    <p className="text-lg text-gray-400 font-bold text-center">
      Join the hype and be part of the Boina Coin community.
    </p>
    <div className="flex justify-center mt-8">
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mr-4">
        Community
      </button>
      <button className="buy-button bg-purple-900 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
        Buy Now
      </button>
     
    </div>
    <div className="flex items-center justify-center mt-4">
    <span className="animate-bounce text-3xl">🚀</span>
  </div>
  </div>
  <div className="w-1/2 flex items-center justify-center bg-transparent">
    {/* Your hero image goes here */}
    <img src={heroImage} alt="Boina Coin Hero" className="rounded-lg shadow-lg" />
    {/* Animated emoji */}
   
  </div>
</section>


<footer className="bg-gray-200 text-black py-4 mt-auto">
  <div className="container mx-auto flex justify-between items-center">
    {/* Logo or Brand Name */}
    <p className="text-sm text-black-400">
      © 2024 BoinaCoin. All rights reserved.
    </p>

    {/* Contact Information */}
    <p className="text-sm text-black-400">
      Contact us: <a href="mailto:info@boinacoin.com">info@boinacoin.com</a>
    </p>

    {/* Buy Button */}
    <button className="buy-button bg-purple-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full">
      Buy Now
    </button>
  </div>
</footer>

    
    </div>
  );
};

export default App;
