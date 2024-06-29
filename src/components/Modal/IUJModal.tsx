import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Modal.module.scss";
import { createPortal } from "react-dom";
import { BsGithub } from "react-icons/bs";
import useModal from "@/hooks/useModal";
import onClickGithubIcon from "./onClickGithubIcon";

function IUJModal() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [imageNum, setImageNum] = useState<number>(1);
  const imageLength = 4;

  useModal(modalRef, modalIsOpen, setModalIsOpen);

  const handleClickBtn = (direction: "left" | "right") => {
    if (direction === "left") {
      setImageNum((prev) => (prev === 1 ? imageLength : prev - 1));
    } else if (direction === "right") {
      setImageNum((prev) => (prev === imageLength ? 1 : prev + 1));
    }
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
                  <h2>아이유정</h2>
                  <BsGithub onClick={() => onClickGithubIcon("iuj")} />
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
                    토큰 관리, 메인 페이지, 지도 페이지, 관심 매물 페이지
                  </span>
                  를 구현했습니다.
                </li>
                <p className={styles.subheading}>프로젝트 상세</p>
                <details>
                  <summary>토큰 관리</summary>
                  <li>
                    <span>axios interceptor</span>를 이용하여{" "}
                    <span>access, refresh 토큰을 관리</span>했습니다.
                  </li>
                </details>
                <details>
                  <summary>메인 페이지</summary>
                  <li>
                    <span>서비스 배너와 부동산 관련 기사</span>가 포함되어
                    있습니다.
                  </li>
                  <li>
                    UI 만족도를 높이기 위해{" "}
                    <span>글자 단위로 애니메이션을 적용</span>했습니다.
                  </li>
                </details>
                <details>
                  <summary>지도 페이지</summary>
                  <li>
                    <span>
                      지도의 매물은 점수가 적혀있는 집 모양의 마커로 표현
                    </span>
                    했습니다. 점수가 높을 수록 마커의 채도를 증가시켰습니다.
                  </li>
                  <li>
                    <span>원하는 주변 시설을 설정하고, 저장</span>할 수
                    있습니다.
                  </li>
                  <li>
                    저장한 주변 시설은 언제든 불러와 다시 적용할 수 있습니다.
                  </li>
                  <li>
                    <span>주변 시설을 설정</span>하면{" "}
                    <span>매물의 추천 점수에 반영</span>됩니다.
                  </li>
                  <li>
                    좌측 탭의 매물 목록에서{" "}
                    <span>?를 클릭하면 점수에 대한 근거</span>를 그래프로 볼 수
                    있습니다. (ex. 병원 70, 지하철 60...)
                  </li>
                  <li>
                    <span>필터 기능</span>이 포함되어 있습니다. 부동산 매물
                    종류, 평수, 층수, 거래 종류를 선택할 수 있습니다.
                  </li>
                </details>
                <details>
                  <summary>관심 매물 페이지</summary>
                  <li>
                    <span>관심 매물로 등록한 부동산</span>을 볼 수 있습니다.
                  </li>
                </details>
                <p className={styles.subheading}>후기</p>
                <li>
                  컴포넌트 구현력을 높이기 위해 차트, 캐러셀, 다양한 애니메이션
                  등 <span>모든 컴포넌트를 CSS만을 이용해 직접 제작</span>
                  해보았고, 이를 통해 CSS에 대한 이해도가 증가했습니다.
                </li>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default IUJModal;
