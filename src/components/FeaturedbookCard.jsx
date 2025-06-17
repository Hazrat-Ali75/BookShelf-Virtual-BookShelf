import React from 'react'

const FeaturedbookCard = ({ book }) => {
  return (
    <div className="group relative w-[80%] md:w-full  lg:h-80 rounded-lg overflow-hidden shadow-xl border border-gray-200 bg-white transform transition duration-500 hover:scale-[1.03] hover:shadow-2xl">
    <img
      src={book.coverUrl}
      alt="Book Cover"
      className="w-full h-full   transition-transform duration-700 ease-in-out group-hover:scale-110"
    />

    {/* CATEGORY TAG */}
    <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md px-2 py-1 rounded-full border border-white/30">
      <span className="text-sm font-semibold text-white font-secondary drop-shadow-md group-hover:text-amber-500 transition-colors duration-300">
        {book.category}
      </span>
    </div>

    {/* OVERLAY (optional for bottom fade effect) */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
  </div>
  )
}

export default FeaturedbookCard
