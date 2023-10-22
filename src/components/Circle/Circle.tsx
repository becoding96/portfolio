"use client";

import React, { useRef } from "react";
import styles from "./Circle.module.scss";
import useHandleScroll from "@/hooks/useHandleScroll";

function Circle() {
  const circleRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!circleRef || !circleRef.current) {
      return;
    }

    if (window.scrollY > window.innerHeight / 3) {
      circleRef.current.style.opacity = "0";
    } else {
      circleRef.current.style.opacity =
        window.innerWidth <= 700 ? "0.25" : "0.9";
    }
  };

  useHandleScroll(handleScroll);

  return (
    <div className={styles.circles} id={styles.circles} ref={circleRef}>
      <div className={styles.circle} />
      <div className={styles.circle} />
      <div className={styles.circle} />
      <div className={styles.circle} />
    </div>
  );
}

export default Circle;
