import { Post } from '../../types/models';

export const ActionTypes = {
  ADD_POST_REQUEST: 'ADD_POST_REQUEST',
  ADD_POST_SUCCESS: 'ADD_POST_SUCCESS',
  ADD_POST_FAILURE: 'ADD_POST_FAILURE',
  FETCH_POSTS_REQUEST: 'FETCH_POSTS_REQUEST',
  FETCH_POSTS_SUCCESS: 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_FAILURE: 'FETCH_POSTS_FAILURE',
  UPDATE_POST_REQUEST: 'UPDATE_POST_REQUEST',
  UPDATE_POST_SUCCESS: 'UPDATE_POST_SUCCESS',
  UPDATE_POST_FAILURE: 'UPDATE_POST_FAILURE',
  DELETE_POST_REQUEST: 'DELETE_POST_REQUEST',
  DELETE_POST_SUCCESS: 'DELETE_POST_SUCCESS',
  DELETE_POST_FAILURE: 'DELETE_POST_FAILRUE'
};

// Action interfaces
// Create
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

// Read
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

// Update
export interface UpdatePostRequestAction {
  type: typeof ActionTypes.UPDATE_POST_REQUEST;
  payload: {
    id: number; 
    data: Partial<Post>;
  };
}

export interface UpdatePostSuccessAction {
  type: typeof ActionTypes.UPDATE_POST_SUCCESS;
  payload: {
    id: number;
  }
}

export interface UpdatePostFailureAction {
  type: typeof ActionTypes.UPDATE_POST_FAILURE;
  payload: string;
}

// Delete
export interface DeletePostRequestAction {
  type: typeof ActionTypes.DELETE_POST_REQUEST;
  payload: number; 
}

export interface DeletePostSuccessAction {
  type: typeof ActionTypes.DELETE_POST_SUCCESS;
  payload: number;
}

export interface DeletePostFailureAction {
  type: typeof ActionTypes.DELETE_POST_FAILURE;
  payload: string;
}

// Union type of all action objects
export type PostActions = 
  | AddPostRequestAction
  | AddPostSuccessAction
  | AddPostFailureAction
  | FetchPostsRequestAction
  | FetchPostsSuccessAction
  | FetchPostsFailureAction
  | UpdatePostRequestAction
  | UpdatePostSuccessAction
  | UpdatePostFailureAction
  | DeletePostRequestAction
  | DeletePostSuccessAction
  | DeletePostFailureAction
