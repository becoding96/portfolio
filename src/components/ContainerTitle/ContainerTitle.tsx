"use client";

import React, { useEffect, useState } from "react";
import styles from "./ContainerTitle.module.scss";

interface ContainerTitleType {
  title: string;
  multiplier: number;
  direction: "slide-in-left" | "slide-in-right";
}

function ContainerTitle({ title, multiplier, direction }: ContainerTitleType) {
  const [showTitle, setShowTitle] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight * multiplier) {
        setShowTitle(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.component}>
      <h2
        className={
          showTitle
            ? `${styles.title} ${styles[direction]}`
            : `${styles.title} ${styles.hidden}`
        }
      >
        {title}
      </h2>

      <div
        className={
          showTitle
            ? `${styles.underscore} ${styles[direction]}`
            : `${styles.underscore} ${styles.hidden}`
        }
      />
    </div>
  );
}

export default ContainerTitle;
