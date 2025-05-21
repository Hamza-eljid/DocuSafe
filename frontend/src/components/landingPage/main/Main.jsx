import React, { useState } from 'react'
import './Main.css'
import Home from './Home.jsx/Home'
import About from './About/About'
import Pricing from './Pricing/Pricing'
import Contact from './Contact/Contact'




export default function Main() {
    
  return <>
  <div className="main_container" >
      <Home  />
      <About />
      <Pricing />
      <Contact />

  </div>
  
  
  
  </>
    
}
