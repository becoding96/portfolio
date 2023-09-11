import React from "react";
import styles from "./Input.module.scss";

interface InputPropsType {
  type: string;
  height: string;
  name: string;
}

function Input({ type, name, height }: InputPropsType) {
  return (
    <input
      id={name}
      name={name}
      className={styles.input}
      type={type}
      style={{ height: height }}
    />
  );
}

export default Input;
