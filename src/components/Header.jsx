import React from 'react';
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav className='flex items-center justify-between bg-white w-full h-[60px] py-6 px-6 sm:px-16'>
      <a href="" className='flex items-center'>
        {/* <img src={logo} alt="logo" className='w-[120px]' /> */}
        <span className='font-bold font-poppins text-purple'>E-library</span>
      </a>
        <ul className='list-none flex items-center'>
            <li className='mr-4 font-poppins font-normal text-[16px] text-black'>
                <Link to= "/">Home</Link>
            </li>
            <li>
                <Link to= "about">About</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Header
