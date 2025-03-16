import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "./theme/themeSlice";
import loginReducer from "./loginForm/loginInFormSlice";
import signupFormReducer from "./signupForm/singupFormSlice";

const rootReducer = combineReducers({
  theme: themeReducer,
  login: loginReducer,
  signup: signupFormReducer
  // user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
