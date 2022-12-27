// Library
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";

// Reducer
import { user } from "./user.ts";

// redux-persist 설정 값
const persistConfig = {
  key: "user",
  storage: sessionStorage, // 세션 스토리지에 저장
};

export const rootReducer = combineReducers({
  user,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
