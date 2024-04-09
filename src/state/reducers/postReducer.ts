import { PostActions, ActionTypes, FetchPostsSuccessAction, FetchPostsFailureAction, AddPostFailureAction, AddPostSuccessAction } from '../actions/postActions';
import { Post } from '../../types/models';

interface PostsState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
};

function isAddPostSuccessAction(action: PostActions): action is AddPostSuccessAction {
  return action.type === ActionTypes.ADD_POST_SUCCESS;
}

function isAddPostFailureAction(action: PostActions): action is AddPostFailureAction {
  return action.type === ActionTypes.ADD_POST_FAILURE;
}

function isFetchPostsSuccessAction(action: PostActions): action is FetchPostsSuccessAction {
  return action.type === ActionTypes.FETCH_POSTS_SUCCESS;
}

function isFetchPostsFailureAction(action: PostActions): action is FetchPostsFailureAction {
  return action.type === ActionTypes.FETCH_POSTS_FAILURE;
}

export const postReducer = (state: PostsState = initialState, action: PostActions): PostsState => {
  switch (action.type) {
    case ActionTypes.ADD_POST_REQUEST:
      return { ...state, loading: true };

    case ActionTypes.ADD_POST_SUCCESS:
      if (isAddPostSuccessAction(action)) {
        return { ...state, posts: [...state.posts, action.payload], loading: false };
      }
      return state; 

    case ActionTypes.ADD_POST_FAILURE:
      if (isAddPostFailureAction(action)) {
        return { ...state, error: action.payload, loading: false };
      }
      return state;

    case ActionTypes.FETCH_POSTS_REQUEST:
      return { ...state, loading: true, error: null };

    case ActionTypes.FETCH_POSTS_SUCCESS:
      if (isFetchPostsSuccessAction(action)) {
        return { ...state, posts: action.payload, loading: false, error: null };
      }
      return state;

    case ActionTypes.FETCH_POSTS_FAILURE:
      if (isFetchPostsFailureAction(action)) {
        return { ...state, error: action.payload, loading: false };
      }
      return state;

    default:
      return state; 
  }
};

