"use client";

import React, { useEffect, useState } from "react";
import styles from "./ContainerTitle.module.scss";

interface ContainerTitleType {
  title: string;
  nth: number;
}

function ContainerTitle({ title, nth }: ContainerTitleType) {
  const isOdd: boolean = nth % 2 === 1 ? true : false;
  const slideDirection = isOdd ? "slide-in-left" : "slide-in-right";
  const [showTitle, setShowTitle] = useState<boolean>(false);
  const [showUnderscore, setShowUnderscore] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight * nth) {
        setShowTitle(true);
      }

      if (window.scrollY >= window.innerHeight * nth + 30) {
        setShowUnderscore(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {showTitle && (
        <p id={styles.title} className={styles[slideDirection]}>
          {title}
        </p>
      )}

      {showUnderscore && (
        <div id={styles.underscore} className={styles[slideDirection]} />
      )}
    </div>
  );
}

export default ContainerTitle;
