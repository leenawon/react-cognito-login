// React
import React, { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Library
import sprintfjs from "sprintf-js";
import { cloneDeep } from "lodash";
import { useDispatch, useSelector } from "react-redux";

// Api
import { GetNewTokens } from "../../api/cognito.ts";

// Types
import { StoreStateType } from "../../types/types";

// Action
import { getToken } from "../../modules/actions/user.ts";

function Login() {
  const { search } = useLocation(); // 쿼리 파라미터 추출
  const navigate = useNavigate(); // 라우터 이동
  const userState = useSelector((state: StoreStateType) => state.user); // 스토어에 저장된 상태 값
  const dispatch = useDispatch(); // 액션 디스패치

  // 쿼리 파라미터 속 사용자 로그인 code 값 추출
  const getCode = useCallback(() => {
    return search.split("=")[1];
  }, [search]);

  // cognito 로그인 페이지
  const replaceLoginPage = useCallback(() => {
    window.location.replace(
      process.env.REACT_APP_ADMIN_COGNITO_HOST +
        sprintfjs.vsprintf(process.env.REACT_APP_ADMIN_COGNITO_LOGIN, [
          process.env.REACT_APP_ADMIN_COGNITO_CLIENT_ID,
          process.env.REACT_APP_ADMIN_COGNITO_REDIRECT_URI_LOGIN,
        ])
    );
  }, []);

  // 사용자 토큰 정보 api 호출 후 액션 디스패치
  const getUserToken = useCallback(
    async (code: string) => {
      if (!code) return;
      await GetNewTokens(code)
        .then((res) => {
          const tokenData = cloneDeep(res.data);
          dispatch(getToken(tokenData));
        })
        .catch((error) => alert(error));
    },
    [dispatch]
  );

  // code 값 없다면 로그인 페이지 띄움, code 값이 있다면 이미 로그인 한 사용자 이므로 token 판별 메서드 호출
  useEffect(() => {
    const code = getCode();
    if (!code) {
      replaceLoginPage();
    } else {
      getUserToken(code);
    }
  }, []);

  // userState 상태 변화를 감지해 token 값이 있는지 판별 후 메인 페이지 이동
  useEffect(() => {
    if (!userState.token.access_token) return;
    navigate("/main", { state: userState.token });
  }, [userState]);

  return <div></div>;
}

export default Login;
