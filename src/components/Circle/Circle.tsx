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

    const scrollY = window.scrollY;
    const size = Math.min(50 + (scrollY / (window.innerHeight / 3)) * 30, 80);
    const opacity = 1 - scrollY / (window.innerHeight / 3);

    if (window.innerWidth <= 700) {
      circleRef.current.style.opacity = `${Math.min(0.25, opacity)}`;
    } else {
      circleRef.current.style.width = `${size}vmin`;
      circleRef.current.style.height = `${size}vmin`;
      circleRef.current.style.opacity = `${Math.min(0.9, opacity)}`;
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
