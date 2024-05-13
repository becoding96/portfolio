import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Modal.module.scss";
import { createPortal } from "react-dom";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import useModal from "@/hooks/useModal";
import onClickGithubIcon from "./onClickGithubIcon";

function YumCandyModal() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useModal(modalRef, modalIsOpen, setModalIsOpen);

  return (
    <>
      <button
        className={styles["open-btn"]}
        onClick={() => {
          setModalIsOpen(true);
        }}
      >
        READ MORE
      </button>
      {modalIsOpen &&
        createPortal(
          <div className={styles.modal} ref={modalRef}>
            <div className={styles["img-div"]}>
              <Image
                src={`/YumCandy/image1.gif`}
                alt="프로젝트 이미지"
                width={800}
                height={800}
                priority={true}
                loading="eager"
              />
            </div>
            <div className={styles["text-div"]}>
              <div className={styles["first-line"]}>
                <div className={styles["title-div"]}>
                  <h2>냠캔디</h2>
                  <BiLinkExternal
                    onClick={() => {
                      window.open(
                        "https://becoding96.github.io/yum-candy",
                        "_blank"
                      );
                    }}
                  />
                  <BsGithub onClick={() => onClickGithubIcon("yum-candy")} />
                </div>
                <button
                  onClick={() => {
                    setModalIsOpen(false);
                  }}
                >
                  X
                </button>
              </div>
              <p className={styles.date}>2023.10.29 ~ 2023.10.30</p>
              <h4 style={{ color: "rgb(20, 20, 20)" }}>개인 토이 프로젝트</h4>
              <div className={styles["span-div"]}>
                <span>React</span>
                <span>Three.js</span>
                <span>Vite</span>
                <span>TypeScript</span>
                <span>SCSS</span>
                <span>Git</span>
              </div>
              <div className={styles.hr} />
              <div className={styles.contents}>
                <p className={styles.subheading}>프로젝트 소개</p>
                <li>
                  <span>
                    캐릭터를 조작하여 빨간 사탕을 피하고 초록 사탕을 먹는 게임
                  </span>
                  입니다.
                </li>
                <li>
                  <span>three.js 연습용</span>으로 만든 게임입니다.
                </li>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default YumCandyModal;
