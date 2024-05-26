import React from 'react';
import '../index.scss'; // Add your CSS file for styling
import '../fonts/font.css'
import log from '../assets/log.png'; // Replace with your Boina Coin logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faTwitter, faDiscord, faMedium ,faAmazon} from '@fortawesome/free-brands-svg-icons';
import heroImage from '../assets/boina.jpeg';

const AboutSection = () => {
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
              <a href="#tokenomics" className="font-alte-schwabacher text-orange-400 text-shadow-md hover:text-blue-600 font-bold">TOKENOMICS</a>
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
 <section id="about" className="bg-blue-100 py-8">
      <div className="container mx-auto text-center">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/4">
            <img src={heroImage} alt="Food" className="mt-4 " />
          </div>
          <div className="md:w-1/2 md:ml-8">
            <h2 className="text-3xl font-bold mb-4">About BoinaCoin</h2>
            <p className="text-lg">
              🍕🚀 BoinaCoin is not just another crypto token—it's a flavor-packed adventure! 🍔🌮
              Inspired by food lovers like you, we've seasoned BoinaCoin with blockchain magic.
              Whether you crave pizza, sushi, or tacos, BoinaCoin welcomes everyone to the table!
            </p>
            <p className="text-lg mt-4">
              Ready to take a bite? <span className="font-bold text-orange-500">Buy BoinaCoin now!</span>
            </p>
            {/* Add a button or link for buying */}
            <button className="buy-button bg-purple-900 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
        Buy Now
      </button>
          </div>
        </div>
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

export default AboutSection;
