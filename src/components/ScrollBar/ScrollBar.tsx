import React, { useState, useEffect } from "react";
import styles from "./ScrollBar.module.scss";

function ScrollBar() {
  const [pageHeight, setPageHeight] = useState<number>(0);
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const [scrollTop, setScrollTop] = useState((0 / pageHeight) * 100);

  useEffect(() => {
    const handleResize = () => {
      setPageHeight(document.documentElement.scrollHeight);
      setWindowHeight(window.innerHeight);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (pageHeight && windowHeight) {
      setScrollHeight((windowHeight / pageHeight) * 100);

      const handleScroll = () => {
        setScrollTop((window.scrollY / pageHeight) * 100);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [pageHeight, windowHeight]);

  return (
    <div className={styles.component}>
      <div className={styles["scroll-div"]}>
        <div
          className={styles.scroll}
          style={{ height: `${scrollHeight}%`, top: `${scrollTop}%` }}
        />
      </div>
    </div>
  );
}

export default ScrollBar;
