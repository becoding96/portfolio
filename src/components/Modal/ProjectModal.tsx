import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./ProjectModal.module.scss";
import { createPortal } from "react-dom";
import { BiAward } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

interface ProjectModalPropsType {
  projectTitle: string;
  projectTitleEng: string;
  projectImageLength: number;
  projectSummary: string;
  projectFrom: string;
  projectPeriod: string;
  projectTechStack: string[];
  projectDes: string[];
  projectRole: string[];
  projectAward?: string;
}

function ProjectModal({
  projectTitle,
  projectTitleEng,
  projectImageLength,
  projectSummary,
  projectFrom,
  projectPeriod,
  projectTechStack,
  projectDes,
  projectRole,
  projectAward,
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
    const url = `https://github.com/becoding96/${projectTitleEng.toLocaleLowerCase()}`;

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
                  projectTitleEng !== "Funteer"
                    ? `/${projectTitleEng}/image${imageNum}.${fileEx}`
                    : "/Funteer/logo.webp"
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
                {imageNum} / {projectImageLength}
              </span>
            </div>
            <div className={styles["text-div"]}>
              <div className={styles["first-line"]}>
                <div className={styles["title-div"]}>
                  <h3>{projectTitle}</h3>
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
              <p>{projectPeriod}</p>
              <h4>{projectSummary}</h4>
              <h4 style={{ color: "rgb(20, 20, 20)" }}>{projectFrom}</h4>
              <h4 className={styles["award-div"]}>
                {projectAward && <BiAward />} {projectAward}
              </h4>
              <div className={styles["span-div"]}>
                {projectTechStack.map((stack, index) => (
                  <span key={index}>{stack}</span>
                ))}
              </div>
              <div className={styles.hr} />
              <div className={styles["project-detail"]}>
                <p className={styles.subheading}>프로젝트 소개</p>
                {projectDes.map((desLi, index) => (
                  <li key={index}>{desLi}</li>
                ))}
                <p className={styles.subheading}>담당 역할</p>
                {projectRole.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
                {projectTitleEng !== "Funteer" && (
                  <p className={styles.subheading}>페이지 상세 설명</p>
                )}
                {projectTitleEng === "Repomon" && (
                  <div className={styles.detail}>
                    <p>
                      레포지토리 분석 페이지는 프로젝트 갱신, 프로젝트의 성장
                      곡선, 컨벤션 준수율, 개인의 프로젝트 기여도, 레포몬 배틀에
                      관한 정보(레이팅, 능력치, 전적, 순위 ...) 등의 기능이
                      포함되어 있습니다.
                    </p>
                    <br />
                    <p>
                      크롬 익스텐션은 {"'레포몬 배틀'"}이라는 일부 기능을 다른
                      작업을 하면서 함께 즐길 수 있도록 크롬 웹 스토어에
                    </p>
                    <p> 등록했습니다.</p>
                  </div>
                )}
                {projectTitleEng === "IUJ" && (
                  <div className={styles.detail}>
                    <p>
                      지도의 매물은 점수가 적혀있는 집 모양의 마커로
                      표현했습니다.
                    </p>
                    <br />
                    <p>
                      원하는 주변 시설을 설정하고, 저장할 수 있습니다. 저장한
                      주변 시설은 언제든 불러와 적용할 수 있습니다.
                    </p>
                    <p>
                      주변 시설을 설정하면 매물의 추천 점수에 해당 시설들이
                      반영됩니다.
                    </p>
                    <br />
                    <p>
                      좌측 탭의 매물 목록에 점수에 대한 근거를 볼 수 있습니다.
                    </p>
                    <p>
                      즉, 주변 시설로 초등학교, 지하철, 병원, 치안, 도서관을
                      선택했다면 각각에 대한 점수를 볼 수 있습니다.
                    </p>
                    <br />
                    <p>
                      필터 기능이 포함되어 있습니다. 부동산 매물 종류, 평수,
                      층수, 거래 종류를 선택할 수 있습니다.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default ProjectModal;
