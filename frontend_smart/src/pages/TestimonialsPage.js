import React from "react";
import TestimonialCard from "../components/TestimonialCard";
import d1 from "../Images/docotor2.jpg"
import d2 from "../Images/doctor1.jpg"
import d3 from "../Images/doctor3.jpg"
const testimonials = [
  {
    name: "Deny Hendrawan",
    country: "United States",
    title: "Nice Treatment",
    description:
      "I had a wonderful experience the staff was friendly and attentive, and Dr. Smith took the time to explain everything clearly.",
    image: d1,
  },
  {
    name: "Johnson DWayne",
    country: "United States",
    title: "Good Hospitability",
    description:
      "Genuinely cares about his patients. He helped me understand my condition and worked with me to create a plan.",
    image: d2,
  },
  {
    name: "Rayan Smith",
    country: "United States",
    title: "Nice Treatment",
    description:
      "I had a great experience with Dr. Chen. She was not only professional but also made me feel comfortable discussing.",
    image: d3,
  },
];

const stats = [
  { value: "500+", label: "Doctors Available" },
  { value: "18+", label: "Specialities", color: "text-purple-400" },
  { value: "30K", label: "Bookings Done", color: "text-purple-400" },
  { value: "97+", label: "Hospitals & Clinic", color: "text-pink-400" },
  { value: "317+", label: "Lab Tests Available", color: "text-yellow-300" },
];

export default function TestimonialsPage() {
  return (
    <div className="bg-black text-white py-16 text-center px-4">
      <button className="bg-blue-600 text-white px-4 py-1 rounded-full mb-4 text-sm font-medium">
        Testimonials
      </button>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        15k Users Trust Doccure Worldwide
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <TestimonialCard key={index} {...t} />
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-16 text-white font-semibold text-xl">
        {stats.map((s, i) => (
          <div key={i}>
            <p className={`text-3xl font-bold ${s.color || "text-white"}`}>
              {s.value}
            </p>
            <p className="text-sm text-gray-400">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
