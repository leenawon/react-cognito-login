// cognito Token 발급 Api 호출 후 응답 객체 타입
export interface CognitoTokenType {
  access_token: string;
  expires_in: number;
  id_token: string;
  refresh_token: string;
  token_type: string;
}

// user Reducer 상태 타입
export interface UserStateType {
  token: CognitoTokenType;
}

// 전체 Store 상태 타입
export interface StoreStateType {
  user: UserStateType;
}
