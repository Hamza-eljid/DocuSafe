import React from "react";
import Saftyicon from "../../../../assets/saftyicon.png";
import styles from "./About.module.css"
export default function About() {
  return (
    <>
      <div  id="about"  className={styles.container}>
        <div className={styles.card_container}>
          <div className={styles.card}>
            <div className={styles.img_container}>
              <img className={styles.img_safty} src={Saftyicon} alt="" />
            </div>
            <h3 className={styles.title}>Safty</h3>
            <p className={styles.card_info}>
              Our service is fast, secure, and designed to protect your
              sensitive documents at every step
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.img_container}>
              <img className={styles.img_safty} src={Saftyicon} alt="" />
            </div>
            <h3 className={styles.title}>Accessible</h3>
            <p className={styles.card_info}>
              Your documents are always easily accessible, whenever and wherever
              you need them.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.img_container}>
              <img className={styles.img_safty}  src={Saftyicon} alt="" />
            </div>
            <h3 className={styles.title}>Reminder</h3>
            <p className={styles.card_info}>
              You’ll receive timely reminders, so you never miss an important
              document deadline.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
