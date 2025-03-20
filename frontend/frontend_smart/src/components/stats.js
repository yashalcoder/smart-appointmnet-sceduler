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
      <div className="flex -space-x-2">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="h-10 w-10 overflow-hidden rounded-full border-2 border-[#121212]"
          >
            <img
              src={`/placeholder.svg?height=40&width=40&text=${i}`}
              alt={`User ${i}`}
              className="h-full w-full object-cover"
            />
          </motion.div>
        ))}
      </div>

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

