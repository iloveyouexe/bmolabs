import { call, put, takeLatest } from 'redux-saga/effects';
import { addPost as apiAddPost } from '../../utils/api';
import { fetchPosts as apiFetchPosts } from '../../utils/api';
import { updatePost as apiUpdatePost } from '../../utils/api';
import { deletePost as apiDeletePost } from '../../utils/api';
import { ActionTypes, AddPostRequestAction, DeletePostRequestAction, UpdatePostRequestAction } from '../actions/postActions'; 
import { Post } from '../types/models';

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

export function* addPostSaga(action: AddPostRequestAction): Generator<any, void, Post> {
  try {
    const newPost: Post = yield call(apiAddPost, action.payload);
    yield put({ type: ActionTypes.ADD_POST_SUCCESS, payload: newPost });
  } catch (e: any) {
    yield put({
      type: ActionTypes.ADD_POST_FAILURE,
      payload: e instanceof Error ? e.message : 'An unknown error occurred',
    });
  }
}

export function* updatePostSaga(action: UpdatePostRequestAction): Generator<any> {
  try {
    const postId = action.payload.id; 
    const postData = action.payload.data; 
    const updatePost: Post = (yield call(apiUpdatePost, postId, postData)) as Post;
    yield put({ type: ActionTypes.UPDATE_POST_SUCCESS, payload: updatePost });
  } catch (e: any) {
    yield put({
      type: ActionTypes.UPDATE_POST_FAILURE,
      payload: e instanceof Error ? e.message : 'An unknown error occurred',
    });
  }
}

  export function* deletePostSaga(action: DeletePostRequestAction): Generator<any> {
    try {
      yield call(apiDeletePost, action.payload);
      yield put({ type: ActionTypes.DELETE_POST_SUCCESS, payload: action.payload });
    } catch (e: any) {
      yield put({
        type: ActionTypes.DELETE_POST_FAILURE,
        payload: e instanceof Error ? e.message : 'An unknown error occurred',
      });
    }
  }


// Watcher Sagas
export function* watchFetchPosts() {
  yield takeLatest(ActionTypes.FETCH_POSTS_REQUEST, fetchPostsSaga);
}

export function* watchAddPost() {
  yield takeLatest(ActionTypes.ADD_POST_REQUEST, addPostSaga);
}

export function* watchUpdatePost() {
  yield takeLatest(ActionTypes.UPDATE_POST_REQUEST, updatePostSaga);
}

export function* watchDeletePost() {
  yield takeLatest(ActionTypes.DELETE_POST_REQUEST, deletePostSaga);
}