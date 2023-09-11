import React from "react";
import styles from "./textarea.module.scss";

interface TextareaPropsType {
  name: string;
}

function Textarea({ name }: TextareaPropsType) {
  return (
    <textarea
      id={name}
      name={name}
      className={styles.textarea}
      rows={20}
      cols={40}
    />
  );
}

export default Textarea;
