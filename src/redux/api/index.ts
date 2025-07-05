import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const apiReducers = combineReducers({

})

export type ApiReducerTypes = ReturnType<typeof apiReducers>;

export { persistConfig, apiReducers };

export default apiReducers;