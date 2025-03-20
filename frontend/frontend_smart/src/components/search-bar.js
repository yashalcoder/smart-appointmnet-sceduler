"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Search, User } from "lucide-react"

export function SearchBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="mt-8 rounded-xl bg-black/30 p-2 backdrop-blur-md"
    >
      <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
        <div className="flex flex-1 items-center rounded-lg bg-[#1a1a1a] px-4 py-3">
          <User className="mr-2 h-5 w-5 text-blue-500" />
          <input
            type="text"
            placeholder="Search doctors, clinics, hospitals..."
            className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
          />
        </div>

        <div className="flex flex-1 items-center rounded-lg bg-[#1a1a1a] px-4 py-3">
          <MapPin className="mr-2 h-5 w-5 text-blue-500" />
          <input
            type="text"
            placeholder="Location"
            className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
          />
        </div>

        <div className="flex flex-1 items-center rounded-lg bg-[#1a1a1a] px-4 py-3">
          <Calendar className="mr-2 h-5 w-5 text-blue-500" />
          <input
            type="text"
            placeholder="Date"
            className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-600"
        >
          <Search className="mr-2 h-5 w-5" />
          Search
        </motion.button>
      </div>
    </motion.div>
  )
}

