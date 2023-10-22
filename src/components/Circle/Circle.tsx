import React from "react";
import styles from "./Circle.module.scss";

function Circle() {
  return (
    <div className={styles.circles} id={styles.circles}>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
    </div>
  );
}

export default Circle;
