import React from "react";
import DoctorCard from "../components/DoctorCard";
import doc1 from "../Images/doctor1.jpg";
import doc2 from "../Images/docotor2.jpg";
import doc3 from "../Images/doctor3.jpg";

const doctors = [
  {
    image: doc1,
    name: "Dr. Michael Brown",
    specialty: "Psychologist",
    location: "Minneapolis, MN",
    duration: "30 Min",
    rating: "5.0",
    fees: "650",
  },
  {
    image: doc2,
    name: "Dr. Nicholas Tello",
    specialty: "Pediatrician",
    location: "Ogden, IA",
    duration: "60 Min",
    rating: "4.6",
    fees: "400",
  },
  {
    image: doc3,
    name: "Dr. Harold Bryant",
    specialty: "Neurologist",
    location: "Winona, MS",
    duration: "30 Min",
    rating: "4.8",
    fees: "500",
  },
];

const HighlightedDoctors = () => {
  return (
    <div className="bg-[#121212] py-12 px-6 text-center text-white">
      <div className="inline-block bg-blue-700 px-4 py-1 rounded-full mb-2 text-sm">Featured Doctors</div>
      <h2 className="text-3xl font-bold mb-8">Our Highlighted Doctors</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {doctors.map((doc, idx) => (
          <DoctorCard key={idx} doctor={doc} />
        ))}
      </div>
    </div>
  );
};

export default HighlightedDoctors;
