import React from "react";
import styles from "./Submit.module.scss";

function Submit() {
  return (
    <input className={styles.submit} type="submit" defaultValue={"SEND"} />
  );
}

export default Submit;
