import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./ProjectModal.module.scss";
import { createPortal } from "react-dom";
import { BiAward } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

function RepomonModal() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [imageNum, setImageNum] = useState<number>(1);
  const imageLength = 10;

  const handleClickBtn = (direction: "left" | "right") => {
    if (direction === "left") {
      setImageNum((prev) => (prev === 1 ? imageLength : prev - 1));
    } else if (direction === "right") {
      setImageNum((prev) => (prev === imageLength ? 1 : prev + 1));
    }
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
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
  }, [modalIsOpen]);

  const onClickGithubIcon = () => {
    const url = `https://github.com/becoding96/repomon`;

    window.open(url, "_blank");
  };

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
                src={
                  imageNum <= 7
                    ? `/Repomon/image${imageNum}.gif`
                    : `/Repomon/image${imageNum}.webp`
                }
                alt="프로젝트 이미지"
                width={800}
                height={800}
                priority={true}
                loading="eager"
              />
              <button
                className={styles["left-btn"]}
                onClick={() => handleClickBtn("left")}
              >
                {"<"}
              </button>
              <button
                className={styles["right-btn"]}
                onClick={() => handleClickBtn("right")}
              >
                {">"}
              </button>
              <span>
                {imageNum} / {imageLength}
              </span>
            </div>
            <div className={styles["text-div"]}>
              <div className={styles["first-line"]}>
                <div className={styles["title-div"]}>
                  <h3>레포몬</h3>
                  <BsGithub onClick={onClickGithubIcon} />
                </div>
                <button
                  onClick={() => {
                    setModalIsOpen(false);
                  }}
                >
                  X
                </button>
              </div>
              <p className={styles.date}>2023.04.10 ~ 2023.05.19</p>
              <h4 style={{ color: "rgb(20, 20, 20)" }}>
                삼성 청년 SW 아카데미 자율 프로젝트 (6인)
              </h4>
              <h4 className={styles["award-div"]}>
                <BiAward /> 우수상 (2등)
              </h4>
              <div className={styles["span-div"]}>
                <span>Next.js</span>
                <span>React</span>
                <span>Redux</span>
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
                  <span>Github 레포지토리 분석 및 시각화 서비스</span>입니다.
                </li>
                <li>
                  <span>{"'레포몬'"}</span>이라는 몬스터가{" "}
                  <span>
                    프로젝트의 진행도(Commit, Merge, Issue, Review, Fork,
                    Star)에 따라 함께 성장
                  </span>
                  합니다.`
                </li>
                <li>
                  성장한 레포몬은 <span>다른 레포몬과 전투</span>할 수 있고,
                  <span>카드 형태로 추출하여 README에 활용</span>할 수 있습니다.
                </li>
                <p className={styles.subheading}>담당 역할</p>
                <li>
                  <span>프론트엔드 팀장, 디자인</span>을 담당했습니다.
                </li>
                <li>
                  <span>
                    소셜 로그인, 메인 페이지, 레포지토리 분석 페이지,
                    랭킹페이지, 크롬 익스텐션
                  </span>
                  을 제작했습니다.
                </li>
                <p className={styles.subheading}>프로젝트 상세 설명</p>
                <div className={styles.detail}>
                  <p>
                    <span>레포지토리 분석 페이지</span>는{" "}
                    <span>
                      프로젝트 갱신, 프로젝트의 성장 곡선, 컨벤션 준수율, 개인의
                      프로젝트 기여도, 레포몬 배틀에 관한 정보(레이팅, 능력치,
                      전적, 순위 ...)
                    </span>{" "}
                    등의 기능이 포함되어 있습니다.
                  </p>
                  <br />
                  <p>
                    <span>크롬 익스텐션</span>은 <span>{"'레포몬 배틀'"}</span>
                    이라는 일부 기능을{" "}
                    <span>
                      다른 작업을 하면서 함께 즐길 수 있도록 크롬 웹 스토어에
                    </span>
                  </p>
                  <p>
                    <span>등록</span>했습니다.
                  </p>
                  <br />
                  <p>
                    첫 화면에서 3D 모델이 들어가 <span>로딩 개선</span>이
                    필요했고, <span>SEO</span>에 대한 중요성을 인지함에 따라
                  </p>
                  <p>
                    <span>Next.js 프레임워크를 채택</span>했습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default RepomonModal;
