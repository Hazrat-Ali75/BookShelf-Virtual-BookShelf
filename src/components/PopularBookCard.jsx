import React from 'react'
import { Link } from 'react-router'
import { BiCategory } from 'react-icons/bi'


const PopularBookCard = ({ book }) => {
  const { _id, book_title, cover_photo, book_author, book_category, upvote } =
    book
  return (
    <div
    
    className='bg-white shadow-sm font-secondary rounded-sm overflow-hidden border border-transparent hover:border-gray-300 transition-all duration-300 flex flex-col sm:flex-row gap-4 p-4'>
      {/* Cover Image */}
      <div className='flex justify-center md:flex-none'>
        <img
          src={cover_photo}
          alt={book_title}
          className='md:w-full w-40 md:h-60 h-40  md:rounded-sm '
        />
      </div>

      {/* Info Section */}
      <div className='flex flex-col justify-between flex-1'>
        <div>
          <h2 className='text-lg font-medium text-gray-800'>{book_title}</h2>
          <p className='text-sm text-gray-600 mt-1'>by {book_author}</p>
          <p className='text-sm text-gray-500 mt-2 flex items-center gap-1'>
            {' '}
            <BiCategory /> {book_category}{' '}
          </p>
        </div>

        <div className='mt-4 flex items-center justify-between'>
          <p className='text-blue-600 font-semibold text-sm'>
            👍 {upvote} Upvotes
          </p>

          {/* Show Details Button */}
          <Link
            to={`/bookdetails/${_id}`}
            className='px-4 py-1.5 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition'
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PopularBookCard
