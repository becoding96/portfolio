import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./ProjectModal.module.scss";
import { createPortal } from "react-dom";

interface ProjectModalPropsType {
  projectTitle: string;
  projectTitleEng: string;
  projectImageLength: number;
  projectDes: string;
  projectDes2: string;
  projectPeriod: string;
  projectTechStack: string[];
}

function ProjectModal({
  projectTitle,
  projectTitleEng,
  projectImageLength,
  projectDes,
  projectDes2,
  projectPeriod,
  projectTechStack,
}: ProjectModalPropsType) {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [imageNum, setImageNum] = useState<number>(1);
  const [fileEx, setFileEx] = useState<string>("gif");

  useEffect(() => {
    if (projectTitleEng === "Repomon") {
      if (imageNum >= 1 && imageNum <= 7) {
        setFileEx("gif");
      } else {
        setFileEx("webp");
      }
    }

    if (projectTitleEng === "IUJ") {
      if (imageNum <= 2) {
        setFileEx("gif");
      } else {
        setFileEx("webp");
      }
    }
  }, [imageNum]);

  const handleClickBtn = (direction: "left" | "right") => {
    if (direction === "left") {
      setImageNum((prev) => (prev === 1 ? projectImageLength : prev - 1));
    } else if (direction === "right") {
      setImageNum((prev) => (prev === projectImageLength ? 1 : prev + 1));
    }
  };

  useEffect(() => {
    // @ts-ignore
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setModalIsOpen(false);
      }
    };

    if (modalIsOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <button
        id={styles["open-btn"]}
        onClick={() => {
          setModalIsOpen(true);
        }}
      >
        자세히 보기
      </button>
      {modalIsOpen &&
        createPortal(
          <div id={styles.modal} ref={modalRef}>
            <div id={styles["img-div"]}>
              <Image
                src={
                  projectTitleEng !== "Funteer"
                    ? `/${projectTitleEng}/${imageNum}.${fileEx}`
                    : "/Funteer/logo.webp"
                }
                alt="프로젝트 이미지"
                width={1000}
                height={1000}
                loading="eager"
              />
              <button
                id={styles["left-btn"]}
                onClick={() => handleClickBtn("left")}
              >
                {"<"}
              </button>
              <button
                id={styles["right-btn"]}
                onClick={() => handleClickBtn("right")}
              >
                {">"}
              </button>
              <span>
                {imageNum} / {projectImageLength}
              </span>
            </div>
            <div id={styles["text-div"]}>
              <div id={styles["title-div"]}>
                <h3>{projectTitle}</h3>
                <button
                  onClick={() => {
                    setModalIsOpen(false);
                  }}
                >
                  X
                </button>
              </div>
              <p>{projectPeriod}</p>
              <h4>{projectDes}</h4>
              <h4>{projectDes2}</h4>
              <div id={styles["span-div"]}>
                {projectTechStack.map((stack, index) => (
                  <span key={index}>{stack}</span>
                ))}
              </div>
              <div id={styles.hr} />
              {projectTitleEng === "Repomon" && (
                <div className={styles["project-detail"]}>
                  <p>프로젝트 소개</p>
                  <li>Github 레포지토리 분석 및 시각화 서비스입니다.</li>
                  <li>
                    ‘레포몬’이라는 몬스터가 프로젝트의 진행도(커밋, 머지, 이슈,
                    리뷰, Fork, Star)에 따라 함께 성장합니다.
                  </li>
                  <li>
                    성장한 레포몬은 다른 레포몬과 전투할 수 있고, 카드 형태로
                    추출하여 README에 활용할 수 있습니다.
                  </li>
                  <p>담당 역할</p>
                  <li>프론트엔드 팀장, 디자인</li>
                  <li>
                    소셜 로그인, 메인 페이지, 레포지토리 분석 페이지, 랭킹
                    페이지, 크롬 익스텐션
                  </li>
                </div>
              )}
              {projectTitleEng === "IUJ" && (
                <div className={styles["project-detail"]}>
                  <p>프로젝트 소개</p>
                  <li>학부모를 위한 부동산 매물 추천 서비스입니다.</li>
                  <li>
                    원하는 주변 시설을 고려한 맞춤 추천 점수가 동반된 부동산
                    매물 리스트를 제공합니다.
                  </li>
                  <p>담당 역할</p>
                  <li>프론트엔드 팀장, 디자인</li>
                  <li>
                    소셜 로그인, 메인 페이지, 지도 페이지, 관심 매물 페이지
                  </li>
                </div>
              )}
              {projectTitleEng === "Funteer" && (
                <div className={styles["project-detail"]}>
                  <p>프로젝트 소개</p>
                  <li>기부&봉사 크라우드 펀딩 서비스입니다.</li>
                  <li>
                    자선 단체가 기부 또는 봉사 펀딩을 개최하면 개인 회원들이
                    참여할 수 있습니다.
                  </li>
                  <li>
                    펀딩 성공 이후 봉사 활동은 라이브 방송으로 중계되어야 하며,
                    개인 회원들이 방송 도중 후원할 수 있습니다.
                  </li>
                  <p>담당 역할</p>
                  <li>프론트엔드 팀원, 디자인</li>
                  <li>
                    회원가입(개인, 단체), 관리자 페이지, 충전 및 환불(아임포트),
                    프로필 페이지, 고객센터, 서비스 소개
                  </li>
                </div>
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default ProjectModal;
