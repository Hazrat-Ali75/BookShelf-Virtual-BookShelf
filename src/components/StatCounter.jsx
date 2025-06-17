import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const StatCounter = ({ title, targetNumber, icon }) => {
  const [count, setCount] = useState(0)
  const controls = useAnimation()
  const { ref, inView } = useInView({ triggerOnce: true }) // Only trigger once

  useEffect(() => {
    if (inView) {
      let start = 0
      const end = parseInt(targetNumber)
      const duration = 1000
      const incrementTime = 10
      const steps = Math.ceil(duration / incrementTime)
      const stepSize = Math.ceil(end / steps)

      const interval = setInterval(() => {
        start += stepSize
        if (start >= end) {
          setCount(end)
          clearInterval(interval)
        } else {
          setCount(start)
        }
      }, incrementTime)
    }
  }, [inView, targetNumber])

  return (
    <motion.div
      ref={ref}
      className='flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className='text-4xl mb-2'>{icon}</div>
      <h3 className='text-3xl font-bold text-indigo-600'>{count}</h3>
      <p className='text-sm text-gray-600 mt-1'>{title}</p>
    </motion.div>
  )
}

export default StatCounter
