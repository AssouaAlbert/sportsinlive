import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "./theme/themeSlice";
import loginReducer from "./loginForm/loginInFormSlice";
import signupFormReducer from "./signupForm/singupFormSlice";
import { apiSlice } from "./api/apiSlice";

const rootReducer = combineReducers({
  theme: themeReducer,
  login: loginReducer,
  signup: signupFormReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
