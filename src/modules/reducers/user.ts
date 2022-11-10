// Action Type
import { GET_TOKEN } from "../actions/actionTypes.ts";

// action 타입에 따른 state 값 리턴
export const user = (state, action) => {
  switch (action.type) {
    case GET_TOKEN:
      return { ...state, token: action.token };
    default:
      return state;
  }
};
