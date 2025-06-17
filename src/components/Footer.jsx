import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-tr from-slate-400 to-gray-500 text-white pt-10 pb-6 px-4 md:px-16'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>
        {/* Brand */}
        <div>
          <h2 className='text-3xl font-bold mb-2'>📚 BoiPoka</h2>
          <p className='text-sm text-gray-200'>
            Your digital library haven. Read, borrow, explore Link world of
            knowledge.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className='text-xl font-semibold mb-3'>Explore</h3>
          <ul className='space-y-2 text-gray-300 text-sm'>
            <li>
              <Link href='#' className='hover:text-white'>
                Home
              </Link>
            </li>
            <li>
              <Link href='#' className='hover:text-white'>
                Categories
              </Link>
            </li>
            <li>
              <Link href='#' className='hover:text-white'>
                My Bookshelf
              </Link>
            </li>
            <li>
              <Link href='#' className='hover:text-white'>
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className='text-xl font-semibold mb-3'>Newsletter</h3>
          <p className='text-sm text-gray-300 mb-2'>
            Stay updated with new arrivals and events.
          </p>
          <form className='flex flex-col sm:flex-row gap-2'>
            <input
              type='email'
              placeholder='Enter your email'
              className='p-2 rounded-md text-black w-full sm:w-auto flex-1'
            />
            <button
              type='submit'
              className='bg-amber-500 hover:bg-amber-700 text-black px-4 py-2 rounded-md font-semibold'
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social */}
        <div>
          <h3 className='text-xl font-semibold mb-3'>Connect with Us</h3>
          <div className='flex space-x-4 text-2xl'>
            <Link to='https://www.facebook.com/profile.php?id=61576442623017' className='hover:text-yellow-300'>
              <FaFacebookF />
            </Link>
            <Link to='https://x.com/hazratali010sh' className='hover:text-yellow-300'>
              <FaTwitter />
            </Link>
            <Link to='https://www.linkedin.com/in/hazrat-ali-3b5966282' className='hover:text-yellow-300'>
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className='mt-10 text-center text-sm text-gray-300 border-t border-gray-600 pt-4'>
        © {new Date().getFullYear()} Boipoka. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
