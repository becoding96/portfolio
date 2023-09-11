"use client";

import React from "react";
import styles from "./Footer.module.scss";
import { BsGithub } from "react-icons/bs";
import { SiVelog } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  const handleClickGithubBtn = () => {
    const url = "https://github.com/becoding96";
    window.open(url, "_blank");
  };

  const handleClickVelogBtn = () => {
    const url = "https://velog.io/@becoding96";
    window.open(url, "_blank");
  };

  const handleClickEmailBtn = () => {
    window.navigator.clipboard.writeText("becoding96@gmail.com").then(() => {
      alert("이메일이 복사되었습니다.");
    });
  };

  return (
    <div id={styles.component}>
      <div className={styles["btn-div"]}>
        <button onClick={handleClickGithubBtn}>
          <BsGithub onClick={handleClickGithubBtn} />
        </button>
        <button onClick={handleClickVelogBtn}>
          <SiVelog onClick={handleClickVelogBtn} />
        </button>
        <button onClick={handleClickEmailBtn}>
          <AiOutlineMail onClick={handleClickEmailBtn} />
        </button>
      </div>
      <div className={styles["p-div"]}>
        <p>ⓒ2023 Junbong.</p>
        <p>All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
