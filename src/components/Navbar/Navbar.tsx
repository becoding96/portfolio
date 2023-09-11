"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import useHandleScroll from "@/hooks/useHandleScroll";

interface NavbarPropsType {
  scrollToHome: () => void;
  scrollToAbout: () => void;
  scrollToProjects: () => void;
  scrollToContact: () => void;
}

function Navbar({
  scrollToHome,
  scrollToAbout,
  scrollToProjects,
  scrollToContact,
}: NavbarPropsType) {
  const [navbarGlassClass, setNavbarGlassClass] = useState<string>("");

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight * 0.9) {
      setNavbarGlassClass("glass");
    } else {
      setNavbarGlassClass("");
    }
  };

  useHandleScroll(handleScroll);

  const onClickAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    scrollToAbout();
  };

  const onClickProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    scrollToProjects();
  };

  const onClickHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    scrollToHome();
  };

  const onClickContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    scrollToContact();
  };

  return (
    <div id={styles.navbar} className={styles[navbarGlassClass]}>
      <div id={styles["navbar-inner"]}>
        <div className={styles.normal} style={{ justifyContent: "flex-start" }}>
          <Link href="" style={{ marginRight: "20px" }} onClick={onClickAbout}>
            ABOUT
          </Link>
          <Link href="" onClick={onClickProjects}>
            PROJECTS
          </Link>
        </div>
        <div style={{ justifyContent: "center" }}>
          <Link id={styles.center} href="" onClick={onClickHome}>
            <span style={{ fontWeight: "bold", fontSize: "20px !important" }}>
              BECO
            </span>
            ding
          </Link>
        </div>
        <div className={styles.normal} style={{ justifyContent: "flex-end" }}>
          <Link href="" onClick={onClickContact}>
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
