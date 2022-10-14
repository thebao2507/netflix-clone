import React from 'react';
import { AiOutlineGlobal } from 'react-icons/ai'

const Footer = () => {
    return (

        <div className='w-full bg-black text-neutral-500 translate-y-64 h-64 bottom-0 absolute border-t-4 border-gray-600'>
            <div className='px-44 py-8'>
                <h4 className='text-base'>Bạn có câu hỏi? Liên hệ với chúng tôi.</h4>
                <ul className='text-sm mt-8'>
                    <li className='inline-block mb-4 min-w-[100px] w-1/4'><a href="ss">Câu hỏi thường gặp</a></li>
                    <li className='inline-block mb-4 min-w-[100px] w-1/4'><a href="ss">Trung tâm trợ giúp</a></li>
                    <li className='inline-block mb-4 min-w-[100px] w-1/4'><a href="ss">Tài khoản</a></li>
                    <li className='inline-block mb-4 min-w-[100px] w-1/4'><a href="ss">Trung tâm đa phương tiện</a></li>
                    <li className='inline-block mb-4 min-w-[100px] w-1/4'><a href="ss">Quan hệ với nhà đầu tư</a></li>
                    <li className='inline-block mb-4 min-w-[100px] w-1/4'><a href="ss">Việc làm</a></li>
                    <li className='inline-block mb-4 min-w-[100px] w-1/4'><a href="ss">Các cách xem</a></li>
                    <li className='inline-block mb-4 min-w-[100px] w-1/4'><a href="ss">Điều khoản sử dụng</a></li>
                    <li className='inline-block mb-4 min-w-[100px] w-1/4'><a href="ss">Quyền riêng tư</a></li>
                    <li className='inline-block mb-4 min-w-[100px] w-1/4'><a href="ss">Tùy chọn cookie</a></li>
                    <li className='inline-block mb-4 min-w-[100px] w-1/4'><a href="ss">Thông tin doanh nghiệp</a></li>
                    <li className='inline-block mb-4 min-w-[100px] w-1/4'><a href="ss">Liên hệ với chúng tôi</a></li>
                    <li className='inline-block mb-4 min-w-[100px] w-1/4'><a href="ss">Kiểm tra tốc độ</a></li>
                    <li className='inline-block mb-4 min-w-[100px] w-1/4'><a href="ss">Thông báo pháp lý</a></li>
                    <li className='inline-block mb-4 min-w-[100px] w-1/4'><a href="ss">Chỉ có trên Netflix</a></li>
                </ul>
                <div className='flex justify-start items-center'>
                    <h4 className='text-base mr-2'>Taihen.vn.net</h4>
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
                </div>
            </div>
        </div>

    )
}

export default Footer;