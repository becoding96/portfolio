import React from "react";
import Image from "next/image";
import styles from "./ProjectCard.module.scss";
import ProjectModal from "../Modal/ProjectModal";

interface ProjectCardPropsType {
  projectTitle: string;
  projectTitleEng: string;
  projectSummary: string;
  projectFrom: string;
  projectImageLength: number;
  projectPeriod: string;
  projectTechStack: string[];
  projectDes: string[];
  projectRole: string[];
}

function ProjectCard({
  projectTitle,
  projectTitleEng,
  projectSummary,
  projectFrom,
  projectImageLength,
  projectPeriod,
  projectTechStack,
  projectDes,
  projectRole,
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
        <ProjectModal
          projectTitle={projectTitle}
          projectTitleEng={projectTitleEng}
          projectImageLength={projectImageLength}
          projectSummary={projectSummary}
          projectFrom={projectFrom}
          projectPeriod={projectPeriod}
          projectTechStack={projectTechStack}
          projectDes={projectDes}
          projectRole={projectRole}
        />
      </div>
    </div>
  );
}

export default ProjectCard;
