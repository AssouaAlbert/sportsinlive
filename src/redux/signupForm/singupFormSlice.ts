import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
};

const signupFormSlice = createSlice({
  name: "signupForm",
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    resetForm: () => initialState,
  },
});

export const {
  setFirstName,
  setLastName,
  setEmail,
  setUsername,
  setPassword,
  setConfirmPassword,
  resetForm,
} = signupFormSlice.actions;
export default signupFormSlice.reducer;
