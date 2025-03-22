import React from 'react'
import { assets } from '../../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='mt-15 flex flex-col md:flex-row gap-10 md:gap-20 p-6 md:p-12 bg-gray-100'>
        {/* Left Section */}
        <div className='md:w-1/3 text-center md:text-left'>
            <img src={assets.logo} alt="" className='w-32 md:w-48 mb-4 mx-auto md:mx-0' />
            <p className='text-sm text-gray-600'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
        </div>

        {/* Middle Section - Company Links */}
        <div className='md:w-1/3 text-center md:text-left'>
            <h1 className='text-xl font-semibold mb-3'>COMPANY</h1>
            <ul className='space-y-2 text-gray-700'>
                <li className='cursor-pointer hover:text-primary'>Home</li>
                <li className='cursor-pointer hover:text-primary'>About Us</li>
                <li className='cursor-pointer hover:text-primary'>Contact Us</li>
                <li className='cursor-pointer hover:text-primary'>Privacy Policy</li>
            </ul>
        </div>

        {/* Right Section - Contact Info */}
        <div className='md:w-1/3 text-center md:text-left'>
            <h1 className='text-xl font-semibold mb-3'>GET IN TOUCH</h1>
            <p className='text-gray-700'>+1-212-456-7890</p>
            <p className='text-gray-700'>shbshaif@gmail.com</p>
        </div>
    </div>
  )
}

export default Footer
