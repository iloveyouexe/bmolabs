import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchPosts as apiFetchPosts } from '../../utils/api';
import { ActionTypes } from '../actions/postActions'
import { Post } from '../../types/models';

export function* fetchPostsSaga(): Generator<any, void, Post[]> {
  try {
    const posts: Post[] = yield call(apiFetchPosts);
    yield put({ type: ActionTypes.FETCH_POSTS_SUCCESS, payload: posts });
  } catch (e: any) {
    yield put({
      type: ActionTypes.FETCH_POSTS_FAILURE,
      payload: e instanceof Error ? e.message : 'An unknown error occurred',
    });
  }
}

// Watcher Saga
export function* watchFetchPosts() {
  yield takeLatest(ActionTypes.FETCH_POSTS_REQUEST, fetchPostsSaga);
}
