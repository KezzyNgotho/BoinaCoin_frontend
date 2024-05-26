import React from 'react';
import '../index.scss'; // Add your CSS file for styling
import '../fonts/font.css'
import log from '../assets/log.png'; // Replace with your Boina Coin logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faTwitter, faDiscord, faMedium ,faAmazon} from '@fortawesome/free-brands-svg-icons';
import heroImage from '../assets/boina-removebg-preview.png';
import TokenomicsChart from '../components/TokenomicsChart';

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
 <section id="tokenomics" className="bg-gray-200 py-8">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4">BoinaCoin Tokenomics</h2>

    <p className="text-lg">
      BoinaCoin (BOINA) combines food-inspired joy with blockchain innovation. Here's what you need to know:
    </p>
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white rounded-lg p-4 shadow-md">
        <h3 className="text-xl font-semibold mb-2">Initial Distribution</h3>
        <p className="text-gray-700">300,000 BOINA tokens during launch.</p>
      </div>
      <div className="bg-white rounded-lg p-4 shadow-md">
        <h3 className="text-xl font-semibold mb-2">Community Rewards</h3>
        <p className="text-gray-700">Earn BOINA through staking and engagement.</p>
      </div>
      <div className="bg-white rounded-lg p-4 shadow-md">
        <h3 className="text-xl font-semibold mb-2">Liquidity Pool</h3>
        <p className="text-gray-700">200,000 BOINA tokens on DEXs for trading.</p>
      </div>
      <div className="bg-white rounded-lg p-4 shadow-md">
        <h3 className="text-xl font-semibold mb-2">Marketing and Partnerships</h3>
        <p className="text-gray-700">100,000 BOINA for campaigns.</p>
      </div>
      <div className="bg-white rounded-lg p-4 shadow-md">
        <h3 className="text-xl font-semibold mb-2">Ecosystem Development</h3>
        <p className="text-gray-700">400,000 BOINA for growth.</p>
      </div>
    </div>
    {/* Include the actual tokenomics chart */}
    <div className="flex flex-row items-center justify-center mt-8">
      <div className="w-1/2">
        <TokenomicsChart />
      </div>
    </div>
  </div>
</section>



<footer className="bg-gray-200 text-black py-4 mt-auto">
  <div className="container mx-auto flex justify-between items-center">
    {/* Logo or Brand Name */}
    <p className="text-sm  font-bold text-black-400">
      © 2024 BoinaCoin. All rights reserved.
    </p>

    {/* Contact Information */}
    <p className="text-sm text-black-400 font-bold">
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
