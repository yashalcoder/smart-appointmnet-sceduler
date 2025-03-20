

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export default function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-8"
    >
      <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}>
          Discover Health: Find Your
        </motion.span>{" "}
        <br />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex items-center"
        >
          Trusted{" "}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
            className="mx-2 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md"
          >
            <MessageCircle className="h-8 w-8 text-pink-500" />
          </motion.div>{" "}
          Doctors Today
        </motion.span>
      </h1>
    </motion.div>
  )
}

