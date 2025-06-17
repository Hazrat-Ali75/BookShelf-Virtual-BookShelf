import React from 'react'
import FeaturedbookCard from './FeaturedbookCard'
import { motion } from "motion/react"
import { fadeIn } from '../FramerMotion/variant'

const FeaturedBooks = () => {
  const featuredBooks = [
    {
      id: 1,
      coverUrl: ' https://i.ibb.co/7JtKQsdR/17351.jpg',
      category: 'Science & Technology'
    },
    {
      id: 2,
      coverUrl: ' https://i.ibb.co/VYh7pKpD/pride-prejudice-13.jpg',
      category: 'Literature'
    },
    {
      id: 3,
      coverUrl: ' https://i.ibb.co/LdkD79hQ/4214.jpg',
      category: 'Fiction'
    },
    {
      id: 4,
      coverUrl: ' https://i.ibb.co/ZRYPTkPt/Educated-book-cover.jpg',
      category: 'Non Fiction'
    },
    {
      id: 5,
      coverUrl: ' https://i.ibb.co/xKkpLqkQ/y648.jpg',
      category: 'Fantasy'
    },
    {
      id: 6,
      coverUrl: ' https://i.ibb.co/99DDMd1f/the-communist-manifesto-73.jpg',
      category: 'Politics'
    }
  ]
  return (
    <div 
    variants={fadeIn("right",0.6)}
    initial="hidden"
    whileInView={"show"}
    className='w-11/12 mx-auto p-3'>
      <h1 className='text-2xl md:text-4xl text-gray-600 font-hero font-medium pt-25 pb-15'>
        Featured Categories
      </h1>
      <motion.div 
      variants={fadeIn("up",0.2)}
      initial="hidden"
      whileInView={"show"}
      className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 lg:h-[350px] gap-4 '>
        {featuredBooks.map(book => (
          <FeaturedbookCard key={book.id} book={book}></FeaturedbookCard>
        ))}
      </motion.div>
    </div>
  )
}

export default FeaturedBooks
