"use client";

import React, { useEffect, useState } from "react";
import styles from "./About.module.scss";
import ContainerTitle from "@/components/ContainerTitle/ContainerTitle";
import Image from "next/image";

function About() {
  const [showContents, setShowContents] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        setShowContents(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id={styles.container}>
      <ContainerTitle
        title="ABOUT"
        multiplier={0.9}
        direction="slide-in-left"
      />
      <div
        id={styles.contents}
        className={showContents ? styles.visible : styles.hidden}
      >
        <Image
          id={styles["profile-image"]}
          src="/profile.webp"
          quality={100}
          width={400}
          height={400}
          alt="프로필 이미지"
        />
        <div id={styles["profile-text"]}>
          <div>
            <h3 className={styles.category}>I am</h3>
            <p>
              안녕하세요.{" "}
              <span className={styles.bold}>프론트엔드 개발자 백준봉</span>
              입니다.
            </p>
            <p className={styles["margin-bottom"]}>
              <span className={styles.bold}>꾸준한 성장</span>을 중요시하며,{" "}
              <span className={styles.bold}>기술 스택의 사용 근거</span>에
              집중합니다.
            </p>
          </div>
          <div>
            <h3>Skills</h3>
            <div id={styles["span-div"]} className={styles["margin-bottom"]}>
              <span>React</span>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>SCSS</span>
              <span>Git</span>
              <span>Figma</span>
              <span>Jira</span>
            </div>
          </div>
          <div>
            <h3>Career</h3>
            <li>2022.07 ~ 2023.06 삼성 청년 SW 아카데미 8기</li>
            <li>2015.03 ~ 2022.02 부경대학교 통계학과</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
