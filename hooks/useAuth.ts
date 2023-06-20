import { useRouter } from "next/router";
import React, { useCallback, useEffect } from "react";
import { ACCESS_TOKEN_KEY } from "@/utils/constant";
import { useRecoilState } from "recoil";
import { userStateValue } from "@/store/atom/auth/authState";
import useAxios from "./useAxios";
import useCommonQuery from "./useCommonQuery";
import AuthApi from "@/services/auth/AuthApi";

const useAuth = () => {
  const router = useRouter();
  const { signin } = AuthApi();
  const { requestApi } = useAxios();
  const [userState, setUserState] = useRecoilState(userStateValue);

  // 토큰 저장
  const setAccessToken = useCallback((token: string) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
  }, []);

  // 토큰 제거
  const removeAccessToken = useCallback(() => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  }, []);

  // 소셜 로그인
  const { request: userSignin } = useCommonQuery({
    query: signin,
    callbacks: {
      onSuccess: (res) => {
        setUserState(res.data);
        router.push("/");
      },
      onError: (err) => {
        console.log(err);
        router.push("/auth");
      },
    },
  });

  useEffect(() => {
    if (router.query?.token !== undefined) {
      setAccessToken(router.query.token as string);
      userSignin();
    }
  }, [router, router.query?.token]);

  return { data: {}, action: { setAccessToken, removeAccessToken } };
};

export default useAuth;
