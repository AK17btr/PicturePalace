import React from 'react'

import Logo from '../movielogo.png'

import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className= 'flex border space-x-8 items-center pl-3 py-4'>
        <img className='w-[50px]' src={Logo} alt="" />

        <Link to='/' className='text-red-700 text-3xl font-bold'>Movies🏠</Link>

        <Link to='/checklist' className='text-3xl font-bold'>WatchList📃</Link>


    </div>
  )
}

export default Navbar
