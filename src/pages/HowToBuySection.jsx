// HowToBuySection.js
import React from 'react';

const HowToBuySection = () => {
  return (
    <section id="buy" className="bg-white py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">How to Buy BoinaCoin</h2>
        <p className="text-lg">
          Follow these steps to get your hands on some tasty BoinaCoin:
        </p>
        {/* Add step-by-step instructions */}
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default HowToBuySection;
