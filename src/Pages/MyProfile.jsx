import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    email: "helo@gmail.com",
    image: assets.profile_pic,
    phone: "+92 12 345 5789",
    address: {
      line1: "57th Cross, Richmond ",
      line2: "Circle, Church Road, London",
    },
    gender: "Male",
    dob: "2003-01-20",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <div className="flex items-center gap-6 border-b pb-4">
        <img
          src={userData.image}
          alt="Profile"
          className="w-24 h-24 rounded-full border shadow-md"
        />
        <div className="flex-1">
          {isEdit ? (
            <input
              type="text"
              value={userData.name}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="w-full p-2 border rounded-md"
            />
          ) : (
            <h2 className="text-2xl font-semibold">{userData.name}</h2>
          )}
        </div>
        <button
          onClick={() => setIsEdit(!isEdit)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          {isEdit ? "Save" : "Edit"}
        </button>
      </div>

      <div className="mt-4 space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-700">CONTACT INFORMATIONS</h3>
          <div className="mt-2 text-gray-600">
            <p className="mt-10">EMAIL:
              <span className="ml-20">{userData.email}</span>
              </p>
<hr className="mt-4"/>
            <p className="mt-8">
              PHONE:
              <span className="ml-16">
              {isEdit ? (
                <input
                  type="text"
                  value={userData.phone}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  className="border p-1 rounded-md"
                />
              ) : (
                userData.phone
              )}
              </span>
             
            </p>
            <hr className="mt-4"/>
            <p className="mt-8">
              ADDRESS:
              <span className="ml-15">
              {isEdit ? (
                <div>
                  <input
                    type="text"
                    value={userData.address.line1}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        address: { ...prev.address, line1: e.target.value },
                      }))
                    }
                    className="border p-1 rounded-md block"
                  />
                  <input
                    type="text"
                    value={userData.address.line2}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        address: { ...prev.address, line2: e.target.value },
                      }))
                    }
                    className="border p-1 rounded-md mt-1 block"
                  />
                </div>
              ) : (
                <span>
                  {userData.address.line1}, {userData.address.line2}
                </span>
              )}
              </span>
            
            </p>
           
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-700">BASIC INFORMATIONS</h3>
          <div className="mt-2 text-gray-600">
            <p className="mt-8">
              
              GENDER:
              <span className="ml-20">
              {isEdit ? (
                <select
                  value={userData.gender}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, gender: e.target.value }))
                  }
                  className="border p-1 rounded-md"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              ) : (
                userData.gender
              )}
              </span>
              
            </p>
            <hr className="mt-4"/>
            <p className="mt-8">
              DATE OF BIRTH:
              <span className="ml-10">
              {isEdit ? (
                <input
                  type="date"
                  value={userData.dob}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, dob: e.target.value }))
                  }
                  className="border p-1 rounded-md"
                />
              ) : (
                userData.dob
              )}
              </span>
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
