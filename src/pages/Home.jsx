import React, { Suspense } from 'react'
import Banner from '../components/Banner'
import PopularBooks from '../components/PopularBooks'
import FeaturedBooks from '../components/FeaturedBooks'
import { topUpvotedBooksPromise } from '../api/topUpvotedBooksPromise'
import ReadingTips from '../components/ReadingTips'
import StatsSection from '../components/StatsSection'

const Home = () => {
  return (
    <div className=''>
      <div className='w-11/12 mx-auto h-[270px] md:h-[600px] pt-8 md:pt-10 pb-15'>
        <Banner></Banner>
      </div>
      <div className=' w-11/12 mx-auto  pt-25'>
        <Suspense
          fallback={
            <div className='h-[100px] flex justify-center items-center'>
              <span className='loading loading-spinner text-success'></span>
            </div>
          }
        >
          <PopularBooks
            topUpvotedBooksPromise={topUpvotedBooksPromise()}
          ></PopularBooks>
        </Suspense>
      </div>
      <div className='bg-gray-50 w-full '>
        <FeaturedBooks></FeaturedBooks>
      </div>
      <div className='w-11/12 mx-auto py-15'>
         <ReadingTips></ReadingTips>
      </div>
      <div className='w-11/12 mx-auto py-15'>
         <StatsSection></StatsSection>
      </div>
    </div>
  )
}

export default Home
