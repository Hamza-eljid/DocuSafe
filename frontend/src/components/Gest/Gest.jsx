import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from './Header/Header'


export default function Gest() {
  const navigate =useNavigate()
  useEffect(() => {
      console.log(localStorage.getItem("authentificated"));
  
      if (
        localStorage.getItem("authentificated") == "true"  
        
      ) {
        return navigate("/dashbored");
      }
    }, []);
  return <>
  
  <Header />
  <Outlet />



  </>
   
  
}
