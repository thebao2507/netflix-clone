import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineGlobal, AiFillCaretDown } from 'react-icons/ai'

const Navbar = () => {
    return (
        <div className='flex fixed items-center justify-between p-4 z-[100] w-full'>
            <Link to='/'>
                <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
            </Link>
            <div>
                <button className='text-white px-6 py-1 translate-y-0.5 rounded mr-4 border'>
                    <div className='flex items-center justify-between '>
                        <AiOutlineGlobal className='-ml-5'/>
                        English
                        <AiFillCaretDown className='ml-4 -mr-4'/>
                    </div>
                </button>
                <Link to='/signup'>
                    <button className='bg-red-600 px-6 py-1 rounded cursor-pointer text-white'>Sign Up</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;