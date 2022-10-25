// Action Type
import { GET_TOKEN } from "./actionTypes.ts";

// Token Type
import { CognitoTokenType } from "../../types/types";

// token 저장 action
export const getToken = (token: CognitoTokenType) => {
  return {
    type: GET_TOKEN,
    token,
  };
};
