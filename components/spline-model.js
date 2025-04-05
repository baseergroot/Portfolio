"use client"

import { motion } from "framer-motion"
import Spline from "@splinetool/react-spline"

export default function SplineModel() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="hidden lg:block relative h-[500px]"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full filter blur-3xl opacity-30"></div>
      <div className="w-full h-full">
        <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
      </div>
    </motion.div>
  )
}

