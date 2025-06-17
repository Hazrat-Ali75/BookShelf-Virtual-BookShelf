import React from 'react'
import { motion } from 'framer-motion'

const tips = [
  {
    title: 'Build a Daily Reading Habit',
    description:
      'Start with 10-15 minutes daily. Pick a consistent time and a comfortable spot.',
    icon: '📅'
  },
  {
    title: 'Try Different Genres',
    description:
      'Don’t stick to one category — explore fiction, sci-fi, self-help, and biographies.',
    icon: '📚'
  },
  {
    title: 'Track Your Reading',
    description:
      'Use a journal or apps like Goodreads to track books and stay motivated.',
    icon: '📝'
  }
]

const ReadingTips = () => {
  return (
    <section className='bg-gray-50 py-12 px-6'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-xl md:text-2xl font-semibold font-hero text-center mb-8'>
           Reading Tips & News
        </h2>
        <div className='grid gap-6 md:grid-cols-3 font-secondary'>
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              className='bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition'
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className='text-3xl mb-3'>{tip.icon}</div>
              <h3 className='text-lg font-semibold'>{tip.title}</h3>
              <p className='text-sm text-gray-600 mt-2'>{tip.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReadingTips
