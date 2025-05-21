import React from "react";
import HomeImage from "../../../../assets/HomeImage.png";
import styles from "./Home.module.css";
export default function Home() {
  return (
    <div  className={styles.home}>
      <div className={styles.container}>
        <div className={styles.info}>
          <p>Never forget a document again we’ve got your back</p>
          <button>Start Now</button>
        </div>
        <div className={styles.image}>
          <img src={HomeImage} alt="" />
        </div>
      </div>
    </div>
  );
}
