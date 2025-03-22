import React from 'react';
import { assets } from '../assets/assets_frontend/assets';

const Contact = () => {
  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-semibold text-center mb-6">Contact <span className="text-gray-600">Us</span></h1>

      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="w-full md:w-['600px'] flex justify-center">
          <img
            src={assets.contact_image}
            alt="Contact Us"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>

        {/* Contact Info Section */}
        <div className="w-full md:w-1/2p-6  ml-15">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Office</h2>
          <p className="text-gray-600">54709 Willms Station</p>
          <p className="text-gray-600">Suite 350, Washington, USA</p>
          <p className="text-gray-600 mt-10">Tel: (415) 555‑0132</p>
          <p className="text-gray-600">Email: greatstackdev@gmail.com</p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6">Careers at <span className="text-blue-500">Prescripto</span></h2>
          <p className="text-gray-600 mt-2">Learn more about our teams and job openings.</p>

          <button className="mt-7 px-6 border border-black py-2 h-15 w-40  text-black shadow-md hover:bg-black hover:text-white transition-all">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
