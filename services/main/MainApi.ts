import useAxios from "@/hooks/useAxios";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";

const MainApi = () => {
  const { requestApi } = useAxios();

  const testApi = {
    key: "test",
    queryFn: (params: any) =>
      requestApi(
        "GET",
        `https://api.slingacademy.com/v1/sample-data/users?offset=${params.pageNum}&limit=20`
      ),
  };

  return {
    testApi,
  };
};

export default MainApi;
