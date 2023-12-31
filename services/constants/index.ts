const API_URL = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL,
  METHOD: {
    GET: "get",
    POST: "post",
    PATCH: "patch",
    PUT: "put",
    DELETE: "delete",
  },
  AUTH: {
    SIGNIN: "/api/user/oauth",
    SIGNUP: "/api/v1/member/signup",
    LOGOUT: "/api/v1/member/logout",
    REISSUE: "/api/v1/member/reissue",
  },
  MAIN: {},
};

export default API_URL;
