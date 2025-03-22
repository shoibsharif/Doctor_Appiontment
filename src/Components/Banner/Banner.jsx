import React from 'react'
import { assets } from '../../assets/assets_frontend/assets'

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row  items-center justify-between h-auto md:h-66 rounded-lg bg-primary mt-20 p-6 md:p-10'>
        {/* Left Content */}
        <div className='text-center md:ml-10  md:text-left'>
            <h1 className='text-2xl md:text-3xl text-white font-bold py-4 md:py-13'>
                Book Appointment <br/>
                With 100+ Trusted Doctors
            </h1>
            <a href="#speciality" className="inline-block px-6 py-3 bg-white text-primary font-medium rounded-full mt-3">
                Book appointment →
            </a>
        </div>

        {/* Right Image */}
        <div className='mt-6 md:-mt-13 md:mr-10'>
            <img src={assets.appointment_img} alt="" className='w-48 md:w-72' />
        </div>
    </div>
  )
}

export default Banner
