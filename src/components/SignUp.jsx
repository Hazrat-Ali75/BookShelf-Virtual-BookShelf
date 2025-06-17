import React, { useContext, useState } from 'react'
import { motion } from 'motion/react'
import { FcGoogle } from 'react-icons/fc'
import { Link, useNavigate } from 'react-router'
import { AuthContext } from '../context/AuthContext'
import Swal from 'sweetalert2'
import { FaEyeSlash, FaRegEye } from 'react-icons/fa'
import { fadeIn } from '../FramerMotion/variant'
import { fadeInUp } from '../FramerMotion/animation'

const SignUp = () => {
  const { setUser, handleRegister, handleRegisterGoogle, handleUpdate } =
    useContext(AuthContext)

  const [error, setError] = useState('')

  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()
  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const photo = form.photourl.value
    const password = form.password.value

    const hasUpperCase = /[A-Z]/.test(password)
    const hasLowerCase = /[a-z]/.test(password)

    if (password.length < 6) {
      setError('password length at least 6')
      return
    }

    if (!hasUpperCase) {
      setError('Password must contain at least one uppercase letter.')
      return
    }

    if (!hasLowerCase) {
      setError('Password must contain at least one lowercase letter.')
      return
    }

    handleRegister(email, password)
      .then(res => {
        const user = res.user
        handleUpdate({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo })
            console.log(user)
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Registration successfull!!!',
              showConfirmButton: false,
              timer: 1500
            })
            navigate('/')
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(error => {
        const errorMessage = error.message
        console.log(errorMessage)
      })
  }

  const handleGoogleSignIn = () => {
    handleRegisterGoogle()
      .then(res => {
        const user = res.user
        setUser(user)
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Registration successfull!!!',
          showConfirmButton: false,
          timer: 1500
        })
        navigate('/')
        console.log(user)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div>
      <div className='py-[40px]'>
        <motion.form
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          onSubmit={handleSubmit}
          className='w-[350px] md:w-[450px] mx-auto my-auto shadow-lg h-[630px] rounded-lg p-4'
        >
          <motion.h2
            variants={fadeInUp}
            initial='hidden'
            animate='visible'
            className='text-center text-xl md:text-3xl font-primary font-medium py-3'
          >
            Please SignUp
          </motion.h2>
          <div className='font-secondary mt-5'>
            <label className='block pb-2' htmlFor=''>
              Name
            </label>
            <input
              className='w-full mb-2 px-1 py-3 border-1 border-gray-300 rounded-sm'
              type='text'
              name='name'
              placeholder='Enter your name'
            ></input>
            <label className='block pb-2' htmlFor=''>
              Email
            </label>
            <input
              className='w-full mb-2 px-1 py-3 border-1 border-gray-300 rounded-sm'
              type='email'
              name='email'
              placeholder='Enter your email'
            ></input>
            <label className='block pb-2' htmlFor=''>
              Photo Url
            </label>
            <input
              className='w-full mb-2 px-1 py-3 border-1 border-gray-300 rounded-sm'
              type='text'
              name='photourl'
              placeholder='Enter your photo url'
            ></input>
            <label className='block pb-2' htmlFor=''>
              Password
            </label>
            <div className='relative'>
              <input
                className='w-full px-1 py-3 border-1  border-gray-300 rounded-sm'
                type={showPassword ? 'text' : 'password'}
                name='password'
                placeholder='Enter your password'
              ></input>
              <button
                type='button'
                onClick={e => {
                  e.preventDefault()
                  e.stopPropagation()
                  setShowPassword(!showPassword)
                }}
                className='btn h-8 py-3 absolute right-1 top-2'
              >
                {showPassword ? (
                  <FaRegEye size={21}></FaRegEye>
                ) : (
                  <FaEyeSlash size={21}></FaEyeSlash>
                )}
              </button>
            </div>
            {error && <p className='text-red-500 text-xs my-2'>{error}</p>}
            <button
              type='submit '
              className='btn py-3 mt-4 w-full text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-sm text-[15px]'
            >
              Sign Up
            </button>
            <button
              onClick={handleGoogleSignIn}
              className='btn py-3 mt-4 w-full text-white bg-gray-600 rounded-sm text-[15px]'
            >
              <FcGoogle size={23} /> Sign Up with Google
            </button>
            <p className='pt-4'>
              Don't have account ?{' '}
              <Link className='text-blue-500' to='/auth/signin'>
                Signin now
              </Link>
            </p>
          </div>
        </motion.form>
      </div>
    </div>
  )
}

export default SignUp
