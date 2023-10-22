"use client";

import React, { useState } from "react";
import styles from "./ScrollDown.module.scss";
import useHandleScroll from "@/hooks/useHandleScroll";

function ScrollDown() {
  const [showScrollDown, setShowScrollDown] = useState<boolean>(true);

  const handleScroll = () => {
    setShowScrollDown(false);
  };

  useHandleScroll(handleScroll);

  if (!showScrollDown) {
    return null;
  }

  return (
    <div className={styles.box}>
      <span />
    </div>
  );
}

export default ScrollDown;
