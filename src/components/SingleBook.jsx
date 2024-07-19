import React from 'react'
import { Link } from 'react-router-dom'
import bookc from "../assets/book.jpg"

const SingleBook = ({ book }) => {
  const coverbook = `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`;
  return (
    <>
        <div className="bg-white rounded-xl shadow-md flex flex-col items-center p-3">
            <img src={book.cover_i ? coverbook : bookc} className='max-w-[100%] mx-auto' alt="cover" />
              <div className='text-center'>
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