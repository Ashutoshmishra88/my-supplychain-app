import React from "react";

const SecurityFeature = ({ feature, isOpen, onClick }) => (
  <div
    className={`mb-4 border-b last:border-b-0 transition-all duration-300 ${
      isOpen ? "bg-gray-50" : ""
    }`}
  >
    <button
      onClick={onClick}
      className="flex justify-between items-center w-full py-5 text-left text-lg font-semibold text-gray-800 focus:outline-none"
    >
      <span className="flex items-center gap-3">
        <span className="text-[#0a9396]">{feature.icon}</span>
        {feature.title}
      </span>
      <span
        className={`transform transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </span>
    </button>
    <div
      className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <p className="pt-2 pb-5 pr-4 text-gray-600">{feature.description}</p>
    </div>
  </div>
);

export default SecurityFeature;
