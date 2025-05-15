import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-[#1e1e1e] text-white rounded-xl shadow-lg overflow-hidden w-full sm:w-[320px]">
      {/* Rating Badge */}
      <div className="relative">
        <img src={doctor.image} alt={doctor.name} className="w-full h-[300px] object-cover" />
        <div className="absolute top-3 left-3 bg-orange-500 text-white text-sm font-bold px-2 py-1 rounded-lg flex items-center gap-1">
          <FaStar /> {doctor.rating}
        </div>
        <div className="absolute top-3 right-3 text-white text-xl cursor-pointer">🤍</div>
      </div>

      {/* Doctor Info */}
      <div className="p-4 space-y-2">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-300">{doctor.specialty}</p>
          <span className="text-sm bg-green-600 px-2 py-1 rounded-full">Available</span>
        </div>

        <h3 className="text-xl font-semibold">{doctor.name}</h3>

        <p className="flex items-center gap-1 text-gray-400 text-sm">
          <FaMapMarkerAlt />
          {doctor.location} • {doctor.duration}
        </p>

        <div className="flex justify-between items-center pt-2">
          <p className="text-orange-400 font-bold text-lg">${doctor.fees}</p>
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
