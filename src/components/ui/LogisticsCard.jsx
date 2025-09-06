import React from "react";

const LogisticsCard = ({ service, onClick }) => (
  <div
    className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
    onClick={onClick}
  >
    <span className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
      {service.icon}
    </span>
    <h3 className="text-xl font-bold text-[#005f73] mb-2 text-center group-hover:text-[#0a9396] transition-colors duration-300">
      {service.title}
    </h3>
    <p className="text-gray-600 text-center mb-4 text-sm">
      {service.shortDescription}
    </p>
    <ul className="list-disc list-inside text-gray-700 text-left w-full text-sm space-y-1">
      {service.routes.map((route, index) => (
        <li key={index}>{route}</li>
      ))}
    </ul>
    <div className="mt-4 text-[#ee9b00] text-sm font-medium group-hover:text-[#ca6702] transition-colors duration-300">
      Click to learn more →
    </div>
  </div>
);

export default LogisticsCard;
