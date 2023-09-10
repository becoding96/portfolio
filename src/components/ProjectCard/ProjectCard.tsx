import React from "react";
import Image from "next/image";
import styles from "./ProjectCard.module.scss";
import ProjectModal from "../Modal/ProjectModal";

interface ProjectCardPropsType {
  projectTitle: string;
  projectTitleEng: string;
  projectDes: string;
  projectDes2: string;
  projectImageLength: number;
  projectPeriod: string;
  projectTechStack: string[];
}

function ProjectCard({
  projectTitle,
  projectTitleEng,
  projectDes,
  projectDes2,
  projectImageLength,
  projectPeriod,
  projectTechStack,
}: ProjectCardPropsType) {
  return (
    <div id={styles.component}>
      <Image
        src={`/${projectTitleEng}/logo.webp`}
        layout="responsive"
        width={442}
        height={270}
        alt={projectTitle + " 로고"}
      />
      <div id={styles.projectInfo}>
        <h3>{projectTitle}</h3>
        <h4>{projectDes}</h4>
        <ProjectModal
          projectTitle={projectTitle}
          projectTitleEng={projectTitleEng}
          projectImageLength={projectImageLength}
          projectDes={projectDes}
          projectDes2={projectDes2}
          projectPeriod={projectPeriod}
          projectTechStack={projectTechStack}
        />
      </div>
    </div>
  );
}

export default ProjectCard;
