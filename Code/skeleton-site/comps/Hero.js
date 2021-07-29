import React from "react";
import styles from "../styles/Hero.module.css";
export default function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>I am John Doe</h1>
          <h2 className={styles.title}>title</h2>
          <p>And I'm a Photographer</p>
          <button className={styles.heroBtn}>Hire me</button>
        </div>

        <div className={styles.heroText}></div>
      </div>
    </>
  );
}
