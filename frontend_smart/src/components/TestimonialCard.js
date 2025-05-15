import React from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa";

const TestimonialCard = ({ title, description, name, country, image }) => {
  return (
    <div className="bg-[#111] p-6 rounded-lg relative shadow-md border border-gray-700 text-white">
      <div className="flex items-center justify-center mb-4 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>
      <FaQuoteRight className="absolute top-6 right-6 text-orange-400 text-xl" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <div className="flex items-center gap-3">
        <img src={image} alt={name} className="w-10 h-10 rounded-full" />
        <div className="text-left">
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-400">{country}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
