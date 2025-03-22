import React from 'react'
import Header from '../Components/Header/Header'
import SpecialityMenu from '../Components/SpecialityMenu/SpecialityMenu'
import TopDoctor from '../Components/TopDoctor/TopDoctor'
import Banner from '../Components/Banner/Banner'

const Home = () => {
  return (
    <div>

      <Header/>
      <SpecialityMenu/>
      <TopDoctor/>
      <Banner/>
    </div>
  )
}

export default Home