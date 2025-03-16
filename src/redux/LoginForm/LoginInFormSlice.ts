import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    email: '',
    password: '',
};

const loginFormSlice = createSlice({
    name: 'loginForm',
    initialState,
    reducers: {
        setEmail: (state, action) => {
            const updateEmail = action.payload;
            return {...state, email: updateEmail}; // Return the updated state (optional, as Redux Toolkit handles it automatically)
        },
        setPassword: (state, action) => {
           const updatePassword = action.payload;
           return {
            ...state,
            password: updatePassword, // Return the updated state (optional, as Redux Toolkit handles it automatically)
           }
        },
        resetForm: () => initialState,
    },
});

export const { setEmail, setPassword, resetForm } = loginFormSlice.actions;
export default loginFormSlice.reducer;