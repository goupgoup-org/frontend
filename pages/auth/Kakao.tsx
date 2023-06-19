import useKakaoAuth from "@/hooks/useKakaoAuth";
import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useCallback, useEffect } from "react";

interface ResponseType {
  ok: boolean;
  error?: any;
}

const Kakao: NextPage = () => {
  const {} = useKakaoAuth();

  return <div>로그인 중</div>;
};

export default Kakao;
