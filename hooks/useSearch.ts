import {
  searchQueryState,
  searchResultState,
} from "@/store/atom/search/searchState";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

const useSearch = (): {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  searchResults: [];
  performSearch: () => void;
} => {
  const [searchQuery, setSearchQuery] = useRecoilState(searchQueryState);
  const searchResults = useRecoilValue(searchResultState);
  const setSearchResults = useSetRecoilState(searchResultState);

  const performSearch = () => {
    // 검색 로직
    // const result =
  };

  return { searchQuery, setSearchQuery, searchResults, performSearch };
};

export default useSearch;
