import { useEffect } from "react";

type ResizeHandler = () => void;

const useResizeHandler = (resizeHandler: ResizeHandler) => {
  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [resizeHandler]);
};

export default useResizeHandler;
