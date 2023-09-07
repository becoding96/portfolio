import React from "react";
import styles from "./Projects.module.scss";
import ContainerTitle from "@/components/ContainerTitle/ContainerTitle";

function Projects() {
  return (
    <div id={styles.container}>
      <ContainerTitle
        title="PROJECTS"
        multiplier={1.8}
        direction="slide-in-right"
      />
    </div>
  );
}

export default Projects;
