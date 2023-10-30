import React from "react";
import Image from "next/image";
import styles from "./ProjectCard.module.scss";
import RepomonModal from "../Modal/RepomonModal";
import IUJModal from "../Modal/IUJModal";
import FunteerModal from "../Modal/FunteerModal";
import YumCandyModal from "../Modal/YumCandyModal";

interface ProjectCardPropsType {
  projectTitle: string;
  projectTitleEng: string;
  projectSummary: string;
}

function ProjectCard({
  projectTitle,
  projectTitleEng,
  projectSummary,
}: ProjectCardPropsType) {
  return (
    <div className={styles.component}>
      <Image
        src={`/${projectTitleEng}/logo.webp`}
        layout="responsive"
        width={442}
        height={270}
        alt={projectTitle + " 로고"}
      />
      <div className={styles.projectInfo}>
        <h3>{projectTitle}</h3>
        <h4>{projectSummary}</h4>
        {projectTitle === "레포몬" && <RepomonModal />}
        {projectTitle === "아이유정" && <IUJModal />}
        {projectTitle === "펀티어" && <FunteerModal />}
        {projectTitle === "냠캔디" && <YumCandyModal />}
      </div>
    </div>
  );
}

export default ProjectCard;
