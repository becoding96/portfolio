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
  const [showUnderscore, setShowUnderscore] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight * multiplier) {
        setShowTitle(true);
      }

      if (window.scrollY >= window.innerHeight * multiplier + 30) {
        setShowUnderscore(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id={styles.component}>
      <h2
        id={styles.title}
        className={showTitle ? styles[direction] : styles.hidden}
      >
        {title}
      </h2>

      <div
        id={styles.underscore}
        className={showUnderscore ? styles[direction] : styles.hidden}
      />
    </div>
  );
}

export default ContainerTitle;
