import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<>
			<div className='w-full h-screen'>
				<img
					src='https://assets.nflxext.com/ffe/siteui/vlv3/b321426e-35ae-4661-b899-d63bca17648a/f2696419-dab5-4911-8df4-4f9426f09d62/VN-vi-20220926-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
					className='hidden sm:block absolute w-full h-full object-cover'
					alt='/'
				/>
				<div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
				<div className='fixed w-full px-4 py-24 z-0'>
					<div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
						<div className='max-w-[320px] mx-auto py-16'>
							<h1 className='text-3xl font-bold'>Sign In</h1>
							<form className='w-full flex flex-col py-4'>
								<input className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='Email' autoComplete='email' />
								<input className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='Password' autoComplete='current-password' />
								<button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
								<div className='flex items-center justify-between text-sm text-gray-400'>
									<p><input className='mr-2' type="checkbox" />Remember me</p>
									<p>Need help?</p>
								</div>
								<div className='mt-12'>
									<p className='text-base font-extralight text-gray-400'>New to netflix?<span className='text-base font-medium ml-2 text-white'>{' '}<Link to='/signup'>Sign up</Link></span></p>
									<p className='mt-2'>this pages is protected by hentai.z so don't be afraid of anyone. <span className='text-sky-600'>Learn more</span></p>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Login;