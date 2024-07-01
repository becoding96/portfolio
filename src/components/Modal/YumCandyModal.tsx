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
                <p className={styles.subheading}>프로젝트 상세</p>
                <li>
                  <span>Three.js를 이용하여 조명, 모델 모션 재생, 사탕</span>{" "}
                  등을 표현했습니다.
                </li>
                <li>
                  <span>객체를 통해 효율적으로 방향키 동시 입력을 구현</span>
                  하여 이동과 캐릭터가 바라보는 방향이 자연스럽도록 했습니다.
                </li>
                <li>
                  <span>Three.js의 Vector</span> 클래스를 이용해 변하는 사탕의
                  위치를 모두 추적하였습니다.
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
