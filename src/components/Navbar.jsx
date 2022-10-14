import React from 'react';
import { Link,useNavigate} from 'react-router-dom';
import { AiOutlineGlobal } from 'react-icons/ai';
import { UserAuth } from '../context/AuthContext';
import './stylesComponents/SelectLanguage.scss';

const Navbar = () => {
    const nav = useNavigate();
    const { user, logOut } = UserAuth();
            //console.log(user);

    const handleLogout = async () => {
        try {
            await logOut();
            nav('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='flex absolute items-center justify-between p-4 z-[100] w-full'>
            {user?.email ? (
                <>
                    <Link to='/home'>
                        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
                    </Link>
                    <div className='flex justify-between'>
                        <div
                            id='select'
                            className='h-[34px] px-4 mr-6 flex items-center justify-between text-white border border-white relative rounded'
                        >
                            <AiOutlineGlobal className='-ml-2' />
                            <select className='custorm-select'>
                                <option className='option-custorm' value="English">Vietnamese</option>
                                <option className='option-custorm' value="Vietnamese">English</option>
                                <option className='option-custorm' value="Japanese">Japanese</option>
                            </select>
                        </div>
                        <Link to='/account'>
                            <button className='text-white px-6 py-1 bg-slate-400 translate-y-0 rounded mr-4 border hover:bg-opacity-80'>Tài khoản</button>
                        </Link>
                        <button
                            className='bg-red-600 h-[34px] px-6 py-1 rounded cursor-pointer text-white hover:bg-opacity-80'
                            onClick={handleLogout}
                        >
                            Đăng xuất
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <Link to='/'>
                        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
                    </Link>
                    <div className='flex justify-between'>
                        <div
                            id='select'
                            className='h-[34px] px-4 mr-6 flex items-center justify-between text-white border border-white relative rounded'
                        >
                            <AiOutlineGlobal className='-ml-2' />
                            <select className='custorm-select'>
                                <option className='option-custorm' value="English">Vietnamese</option>
                                <option className='option-custorm' value="Vietnamese">English</option>
                                <option className='option-custorm' value="Japanese">Japanese</option>
                            </select>
                        </div>
                        <div>
                            <Link to='/signup'>
                                <button className='bg-red-600 px-6 h-[34px] py-1 rounded cursor-pointer text-white hover:bg-opacity-80'>Đăng ký</button>
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Navbar;