"use client";

import React, { useEffect, useState } from "react";
import styles from "./Main.module.scss";
import ReactTypingEffect from "react-typing-effect";

function Main() {
  const [lineLength, setLineLength] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLineLength(lineLength + 1);
    }, 700);

    if (lineLength === 4) {
      clearTimeout(timer);
    }
  }, [lineLength]);

  return (
    <div id={styles.container}>
      <div id={styles.lines}>
        {lineLength >= 1 && (
          <p style={{ position: "relative", marginRight: "20px" }}>
            안녕하세요{" "}
            {lineLength >= 2 && (
              <span id={styles.ex} className={styles.highlight}>
                !
              </span>
            )}
          </p>
        )}
        {lineLength >= 3 && (
          <p>
            <span className={styles.highlight}>
              <ReactTypingEffect
                text={[
                  "프론트엔드",
                  "성장하는",
                  "유저 친화적인",
                  "빨리 배우는",
                ]}
                speed={200}
                eraseSpeed={100}
                eraseDelay={1500}
                typingDelay={1000}
              />
            </span>{" "}
            개발자
          </p>
        )}
        {lineLength >= 4 && (
          <p>
            <span>백준봉</span>입니다.
          </p>
        )}
      </div>
    </div>
  );
}

export default Main;
