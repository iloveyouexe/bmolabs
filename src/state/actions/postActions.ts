import { Post } from '../../types/models';

export const ActionTypes = {
  ADD_POST_REQUEST: 'ADD_POST_REQUEST',
  ADD_POST_SUCCESS: 'ADD_POST_SUCCESS',
  ADD_POST_FAILURE: 'ADD_POST_FAILURE',
  FETCH_POSTS_REQUEST: 'FETCH_POSTS_REQUEST',
  FETCH_POSTS_SUCCESS: 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_FAILURE: 'FETCH_POSTS_FAILURE',
};

// Action interfaces
// Add
export interface AddPostRequestAction {
  type: typeof ActionTypes.ADD_POST_REQUEST;
  payload: Post;
}

export interface AddPostSuccessAction {
  type: typeof ActionTypes.ADD_POST_SUCCESS;
  payload: Post; 
}

export interface AddPostFailureAction {
  type: typeof ActionTypes.ADD_POST_FAILURE;
  payload: string; 
}

// Fetch
export interface FetchPostsRequestAction {
  type: typeof ActionTypes.FETCH_POSTS_REQUEST;
}

export interface FetchPostsSuccessAction {
  type: typeof ActionTypes.FETCH_POSTS_SUCCESS;
  payload: Post[]; 
}

export interface FetchPostsFailureAction {
  type: typeof ActionTypes.FETCH_POSTS_FAILURE;
  payload: string; 
}

// Union type of all action objects
export type PostActions = 
  | AddPostRequestAction
  | AddPostSuccessAction
  | AddPostFailureAction
  | FetchPostsRequestAction
  | FetchPostsSuccessAction
  | FetchPostsFailureAction;
