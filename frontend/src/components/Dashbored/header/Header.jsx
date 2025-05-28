import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useUserContext } from "../../UseContext/UserContext";
import profile from "../../../assets/HomeImage.png"

export default function Header() {
    const {user,authenticated,getlogout} = useUserContext()
    const [open,setopen] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
  
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>Docusafe</div>

        <ul className={styles.list}>
          <li onClick={()=>{
            setopen(!open)
          }} className={styles.page}>
            <img className={styles.profile_img} src={user.img_path?'http://localhost:8000'+user.img_path:profile} alt="" />
            <p className={styles.user_name}>{user.name}</p>
          </li>
          
          
        </ul>

      </div>
      {open && (
          <div className={styles.dropdown}>
            {location.pathname == '/dashbored'?<p onClick={()=>{
               setopen(!open)
              navigate("/profile")             
            }}>Profile</p>:
              <p onClick={()=>{
               setopen(!open)
               navigate("/dashbored")
            }}>dashbored</p>
            }
            <p onClick={()=>{
                getlogout()
                return navigate("login")
            }}>Logout</p>
          </div>
        )}
    </div>
  );
}
