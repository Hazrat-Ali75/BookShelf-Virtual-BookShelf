import React, { useContext, useState } from 'react'
import { motion } from "motion/react"
import { IoMdMenu } from 'react-icons/io'
import { RxCross2 } from 'react-icons/rx'
import { Link, NavLink, useNavigate } from 'react-router'
import { AuthContext } from '../context/AuthContext'
import Swal from 'sweetalert2'
import { slideInFromRight } from '../FramerMotion/animation'

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const navigate = useNavigate()
  const { user, setUser, handleLogOut } = useContext(AuthContext)

  const handleSignOut = () => {
    handleLogOut()
      .then(() => {
        setUser(null)
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Sign Out successfull!!!',
          showConfirmButton: false,
          timer: 1500
        })
        navigate('/')
      })
      .catch(error => {
        console.log(error)
      })
  }

  const links = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/bookshelf'>Bookshelf</NavLink>
      </li>
      <li>
        <NavLink to='/addbook'>Add Books</NavLink>
      </li>
      <li>
        <NavLink to='/mybooks'>My Books</NavLink>
      </li>
      <li>
        <NavLink to='/contactus'>Contact Us</NavLink>
      </li>
    </>
  )

  return (
    <div className='bg-slate-50 font-primary shadow-2xs'>
      <div className='flex justify-between items-center w-11/12 mx-auto relative py-2'>
        <div className=''>
          <Link className='btn btn-ghost text-xl'>BoiPoka</Link>
        </div>
        <div className='hidden lg:block'>
          <ul className='flex gap-5 desk'>{links}</ul>
        </div>
        <div className='flex items-center gap-2'>
         {
          user && <div className="dropdown dropdown-end hidden lg:block">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={user.photoURL} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-65 p-2 shadow">
            <li>
              <p className='font-medium text-lg'>{user.displayName}</p>
            </li>
            <li ><p className='font-medium text-[16px]'>{user.email}</p></li>
            <li ><Link to='/profile' className='text-[16px]'>Profile</Link></li>
          </ul>
        </div>
         }
            <div className='flex items-center '>
            {user ? (
              <button
                onClick={handleSignOut}
                className='btn mx-3 border-1 hidden lg:block border-gray-500 rounded-lg'
              >
                Logout
              </button>
            ) : (
              <Link to='/auth/signin'>
                <button className='btn mx-3 border-1 hidden lg:block border-gray-500  rounded-lg'>
                  Login
                </button>
              </Link>
            )}
            {user ? (
              ''
            ) : (
              <Link to='/auth/signup'>
                <button className='btn bg-gradient-to-r hidden lg:block from-blue-500 to-purple-500 rounded-lg text-[16px] text-white'>
                  Register
                </button>
              </Link>
            )}
            </div>
        </div>
        <div className='lg:hidden'>
          {hamburgerOpen ? (
            <button className='btn' onClick={() => setHamburgerOpen(false)}>
              <RxCross2 size={23} />
            </button>
          ) : (
            <button className='btn' onClick={() => setHamburgerOpen(true)}>
              <IoMdMenu size={23} />
            </button>
          )}
        </div>
        {hamburgerOpen && (
          <motion.div
          variants={slideInFromRight}
          initial = "hidden" 
          animate = "visible"
          className='top-[56px] right-0 absolute shadow-sm bg-gray-200 rounded-lg z-50'>
            <ul className='p-5 flex flex-col gap-3 lg:hidden hamb'>
              {links}
              {user && (
                <li>
                  <NavLink to='/profile'>Profile</NavLink>
                </li>
              )}
              {user ? (
                <button
                  onClick={handleSignOut}
                  className='btn w-[90%] mx-auto border-1 border-gray-500 rounded-lg'
                >
                  Logout
                </button>
              ) : (
                <Link to='/auth/signin'>
                  <button className='btn w-[90%] mx-auto border-1 border-gray-500 rounded-lg'>
                    Login
                  </button>
                </Link>
              )}
              {user ? (
                ''
              ) : (
                <Link to='/auth/signup'>
                  <button className='btn w-[90%] mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white text-[16px]'>
                    Register
                  </button>
                </Link>
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Navbar
