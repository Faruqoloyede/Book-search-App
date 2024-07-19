import React from 'react'
import { Link } from 'react-router-dom'

const SingleBook = ({ book }) => {
  return (
    <>
        <div className="bg-white rounded-xl shadow-md p-3 flex flex-col text-center">
              <img src={`https://covers.openlibrary.org/b/id/240727-L.jpg`} alt="" className="object-contain w-full" />
              <div className="text-center">
                <p className="text-gray-600 font-bold text-xl my-2"></p>
                <p className="mb-2"><span className="font-bold">Author:</span> {book.author_name
                }</p>
                <p className="mb-2"><span className="font-bold">Total Editions:</span>{book. edition_count}</p>
              </div>
              <div className='border border-gray-100 mb-5'></div>
              <Link to={`/books/${book.id}`} className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm" >
                  Read more
              </Link>
          </div>
    </>
  )
}

export default SingleBook