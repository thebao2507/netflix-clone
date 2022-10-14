import React, { useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { UserAuth } from '../context/AuthContext';

const Begin = () => {
    const nav = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    // eslint-disable-next-line no-unused-vars
    const { user, logIn } = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await logIn(email, password);
            nav('/home');
        } catch (error) {
            console.log(error);
            setError(error.message);
        }
    }

    return (
        <>
            <div className=''>
                <img
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/b321426e-35ae-4661-b899-d63bca17648a/f2696419-dab5-4911-8df4-4f9426f09d62/VN-vi-20220926-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
                    className='hidden sm:block absolute w-full'
                    alt='/'
                />
                <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
                <div className='absolute w-full px-4 pt-44 z-0'>
                    <div className=' text-white'>
                        <div className='max-w-[600px] mx-auto pt-4 text-center'>
                            <h1 className='text-5xl font-semibold m-auto'>Chương trình truyền hình, phim không giới hạn và nhiều nội dung khác.</h1>
                            <h2 className='text-3xl font-medium m-auto my-5'>Xem ở mọi nơi. Hủy bất kì lúc nào</h2>
                        </div>
                    </div>
                    <h4 className='text-center text-white text-lg font-normal'>Bạn đã sẵn sàng xem chưa? Nhập email và mật khẩu để đăng nhập vào với tư cách thành viên.</h4>
                    {error ? <p className='p-3 w-[540px] text-center m-auto bg-red-400 my-3'>{error}</p> : null}
                    <form
                        action=""
                        className='max-w-[720px] mx-auto pt-4 text-center'
                        onSubmit={handleSubmit}
                    >
                        <div className='text-left flex items-center justify-start mt-6 ml-14 max-w-[610px]'>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                className='p-4 w-full max-w-[475px] mr-1'
                                placeholder='Email address'
                            />
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                className='p-4 w-full max-w-[475px] mr-1'
                                placeholder='Password'
                            />
                            <button
                                className='bg-red-600 p-3 w-full max-w-[180px] text-white text-2xl flex justify-center items-center 
                                    transform hover:scale-125 hover:bg-opacity-80 transition ease-out duration-300'
                            >
                                Bắt đầu<AiOutlineRight className='text-2xl ml-1 translate-y-0.4' />
                            </button>
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Begin;