import FormInput from "@/components/form/FormInput";
import { signInValueState } from "@/store/atom/auth/authState";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

const SignInPage = () => {
  const [signInState, setSignInState] = useRecoilState(signInValueState);

  useEffect(() => {
    console.log(signInState);
  }, [signInState]);
  return (
    <div>
      <h1>로그인</h1>
      <FormInput name="userId" placeholder="아이디" setValue={setSignInState} />
      <FormInput
        name="password"
        type="password"
        placeholder="패스워드"
        setValue={setSignInState}
      />
    </div>
  );
};

export default SignInPage;
