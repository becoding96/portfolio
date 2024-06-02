import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Modal.module.scss";
import { createPortal } from "react-dom";
import { BiAward } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import useModal from "@/hooks/useModal";
import onClickGithubIcon from "./onClickGithubIcon";

function RepomonModal() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [imageNum, setImageNum] = useState<number>(1);
  const imageLength = 9;

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
                  imageNum <= 6
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
                  <h2>레포몬</h2>
                  <BsGithub onClick={() => onClickGithubIcon("repomon")} />
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
                    토큰 관리, 메인 페이지, 레포지토리 분석 페이지, 랭킹페이지,
                    크롬 익스텐션
                  </span>
                  을 구현했습니다.
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
                    <span>주요 서비스 소개</span>가 포함되어 있습니다.
                  </li>
                  <li>
                    <span>3D 모델인 {`'레포몬'`}이 첫 페이지에서 렌더링</span>
                    됩니다. 때문에{" "}
                    <span> 첫화면 로딩 속도 개선을 위해 Next.js를 채택</span>
                    하였습니다.
                  </li>
                </details>
                <details>
                  <summary>레포지토리 분석 페이지</summary>
                  <li>
                    <span>레포몬과 레포지토리(프로젝트)에 대한 정보</span>를 볼
                    수 있는 페이지입니다.
                  </li>
                  <li>
                    <span>프로젝트 갱신</span>: 서버에 레포지토리 갱신을
                    요청하고, 갱신한 데이터를 재요청합니다.
                  </li>
                  <li>
                    <span>프로젝트 정보 설정</span>: 레포몬 이름, 프로젝트 기간,
                    대표 레포지토리 설정 작업을 할 수 있습니다.
                  </li>
                  <li>
                    <span>카드 추출</span>: Github README에 활용 가능한 카드를
                    추출할 수 있습니다. 카드는 레포지토리와 레포몬에 관한 정보를
                    담습니다. 카드에 기입할 정보를 커스텀할 수 있습니다.
                  </li>
                  <li>
                    <span>성장 탭</span>: 레포몬이 성장한 근거와 얼마나
                    성장했는지를 나타냅니다. (chart.js)
                  </li>
                  <li>
                    <span>컨벤션 탭</span>: 프로젝트 컨벤션을 등록 및 수정할 수
                    있습니다. 컨벤션 준수율을 확인할 수 있습니다. (chart.js)
                  </li>
                  <li>
                    <span>기여도 탭</span>: 본인의 프로젝트에 대한 기여도를 커밋
                    수 기준으로 나타냅니다. (chart.js)
                  </li>
                  <li>
                    <span>배틀 탭</span>: 다른 레포몬과 배틀을 매칭하고.
                    레포몬의 배틀에 관한 정보(능력치, 전적, 티어 등)를 볼 수
                    있습니다.
                  </li>
                </details>
                <details>
                  <summary>랭킹 페이지</summary>
                  <li>
                    <span>레포몬, 유저, 배틀 랭킹</span>을 볼 수 있는
                    페이지입니다.
                  </li>
                </details>
                <details>
                  <summary>크롬 익스텐션</summary>
                  <li>
                    <span>
                      레포몬 배틀 기능을 다른 작업을 하면서 함께 즐길 수 있도록
                    </span>{" "}
                    크롬 익스텐션으로 제작하여{" "}
                    <a
                      href="https://chrome.google.com/webstore/detail/repomon-battle-device/pedmecadllmofbjpcoepkanglfhokjpi?hl=ko"
                      target="_blank"
                    >
                      크롬 웹 스토어
                    </a>
                    에 등록했습니다.
                  </li>
                  <li>
                    익스텐션 내부의 로그인은{" "}
                    <span>레포몬 사이트에서 인증 키를 발급</span>받는 방식으로
                    처리했습니다.
                  </li>
                </details>
                <p className={styles.subheading}>후기</p>
                <li>
                  Chart.js, Three.js, React-Modal과 같은 여러 라이브러리를
                  사용하면서{" "}
                  <span>
                    라이브러리의 Docs를 참고하며 원하는 정보를 찾아 커스텀하는
                    것에 익숙
                  </span>
                  해졌습니다.
                </li>
                <li>
                  Next 최신 버전을 이용한 SSR 방식을 처음 도입하다보니
                  프로젝트가 진행됨에 따라{" "}
                  <span>서버 컴포넌트와 클라이언트 컴포넌트</span>를 제대로
                  나누지 못했습니다. 다음 프로젝트에서는 이에 대한{" "}
                  <span>기초 설계</span>가 선행되어야 함을 느꼈습니다.
                </li>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default RepomonModal;
