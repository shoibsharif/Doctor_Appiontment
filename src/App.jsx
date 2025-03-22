import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar/Navbar'
import Doctor from './Pages/Doctor'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Login from './Pages/Login'
import MyProfile from './Pages/MyProfile'
import MyAppoitment from './Pages/MyAppoitment'
import Appiontment from './Pages/Appiontment'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Doctor' element={<Doctor/>}/>
      <Route path='/Doctor/:speciality' element={<Doctor/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/MyProfile' element={<MyProfile/>}/>
      <Route path='/MyAppoitment' element={<MyAppoitment/>}/>
      <Route path='/Appiontment/:docId' element={<Appiontment/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App