import React, { useEffect } from "react";

/** 모달 외부 클릭 시 닫기 및 외부의 스크롤 방지 */
function useModal(
  modalRef: React.RefObject<HTMLDivElement>,
  modalIsOpen: boolean,
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
) {
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setModalIsOpen(false);
      }
    };

    if (modalIsOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      const body = document.body;
      body.style.overflowY = "hidden";

      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
        body.style.overflowY = "scroll";
      };
    }
  }, [modalIsOpen]);
}

export default useModal;
