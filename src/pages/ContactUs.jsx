import React from 'react'

const ContactUs = () => {
  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target

    const formData = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value
    }

    console.log('Contact Request:', formData)
    // Optional: send via axios/fetch to backend
  }

  return (
    <div className='min-h-screen flex items-center justify-center px-6 py-16'>
      <div className='max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row'>
        {/* Left side */}
        <div className='bg-gradient-to-r from-blue-500 to-purple-500 md:w-1/2 p-10 flex flex-col justify-center text-white'>
          <h2 className='text-3xl font-bold mb-4'>Let’s Talk Books</h2>
          <p className='text-md leading-relaxed mb-4'>
            Have a question about your favorite novel? Want to suggest a new
            book? Or maybe you'd like to collaborate?
          </p>
          <p className='text-sm opacity-90'>
            We're all ears — just drop us a line.
          </p>
        </div>

        {/* Right side */}
        <form
          onSubmit={handleSubmit}
          className='md:w-1/2 p-8 space-y-6 bg-white'
        >
          <div>
            <label className='block text-sm text-gray-600 font-semibold'>
              Your Name
            </label>
            <input
              type='text'
              name='name'
              required
              className='w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400'
              placeholder='Jane Reader'
            />
          </div>

          <div>
            <label className='block text-sm text-gray-600 font-semibold'>
              Your Email
            </label>
            <input
              type='email'
              name='email'
              required
              className='w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400'
              placeholder='jane@example.com'
            />
          </div>

          <div>
            <label className='block text-sm text-gray-600 font-semibold'>
              Subject
            </label>
            <input
              type='text'
              name='subject'
              required
              className='w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400'
              placeholder='Book Recommendation, Partnership, etc.'
            />
          </div>

          <div>
            <label className='block text-sm text-gray-600 font-semibold'>
              Message
            </label>
            <textarea
              name='message'
              rows='4'
              required
              className='w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400'
              placeholder="Tell us what's on your mind..."
            ></textarea>
          </div>

          <button
            type='submit'
            className='w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-md hover:bg-purple-700 transition'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs
