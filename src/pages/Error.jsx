import React from 'react'
import errorImg from '../assets/error.jpg'
import { Link } from 'react-router'

const Error = () => {
 
  return (
    <div className='bg-gray-200'>
      <div className='w-11/12 mx-auto min-h-screen '>
        <div className='flex flex-col justify-center items-center pt-[100px]'>
          <img
            className='w-[350px] h-[270px] rounded-lg'
            src={errorImg}
            alt=''
          />
          <Link to='/' className='btn bg-gradient-to-r from-blue-500 to-purple-500 text-white  mt-8'>
            Go to home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Error
