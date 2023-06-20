import FormInput from "@/components/form/FormInput";
import useAuth from "@/hooks/useAuth";
import useAxios from "@/hooks/useAxios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

const SignInPage = () => {
  const kakaoLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/kakao";
  };

  const googleLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  return (
    <div>
      <h1>로그인</h1>
      <button onClick={kakaoLogin}>카카오</button>
      <button onClick={googleLogin}>구글</button>
      <FormInput name="userId" placeholder="아이디" />
      <FormInput name="password" type="password" placeholder="패스워드" />
    </div>
  );
};

export default SignInPage;
