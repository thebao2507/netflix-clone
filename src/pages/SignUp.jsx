import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Footer from '../components/Footer';
import {UserAuth} from '../context/AuthContext';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // eslint-disable-next-line no-unused-vars
    const {user, signUp} =  UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signUp(email, password);
            // eslint-disable-next-line no-lone-blocks
            {alert('Đăng kí thành công!')}
            navigate('/home')
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className='w-full'>
                <img 
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/b321426e-35ae-4661-b899-d63bca17648a/f2696419-dab5-4911-8df4-4f9426f09d62/VN-vi-20220926-popsignuptwoweeks-perspective_alpha_website_medium.jpg' 
                    className='hidden sm:block absolute w-full object-cover'
                    alt='/'
                />
                <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
                <div className='absolute w-full px-4 py-24 z-0'>
                    <div className='max-w-[450px] h-[550px] mx-auto bg-black/75 text-white'>
                        <div className='max-w-[320px] mx-auto pt-12'>
                            <h1 className='text-3xl font-bold'>Đăng ký</h1>
                            <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                                <input
                                    className='p-3 my-2 bg-gray-700 rounded' 
                                    type="email" 
                                    placeholder='Email' 
                                    autoComplete='email'
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input 
                                    className='p-3 my-2 bg-gray-700 rounded' 
                                    type="password" 
                                    placeholder='Password' 
                                    autoComplete='current-password'
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                                <div className='flex items-center justify-between text-sm text-gray-400'>
                                    <p><input className='mr-2' type="checkbox" />Ghi nhớ tôi</p>
                                    <p>Cần trợ giúp?</p>
                                </div>
                                <div className='mt-12'>
                                    <p className='text-base font-extralight text-gray-400'>Bạn đã có tài khoản netflix?<span className='text-base font-medium ml-2 text-white'>{' '}<Link to='/'>Đăng nhập</Link></span></p>
                                    <p className='mt-2'>Trang này được đầu tư từ Taihenz.vn.net, anh em xem ủng hộ kkkk. <span className='text-sky-600 cursor-pointer'>Chi tiết thêm</span></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default SignUp;