import { atom } from "recoil";

// 무한 스크롤
export interface InfiniteScroll {
  isFetching: boolean;
  pageNum: number;
}

// 무한 스크롤
export const infiniteScrollState = atom<InfiniteScroll>({
  key: "ininiteScrollState",
  default: {
    isFetching: true,
    pageNum: 0,
  },
});

// 무한스크롤 포스트
export const itemListState = atom({
  key: "itemListState",
  default: [],
});
