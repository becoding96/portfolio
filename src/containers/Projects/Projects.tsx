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
          src="/Repomon/logo.webp"
          title="레포몬"
          des="Github 시각화 서비스"
        />
        <ProjectCard
          src="/IUJ/logo.webp"
          title="아이유정"
          des="학부모 부동산 추천 서비스"
        />
        <ProjectCard
          src="/Funteer/logo.webp"
          title="펀티어"
          des="봉사 펀딩 서비스"
        />
      </div>
    </div>
  );
}

export default Projects;
