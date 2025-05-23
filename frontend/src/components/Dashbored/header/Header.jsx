import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useUserContext } from "../../UseContext/UserContext";
import profile from "../../../assets/HomeImage.png"

export default function Header() {
    const {user,authenticated} = useUserContext()
  
  
    console.log(authenticated)
    console.log(user);
    
    
    
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>Docusafe</div>

        <ul className={styles.list}>
          <li className={styles.page}>
            <img className={styles.profile_img} src={user.img_path?user.img_path:profile} alt="" />
            <p className={styles.user_name}>{user.name}</p>
          </li>
          
        </ul>

      </div>
    </div>
  );
}
