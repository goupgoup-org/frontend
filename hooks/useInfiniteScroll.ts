import { useEffect, useRef, useState } from "react";

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
  options: InfiniteScrollOptions = {}
): {
  targetRef: React.RefObject<HTMLDivElement>;
  isFetching: boolean;
  pageNumber: number;
} => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    const { root, rootMargin, threshold, fetchThreshold = 0.8 } = options;

    const observerOptions = {
      root: root || null,
      rootMargin: rootMargin || "0px",
      threshold: threshold || 0.5,
    };

    const handleObserver: IntersectionObserverCallback = (entries) => {
      const target = entries[0];
      console.log(pageNumber);
      if (target.isIntersecting && !isFetching) {
        setIsFetching(true);
      }
    };

    const observer = new IntersectionObserver(handleObserver, observerOptions);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [options, isFetching]);

  useEffect(() => {
    if (isFetching) {
      callback();
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
      setIsFetching(false);
    }
  }, [pageNumber]);

  return { targetRef, isFetching, pageNumber };
};

export default useInfiniteScroll;
