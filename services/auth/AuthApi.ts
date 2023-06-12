import useAxios from "@/hooks/useAxios";

const AuthApi = () => {
  const { requestApi } = useAxios();

  const example = {
    key: "example",
    queryFn: (params: any) => requestApi("GET", "url", params),
  };
};

export default AuthApi;
