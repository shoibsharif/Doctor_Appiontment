import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

const Doctor = () => {
  const { speciality } = useParams();
  const Navigate = useNavigate();
  const { doctors = [] } = useContext(AppContext);

  const [filterdoc, setFilterDoc] = useState([]);

  const applyFilter = () => {
    if (doctors.length > 0) {
      if (speciality) {
        setFilterDoc(doctors.filter(doc => doc.speciality.toLowerCase() === speciality.toLowerCase()));
      } else {
        setFilterDoc(doctors);
      }
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div className='flex flex-col md:flex-row p-4'>
      <div className='md:w-1/4 w-full mb-4 md:mb-0'>
        <p onClick={() => speciality === 'General Physician' ? Navigate('/Doctor') : Navigate("/Doctor/General Physician")} className={`border py-1 px-6 w-full md:w-40 flex text-[13px] rounded-lg cursor-pointer border-gray-300 ${speciality === 'General Physician' ? "bg-indigo-100 text-black" : ""}`}>General Physician</p>
        <p onClick={() => speciality === 'Dermatologist' ? Navigate('/Doctor') : Navigate("/Doctor/Dermatologist")} className={`border py-1 px-6 w-full md:w-40 flex text-[13px] rounded-lg cursor-pointer border-gray-300 mt-3 ${speciality === 'Dermatologist' ? "bg-indigo-100 text-black" : ""}`}>Dermatologist</p>
        <p onClick={() => speciality === 'Pediatricians' ? Navigate('/Doctor') : Navigate("/Doctor/Pediatricians")} className={`border py-1 px-6 w-full md:w-40 flex text-[13px] rounded-lg cursor-pointer border-gray-300 mt-3 ${speciality === 'Pediatricians' ? "bg-indigo-100 text-black" : ""}`}>Pediatricians</p>
        <p onClick={() => speciality === 'Neurologist' ? Navigate('/Doctor') : Navigate("/Doctor/Neurologist")} className={`border py-1 px-6 w-full md:w-40 flex text-[13px] rounded-lg cursor-pointer border-gray-300 mt-3 ${speciality === 'Neurologist' ? "bg-indigo-100 text-black" : ""}`}>Neurologist</p>
        <p onClick={() => speciality === 'Gastroenterologist' ? Navigate('/Doctor') : Navigate("/Doctor/Gastroenterologist")} className={`border py-1 px-6 w-full md:w-40 flex text-[13px] rounded-lg cursor-pointer border-gray-300 mt-3 ${speciality === 'Gastroenterologist' ? "bg-indigo-100 text-black" : ""}`}>Gastroenterologist</p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full'>
        {filterdoc.length > 0 ? (
          filterdoc.map((item) => (
            <div onClick={() => Navigate(`/Appiontment/${item._id}`)} key={item._id || item.name} className='cursor-pointer'>
              <img className='mb-3 bg-blue-50 rounded-t-xl w-full' src={item.image} alt={item.name} />
              <div>
                <div className='flex items-center gap-2 text-start text-sm text-green-500'>
                  <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                  <p>Available</p>
                </div>
                <p className='text-gray-500 text-lg font-medium'>{item.name}</p>
                <p className='text-gray-500 text-lg font-sm'>{item.speciality}</p>
              </div>
            </div>
          ))
        ) : (
          <p className='text-center text-gray-500 col-span-full'>No doctors found.</p>
        )}
      </div>
    </div>
  );
};

export default Doctor;
