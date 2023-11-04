import React from 'react'
import { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiFillTag} from 'react-icons/ai'
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'
const Navbar = () => {

  const [show, setShow] = useState(false)

  const toggle = () => {
    setShow(prevShow => !prevShow)
  }

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        {/* Left Side */}
        <div className='flex items-center'>
            <div className='cursor-pointer'>
                <AiOutlineMenu onClick={toggle} size={30} />
            </div>
            {/* className='w-[30px] h-[30px] sm:w-[36px] sm:h-[36px] lg:w-[42px] lg:h-[42px]' */}
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Best <span className='font-bold'>Eats</span></h1>
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                <p className='p-2'>Pickup</p>
            </div>
        </div>
        {/* Search Input */}
        <div className='bg-gray-200 rounded-full px-2 flex items-center w-[200px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={20}/>
            <input className='bg-transparent p-2 focus:outline-none w-full' type="text" placeholder='Search foods'/>
        </div>
        {/* Cart */}
        
        <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
            <BsFillCartFill size={20} className='mr-2'/> Cart
        </button>


        {/* Mobile Only */}
        {/* Overlay */}
        {show ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0 duration-300'></div>: ''}

        
        {/* Side Drawer Menu */}

        <div className={show ? 'fixed left-0 top-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed left-[-100%] top-0 w-[300px] h-screen bg-white z-10 '}>
            <AiOutlineClose onClick={toggle} size={30} className='absolute top-4 right-4 cursor-pointer'/>
            <h2 className='text-2xl p-4'>
                Best <span className='font-bold'>Eats</span>
            </h2>
            <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                    <li className='text-xl py-4 flex items-center'>
                        <TbTruckDelivery size={25} className='mr-4'/> 
                        Orders
                    </li>
                    <li className='text-xl py-4 flex items-center'>
                        <MdFavorite size={25} className='mr-4'/> 
                        Favorites
                    </li>
                    <li className='text-xl py-4 flex items-center'>
                        <FaWallet size={25} className='mr-4'/> 
                        Wallet
                    </li>
                    <li className='text-xl py-4 flex items-center'>
                        <MdHelp size={25} className='mr-4'/> 
                        Help
                    </li>
                    <li className='text-xl py-4 flex items-center'>
                        <AiFillTag size={25} className='mr-4'/> 
                        Promotions
                    </li>
                    <li className='text-xl py-4 flex items-center'>
                        <BsFillSaveFill size={25} className='mr-4'/> 
                        Best Ones
                    </li>
                    <li className='text-xl py-4 flex items-center'>
                        <FaUserFriends size={25} className='mr-4'/> 
                        Invite Friends
                    </li>
                </ul>
            </nav>
        </div>  
    </div>
  )
}
export default Navbar


        