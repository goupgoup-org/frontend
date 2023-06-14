import MainApi from "@/services/main/MainApi";
import useCommonQuery from "./useCommonQuery";
import { useEffect } from "react";

const useMain = (pageNum: number, isFetching: boolean) => {
  const { testApi } = MainApi();

  const { request: mainTest } = useCommonQuery({
    query: testApi,
    params: {
      pageNum: pageNum,
    },
    callbacks: {
      onSuccess: (data) => {
        // setState(false);
        console.log(data);
      },
      onError: (error) => {
        console.log(error);
      },
    },
  });

  return {
    mainTest,
  };
};

export default useMain;
