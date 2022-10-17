// React
import React, { useEffect } from "react";

// Library
import sprintfjs from "sprintf-js";

function Login() {
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

  useEffect(() => {
    replaceLoginPage();
  }, []);

  return <div>Login</div>;
}

export default Login;
