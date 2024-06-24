import React from 'react'
import Search from './Search'

const Hero = () => {
  return (
    <div className='min-h-[75vh] px-6 sm:px-16 py-16 sm:py-[150px] hero'>
      <div className="flex flex-col items-center">
        <h1 className='text-[30px] sm:text-6xl text-grey mb-5 text-center font-poppins font-medium'>Find Your Book Of Choice</h1>
        <p className='text-center text-grey font-poppins'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque, enim tempore dolores aliquam rem! Ipsa necessitatibus minima ducimus exercitationem optio ipsam rerum sequi eius, tenetur beatae. Repellat dolorem ipsam necessitatibus mollitia? Impedit odio magni repellendus similique magnam provident minus. </p>
      </div>
      <div className='flex items-center justify-center pt-16'>
        <Search />
      </div>
    </div>
  )
}

export default Hero
