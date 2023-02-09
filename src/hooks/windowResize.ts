import { useLayoutEffect, useMemo, useState } from "react";

export interface IMemoSize {
  totalHeight: number;
  totalWidth: number;
}

export const useWindowSize = ({ totalHeight, totalWidth }: IMemoSize) => {
  const [size, setSize] = useState({ windowHeight: 0, windowWidth: 0 });

  useLayoutEffect(() => {
    const updateSize = () => {
      setSize({ windowHeight: window.innerHeight, windowWidth: window.innerWidth });
    };

    window.addEventListener("resize", updateSize, true);

    updateSize();

    return () => window.removeEventListener("resize", updateSize, true);
  }, []);

  const calcHeight = () => Math.max(0, size.windowHeight - Math.max(0, totalHeight));
  const memoizedHeight = useMemo(() => calcHeight(), [size.windowHeight, totalHeight]);

  const calcWidth = () => Math.max(0, size.windowWidth - Math.max(0, totalWidth));
  const memoizedWidth = useMemo(() => calcWidth(), [size.windowWidth, totalWidth]);

  return {
    size,
    memoizedHeight,
    memoizedWidth,
  };
};
