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
      let size;
      const opacity = 1 - scrollY / (window.innerHeight / 3);

      if (window.innerWidth <= 700) {
        size = Math.min(80 + (scrollY / (window.innerHeight / 3)) * 20, 100);
        circleRef.current.style.opacity = `${Math.min(0.25, opacity)}`;
      } else {
        size = Math.min(50 + (scrollY / (window.innerHeight / 3)) * 130, 180);
        circleRef.current.style.opacity = `${Math.min(0.9, opacity)}`;
      }

      circleRef.current.style.width = `${size}vmin`;
      circleRef.current.style.height = `${size}vmin`;
    });
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
