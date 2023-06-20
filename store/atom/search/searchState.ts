import { atom } from "recoil";

// 검색어 상태 저장
export const searchQueryState = atom<string>({
  key: "searchQueryState",
  default: "",
});

// 검색 결과 상태 저장
export const searchResultState = atom<[]>({
  key: "searchResultState",
  default: [],
});
