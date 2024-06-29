"use client";

import React, { useState } from "react";
import useHandleScroll from "@/hooks/useHandleScroll";
import ContainerTitle from "@/components/ContainerTitle/ContainerTitle";
import styles from "./Projects.module.scss";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

function Projects({
  projectsRef,
}: {
  projectsRef: React.MutableRefObject<HTMLDivElement | null>;
}) {
  const multiplier: number = 1.8;
  const [showProjects, setShowProjects] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight * multiplier) {
      setShowProjects(true);
    }
  };

  useHandleScroll(handleScroll);

  return (
    <div id={styles.container} ref={projectsRef}>
      <ContainerTitle
        title="PROJECTS"
        multiplier={multiplier - 0.25}
        direction="slide-in-right"
      />
      <div
        id={styles.contents}
        className={showProjects ? styles.visible : styles.hidden}
      >
        <ProjectCard
          projectTitle="베코ERP"
          projectTitleEng="BecoERP"
          projectSummary="생산 및 재고 관리 솔루션"
        />
        <ProjectCard
          projectTitle="레포몬"
          projectTitleEng="Repomon"
          projectSummary="Github 레포지토리 분석 및 시각화 서비스"
        />
        <ProjectCard
          projectTitle="아이유정"
          projectTitleEng="IUJ"
          projectSummary="학부모 부동산 추천 서비스"
        />
        <ProjectCard
          projectTitle="펀티어"
          projectTitleEng="Funteer"
          projectSummary="봉사 크라우드 펀딩 서비스"
        />
        <ProjectCard
          projectTitle="냠캔디"
          projectTitleEng="YumCandy"
          projectSummary="사탕 먹고 피하기 게임"
        />
      </div>
    </div>
  );
}

export default Projects;
