import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import Services from '../components/Services'
import Signup from '../components/Signup'
import HeroSection from '../components/HeroSection'
const Navroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HeroSection/>} />
        <Route path='/Home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Signup' element={<Signup/>}/>

    </Routes>
  )
}

export default Navroutes
