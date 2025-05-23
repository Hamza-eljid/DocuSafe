import React, { useState } from 'react'
import './Main.css'
import Home from './Home.jsx/Home'
import About from './About/About'
import Pricing from './Pricing/Pricing'
import Contact from './Contact/Contact'
import Header from '../header/Header'




export default function Main() {
    
  return <>
  <div className="main_container" >
      <Header />
      <Home  />
      <About />
      <Pricing />
      <Contact />

  </div>
  
  
  
  </>
    
}
