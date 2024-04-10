import { Post } from "../state/types/models";

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch('/api/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json() as Promise<Post[]>; 
};

export const addPost = async (postData: Omit<Post, 'id' | 'createdAt' | 'updatedAt'>): Promise<Post> => {
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
  
    if (!response.ok) {
      throw new Error('Failed to add post');
    }
    return response.json() as Promise<Post>; // Explicitly cast the return type
  };


  export const updatePost = async (postId: number, postData: Partial<Post>): Promise<Post> => {
    const response = await fetch(`/api/posts/${postId}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
  
    if (!response.ok) {
      throw new Error('Failed to update post');
    }
  
    return response.json() as Promise<Post>; // Explicitly cast the return type
};

  export const deletePost = async (postId: number) => {
    const response = await fetch(`/api/posts/${postId}`, {
      method: 'DELETE',
    });
  
    if (!response.ok) {
      throw new Error('Failed to delete post');
    }
  
    return true; 
  };