"use client";

import React, { useEffect, useState, useRef } from "react";
import styles from "./Introduce.module.scss";
import ReactTypingEffect from "react-typing-effect";
import { FiArrowDown } from "react-icons/fi";
import useHandleScroll from "@/hooks/useHandleScroll";

function Introduce() {
  const [lineLength, setLineLength] = useState<number>(0);
  const introduceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLineLength(lineLength + 1);
    }, 300);

    if (lineLength === 5) {
      clearTimeout(timer);
    }
  }, [lineLength]);

  const handleScroll = () => {
    if (!introduceRef || !introduceRef.current) {
      return;
    }

    if (window.scrollY > window.innerHeight / 3) {
      introduceRef.current.style.opacity = "0";
    } else {
      introduceRef.current.style.opacity = "1";
    }
  };

  useHandleScroll(handleScroll);

  return (
    <div id={styles.lines} ref={introduceRef}>
      {lineLength >= 1 && (
        <h1 style={{ position: "relative", marginRight: "20px" }}>
          안녕하세요{" "}
          {lineLength >= 2 && (
            <span id={styles.ex} className={styles.highlight}>
              !
            </span>
          )}
        </h1>
      )}
      {lineLength >= 3 && (
        <h1>
          <span className={styles.highlight}>
            <ReactTypingEffect
              text={["프론트엔드", "ERP", "빨리 배우는", "유저 친화적인"]}
              speed={200}
              eraseSpeed={100}
              eraseDelay={1500}
              typingDelay={1000}
            />
          </span>{" "}
          개발자
        </h1>
      )}
      {lineLength >= 4 && (
        <h1>
          <span>백준봉</span>입니다.
        </h1>
      )}
    </div>
  );
}

export default Introduce;
