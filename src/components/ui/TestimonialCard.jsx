import React from "react";

const TestimonialCard = ({ quote, author, company }) => (
  <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 flex flex-col h-full">
    <p className="text-gray-600 italic mb-4 flex-grow">"{quote}"</p>
    <div className="mt-4 text-right">
      <p className="font-bold text-gray-800">- {author}</p>
      <p className="text-sm text-gray-500">{company}</p>
    </div>
  </div>
);

export default TestimonialCard;
