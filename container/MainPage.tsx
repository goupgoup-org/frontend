import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import useMain from "@/hooks/useMain";
import { useCallback } from "react";

export const MainPage = () => {
  const handleLoadMore = useCallback(() => {
    mainTest();
  }, []);

  const { targetRef, isFetching, pageNumber } = useInfiniteScroll(
    handleLoadMore,
    {
      fetchThreshold: 0.8,
    }
  );

  const { mainTest } = useMain(pageNumber, isFetching);

  return (
    <div ref={targetRef} style={{ height: 800, overflow: "scroll" }}>
      <div>
        <h1>메인</h1>
      </div>
    </div>
  );
};
