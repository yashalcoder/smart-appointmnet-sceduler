import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/hero-section";
import { SearchBar } from "../components/search-bar";
import { Stats } from "../components/stats";
import doctor from "../Images/doctor.png";
import Specialize from './Specialization';
import { motion } from "framer-motion";
import Doctors from './HighlightedDoctor';
import Spec from "../components/SpecializationSection"
import Footer from "../components/Footer"
import TestimonialsPage from "./TestimonialsPage";
export default function Home() {
  return (
    <div className="relative  overflow-hidden bg-[#121212] text-white">
      {/* Navbar */}
      <Navbar />
      
      {/* Main Container */}
      <div className="relative mx-auto flex h-[calc(100vh-64px)] max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
           
          {/* Left Side: Text & Stats */}
          <div className="flex flex-col justify-center">
          <div className="mt-6">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">
        Find the Right Doctor <br /> At the Right Time
      </h1>
      <p className="text-lg text-gray-300 mb-6">
        Connecting you to experienced medical professionals instantly.
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-semibold rounded-xl shadow-md bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        <span className="absolute w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse opacity-10 rounded-xl"></span>
        Book Appointment
      </motion.button>
    </div>
           
            <SearchBar />
            
          </div>
         
          {/* Right Side: Doctor Image & Stats */}
          <div className="hidden lg:flex lg:items-center lg:justify-center">
            <div className="relative h-[500px] w-auto">
              <img src={doctor} alt="Doctor" className="h-full w-full object-contain" />
              
              {/* Top Right Stats */}
              <div className="absolute right-0 top-0 rounded-lg bg-black p-4 text-center text-white">
                <div className="text-2xl font-bold">1K</div>
                <div className="text-sm">Appointments</div>
                <div className="text-sm">Completed</div>
              </div>
              
              {/* Bottom Right Stats */}
              <div className="absolute bottom-10 right-10 rounded-lg bg-black p-4 text-center text-white">
                <div className="text-2xl font-bold">15K+</div>
                <div className="text-sm">Satisfied Patients</div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
      <Spec/>
      <Doctors/>
      <TestimonialsPage/>
      <Footer/>
    </div>
  );
}
