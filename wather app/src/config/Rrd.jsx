import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../screens/Home'
import About  from '../screens/About'
import Contact  from '../screens/Contact'

const Rrd = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element ={<Home />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/contact' element={<Contact />}/>
   </Routes>
   </BrowserRouter>
  )
}

export default Rrd