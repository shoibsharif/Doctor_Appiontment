import React,{useState} from 'react'
import {assets} from "../../assets/assets_frontend/assets"
import {   FiMenu } from "react-icons/fi";
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [showMenu,setShowMenu] = useState(false)
  const [token,setToken] = useState(true)
  return (
    <div>
    <div className=' flex align-middle items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        <img className='w-44 cursor-pointer' src={assets.logo} alt="" />
        <ul className='hidden md:flex items-start font-medium gap-5'>
         <NavLink to='/'>
          <li className='py-1'>HOME</li>
          <hr  className='outline-none  h-0.5 w-3/5 m-auto hidden text-primary'/>
         </NavLink>
         <NavLink to='/Doctor'>
          <li className='py-1'>ALL DOCTOR</li>
          <hr   className=' outline-none h-0.5 w-3/5 m-auto hidden text-primary'/>
         </NavLink>
         <NavLink to='/About'>
          <li className='py-1'>ABOUT </li>
          <hr   className=' outline-none h-0.5 w-3/5 m-auto hidden text-primary'/>
         </NavLink>
         <NavLink to='/Contact'>
          <li className='py-1'>CONTACT </li>
          <hr   className=' outline-none h-0.5 w-3/5 m-auto hidden text-primary'/>
         </NavLink>
        </ul>
        <div className="flex items-center ml-20 gap-4">

        {token ? (
        <div
          className="relative flex items-center cursor-pointer gap-5 group"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img className="w-10 rounded-full" src={assets.profile_pic} alt="Profile" />
          <img className="w-4 md:w-2" src={assets.dropdown_icon} alt="Dropdown Icon" />

          {/* Dropdown */}
          <div
            className={`absolute top-14 right-0 bg-white shadow-lg rounded-lg p-3 flex flex-col z-20 transition-all duration-300 ${
              menuOpen ? "block" : "hidden"
            } group-hover:flex`}
          >
            <p onClick={() => navigate("/MyProfile")} className="px-4 py-2 hover:bg-gray-100 rounded-md">My Profile</p>
            <p onClick={() => navigate("/MyAppoitment")} className="px-4 py-2 hover:bg-gray-100 rounded-md">My Appointments</p>
            <p onClick={()=>setToken(true)} className="px-4 py-2 hover:bg-red-100 text-red-600 rounded-md cursor-pointer">
              Logout
            </p>
          </div>
        </div>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="text-white cursor-pointer bg-primary px-4 py-2 sm:px-8 sm:py-3 rounded-full font-light text-sm sm:text-base w-full sm:w-auto"
        >
          Create account
        </button>
      )}

 
</div>

        <div className=" items-center space-x-8 mr-2 md:hidden">
          <FiMenu
            className="text-xl cursor-pointer hover:text-gray-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
        </div>
        

        {isMenuOpen && (
        <div className="md:hidden bg-primary text-white p-4 w-full h-56 fixed top-0 left-0 flex flex-col items-center justify-center">
        <NavLink to="/" className="cursor-pointer mt-4 hover:text-gray-400">
          Home
        </NavLink>
        <NavLink to="/collection" className="cursor-pointer mt-4 hover:text-gray-400">
          Collection
        </NavLink>
        <NavLink to="/about" className="cursor-pointer mt-4 hover:text-gray-400">
          About Us
        </NavLink>
        <NavLink to="/contact" className="cursor-pointer mt-4 hover:text-gray-400">
          Contact Us
        </NavLink>
      </div>
      )}
    </div>
  )
}

export default Navbar