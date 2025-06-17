import React, { useContext, useEffect, useState } from 'react'
import { motion } from "motion/react"
import { Link, useLocation, useNavigate } from 'react-router'
import { AuthContext } from '../context/AuthContext'
import Swal from 'sweetalert2'
import { fadeIn } from '../FramerMotion/variant'
import { fadeInUp } from '../FramerMotion/animation'


const SignIn = () => {

  useEffect(() => {
      document.title = 'Sign In | Boipoka'
    }, [])

    const [error, setError] = useState('')
    const {setUser, handleLogin} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit =(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        handleLogin(email, password)
        .then(res=> {
            const user = res.user;
            setUser(user);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Sign In successfull!!!",
                showConfirmButton: false,
                timer: 1500
              });
            navigate(`${location.state ? location.state : '/'}`);
            console.log(user)
        })
        .catch(err=>{
            const errorMessage = err.code;
            setError(errorMessage);
        })
    }
  return (
    <div>
      <div className='py-[80px]'>
        <motion.form 
        variants={fadeIn("up", 0.3)}
        initial = "hidden"
        whileInView={"show"}
        // viewport={{once: false, amount: 0.7}}
        onSubmit={handleSubmit} className='w-[350px] md:w-[450px] mx-auto my-auto shadow-lg h-[430px] rounded-lg p-4'>
          <motion.h2
           variants={fadeInUp}
           initial = "hidden"
           animate = "visible"
           className='text-center text-xl md:text-3xl font-primary font-medium py-3'>
            SignIn Now!!!
          </motion.h2>
          <div className='font-secondary mt-5'>
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
              Password
            </label>
            <input
              className='w-full px-1 py-3 border-1  border-gray-300 rounded-sm'
              type='password'
              name='password'
              placeholder='Enter your password'
            ></input>
            {
                error && <p className='text-red-500 mt-3 text-[14px]'>{error}</p>
            }
            <Link>
              <p className='pt-2'>Forget Password?</p>
            </Link>
            <button
              type='submit '
              className='btn py-3 w-full text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-sm text-[15px]'
            >
              Sign In
            </button>
            <p className='pt-4'>
              Don't have account ? <Link className='text-blue-500' to='/auth/signup'>Signup now</Link>
            </p>
          </div>
        </motion.form>
      </div>
    </div>
  )
}

export default SignIn
