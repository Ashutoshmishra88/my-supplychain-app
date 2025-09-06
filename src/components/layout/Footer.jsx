import React from "react";

const Footer = ({ onContactClick }) => (
  <footer id="contact" className="bg-gray-800 text-white">
    <div className="container mx-auto py-20 px-6 text-center">
      <h2 className="text-3xl font-bold">Partner with SupplyChain</h2>
      <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
        Let's build a more reliable future for healthcare logistics together.
        Contact us to learn more about our innovative solutions.
      </p>
      <div className="mt-8">
        <button
          onClick={onContactClick}
          className="bg-[#ee9b00] hover:bg-[#ca6702] text-white font-bold py-3 px-8 rounded-lg transition-colors"
        >
          Contact Us
        </button>
      </div>
      <p className="mt-12 text-gray-400">SupplyChain | supplychain.logistics</p>
    </div>
  </footer>
);

export default Footer;
