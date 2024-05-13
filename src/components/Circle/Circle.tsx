"use client";

import React, { useEffect, useRef } from "react";
import styles from "./Circle.module.scss";
import useHandleScroll from "@/hooks/useHandleScroll";

function Circle() {
  const circleRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    requestAnimationFrame(() => {
      if (!circleRef || !circleRef.current) {
        return;
      }

      const scrollY = window.scrollY;
      const size = Math.min(
        50 + (scrollY / (window.innerHeight / 3)) * 60,
        110
      );
      const opacity = 0.7 - scrollY / (window.innerHeight / 4);

      circleRef.current.style.width = `${size}vmin`;
      circleRef.current.style.height = `${size}vmin`;

      if (window.scrollY > window.innerHeight / 3) {
        circleRef.current.style.opacity = "0";
      } else {
        circleRef.current.style.opacity = `${Math.min(0.7, opacity)}`;
      }
    });
  };

  useHandleScroll(handleScroll);

  return (
    <div className={styles.circles} id={styles.circles} ref={circleRef}>
      <div className={styles.background} />
      <div className={styles.circle} />
      <div className={styles.circle} />
      <div className={styles.circle} />
      <div className={styles.circle} />
    </div>
  );
}

export default Circle;
