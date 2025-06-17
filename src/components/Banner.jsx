import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { motion } from 'motion/react'
import bannerImg1 from '../assets/slider/sliderImg1.jpg'
import bannerImg2 from '../assets/slider/sliderImg2.jpg'
import bannerImg3 from '../assets/slider/sliderImg3.jpg'
import { fadeIn } from '../FramerMotion/variant'

const Banner = () => {
  return (
    <div className='relative w-full rounded-sm overflow-hidden'>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000, // 10 seconds
          disableOnInteraction: false
        }}
        loop={true}
        speed={1200}
      >
        <SwiperSlide>
          <div
            className='h-[270px] md:h-[600px] w-full bg-center bg-cover relative flex items-center rounded-sm overflow-hidden'
            style={{ backgroundImage: `url(${bannerImg1})` }}
          >
            <div className='absolute inset-0 bg-black/50'></div>
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              whileInView={'show'}
              className='relative z-20 w-[230px] md:w-[400px] font-secondary ml-[25px] md:ml-[100px]'
            >
              <h1 className='text-white text-lg md:text-4xl pb-3 font-hero font-medium'>
                Join a Community of Readers
              </h1>
              <p className='text-white text-sm md:text-[16px] mb-2'>
                Connect with fellow bookworms and share your favorite reads.
              </p>
              <button className='group relative inline-flex items-center gap-2 px-2 md:px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white md:font-medium text-sm md:text-lg rounded-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-600 shadow-md'>
                <span>Explore Books</span>
                <span className='transform transition-transform duration-300 group-hover:translate-x-1'>
                  →
                </span>
              </button>
            </motion.div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='h-[270px] md:h-[600px] w-full bg-center bg-cover relative flex items-center rounded-sm overflow-hidden'
            style={{ backgroundImage: `url(${bannerImg2})` }}
          >
            <div className='absolute inset-0 bg-black/50'></div>
            <motion.div
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              className='relative z-20 w-[230px] md:w-[400px] font-secondary ml-[25px] md:ml-[100px]'
            >
              <h1 className='text-white text-lg md:text-4xl pb-3 font-hero font-medium'>
                Discover Your Next Great Read
              </h1>
              <p className='text-white text-sm md:text-[16px] mb-2'>
                Explore thousands of books from every genre, handpicked for book
                lovers.
              </p>
              <button className='group relative inline-flex items-center gap-2 px-2 md:px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white md:font-medium text-sm md:text-lg rounded-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-600 shadow-md'>
                <span>Explore Books</span>
                <span className='transform transition-transform duration-300 group-hover:translate-x-1'>
                  →
                </span>
              </button>
            </motion.div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='h-[270px] md:h-[600px] w-full bg-center bg-cover relative flex items-center md:justify-end rounded-sm overflow-hidden'
            style={{ backgroundImage: `url(${bannerImg3})` }}
          >
            <div className='absolute inset-0 bg-black/50'></div>
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              whileInView={'show'}
              className='relative z-20 w-[230px] md:w-[400px] font-secondary ml-[25px]  md:mr-[100px]'
            >
              <h1 className='text-white text-lg md:text-4xl pb-3 font-hero font-medium'>
                Your Reading Journey Starts Here
              </h1>
              <p className='text-white text-sm md:text-[16px] mb-2'>
                Set goals, log progress, and celebrate your reading milestones.
              </p>
              <button className='group relative inline-flex items-center gap-2 px-2 md:px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white md:font-medium text-sm md:text-lg rounded-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-600 shadow-md'>
                <span>Explore Books</span>
                <span className='transform transition-transform duration-300 group-hover:translate-x-1'>
                  →
                </span>
              </button>
            </motion.div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner
