import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import useMain from "@/hooks/useMain";
import { useCallback } from "react";

export const MainPage = () => {
  const handleLoadMore = () => {
    mainTest();
  };

  const { targetRef } = useInfiniteScroll(handleLoadMore, {
    fetchThreshold: 0.8,
  });

  const {
    data: { itemList },
    action: { mainTest },
  } = useMain();

  return (
    <div>
      <div>
        <h1>메인</h1>
      </div>
      <div>
        {itemList?.map((el, index) => (
          <div key={index} style={{ height: 200 }}>
            {el.last_name}
          </div>
        ))}
      </div>

      <div ref={targetRef} />
    </div>
  );
};
