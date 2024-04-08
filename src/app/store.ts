import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import { postReducer } from '../state/reducers/postReducer';
import { watchFetchPosts } from '../state/sagas/postSagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    posts: postReducer,
    // other reducers...
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware as any),
});

// then run the saga
sagaMiddleware.run(watchFetchPosts);

// Export RootState and AppDispatch types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;