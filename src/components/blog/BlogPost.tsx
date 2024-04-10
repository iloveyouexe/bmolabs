import React from 'react';
import { Post } from "../../state/types/models"

interface Props {
  post: Post;
}

const BlogPost = ({ post }: Props) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      {post.author && (
        <div>
          <div>Author: {post.author.name}</div>
          <img src={post.author.profile_picture_url} alt={post.author.name} />
        </div>
      )}
      <div>Date: {new Date(post.createdAt).toLocaleDateString()}</div>
    </div>
  );
};

export default BlogPost;
