// React
import React, { useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Library
import sprintfjs from "sprintf-js";
import { cloneDeep } from "lodash";

// Api
import { GetNewTokens } from "../../api/cognito.ts";

function Login() {
  const { search } = useLocation(); // 쿼리 파라미터 추출
  // 쿼리 파라미터 속 사용자 로그인 code 값 추출
  const getCode = useCallback(() => {
    return search.split("=")[1];
  }, [search]);

  // cognito 로그인 페이지
  const replaceLoginPage = () => {
    window.location.replace(
      process.env.REACT_APP_ADMIN_COGNITO_HOST +
        sprintfjs.vsprintf(process.env.REACT_APP_ADMIN_COGNITO_LOGIN, [
          process.env.REACT_APP_ADMIN_COGNITO_CLIENT_ID,
          process.env.REACT_APP_ADMIN_COGNITO_REDIRECT_URI_LOGIN,
        ])
    );
  };

  // 사용자 토큰 정보 api 호출 후 액션 디스패치
  const getUserToken = async (code: string) => {
    if (!code) return;
    await GetNewTokens(code)
      .then((res) => {
        const tokenData = cloneDeep(res.data);
        console.log(tokenData);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    const code = getCode();
    if (!code) {
      replaceLoginPage();
    } else {
      getUserToken(code);
    }
  }, []);

  return <div>Login</div>;
}

export default Login;
