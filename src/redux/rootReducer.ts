import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "./theme/themeSlice";
import loginReducer from "./LoginForm/LoginInFormSlice";

const rootReducer = combineReducers({
  theme: themeReducer,
  login: loginReducer,
  // user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
