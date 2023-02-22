import { useLayoutEffect, useMemo, useState } from "react";

export interface IMemoSize {
  totalHeight: number;
  totalWidth: number;
}

export const useWindowSize = ({ totalHeight, totalWidth }: IMemoSize) => {
  const [size, SetSize] = useState(getWindowDimensions());

  function getWindowDimensions() {
    const { innerWidth, innerHeight } = window;
    return {
      innerWidth,
      innerHeight,
    };
  }

  useLayoutEffect(() => {
    const updateSize = () => SetSize(getWindowDimensions());
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const calcHeight = () => Math.max(0, size.innerHeight - Math.max(0, totalHeight));
  const memoizedHeight = useMemo(() => calcHeight(), [size.innerHeight, totalHeight]);

  const calcWidth = () => Math.max(0, size.innerWidth - Math.max(0, totalWidth));
  const memoizedWidth = useMemo(() => calcWidth(), [size.innerWidth, totalWidth]);

  return {
    size,
    memoizedHeight,
    memoizedWidth,
  };
};
