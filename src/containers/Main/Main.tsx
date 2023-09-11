import React from "react";
import styles from "./Main.module.scss";
import Introduce from "@/components/Introduce/Introduce";

function Main() {
  return (
    <div id={styles.container}>
      <Introduce />
    </div>
  );
}

export default Main;
