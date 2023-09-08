import { useEffect } from "react";

type useHandleScrollCallbackType = () => void;

function useHandleScroll(callback: useHandleScrollCallbackType) {
  useEffect(() => {
    window.addEventListener("scroll", callback);

    return () => {
      window.removeEventListener("scroll", callback);
    };
  }, [callback]);
}

export default useHandleScroll;
