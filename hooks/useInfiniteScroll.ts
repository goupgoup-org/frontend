import { infiniteScrollState } from "@/store/atom/common/infiniteScrollState";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";

type Options = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
};

type InfiniteScrollOptions = Options & {
  fetchThreshold?: number;
};

const useInfiniteScroll = (
  callback: () => void,
  options: InfiniteScrollOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.8,
  }
): {
  targetRef: React.RefObject<HTMLDivElement>;
  // isFetching: boolean;
  // pageNumber: number;
} => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useRecoilState(infiniteScrollState);

  const { isFetching, pageNum } = scrollState;

  const observerHandler: IntersectionObserverCallback = (entries) => {
    const target = entries[0];

    if (target.isIntersecting && isFetching) {
      console.log("start =====================");
      setScrollState((prev) => ({
        ...prev,
        isFetching: false,
        pageNum: prev.pageNum + 1,
      }));

      callback();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerHandler, options);
    if (targetRef.current) observer.observe(targetRef.current);

    return () => observer.disconnect();
  }, [pageNum, isFetching]);

  return { targetRef };
};

export default useInfiniteScroll;
