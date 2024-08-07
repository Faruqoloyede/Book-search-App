import React from 'react'

const Search = () => {
  return (
    <div className='flex items-center justify-center w-full py-10'>
      <input type="search" className='w-[100%] sm:w-[50%] px-2 py-3 rounded-[20px] outline-none border border-grey font-poppins text-black' placeholder='search for a book..' />
    </div>
  )
}

export default Search
