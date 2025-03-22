import React from 'react';
import { assets } from '../assets/assets_frontend/assets';

const About = () => {
  return (
    <div className="px-6 py-8">
      <h1 className="text-3xl font-semibold text-center mb-6">About <span className='text-gray-600'>Us</span></h1>
      
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src={assets.about_image} 
            alt="About Us" 
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
        
        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <p className="text-gray-700 mb-4">
            Welcome to <strong>Prescripto</strong>, your trusted partner in managing your healthcare needs conveniently and efficiently. 
            At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
          </p>
          
          <p className="text-gray-700 mb-4">
            Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. 
            Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6">Our Vision</h2>
          <p className="text-gray-700 mt-2">
            Our vision at <strong>Prescripto</strong> is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
          </p>
        </div>
      </div>
      
      <h1 className='text-2xl my-5 text-center'>Why Choose Us</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10'>
        <div className='border border-gray-500 p-6 rounded-lg shadow-md'>
          <h1 className='text-xl font-semibold'>Efficiency:</h1>
          <p className='mt-3'>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border border-gray-500 p-6 rounded-lg shadow-md'>
          <h1 className='text-xl font-semibold'>Convenience:</h1>
          <p className='mt-3'>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border border-gray-500 p-6 rounded-lg shadow-md'>
          <h1 className='text-xl font-semibold'>Personalization:</h1>
          <p className='mt-3'>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
