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
                  <h2>펀티어</h2>
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
              <p className={styles.date}>2023.01.03 ~ 2023.02.17</p>
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
                    회원가입, 관리자 페이지, 충전 및 환불, 단체 프로필,
                    고객센터, 서비스 소개
                  </span>
                  를 구현했습니다.
                </li>
                <p className={styles.subheading}>프로젝트 상세</p>
                <details>
                  <summary>회원가입</summary>
                  <li>
                    <span>개인과 단체에 대한 회원가입</span> 기능입니다.
                  </li>
                  <li>
                    <span>useInterval 커스텀 훅</span>을 이용해 이메일 인증에
                    대한 타이머를 구현했습니다.
                  </li>
                </details>
                <details>
                  <summary>관리자 페이지</summary>
                  <li>
                    <span>
                      개인 및 단체 회원 관리, 펀딩 관리, 기부 관리, 공지사항
                      관리
                    </span>{" "}
                    등 관리자 기능을 종합해둔 페이지입니다.
                  </li>
                  <li>
                    <span>검색, 필터, 페이지네이션을 구현</span>해 관리에
                    용이하도록 했습니다.
                  </li>
                </details>
                <details>
                  <summary>충전 및 환불</summary>
                  <li>
                    <span>아임포트 API를 이용해 충전 및 환불</span>을
                    구현했습니다.
                  </li>
                </details>
                <details>
                  <summary>단체 프로필</summary>
                  <li>
                    <span>단체 회원에 대한 프로필 페이지</span> 입니다.
                  </li>
                  <li>
                    단체명, 연락처, 팔로워, 개설한 펀딩 등{" "}
                    <span>단체에 대한 정보</span>를 볼 수 있습니다.
                  </li>
                  <li>
                    <span>라이브 방송 중 후원받은 내역</span>을 볼 수 있습니다.
                  </li>
                </details>
                <details>
                  <summary>고객센터</summary>
                  <li>
                    <span>FAQ와 공지사항</span>을 볼 수 있습니다.
                  </li>
                </details>
                <details>
                  <summary>서비스 소개</summary>
                  <li>
                    <span>서비스에 대한 설명과 기대효과</span>를 표시한
                    페이지입니다.
                  </li>
                </details>
                <p className={styles.subheading}>후기</p>
                <li>
                  처음 웹 프로젝트를 경험해보며 기획, 기능 정의, 디자인, 개발,
                  발표 등의 전반적인 <span>프로젝트 과정</span>과, Git, Jira,
                  Figma, Notion을 이용한 <span>협업</span>에 익숙해졌습니다.
                </li>
                <li>
                  첫 프로젝트라 UI/UX 측면에서 조금 더 잘하지 못해 아쉬운 점이
                  있었습니다. 그러나 맡은 부분 이상을 구현했고, React,
                  TypeScript, SCSS 등 새로운 기술 스택을 익히며{" "}
                  <span>가장 빠르고 큰 성장 폭을 보인 긍정적인 경험</span>
                  이었습니다.
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
