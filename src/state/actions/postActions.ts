export interface Post {
    id: string;
    title: string;
    content: string;
    // ... other attributes
  }
  
  // Define ActionTypes
  export const ActionTypes = {
    ADD_POST: 'ADD_POST',
    FETCH_POSTS_REQUEST: 'FETCH_POSTS_REQUEST',
    FETCH_POSTS_SUCCESS: 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_FAILURE: 'FETCH_POSTS_FAILURE',
  };
  
  // Action creators
  export const addPost = (post: Post) => ({
    type: ActionTypes.ADD_POST,
    payload: post,
  });
  
  export const fetchPostsRequest = () => ({
    type: ActionTypes.FETCH_POSTS_REQUEST,
  });
  
  
  // Action interfaces
  export interface AddPostAction {
    type: typeof ActionTypes.ADD_POST;
    payload: Post;
  }
  
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
    | AddPostAction
    | FetchPostsRequestAction
    | FetchPostsSuccessAction
    | FetchPostsFailureAction;
  
  