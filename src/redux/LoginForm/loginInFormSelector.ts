import { RootState } from "../rootReducer";

const selectLoginForm = (state: RootState) => state.login; // Select the login form slice from the state
export const selectEmail = (state: RootState) => selectLoginForm(state).email; // Selector for email
export const selectPassword = (state: RootState) => selectLoginForm(state).password; // Selector for password

export default selectLoginForm; // Export the main selector for the login form slice
