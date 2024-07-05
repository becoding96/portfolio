import React, { useState, useRef } from "react";
import Image from "next/image";
import styles from "./Modal.module.scss";
import { createPortal } from "react-dom";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import useModal from "@/hooks/useModal";
import onClickGithubIcon from "./onClickGithubIcon";

function BecoERPModal() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [imageNum, setImageNum] = useState<number>(1);
  const imageLength = 5;

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
                src={`/BecoERP/imageFix${imageNum}.webp`}
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
                  <h2>Beco-ERP</h2>
                  <BiLinkExternal
                    onClick={() => {
                      window.open(
                        "https://becoding96.github.io/beco-erp",
                        "_blank"
                      );
                    }}
                  />
                  <BsGithub onClick={() => onClickGithubIcon("beco-erp")} />
                </div>
                <button
                  onClick={() => {
                    setModalIsOpen(false);
                  }}
                >
                  X
                </button>
              </div>
              <p className={styles.date}>2024.06.24 ~ 2023.06.29</p>
              <h4 style={{ color: "rgb(20, 20, 20)" }}>개인 토이 프로젝트</h4>
              <div className={styles["span-div"]}>
                <span>React</span>
                <span>Vite</span>
                <span>TypeScript</span>
                <span>SCSS</span>
                <span>Firebase</span>
                <span>Git</span>
              </div>
              <div className={styles.hr} />
              <div className={styles.contents}>
                <p className={styles.subheading}>프로젝트 소개</p>
                <li>
                  입고된 <span>자재를 소요해 품목을 생산</span>하고, 그로 인한
                  자재와 품목의 <span>재고를 확인</span>할 수 있도록 돕는 ERP
                  서비스입니다.
                </li>
                <p className={styles.subheading}>프로젝트 상세</p>
                <details>
                  <summary>자재/품목 등록</summary>
                  <li>
                    관리할 <span>자재와 품목을 등록</span>합니다.
                  </li>
                  <li>
                    입고 내역이 있는 자재와 생산 내역이 있는 품목은 삭제할 수
                    없습니다.
                  </li>
                </details>
                <details>
                  <summary>자재 입고</summary>
                  <li>
                    등록한 <span>자재의 입고 수량</span>을 입력합니다.
                  </li>
                  <li>
                    이후 생산 과정에서 자재가 소요된 이후 자재 입고 내역을
                    삭제하는 경우{" "}
                    <span>마이너스 재고가 발생하지 않도록 조치</span>했습니다.
                  </li>
                </details>
                <details>
                  <summary>생산 실적</summary>
                  <li>
                    재고가 있는 자재를 소요해 <span>품목을 생산</span>할 수
                    있습니다.
                  </li>
                  <li>
                    생산된 품목의 <span>양품 수량만 입고 수량에 반영</span>
                    됩니다.
                  </li>
                </details>
                <details>
                  <summary>재고 조회</summary>
                  <li>
                    입고, 생산으로 인한 자재와 품목의 입고/출고 수량과 현{" "}
                    <span>재고를 확인</span>할 수 있습니다.
                  </li>
                </details>
                <p className={styles.subheading}>후기</p>
                <li>
                  <span>유효성 검사, 통제 로직의 중요성</span>을 깊이 깨달은
                  프로젝트입니다. ERP 시스템뿐만 아니라 다른 시스템에서도 작은
                  오류가 전체 시스템에 미치는 영향을 최소화하기 위해서는 철저한
                  검증이 필요하다는 점을 배웠습니다. 이러한 경험을 바탕으로
                  앞으로의 개발에서도 항상{" "}
                  <span>데이터의 일관성과 무결성을 유지</span>하는 데 중점을
                  두고자 합니다.
                </li>
                <li>
                  ERP 개발자로 근무하며 SQL 프로시저를 통해 ERP 로직을
                  구현해왔습니다. 이러한 경험을 바탕으로 웹과 접목시켜 웹 ERP
                  프로젝트를 만들어 보면서,{" "}
                  <span>비즈니스 로직에 대한 이해가 매우 중요하다</span>는 것을
                  깨달았습니다. 일의 흐름을 이해하고 있어야 사용자의 입장에서
                  생각할 수 있으며, 작은 오류도 놓치지 않을 수 있다는 생각이
                  들었습니다.
                </li>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default BecoERPModal;
