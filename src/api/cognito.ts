// Library
import axios from "axios";
import qs from "qs";

// AWS Cognito 로그인 인증 API 호출
export function GetNewTokens(code: string) {
  return axios.post(
    process.env.REACT_APP_ADMIN_COGNITO_HOST + "/oauth2/token",
    qs.stringify({
      client_id: process.env.REACT_APP_ADMIN_COGNITO_CLIENT_ID,
      grant_type: "authorization_code",
      code: code,
      redirect_uri: process.env.REACT_APP_ADMIN_COGNITO_REDIRECT_URI_LOGIN,
    }),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: process.env.REACT_APP_ADMIN_COGNITO_AUTHORIZATION,
      },
    }
  );
}
