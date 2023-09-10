"use client";

import React, { useState } from "react";
import useHandleScroll from "@/hooks/useHandleScroll";
import ContainerTitle from "@/components/ContainerTitle/ContainerTitle";
import styles from "./Projects.module.scss";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

function Projects() {
  const multiplier: number = 1.7;
  const [showProjects, setShowProjects] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight * multiplier + 100) {
      setShowProjects(true);
    }
  };

  useHandleScroll(handleScroll);

  return (
    <div id={styles.container}>
      <ContainerTitle
        title="PROJECTS"
        multiplier={multiplier}
        direction="slide-in-right"
      />
      <div
        id={styles.contents}
        className={showProjects ? styles.visible : styles.hidden}
      >
        <ProjectCard
          projectTitle="레포몬"
          projectTitleEng="Repomon"
          projectDes="Github 레포지토리 분석 및 시각화 서비스"
          projectDes2="삼성 청년 SW 아카데미 자율 프로젝트 (우수상 - 2등)"
          projectImageLength={10}
          projectPeriod="2023.04.10 ~ 2023.05.19"
          projectTechStack={[
            "Next.js",
            "React",
            "TypeScript",
            "SCSS",
            "Git",
            "Figma",
            "Jira",
          ]}
        />
        <ProjectCard
          projectTitle="아이유정"
          projectTitleEng="IUJ"
          projectDes="학부모 부동산 추천 서비스"
          projectDes2="삼성 청년 SW 아카데미 특화 프로젝트"
          projectImageLength={4}
          projectPeriod="2023.02.20 ~ 2023.04.07"
          projectTechStack={[
            "React",
            "Vite",
            "Kakao Map API",
            "TypeScript",
            "SCSS",
            "Git",
            "Figma",
            "Jira",
          ]}
        />
        <ProjectCard
          projectTitle="펀티어"
          projectTitleEng="Funteer"
          projectDes="봉사 크라우드 펀딩 서비스"
          projectDes2="삼성 청년 SW 아카데미 공통 프로젝트"
          projectImageLength={1}
          projectPeriod="2023.01.03 ~ 2023.02.17"
          projectTechStack={[
            "React",
            "TypeScript",
            "SCSS",
            "Git",
            "Figma",
            "Jira",
          ]}
        />
      </div>
    </div>
  );
}

export default Projects;
