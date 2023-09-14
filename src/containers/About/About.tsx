"use client";

import React, { useEffect, useState } from "react";
import useHandleScroll from "@/hooks/useHandleScroll";
import styles from "./About.module.scss";
import ContainerTitle from "@/components/ContainerTitle/ContainerTitle";
import Image from "next/image";

function About({
  aboutRef,
}: {
  aboutRef: React.MutableRefObject<HTMLDivElement | null>;
}) {
  const [showContents, setShowContents] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight) {
      setShowContents(true);
    }
  };

  useHandleScroll(handleScroll);

  return (
    <div id={styles.container} ref={aboutRef}>
      <ContainerTitle
        title="ABOUT"
        multiplier={0.75}
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
          <div id={styles["i-am"]}>
            <h3 className={styles.category}>I am</h3>
            <h4>
              안녕하세요. <span>프론트엔드 개발자 백준봉</span>
              입니다.
            </h4>
            <p className={styles["margin-bottom"]}>
              <span>꾸준한 성장</span>을 중요시하며,{" "}
              <span>기술 스택의 특징</span>에 집중합니다.
            </p>
          </div>
          <div>
            <h3>Skills</h3>
            <div id={styles["span-div"]} className={styles["margin-bottom"]}>
              <span>React</span>
              <span>Next.js</span>
              <span>Redux</span>
              <span>TypeScript</span>
              <span>SCSS</span>
              <span>Python</span>
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
