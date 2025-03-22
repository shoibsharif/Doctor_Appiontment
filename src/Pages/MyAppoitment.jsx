import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const MyAppointment = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">My Appointments</h2>
      <div className="space-y-4">
        {doctors.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center bg-gray-50 p-4 rounded-lg shadow-sm border"
          >
            <div className="w-24 h-24 flex-shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover rounded-full border"
              />
            </div>
            <div className="flex-1 ml-4 text-center md:text-left">
              <p className="text-lg font-semibold text-gray-700">{item.name}</p>
              <p className="text-gray-600">{item.speciality}</p>
              <p className="text-gray-500 mt-1">Address:</p>
              <p className="text-gray-600">{item.address.line1}</p>
              <p className="text-gray-600">{item.address.line2}</p>
              <p className="text-gray-600 mt-1">
                <span className="font-semibold">Date & Time:</span> July 25, 2024 | 8:30 PM
              </p>
            </div>
            <div className="flex flex-col gap-2 mt-4 md:mt-0">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                Pay Online
              </button>
              <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointment;