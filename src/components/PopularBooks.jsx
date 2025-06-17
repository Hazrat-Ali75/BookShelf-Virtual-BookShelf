import React, { use, useEffect, useState } from 'react'
import PopularBookCard from './PopularBookCard'
import { motion } from "motion/react"
import { fadeIn } from '../FramerMotion/variant'

const PopularBooks = ({ topUpvotedBooksPromise }) => {
  const initialBookData = use(topUpvotedBooksPromise)
  const [topUpvotedBooks, setTopUpvotedBooks] = useState([])
  useEffect(() => {
    setTopUpvotedBooks(initialBookData)
  }, [initialBookData])
  
  return (
    <div>
      <h1 className='font-hero text-xl md:text-4xl md:font-medium pt-10 pb-15'>
        Popular Books
      </h1>
      <motion.div 
      variants={fadeIn("left",0.5)}
      initial = "hidden"
      whileInView={"show"}
      className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {topUpvotedBooks.map(topBook => (
          <PopularBookCard book={topBook} key={topBook._id}></PopularBookCard>
        ))}
      </motion.div>
    </div>
  )
}

export default PopularBooks
