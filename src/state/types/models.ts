export interface Post {
    author: Author;
    id: number; 
    title: string;
    content: string;
    thumbnailUrl?: string; 
    author_id: number; 
    createdAt: string; 
    updatedAt: string; 
  }

  export interface Author {
    id: number;
    user_id: number;
    bio: string;
    profile_picture_url: string;
    name: string;
  }

  export interface Comments {
    id: number;
    post_id: number;
    user_id: number;
    content: string;
    created_at: string;
  }
