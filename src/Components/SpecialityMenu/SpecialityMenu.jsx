import React from 'react';
import { specialityData } from "../../assets/assets_frontend/assets";
import { Link } from 'react-router-dom';

const SpecialityMenu = () => {
  return (
    <div id='speciality'>
      <div className='items-center text-center align-middle my-4 '>
        <h1 className='text-2xl mt-10 font-semibold'>Find by Speciality </h1>
        <p className='mt-5'>
          Simply browse through our extensive list of trusted doctors, schedule
          <br /> your appointment hassle-free.
        </p>
        <div className='grid grid-cols-2 md:grid-cols-6 gap-2 mt-8'>
          {specialityData.map((item, index) => (
            <Link key={index} to={`/Doctor/${item.speciality}`} className="flex flex-col items-center">
              <img  src={item?.image} alt={item?.speciality} className="w-24 h-24 object-cover rounded-full hover:translate-y-[10px] transition-all duration-500"/>
              <p className="mt-2 font-medium">{item?.speciality}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialityMenu;
