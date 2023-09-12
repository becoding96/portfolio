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
