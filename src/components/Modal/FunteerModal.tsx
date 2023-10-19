import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Modal.module.scss";
import { createPortal } from "react-dom";
import { BsGithub } from "react-icons/bs";
import useModal from "@/hooks/useModal";
import onClickGithubIcon from "./onClickGithubIcon";

function FunteerModal() {
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
                src={`/Funteer/logo.webp`}
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
                  <h3>펀티어</h3>
                  <BsGithub onClick={() => onClickGithubIcon("funteer")} />
                </div>
                <button
                  onClick={() => {
                    setModalIsOpen(false);
                  }}
                >
                  X
                </button>
              </div>
              <p className={styles.date}>2023.02.20 ~ 2023.04.07</p>
              <h4 style={{ color: "rgb(20, 20, 20)" }}>
                삼성 청년 SW 아카데미 공통 프로젝트 (6인)
              </h4>
              <div className={styles["span-div"]}>
                <span>React</span>
                <span>TypeScript</span>
                <span>SCSS</span>
                <span>Git</span>
                <span>Figma</span>
                <span>Jira</span>
              </div>
              <div className={styles.hr} />
              <div className={styles.contents}>
                <p className={styles.subheading}>프로젝트 소개</p>
                <li>
                  <span>기부&봉사 크라우드 펀딩 서비스</span>입니다.
                </li>
                <li>
                  <span>
                    자선 단체가 기부 또는 봉사 펀딩을 개최하면 개인 회원들이
                    참여
                  </span>
                  할 수 있습니다.
                </li>
                <li>
                  펀딩 성공 이후 <span>봉사 활동은 라이브 방송으로 중계</span>
                  되어야 하며, <span>개인 회원들이 방송 도중 후원</span>할 수
                  있습니다.
                </li>
                <p className={styles.subheading}>담당 역할</p>
                <li>
                  <span>프론트엔드 팀원, 디자인</span>을 담당했습니다.
                </li>
                <li>
                  <span>
                    회원가입(개인, 단체), 관리자 페이지, 충전 및 환불(아임포트),
                    프로필 페이지, 서비스 소개, 고객센터
                  </span>
                  를 제작했습니다.
                </li>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default FunteerModal;
