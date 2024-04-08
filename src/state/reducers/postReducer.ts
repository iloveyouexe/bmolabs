import { PostActions, ActionTypes, Post, AddPostAction } from '../actions/postActions';

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

export const postReducer = (state: PostsState = initialState, action: PostActions): PostsState => {
  switch (action.type) {
    case ActionTypes.ADD_POST:
      const addPostAction = action as AddPostAction;
      return { ...state, posts: [...state.posts, addPostAction.payload] };
    // ... other cases
    default:
      return state;
  }
};
