import useAuth from "@/hooks/useAuth";
import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useCallback, useEffect } from "react";

interface ResponseType {
  ok: boolean;
  error?: any;
}

const AuthComplete: NextPage = () => {
  const {} = useAuth();
  return <div>로그인 중</div>;
};

export default AuthComplete;
