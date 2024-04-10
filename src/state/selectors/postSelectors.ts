import { createSelector } from 'reselect';
import { RootState } from '../types';
import { Post } from '../types/models';

export const selectPostsData = (state: RootState) => state.postsState;

export const selectPosts = (state: RootState): Post[] => selectPostsData(state).data;

export const selectPostById = (postId: string) => createSelector<RootState, Post[], Post | undefined>(
  [selectPosts], 
  (posts: Post[]) => posts.find(post => post.id === postId)
);
