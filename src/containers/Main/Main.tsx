import React from "react";
import styles from "./Main.module.scss";
import Introduce from "@/components/Introduce/Introduce";
import Circle from "@/components/Circle/Circle";
import ScrollDown from "@/components/ScrollDown/ScrollDown";

function Main({
  homeRef,
}: {
  homeRef: React.MutableRefObject<HTMLDivElement | null>;
}) {
  return (
    <div ref={homeRef} id={styles.container}>
      <Circle />
      <Introduce />
      <ScrollDown />
    </div>
  );
}

export default Main;
