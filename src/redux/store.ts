import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import logger from 'redux-logger';

import {persistedReducer, RootState} from './root-reducer';

const middlewares = [logger];

// export const store = createStore(persistedReducer, applyMiddleware(...middlewares));

export const store = configureStore({
      reducer: persistedReducer,
      middleware: getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
      })
    }
);

export const persistore = persistStore(store);
