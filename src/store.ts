// Redux
import { createStore } from "redux";

// Reducer
import persistedReducer from "./modules/reducers/index.ts";

// redux store
const store = createStore(persistedReducer);

export default store;
