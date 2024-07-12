import React from 'react'
import book from "../assets/book.jpg";

const Books = () => {
  return (
    <div className='px-6 sm:px-16 py-6'>
      <h2 className='text-black font-poppins font-medium text-2xl text-center sm:text-start'>Your Searched Results</h2>
      <div className='grid sm:grid-cols-4 grid-cols-1 gap-10 pt-5 cursor-pointer'>
        <div className='bg-white flex flex-col items-center justify-center px-6 py-4 book_items'>
            <img src={book} alt="book" className='w-[100px]' />
            <div className='text-center mt-3 font-poppins'>
              <h4 className='font-semibold text-[18px]'>Hello Mallory</h4>
              <p className='text-light'><strong className='text-black'>Author:</strong> Ann M. Martin</p>
              <p className='text-light'><strong className='text-black'>Total Editions:</strong> 13</p>
              <p className='text-light'><em>First Publish Year: 1988</em></p>
            </div>
        </div>

        <div className='bg-white flex flex-col items-center justify-center px-6 py-4 book_items'>
            <img src={book} alt="book" className='w-[100px]' />
            <div className='text-center mt-3 font-poppins'>
              <h4 className='font-semibold text-[18px]'>Hello Mallory</h4>
              <p className='text-light'><strong className='text-black'>Author:</strong> Ann M. Martin</p>
              <p className='text-light'><strong className='text-black'>Total Editions:</strong> 13</p>
              <p className='text-light'><em>First Publish Year: 1988</em></p>
            </div>
        </div>

        <div className='bg-white flex flex-col items-center justify-center px-6 py-4 book_items'>
            <img src={book} alt="book" className='w-[100px]' />
            <div className='text-center mt-3 font-poppins'>
              <h4 className='font-semibold text-[18px]'>Hello Mallory</h4>
              <p className='text-light'><strong className='text-black'>Author:</strong> Ann M. Martin</p>
              <p className='text-light'><strong className='text-black'>Total Editions:</strong> 13</p>
              <p className='text-light'><em>First Publish Year: 1988</em></p>
            </div>
        </div>

        <div className='bg-white flex flex-col items-center justify-center px-6 py-4 book_items'>
            <img src={book} alt="book" className='w-[100px]' />
            <div className='text-center mt-3 font-poppins'>
              <h4 className='font-semibold text-[18px]'>Hello Mallory</h4>
              <p className='text-light'><strong className='text-black'>Author:</strong> Ann M. Martin</p>
              <p className='text-light'><strong className='text-black'>Total Editions:</strong> 13</p>
              <p className='text-light'><em>First Publish Year: 1988</em></p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Books
