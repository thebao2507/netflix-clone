import React from 'react';
import { AiOutlineRight } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Begin = () => {
    return (
        <>
            <img
                src='https://assets.nflxext.com/ffe/siteui/vlv3/b321426e-35ae-4661-b899-d63bca17648a/f2696419-dab5-4911-8df4-4f9426f09d62/VN-vi-20220926-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
                className='hidden sm:block absolute w-full object-cover'
                alt='/'
            />
            <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
            <div className='absolute w-full px-4 pt-44 z-0'>
                <div className=' text-white'>
                    <div className='max-w-[475px] mx-auto pt-4 text-center'>
                        <h1 className='text-5xl font-semibold m-auto'>Unlimited movies, TV shows, and more.</h1>
                        <h2 className='text-3xl font-medium m-auto my-5'>Watch anywhere. Cancel anytime</h2>
                    </div>
                </div>
                <form action="" className='max-w-[720px] mx-auto pt-4 text-center'>
                    <h4 className='text-center text-white text-lg font-normal'>Ready to watch? Enter your email to create or restart your membership.</h4>
                    <div className='text-left flex items-center justify-start mt-6 ml-14 max-w-[610px]'>
                        <input
                            type="email"
                            className='p-4 w-full max-w-[475px] mr-1'
                            placeholder='Email address'
                        />
                        <input
                            type="password"
                            className='p-4 w-full max-w-[475px] mr-1'
                            placeholder='Password'
                        />
                        <Link to='/home'>
                            <button
                                className='bg-red-600 p-3 w-full max-w-[180px] text-white text-2xl flex justify-center items-center 
                                    transform hover:scale-125 hover:bg-opacity-80 transition ease-out duration-300'
                            >
                                Started<AiOutlineRight className='text-2xl ml-1 translate-y-0.4' />
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Begin;