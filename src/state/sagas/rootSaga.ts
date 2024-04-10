import { all } from 'redux-saga/effects';
import { watchFetchPosts, watchAddPost, watchDeletePost, watchUpdatePost } from './postSagas';


export default function* rootSaga() {
  yield all([
    watchFetchPosts(),
    watchAddPost(),
    watchUpdatePost(),
    watchDeletePost(),
  ]);
}
