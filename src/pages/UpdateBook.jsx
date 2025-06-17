import React from 'react'
import { motion } from 'motion/react'
import { useLoaderData, useParams } from 'react-router'
import { fadeIn } from '../FramerMotion/variant'
import useUpdateMyBookApi from '../api/useUpdateMyBookApi'
import Swal from 'sweetalert2'

const UpdateBook = () => {
  const book = useLoaderData()
  const {id} = useParams();
  const {updateMyBookPromise} = useUpdateMyBookApi()
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      book_title: form.book_title.value,
      cover_photo: form.cover_photo.value,
      book_author: form.book_author.value,
      total_page: form.total_page.value,
      book_category: form.book_category.value,
      reading_status: form.reading_status.value,
      book_overview: form.book_overview.value,
      upvote: parseInt(form.upvote.value),
      name: book.name,
      email: book.email,
    };
    console.log(formData); 
    updateMyBookPromise(id,formData)
    .then(res=> {
      if(res.data.modifiedCount == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Book Updated Successfully !!!',
          showConfirmButton: false,
          timer: 1500
        })
      }
        console.log(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
  };

  return (
    <div className='pt-15 pb-20'>
    <motion.div 
    variants={fadeIn("left", 0.3)}
    initial = "hidden"
    whileInView={"show"}
    className='max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg font-secondary'>
      <h2 className='text-xl md:text-2xl font-medium mb-6 text-center'>
        Edit Book Information
      </h2>
      <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4'>
      <legend className="">Book Title</legend>
        <input
          type='text'
          name='book_title'
          defaultValue={book.book_title}
          placeholder='Book Title'
          className='input input-bordered w-full'
          required
        />
         <legend className="">Book Cover Url</legend>
        <input
          type='text'
          name='cover_photo'
          defaultValue={book.cover_photo}
          placeholder='Cover Photo URL'
          className='input input-bordered w-full'
          required
        />
         <legend className="">Author</legend>
        <input
          type='text'
          name='book_author'
          defaultValue={book.book_author}
          placeholder='Author'
          className='input input-bordered w-full'
          required
        />
         <legend className="">Total Pages</legend>
        <input
          type='number'
          name='total_page'
          defaultValue={book.total_page}
          placeholder='Total Pages'
          className='input input-bordered w-full'
          required
        />
        <legend className="">Book Category</legend>
        <input
          type='text'
          name='book_category'
          defaultValue={book.book_category}
          placeholder='Category'
          className='input input-bordered w-full'
          required
        />
         <legend className="">Reading Status</legend>
        <select
          name='reading_status'
          defaultValue={book.reading_status}
          className='select select-bordered w-full'
        >
          <option value='Want to Read'>Want to Read</option>
          <option value='Reading'>Reading</option>
          <option value='Completed'>Completed</option>
        </select>

        <textarea
          name='book_overview'
          defaultValue={book.book_overview}
          placeholder='Overview'
          className='textarea textarea-bordered w-full'
          rows='4'
          required
        ></textarea>
        <legend className="">Upvote</legend>
        <input
          type='number'
          name='upvote'
          defaultValue={book.upvote}
          placeholder='Upvote Count'
          className='input input-bordered w-full'
          required
        />
        <legend className="">Added by</legend>
        <input
          type='text'
          name='name'
          value={book.name}
          readOnly
          className='input input-bordered w-full bg-gray-100 cursor-not-allowed'
        />

        <input
          type='email'
          name='email'
          value={book.email}
          readOnly
          className='input input-bordered w-full bg-gray-100 cursor-not-allowed'
        />

        <button type='submit' className='btn btn-primary w-full mt-4'>
          Save Changes
        </button>
      </form>
    </motion.div>
    </div>
  )
}

export default UpdateBook
