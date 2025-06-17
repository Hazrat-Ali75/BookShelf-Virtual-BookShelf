import React, { useContext, useEffect, useState } from 'react'
// import { myBooksPromise } from '../api/myBooksPromise'
import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router'
import useMyBooksApi from '../api/useMyBooksApi'
import useDeleteMyBookApi from '../api/useDeleteMyBookApi'
import Swal from 'sweetalert2'

const Mybooks = () => {
  const { user } = useContext(AuthContext)
  const {myBookPromiseSecure} = useMyBooksApi()
  const {deleteMyBookPromise} = useDeleteMyBookApi()
  const [myBooks, setMyBooks] = useState([])

  useEffect(() => {
    myBookPromiseSecure(user.email).then(res => {
      setMyBooks(res.data)
    })
  }, [user.email, myBookPromiseSecure])

  
  const handleDelete = (id)=>{
    console.log(id)
    deleteMyBookPromise(id)
    .then(res=>{
      
      if(res.data.deletedCount){
        Swal.fire({
          title: "Deleted!",
          text: "Your book has been deleted.",
          icon: "success"
        });
      }

      const remainingBook = myBooks.filter(books=> books._id !== id)
      setMyBooks(remainingBook);
      console.log(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  }

  
  return (
    <div className='w-11/12 mx-auto pb-20'>
      <h1 className='text-xl md:text-3xl font-secondary font-medium text-center py-10'>
        My Added Books
      </h1>
      <div className=' rounded-box border border-base-content/5 bg-base-100 w-full md:w-[600px] lg:w-[800px] mx-auto'>
        <table className='table'>
          <thead>
            <tr>
              <th>Book Name</th>
              <th>Author</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                myBooks.map(book=> <tr book={book} key={book._id}>
                    <td>{book.book_title}</td>
                    <td>{book.book_author}</td>
                    <td>
                        <Link to={`/updatebooks/${book._id}`}><button className='bg-amber-500 p-1 rounded-sm text-white hover:bg-amber-700 w-[65px] mb-1 md:mr-2'>Update</button></Link>
                        <button
                        onClick={()=>handleDelete( book._id)} 
                        className='bg-gray-700 p-1 rounded-sm text-white hover:bg-gray-900 w-[65px]'>Delete</button>
                    </td>
                  </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Mybooks
