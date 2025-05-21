import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>Docusafe</div>

        <ul className={styles.list}>
          <li>
            <a href="#home">Home</a>{" "}
          </li>
          <li>
            <a href="#about">About</a>{" "}
          </li>
          <li>
            <a href="#pricing">pricing</a>{" "}
          </li>
          <li>
            {" "}
            <a id="home" href="#form">Contact</a>{" "}
          </li>
        </ul>

        <input type="checkbox" className={styles.burgerCheckBox} id="burger" />
        <label htmlFor="burger" className={styles.burger}>
          <div></div>
          <div></div>
          <div></div>
        </label>
        <label htmlFor="burger" className={styles.burger_menu_overlay}></label>
        <div className={styles.burger_menu}>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Pricing</a>
          <a href="">Contact</a>
        </div>
      </div>
    </div>
  );
}
