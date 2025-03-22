import React from "react";
import { assets } from "../../assets/assets_frontend/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row bg-primary rounded-lg md:pl-14 items-center">
      {/* Left Side */}
      <div className="md:w-1/2 text-center md:text-left">
        <p className="mt-10 md:mt-15  text-white font-medium text-3xl md:text-4xl">
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className="flex flex-col sm:flex-row items-center mb-10 md:mb-9 mt-5">
          <img src={assets.group_profiles} alt="" className=" h-13  md:h-13" />
          <p className="ml-3 text-white text-sm md:text-base mt-2 md:mt-0">
            Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
          </p>
        </div>
        <a href="#speciality" className="  px-6 py-3 bg-white text-primary font-medium rounded-full">
          Book appointment →
        </a>
      </div>

      {/* Right Side - Image Below on Mobile */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-10 pr-5">
        <img src={assets.header_img} alt="" className="w-full max-w-xs sm:max-w-md md:max-w-lg " />
      </div>
    </div>
  );
};

export default Header;
