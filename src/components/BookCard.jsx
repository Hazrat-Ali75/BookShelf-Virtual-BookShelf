import { Link } from "react-router"

const BookCard = ({ book }) => {
  return (
    <div className='bg-white rounded-lg w-[230px]  shadow-md overflow-hidden transition hover:shadow-lg'>
     <div className="flex justify-center items-center">
     <img
        src={book.cover_photo}
        alt={book.Book_title}
        className='w-[160px] h-[200px] rounded-sm '
      />
     </div>
      <div className='p-4 pt-2'>
        <h3 className='text-[16px] font-medium text-gray-800 mb-1'>{book.book_title}</h3>
        <p className='text-sm text-gray-600 mb-2'>By {book.book_author}</p>
        <Link to={`/bookdetails/${book._id}`}>
        <button className='px-4 w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-sm hover:from-blue-600 hover:to-purple-600 transition'>
          See Details
        </button>
        </Link>
      </div>
    </div>
  )
}

export default BookCard
  