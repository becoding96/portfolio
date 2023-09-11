import React from "react";
import styles from "./Main.module.scss";
import Introduce from "@/components/Introduce/Introduce";

function Main({
  homeRef,
}: {
  homeRef: React.MutableRefObject<HTMLDivElement | null>;
}) {
  return (
    <div ref={homeRef} id={styles.container}>
      <Introduce />
    </div>
  );
}

export default Main;
