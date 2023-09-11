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
  const multiplier: number = 1.65;
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
        multiplier={multiplier - 0.3}
        direction="slide-in-right"
      />
      <div
        id={styles.contents}
        className={showProjects ? styles.visible : styles.hidden}
      >
        <ProjectCard
          projectTitle="레포몬"
          projectTitleEng="Repomon"
          projectSummary="Github 레포지토리 분석 및 시각화 서비스"
          projectFrom="삼성 청년 SW 아카데미 자율 프로젝트"
          projectAward="우수상 (2등)"
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
          projectDes={[
            "Github 레포지토리 분석 및 시각화 서비스입니다.",
            `${"레포몬"}이라는 몬스터가 프로젝트의 진행도(Commit, Merge, Issue,
            Review, Fork, Star)에 따라 함께 성장합니다.`,
            "성장한 레포몬은 다른 레포몬과 전투할 수 있고, 카드 형태로 추출하여 README에 활용할 수 있습니다.",
          ]}
          projectRole={[
            "프론트엔드 팀장, 디자인",
            "소셜 로그인, 메인 페이지, 레포지토리 분석 페이지, 랭킹페이지, 크롬 익스텐션",
          ]}
        />
        <ProjectCard
          projectTitle="아이유정"
          projectTitleEng="IUJ"
          projectSummary="학부모 부동산 추천 서비스"
          projectFrom="삼성 청년 SW 아카데미 특화 프로젝트"
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
          projectDes={[
            "학부모를 위한 부동산 매물 추천 서비스입니다.",
            "원하는 주변 시설을 고려한 맞춤 추천 점수가 동반된 부동산 매물 리스트를 제공합니다.",
          ]}
          projectRole={[
            "프론트엔드 팀장, 디자인",
            "소셜 로그인, 메인 페이지, 지도 페이지, 관심 매물 페이지",
          ]}
        />
        <ProjectCard
          projectTitle="펀티어"
          projectTitleEng="Funteer"
          projectSummary="봉사 크라우드 펀딩 서비스"
          projectFrom="삼성 청년 SW 아카데미 공통 프로젝트"
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
          projectDes={[
            "기부&봉사 크라우드 펀딩 서비스입니다.",
            "자선 단체가 기부 또는 봉사 펀딩을 개최하면 개인 회원들이 참여할 수 있습니다.",
            "펀딩 성공 이후 봉사 활동은 라이브 방송으로 중계되어야 하며, 개인 회원들이 방송 도중 후원할 수 있습니다.",
          ]}
          projectRole={[
            "프론트엔드 팀원, 디자인",
            "회원가입(개인, 단체), 관리자 페이지, 충전 및 환불(아임포트), 프로필 페이지, 고객센터, 서비스 소개",
          ]}
        />
      </div>
    </div>
  );
}

export default Projects;
