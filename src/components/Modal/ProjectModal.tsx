import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./ProjectModal.module.scss";
import { createPortal } from "react-dom";

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
              <h4>{projectSummary}</h4>
              <h4>{projectFrom}</h4>
              <div id={styles["span-div"]}>
                {projectTechStack.map((stack, index) => (
                  <span key={index}>{stack}</span>
                ))}
              </div>
              <div id={styles.hr} />
              <div className={styles["project-detail"]}>
                <p>프로젝트 소개</p>
                {projectDes.map((desLi, index) => (
                  <li key={index}>{desLi}</li>
                ))}
                <p>담당 역할</p>
                {projectRole.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default ProjectModal;
