import FormInput from "@/components/form/FormInput";
import useAxios from "@/hooks/useAxios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

const SignInPage = () => {
  const router = useRouter();
  const { requestApi } = useAxios();

  const kakaoLogin = async () => {
    // window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=http://localhost:3000${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`;

    // await requestApi(
    //   "POST",
    //   `http://localhost:8080/oauth2/authorization/kakao`
    // ).then((res) => {
    //   const { email, nickname, accessToken } = res;

    //   // router.push("/");
    // });
    window.location.href = "http://localhost:8080/oauth2/authorization/kakao";
  };

  return (
    <div>
      <h1>로그인</h1>
      <button onClick={kakaoLogin}>카카오</button>
      <FormInput name="userId" placeholder="아이디" />
      <FormInput name="password" type="password" placeholder="패스워드" />
    </div>
  );
};

export default SignInPage;
