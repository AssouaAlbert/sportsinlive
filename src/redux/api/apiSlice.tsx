// src/redux/apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the API slice
export const apiSlice = createApi({
  reducerPath: 'api', // The key in the Redux store
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:8083' }), // Base URL for the API
  tagTypes: ['User'], // Optional: Define tag types for cache invalidation
  endpoints: (builder) => ({
    // Example: Fetch users
    getUsers: builder.query({
      query: () => '/users', // API endpoint
    }),

    // Example: Fetch a single user by ID
    getUserById: builder.query({
      query: (id) => `/users/${id}`,
    }),

    // Example: Create a new user
    createUser: builder.mutation({
      query: (userData) => ({
        url: '/users',
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

// Export auto-generated hooks
export const { useGetUsersQuery, useGetUserByIdQuery, useCreateUserMutation } = apiSlice;
