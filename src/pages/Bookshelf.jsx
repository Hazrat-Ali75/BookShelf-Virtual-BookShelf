import React, { useEffect, useState } from 'react'
import BookCard from '../components/BookCard'
import { useLoaderData } from 'react-router'

const Bookshelf = () => {

  useEffect(() => {
      document.title = 'Bookshelf | Boipoka'
    }, [])

  const initialBookData = useLoaderData()

  const [booksData, setBooksData] = useState([])
  const [searchTitle, setSearchTitle] = useState('')
  const [readingStatus, setReadingStatus] = useState('')

  const categories = [
    'Science & Technology',
    'Literature',
    'Fiction',
    'Non Fiction',
    'Fantasy',
    'Politics'
  ]

  useEffect(() => {
    setBooksData(initialBookData)
  }, [initialBookData])

  return (
    <div className='bg-gray-50 p-4'>
      <div className='w-11/12 mx-auto'>
        <h1 className='text-xl md:text-3xl font-semibold mb-4 text-center font-secondary pt-5 pb-8'>
          Bookshelf
        </h1>

        <div className='flex justify-end mb-6'>
          <div className='flex gap-2 items-center flex-wrap'>
            <p className='text-[16px] text-gray-600'>Filter By</p>
            <input
              className='p-2 border border-gray-300 rounded-sm'
              type='text'
              placeholder='Book title'
              value={searchTitle}
              onChange={e => setSearchTitle(e.target.value)}
            />
            <select
              name='reading_status'
              className='p-2 border border-gray-300 rounded-sm text-gray-500'
              value={readingStatus}
              onChange={e => setReadingStatus(e.target.value)}
            >
              <option value=''>Reading Status</option>
              <option value='Reading'>Reading</option>
              <option value='Completed'>Completed</option>
              <option value='Want to Read'>Want to Read</option>
            </select>
          </div>
        </div>

        {categories.map(category => {
          const filteredBooks = booksData.filter(book => {
            const matchesCategory = book.book_category === category
            const matchesTitle = book.book_title
              .toLowerCase()
              .includes(searchTitle.toLowerCase())
            const matchesStatus = readingStatus
              ? book.reading_status === readingStatus
              : true
            return matchesCategory && matchesTitle && matchesStatus
          })

          return (
            <div key={category} className='mb-8'>
              <div className='flex items-center gap-3 mb-10'>
                <h2 className='md:text-xl font-semibold font-hero'>
                  {category}
                </h2>
                <div className='border-[1px] hidden md:block border-gray-300 flex-1'></div>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                {filteredBooks.map(book => (
                  <BookCard key={book._id} book={book} />
                ))}
                {filteredBooks.length === 0 && (
                  <p className='text-gray-500 col-span-full text-center'>
                    No books match this filter.
                  </p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Bookshelf

