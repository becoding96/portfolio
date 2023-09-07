import React from "react";
import styles from "./About.module.scss";
import ContainerTitle from "@/components/ContainerTitle/ContainerTitle";

function About() {
  return (
    <div id={styles.container}>
      <ContainerTitle title="ABOUT" nth={1} />
    </div>
  );
}

export default About;
