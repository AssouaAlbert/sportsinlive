import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "./theme/themeSlice";

const rootReducer = combineReducers({
theme: themeReducer,
// user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
