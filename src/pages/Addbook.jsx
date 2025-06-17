import React, { useContext } from 'react'
import { motion } from 'motion/react'
import { fadeIn } from '../FramerMotion/variant'
import { AuthContext } from '../context/AuthContext'
import Swal from 'sweetalert2'
import usePostBookApi from '../api/usePostBookApi'

const Addbook = () => {
  const { user } = useContext(AuthContext)
  const {postBookPromise} = usePostBookApi()

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    const formData = Object.fromEntries(data.entries())
    formData.upvote = parseInt(formData.upvote, 10)

    
    postBookPromise(formData)
      .then(res => {
        console.log(res.data)
        if (res.data.insertedId) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Successfully added',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className='bg-gray-50 px-6 md:px-0 py-16'>
      <motion.div
        variants={fadeIn('left', 0.3)}
        initial='hidden'
        whileInView={'show'}
        className='max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg font-secondary'
      >
        <h2 className='text-2xl font-semibold mb-6 text-center text-gray-500'>
          Add a New Book
        </h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='block font-medium text-gray-700'>
              Book Title
            </label>
            <input
              type='text'
              name='book_title'
              className='w-full p-2 border-1 border-gray-300 rounded-sm focus:ring focus:ring-indigo-300'
              required
            />
          </div>

          <div>
            <label className='block font-medium text-gray-700'>
              Cover Photo URL
            </label>
            <input
              type='url'
              name='cover_photo'
              className='w-full p-2 border-1 border-gray-300 rounded-sm focus:ring focus:ring-indigo-300'
              required
            />
          </div>

          <div>
            <label className='block font-medium text-gray-700'>Author</label>
            <input
              type='text'
              name='book_author'
              className='w-full p-2 border-1 border-gray-300 rounded-sm focus:ring focus:ring-indigo-300'
              required
            />
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label className='block font-medium text-gray-700'>
                Total Pages
              </label>
              <input
                type='number'
                name='total_page'
                className='w-full p-2 border-1 border-gray-300 rounded-sm focus:ring focus:ring-indigo-300'
                required
              />
            </div>

            <div>
              <label className='block font-medium text-gray-700'>
                Book Category
              </label>
              <select
              name='book_category'
              className='w-full p-2 border-1 border-gray-300 rounded-sm focus:ring focus:ring-indigo-300'
              required
            >
              <option value=''>Select category</option>
              <option value='Science & Technology'>Science & Technology</option>
              <option value='Fiction'>Fiction</option>
              <option value='Literature'>Literature</option>
              <option value='Non Fiction'>Non Fiction</option>
              <option value='Fantasy'>Fantasy</option>
              <option value='Politics'>Politics</option>
            </select>
            </div>
          </div>

          <div>
            <label className='block font-medium text-gray-700'>
              Reading Status
            </label>
            <select
              name='reading_status'
              className='w-full p-2 border-1 border-gray-300 rounded-sm focus:ring focus:ring-indigo-300'
              required
            >
              <option value=''>Select status</option>
              <option value='Reading'>Reading</option>
              <option value='Completed'>Completed</option>
              <option value='Want to Read'>Want to Read</option>
            </select>
          </div>

          <div>
            <label className='block font-medium text-gray-700'>
              Book Overview
            </label>
            <textarea
              name='book_overview'
              rows='4'
              className='w-full p-2 border-1 border-gray-300 rounded-sm focus:ring focus:ring-indigo-300'
              required
            ></textarea>
          </div>

          <div>
            <label className='block font-medium text-gray-700'>Upvote</label>
            <input
              type='number'
              name='upvote'
              min='0'
              className='w-full p-2 border-1 border-gray-300 rounded-sm focus:ring focus:ring-indigo-300'
              required
            />
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label className='block font-medium text-gray-700'>
                Your Name
              </label>
              <input
                type='text'
                name='name'
                defaultValue={user.displayName}
                className='w-full p-2 border-1 border-gray-300 rounded-sm focus:ring focus:ring-indigo-300'
                readOnly
              />
            </div>

            <div>
              <label className='block font-medium text-gray-700'>Email</label>
              <input
                type='email'
                defaultValue={user.email}
                name='email'
                className='w-full p-2 border-1 border-gray-300 rounded-sm focus:ring focus:ring-indigo-300'
                readOnly
              />
            </div>
          </div>

          <button
            type='submit'
            className='w-full bg-gradient-to-r from-blue-500 to-purple-500  text-white text-[17px] py-2 px-4 rounded-sm '
          >
            Add Book
          </button>
        </form>
      </motion.div>
    </div>
  )
}

export default Addbook
