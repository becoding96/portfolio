import React from "react";
import Image from "next/image";
import styles from "./ProjectCard.module.scss";

interface ProjectCardPropsType {
  src: string;
  title: string;
  des: string;
}

function ProjectCard({ src, title, des }: ProjectCardPropsType) {
  return (
    <div id={styles.component}>
      <Image
        src={src}
        layout="responsive"
        width={442}
        height={270}
        alt={title + " 로고"}
      />
      <div id={styles.projectInfo}>
        <h3>{title}</h3>
        <h4>{des}</h4>
        <button>자세히 보기</button>
      </div>
    </div>
  );
}

export default ProjectCard;
