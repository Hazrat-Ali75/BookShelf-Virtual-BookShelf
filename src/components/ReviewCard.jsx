import React, { useContext, useState } from 'react'
import Swal from 'sweetalert2'
import { AuthContext } from '../context/AuthContext'

const ReviewCard = ({ reviewData, loadReviews, setReviews }) => {
  const {user} = useContext(AuthContext)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editedReview, setEditedReview] = useState(reviewData.reviewPost)

  const handleDelete = id => {
    fetch(`https://book-shelf-app-server.vercel.app/reviews/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount) {
          Swal.fire({
            title: 'Deleted!',
            text: 'Your review has been deleted.',
            icon: 'success'
          })
        }
        const filteredReviews = loadReviews.filter(review => review._id !== id)
        setReviews(filteredReviews)
      })
  }

  const handleUpdate = () => {
    fetch(
      `https://book-shelf-app-server.vercel.app/reviews/${reviewData._id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ reviewPost: editedReview })
      }
    )
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount == 1) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Review Updated Successfully !!!',
            showConfirmButton: false,
            timer: 1500
          })
        }

        const updatedReviews = loadReviews.map(review =>
          review._id === reviewData._id
            ? { ...review, reviewPost: editedReview }
            : review
        )
        setReviews(updatedReviews)
        setIsModalOpen(false)
        console.log(data)
      })
  }

  return (
    <div className='flex flex-col gap-4 border border-gray-300 rounded-md p-4 w-full max-w-4xl mx-auto'>
      <div className='flex items-start gap-4 bg-white p-4 rounded-md'>
        <img
          className='w-16 h-16 rounded-full object-cover shrink-0'
          src={reviewData.userPhoto}
          alt='User'
        />
        <p className='text-black break-words overflow-hidden'>
          {reviewData.reviewPost}
        </p>
      </div>
      <div className='flex gap-4 justify-end flex-wrap'>
        <button
          onClick={() => setIsModalOpen(true)}
          className='bg-amber-500 text-white px-4 py-2 rounded-sm w-[80px]'
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(reviewData._id)}
          disabled={!user || !user.email}
          className='bg-gray-700 text-white px-4 py-2 rounded-sm w-[80px]'
        >
          Delete
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className='fixed inset-0 bg-opacity-40 flex justify-center items-center z-50 shadow-2xl'>
          <div className='bg-white p-6 rounded-lg shadow-md w-full max-w-md'>
            <h2 className='text-xl font-semibold mb-4'>Edit Your Review</h2>
            <textarea
              value={editedReview}
              onChange={e => setEditedReview(e.target.value)}
              className='w-full h-28 p-2 border border-gray-300 rounded mb-4'
            />
            <div className='flex justify-end gap-4'>
              <button
                onClick={() => setIsModalOpen(false)}
                className='bg-gray-400 text-white px-4 py-2 rounded'
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                disabled={!user || !user.email}
                className='bg-blue-600 text-white px-4 py-2 rounded'
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ReviewCard
