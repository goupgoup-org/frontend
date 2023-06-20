import Item from "@/components/main/Item";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import useMain from "@/hooks/useMain";
import { userStateValue } from "@/store/atom/auth/authState";
import { useCallback } from "react";
import { useRecoilValue } from "recoil";

export const MainPage = () => {
  return (
    <div>
      <div>
        <h1>메인</h1>
      </div>
      <div>
        <Item />
        {/* {itemList?.map((el: any, index: number) => (
          <div key={index} style={{ height: 200 }}>
            {el.last_name}
          </div>
        ))} */}
      </div>

      {/* <div ref={targetRef} /> */}
    </div>
  );
};
