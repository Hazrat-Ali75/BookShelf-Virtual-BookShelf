import React, { use, useContext, useEffect, useRef, useState } from 'react'
import { MdOutlineRateReview } from 'react-icons/md'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'
import ReviewCard from './ReviewCard'

const BookReview = ({ id, reviewPromise }) => {
  const loadReviews = use(reviewPromise)
  // console.log(loadReviews)
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    setReviews(loadReviews)
  }, [loadReviews])

  // console.log(reviews)

  const { user } = useContext(AuthContext)
  const review = useRef()

  const handleReview = e => {
    e.preventDefault()
    const reviewInfo = {
      userEmail: user.email,
      userPhoto: user.photoURL,
      bookId: id,
      reviewPost: review.current.value
    }
    // console.log(reviewInfo)
    axios
      .post('https://book-shelf-app-server.vercel.app/reviews', reviewInfo)
      .then(res => {
        reviewInfo._id = res.data.insertedId
        setReviews([...reviews, reviewInfo])
        console.log(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div>
      <div className='flex items-center gap-6'>
        <div className='flex items-center gap-2'>
          <h2 className='font-hero text-lg md:text-2xl'>Give Review</h2>
          <MdOutlineRateReview size={26} />
        </div>
        <div className='border-1 border-gray-300 flex-1 hidden md:block'></div>
      </div>
      <div>
        <form className='flex items-center gap-4 py-4'>
          <input
            type='text'
            ref={review}
            placeholder='Type here'
            className='input w-[220px] md:w-full'
          />
          <button
            onClick={handleReview}
            disabled={!user || !user.email}
            className='bg-gradient-to-r from-blue-500 to-purple-500  text-white text-[17px] py-2 px-4 rounded-sm '
            type='submit'
          >
            Post
          </button>
        </form>
      </div>
      <div className='grid grid-cols-1 gap-3'>
        {reviews.map(book => (
          <ReviewCard
            loadReviews={reviews}
            setReviews={setReviews}
            key={book._id}
            reviewData={book}
          ></ReviewCard>
        ))}
      </div>
    </div>
  )
}

export default BookReview
