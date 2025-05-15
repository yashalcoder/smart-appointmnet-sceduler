import React from "react";

const SpecialtyCard = ({ image, title, doctors }) => {
  return (
    <div className="w-40 sm:w-44 md:w-48 text-center mx-auto ">
      <div className="relative rounded-xl overflow-hidden">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
        
      </div>
      <h3 className="font-semibold mt-2">{title}</h3>
      <p className="text-sm text-gray-400">{doctors} Doctors</p>
    </div>
  );
};

export default SpecialtyCard;
