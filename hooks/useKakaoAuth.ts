import { useRouter } from "next/router";
import React, { useCallback, useEffect } from "react";
import useAxios from "./useAxios";
import { ACCESS_TOKEN_KEY } from "@/utils/constant";
import { useRecoilState } from "recoil";
import { userStateValue } from "@/store/atom/auth/authState";

const useKakaoAuth = () => {
  const router = useRouter();
  const { requestApi } = useAxios();
  const { code: authCode, error: kakaoServerError } = router.query;

  const [userState, setUserState] = useRecoilState(userStateValue);

  // 토큰 저장
  const setAccessToken = useCallback((token: string) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
  }, []);

  // 토큰 제거
  const removeAccessToken = useCallback(() => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  }, []);

  // 카카오 로그인 핸들러
  const kakaoLoginHandler = useCallback(
    async (code: string | string[]) => {
      //   await requestApi(
      //     "POST",
      //     `http://localhost:8080/api/user/oauth/kakao`
      //   ).then((res) => {
      //     const { email, nickname, accessToken } = res;
      //     setAccessToken(accessToken);
      //     setUserState({ email, nickname });
      //     router.push("/");
      //   });
    },
    [router]
  );

  useEffect(() => {
    if (authCode) {
      kakaoLoginHandler(authCode);
    } else if (kakaoServerError) {
      router.push("/auth/SignIn");
    }
  }, [kakaoLoginHandler, authCode, kakaoServerError, router]);

  return { data: {}, action: {} };
};

export default useKakaoAuth;
