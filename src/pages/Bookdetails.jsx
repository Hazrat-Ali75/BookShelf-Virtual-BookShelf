import React, { Suspense, useContext, useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router'
import BookReview from '../components/BookReview'
import { reviewPromise } from '../api/reviewPromise'
import { AuthContext } from '../context/AuthContext'

const Bookdetails = () => {

  useEffect(() => {
      document.title = 'Book Details | Boipoka'
    }, [])

  const allBooks = useLoaderData()
  const { id } = useParams()
  const { user } = useContext(AuthContext)
  const [book, setBook] = useState({})
  const [count, setCount] = useState(0)
  const [isClicked, setIsClicked] = useState(false)
  useEffect(() => {
    const singleBook = allBooks.find(book => book._id === id)
    setBook(singleBook)
    setCount(singleBook.upvote)
  }, [allBooks, id])
  const handleUpvote = () => {
    const newCount = count + 1
    fetch(`https://book-shelf-app-server.vercel.app/books/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ upvote: newCount })
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          setCount(newCount)
          setIsClicked(true)
        }
        console.log(data)
      })
  }

  return (
    <div>
      <div className='md:min-h-screen flex p-15 justify-center'>
        <div className='max-w-4xl w-full bg-white rounded-lg md:rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row'>
          {/* Book Cover */}
          <div className='md:w-1/2 flex justify-center pt-2'>
            <img
              src={book.cover_photo}
              alt={book.book_title}
              className='w-[300px] md:w-full h-[340px] md:h-full '
            />
          </div>

          {/* Book Info */}
          <div className='p-6 md:w-1/2 flex flex-col justify-between'>
            <div>
              <h1 className='text-2xl font-bold text-gray-800 mb-2'>
                {book.book_title}
              </h1>
              <p className='text-md text-gray-600 mb-2'>
                by {book.book_author}
              </p>
              <p className='text-sm text-gray-500 mb-1'>
                <strong>Category:</strong> {book.book_category}
              </p>
              <p className='text-sm text-gray-500 mb-1'>
                <strong>Total Pages:</strong> {book.total_page}
              </p>
              <p className='text-sm text-gray-500 mb-4'>
                <strong>Status:</strong> {book.reading_status}
              </p>
              <p className='text-gray-700 text-sm'>
                <strong>Overview:</strong> {book.book_overview}
              </p>
            </div>

            <div className='mt-6 flex items-center justify-between'>
              <p className='text-lg text-gray-500'>
                Upvotes: {isClicked ? count : book.upvote}
              </p>
              <button
                onClick={handleUpvote}
                disabled={!user || user.email === book.email}
                className='px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition'
              >
                Upvote Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-4xl mx-auto pt-5 pb-15 px-10 md:px-0'>
        <Suspense
          fallback={
            <div className='h-[600px] flex justify-center items-center'>
              <span className='loading loading-spinner text-success'></span>
            </div>
          }
        >
          <BookReview reviewPromise={reviewPromise(id)} id={id}></BookReview>
        </Suspense>
      </div>
    </div>
  )
}

export default Bookdetails
