import React from "react";
import styles from "./Projects.module.scss";
import ContainerTitle from "@/components/ContainerTitle/ContainerTitle";

function Projects() {
  return (
    <div id={styles.container}>
      <ContainerTitle title="PROJECTS" nth={1.8} />
    </div>
  );
}

export default Projects;
