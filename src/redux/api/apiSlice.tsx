// src/redux/apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the API slice
export const apiSlice = createApi({
  reducerPath: 'api', // Key in the Redux store
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:8083', // Ensure HTTP, not HTTPS for localhost
    credentials: 'include', // Sends cookies if the backend uses session-based auth
  }),
  tagTypes: ['User'], // Optional: Define tag types for cache invalidation
  endpoints: (builder) => ({
    // Login user
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: '/login', // Your login endpoint
        method: 'POST',
        body: credentials, // { username: '...', password: '...' }
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});

// Export auto-generated hooks
export const { useLoginUserMutation } = apiSlice;
