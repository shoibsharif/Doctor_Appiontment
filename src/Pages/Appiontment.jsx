import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { assets } from '../assets/assets_frontend/assets';
import RelatedDoctor from '../Components/RelatedDoctor/RelatedDoctor';

const Appiontment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeeks = [ 'MON', 'TUS', 'WED', 'THU', 'FIR', 'SAT','SUN'];
  const [docInfo, setDocInfo] = useState();
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  const getAvailableSlots = async () => {
    setDocSlots([]);
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlot = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleString([], { hour: '2-digit', minute: '2-digit' });
        timeSlot.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots((prev) => [...prev, timeSlot]);
    }
  };

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  };

  useEffect(() => {
    getAvailableSlots();
  }, []);

  useEffect(() => {
    fetchDocInfo();
  }, [docId, doctors]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  return (
    docInfo && (
      <div className="px-4 sm:px-6">
        {/* Doctor Info Section */}
        <div className="p-4 flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Doctor Image */}
          <div className="w-full md:w-1/2 lg:w-1/2 flex justify-center bg-primary rounded-lg">
            <img className="w-56 h-64 sm:w-60 sm:h-80 object-cover rounded-lg" src={docInfo.image} alt={docInfo.name} />
          </div>

          {/* Doctor Details */}
          <div className="w-full md:w-3/2 bg-white p-6 border border-black rounded-lg shadow-md">
            <div className="flex items-center gap-2">
              <p className="text-xl font-semibold text-gray-700">{docInfo.name}</p>
              <img className="w-5 h-5" src={assets.verified_icon} alt="Verified" />
            </div>
            <div className="mt-2 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600 text-lg">{docInfo.degree} - {docInfo.speciality}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md text-sm">
                {docInfo.experience} Years Experience
              </button>
            </div>
            <div className="mt-4 bg-gray-100 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-gray-700 font-semibold">
                <p>About</p>
                <img className="w-4 h-4" src={assets.info_icon} alt="Info" />
              </div>
              <p className="text-gray-600 mt-2">{docInfo.about}</p>
              <p className="mt-2">
                Appointment fee: <span className="ml-2">{currencySymbol} {docInfo.fees}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Booking Slots */}
        <div className="mt-2">
          <p className="text-[22px] md:ml-72 font-semibold text-center md:text-left">Booking Slots</p>
          
          {/* Days Selector */}
          <div className="flex md:ml-72 gap-3 mt-5 overflow-x-auto no-scrollbar">
            {docSlots.length > 0 &&
              docSlots.map((item, index) => (
                <div
                  onClick={() => setSlotIndex(index)}
                  className={`text-black border-black p-4 sm:p-5 rounded-full cursor-pointer font-semibold flex-shrink-0 
                    ${slotIndex === index ? 'bg-primary text-white' : 'bg-gray-100 border border-gray-300'}`}
                  key={index}
                >
                  <p className="text-center text-sm sm:text-base">{item[0] && daysOfWeeks[item[0].datetime.getDay()]}</p>
                  <p className="text-center text-xs sm:text-sm">{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>

          {/* Time Slots */}
          <div className="mt-4">
            <div className="flex md:ml-72 overflow-x-auto items-center gap-3 no-scrollbar">
              {docSlots.length > 0 &&
                docSlots[slotIndex].map((item, index) => (
                  <p
                    onClick={() => setSlotTime(item.time)}
                    className={`p-2 sm:p-3 cursor-pointer w-28 sm:w-36 h-10 flex-shrink-0 rounded-full border text-center text-sm 
                      ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border-gray-300'}`}
                    key={index}
                  >
                    {item.time.toLowerCase()}
                  </p>
                ))}
            </div>
          </div>
        </div>

        {/* Related Doctors */}
        <RelatedDoctor docId={docId} speciality={docInfo.speciality} />
      </div>
    )
  );
};

export default Appiontment;
