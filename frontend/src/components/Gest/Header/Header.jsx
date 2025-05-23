import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();
    let bool_loc= false
   
        if(location.pathname == '/register'){
                bool_loc=true
        }else{
             bool_loc=false
        }
  
    
    
    
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>Docusafe</div>

        <ul className={styles.list}>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
           {bool_loc? <Link to={"/login"}>login</Link>: <Link to={"/register"}>Register</Link>}
           
          </li>
          
        </ul>

      </div>
    </div>
  );
}
