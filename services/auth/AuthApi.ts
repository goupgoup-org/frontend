import useAxios, { METHOD } from "@/hooks/useAxios";
import API_URL from "../constants";

const AuthApi = () => {
  const { requestApi } = useAxios();

  const signin = {
    key: "signin",
    queryFn: (params: any) =>
      requestApi(METHOD.GET, API_URL.AUTH.SIGNIN, params),
  };

  return { signin };
};

export default AuthApi;
