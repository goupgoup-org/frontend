import MainApi from "@/services/main/MainApi";
import useCommonQuery from "./useCommonQuery";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  infiniteScrollState,
  itemListState,
} from "@/store/atom/common/infiniteScrollState";

// pageNum: number, isFetching: boolean
const useMain = () => {
  const { testApi } = MainApi();
  const [scrollState, setScrollState] = useRecoilState(infiniteScrollState);
  const [itemList, setItemList] = useRecoilState(itemListState);

  const { request: mainTest } = useCommonQuery({
    query: testApi,
    params: {
      pageNum: scrollState.pageNum,
    },
    callbacks: {
      onSuccess: (data) => {
        setScrollState((prev) => ({ ...prev, isFetching: true }));

        setItemList((prev: []) => {
          let res = data?.users;
          return [...prev, ...res];
        });
      },
      onError: (error) => {
        console.log(error);
      },
    },
  });

  return {
    data: { itemList },
    action: {
      mainTest,
    },
  };
};

export default useMain;
