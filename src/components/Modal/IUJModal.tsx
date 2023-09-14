import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./ProjectModal.module.scss";
import { createPortal } from "react-dom";
import { BsGithub } from "react-icons/bs";

function IUJModal() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [imageNum, setImageNum] = useState<number>(1);
  const imageLength = 4;

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
    const url = `https://github.com/becoding96/iuj`;

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
                  imageNum <= 2
                    ? `/IUJ/image${imageNum}.gif`
                    : `/IUJ/image${imageNum}.webp`
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
                  <h3>아이유정</h3>
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
              <p className={styles.date}>2023.02.20 ~ 2023.04.07</p>
              <h4 style={{ color: "rgb(20, 20, 20)" }}>
                삼성 청년 SW 아카데미 특화 프로젝트 (6인)
              </h4>
              <div className={styles["span-div"]}>
                <span>React</span>
                <span>Vite</span>
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
                  <span>학부모를 위한 부동산 매물 추천 서비스</span>입니다.
                </li>
                <li>
                  <span>원하는 주변 시설을 고려한 맞춤 추천 점수</span>가 동반된
                  부동산 매물 리스트를 제공합니다.
                </li>
                <p className={styles.subheading}>담당 역할</p>
                <li>
                  <span>프론트엔드 팀장, 디자인</span>을 담당했습니다.
                </li>
                <li>
                  <span>
                    소셜 로그인, 메인 페이지, 지도 페이지, 관심 매물 페이지
                  </span>
                  을 제작했습니다.
                </li>
                <p className={styles.subheading}>프로젝트 상세 설명</p>
                <div className={styles.detail}>
                  <p>
                    지도의 매물은 <span>점수가 적혀있는 집 모양의 마커</span>로
                    표현했습니다.
                  </p>
                  <br />
                  <p>
                    <span>원하는 주변 시설을 설정하고, 저장</span>할 수
                    있습니다. 저장한 주변 시설은 언제든 불러와 적용할 수
                    있습니다.
                  </p>
                  <p>
                    <span>주변 시설을 설정</span>하면 매물의 추천{" "}
                    <span>점수에 해당 시설들이 반영</span>됩니다.
                  </p>
                  <br />
                  <p>
                    좌측 탭의 매물 목록에 점수에 대한 근거를 볼 수 있습니다.
                  </p>
                  <p>
                    예를 들어, 주변 시설로 초등학교, 지하철, 병원, 치안,
                    도서관을 선택했다면 각각에 대한 점수를 볼 수 있습니다.
                  </p>
                  <br />
                  <p>
                    <span>필터 기능</span>이 포함되어 있습니다. 부동산 매물
                    종류, 평수, 층수, 거래 종류를 선택할 수 있습니다.
                  </p>
                  <br />
                  <p>
                    또한, 프로젝트의 진행도에 따라 사이트가 무거워지는 것에
                    불편함을 느껴,
                  </p>
                  <p>
                    <span>빠른 빌드 도구인 Vite를 사용</span>해 개발 생산성을
                    향상시켰습니다.
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

export default IUJModal;
