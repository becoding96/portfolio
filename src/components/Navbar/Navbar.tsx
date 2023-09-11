"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import useHandleScroll from "@/hooks/useHandleScroll";

function Navbar() {
  const [navbarGlassClass, setNavbarGlassClass] = useState<string>("");

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight * 0.9) {
      setNavbarGlassClass("glass");
    } else {
      setNavbarGlassClass("");
    }
  };

  useHandleScroll(handleScroll);

  return (
    <div id={styles.navbar} className={styles[navbarGlassClass]}>
      <div id={styles["navbar-inner"]}>
        <div className={styles.normal} style={{ justifyContent: "flex-start" }}>
          <Link href="" style={{ marginRight: "20px" }}>
            ABOUT
          </Link>
          <Link href="">PROJECTS</Link>
        </div>
        <div style={{ justifyContent: "center" }}>
          <Link id={styles.center} href="">
            <span style={{ fontWeight: "bold", fontSize: "20px !important" }}>
              BECO
            </span>
            ding
          </Link>
        </div>
        <div className={styles.normal} style={{ justifyContent: "flex-end" }}>
          <Link href="">CONTACT</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
