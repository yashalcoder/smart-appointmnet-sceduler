import React from "react";
import SpecialtyCard from "./SpecialityCard";
import cardio from  "../Images/cardiology.jpg";
import  psyc from "../Images/psychatry.jpg"
import palmon from  "../Images/palmonoly.jpg";
import neurology from  "../Images/neurology.jpg";
import padreatics from "../Images/pedriatcs.jpg";
const specialties = [
  {
    title: "Cardiology",
    doctors: 254,
    image: cardio,
  },
  {
    title: "Neurosurgeon",
    doctors: 151,
    image: neurology,
  },
  {
    title: "Psychatric",
    doctors: 254,
    image: psyc,
  },
  {
    title: "Palmonology",
    doctors: 151,
    image:palmon,
  },
  {
    title: "Padriatic",
    doctors: 151,
    image:padreatics,
  },
 ];

const SpecializationSection = () => {
  return (
    <section className="bg-black text-white py-12 overflow-hidden">
    <div className="text-center mb-6">
      <button className="px-4 py-1 bg-blue-700 rounded-full text-sm font-semibold">
        • Top Specialties
      </button>
      <h2 className="text-2xl md:text-4xl font-bold mt-4">
        Highlighting the Care & Support
      </h2>
    </div>
  
    {/* Reel effect container */}
    <div className="relative w-full overflow-hidden">
      <div className="flex gap-6 animate-marquee px-4 md:px-12 w-max">
        {[...specialties, ...specialties].map((spec, index) => (
          <SpecialtyCard key={index} {...spec} />
        ))}
      </div>
    </div>
  </section>
  
  );
};

export default SpecializationSection;
