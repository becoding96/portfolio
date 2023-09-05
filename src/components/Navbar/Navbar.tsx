import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <div id={styles.navbar}>
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
