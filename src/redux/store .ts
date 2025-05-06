import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Uses localStorage for persistence
import { apiSlice } from "./api/apiSlice";

// Persist configuration
const persistConfig = {
  key: "root", // Unique key for persisted state
  version: 1, // Versioning for future migrations
  storage, // Local storage persistence
  blacklist: ["theme"], // Specify which reducers to persist (in this case, we are persisting the theme reducer)
};

// Wrap rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"], // Ignore these actions for serialization checks
        ignoredPaths: ["theme"], // Ignore the Redux Persist state key
      },
    }).concat(apiSlice.middleware), // Add any additional middleware, such as RTK Query
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development mode
});

// Create a persistor for handling persistence
export const persistor = persistStore(store);

// Export store as default
export default store;

// Define RootState and AppDispatch types for better TypeScript support
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
