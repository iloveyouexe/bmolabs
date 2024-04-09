import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import { postReducer } from '../state/reducers/postReducer';
import { watchFetchPosts } from '../state/sagas/postSagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    posts: postReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchPosts);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
