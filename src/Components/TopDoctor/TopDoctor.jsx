import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../Context/AppContext'

const TopDoctor = () => {
const navigate  = useNavigate()

const { doctors} = useContext(AppContext)

  return (

    <div>
        <div className='items-center'>
            <h1 className='text-center text-3xl font-medium mt-8'>Top Doctors to Book</h1>
            <p className='text-center mt-3'>Simply browse through our extensive list of trusted doctors.</p>
        </div>
        {/* Responsive Grid Layout */}
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pt-5 gap-y-6 px-4 sm:px-0'>
            {
                doctors.slice(0,10).map((item,index)=>(
                    <div onClick={()=>navigate(`/Appiontment/${item._id }`)} key={index}>
                        <img className='mb-3 bg-blue-50 rounded-t-xl' src={item.image} alt="" />
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
            }
        </div>
    </div>
  )
}

export default TopDoctor
