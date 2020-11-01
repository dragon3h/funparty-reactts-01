import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import UserReducer from './user/user.reducer';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  user: UserReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export const persistedReducer = persistReducer(persistConfig, rootReducer);
