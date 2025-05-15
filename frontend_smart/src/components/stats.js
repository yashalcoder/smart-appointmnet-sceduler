"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

export function Stats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-6 flex items-center space-x-4"
    >
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-lg font-semibold text-white"
      >
        5K+ Appointments
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex items-center"
      >
        <div className="flex">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="h-5 w-5 fill-orange-500 text-orange-500" />
          ))}
        </div>
        <span className="ml-1 text-white">5.0 Ratings</span>
      </motion.div>
    </motion.div>
  )
}

