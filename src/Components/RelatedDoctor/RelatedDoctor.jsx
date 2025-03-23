import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../Context/AppContext';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
const RelatedDoctor = ({ speciality, docId }) => {
    const { doctors } = useContext(AppContext);
    const navigate = useNavigate();
    const [relDoc, setRelDoc] = useState([]);

    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId);
            setRelDoc(doctorsData);
        }
    }, [doctors, speciality, docId]);

    return (
        <div className='my-20 px-4'>
            <h1 className='text-3xl font-bold text-center'>Related Doctors</h1>
            <p className='font-normal text-center text-gray-600'>Simply browse through our extensive list of trusted doctors.</p>
            
            <div className='w-full mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
                {relDoc.slice(0, 5).map((item, index) => (
                    <div 
                        key={index} 
                        onClick={() => { navigate(`/Appiontment/${item._id}`); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                        className="bg-white shadow-md rounded-xl overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105"
                    >
                        <img 
                            className='w-full aspect-[4/3] object-cover' 
                            src={item.image} 
                            alt={item.name} 
                        />
                        <div className='p-4'>
                            <div className='flex items-center gap-2 text-sm text-green-500'>
                                <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                                <p>Available</p>
                            </div>
                            <p className='text-gray-700 text-lg font-semibold mt-1'>{item.name}</p>
                            <p className='text-gray-500 text-sm'>{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RelatedDoctor;
