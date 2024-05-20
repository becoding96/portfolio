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
  const [showImage, setShowImage] = useState(false);
  const [showIAmDiv, setShowIAmDiv] = useState(false);
  const [showSkillsDiv, setShowSkillsDiv] = useState(false);
  const [showCareerDiv, setShowCareerDiv] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight) {
      setShowImage(true);

      setTimeout(() => {
        setShowIAmDiv(true);
      }, 150);

      setTimeout(() => {
        setShowSkillsDiv(true);
      }, 300);

      setTimeout(() => {
        setShowCareerDiv(true);
      }, 450);
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
      <div id={styles.contents}>
        <div className={styles["profile-container"]}>
          <div
            id={styles["profile-div"]}
            className={showImage ? styles["slide-in-left"] : styles.hidden}
          >
            <Image
              id={styles["profile-image"]}
              className={showImage ? styles["slide-in-left"] : styles.hidden}
              src="/profile2.webp"
              width={160}
              height={200}
              quality={100}
              alt="프로필 이미지"
            />
            <div className={styles["profile-shadow"]} />
          </div>
          <div
            id={styles["i-am"]}
            className={showIAmDiv ? styles["slide-in-left"] : styles.hidden}
          >
            {/* <p className={styles.subheading}>I am</p> */}
            <h4>
              안녕하세요. <span>프론트엔드 개발자 백준봉</span>
              입니다.
            </h4>
            <p>
              <span>개발과 배움에 대해 즐거움</span>을 느끼며
            </p>
            <p>
              <span>빠른 학습 속도</span>에 자신이 있습니다.
            </p>
          </div>
        </div>

        <div id={styles["profile-text"]}>
          <div
            className={showSkillsDiv ? styles["slide-in-right"] : styles.hidden}
          >
            <p className={styles.subheading}>Skills</p>
            <div id={styles["span-div"]} className={styles["margin-bottom"]}>
              <span>React</span>
              <span>Next.js</span>
              <span>Redux</span>
              <span>TypeScript</span>
              <span>SCSS</span>
              <span>MS-SQL</span>
              <span>Python</span>
              <span>Git</span>
              <span>Figma</span>
              <span>Jira</span>
            </div>
          </div>
          <div
            className={showCareerDiv ? styles["slide-in-right"] : styles.hidden}
          >
            <p className={styles.subheading}>Career</p>
            <li>
              <span className={styles["career-period"]}>
                <div>
                  <span>24.01</span>
                  <span>~</span>
                  <span>재직중</span>
                </div>
              </span>
              <span>(주)케이엔아이씨 - ERP 개발</span>
            </li>
            <li>
              <span className={styles["career-period"]}>
                <div>
                  <span>22.07</span>
                  <span>~</span>
                  <span>23.06</span>
                </div>
              </span>
              <span>삼성 청년 SW 아카데미 8기</span>
            </li>
            <li className={styles["margin-bottom"]}>
              <span className={styles["career-period"]}>
                <div>
                  <span>15.03</span>
                  <span>~</span>
                  <span>22.02</span>
                </div>
              </span>
              <span>부경대학교 통계학과</span>
            </li>
          </div>
          <div
            className={showCareerDiv ? styles["slide-in-right"] : styles.hidden}
          >
            <p className={styles.subheading}>Certificates</p>
            <li>정보처리기사 (21.06)</li>
            <li>SQLD (24.04)</li>
            <li>컴퓨터 활용능력 1급 (20.03)</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
