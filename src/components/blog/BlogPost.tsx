import React from 'react';

interface BlogPost {
  title: string;
  content: string;
  author: string;
  date: string;
}

interface Props {
  post: BlogPost;
}

const BlogPost: React.FC<Props> = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <div>Author: {post.author}</div>
      <div>Date: {post.date}</div>
    </div>
  );
};

export default BlogPost;
