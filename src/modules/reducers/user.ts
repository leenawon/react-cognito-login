// Action Type
import { GET_TOKEN } from "../actions/actionTypes.ts";

// State Type
import { UserStateType } from "../../types/types";

// 상태 초기 값
const initialState = {
  access_token: "",
  expires_in: 0,
  id_token: "",
  refresh_token: "",
  token_type: "",
};

// action 타입에 따른 state 값 리턴
export const user = (
  state: UserStateType = { token: initialState },
  action
) => {
  switch (action.type) {
    case GET_TOKEN:
      return { ...state, token: action.token };
    default:
      return state;
  }
};
