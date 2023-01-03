// React
import React from "react";
import { useLocation } from "react-router-dom";

// 로그인 성공 후 메인 페이지 렌더링
function MainPage() {
  const { state } = useLocation();
  return (
    <div>
      <h1>MainPage</h1>
      {/* <h3>{state.access_token}</h3> */}
    </div>
  );
}

export default MainPage;
