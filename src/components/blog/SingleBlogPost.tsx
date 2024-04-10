import React from 'react';
import { useParams } from 'react-router-dom';
import { Post, Author } from "../../state/types/models";

interface SingleBlogPostProps {
  posts: Post[]; 
}

const SingleBlogPost = ({ posts }: SingleBlogPostProps) => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((p) => p.id === Number(id));
  
  if (!post) {
    return <div>try again bucko</div>;
  }

  const formattedDate = post.createdAt ? new Date(post.createdAt).toLocaleDateString() : "...seems like something broke (ohwell)";

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <div>Author: {post.author ? post.author.name : 'Anonymous'}</div>
      <div>Date: {formattedDate}</div>
    </div>
  );
};

export default SingleBlogPost;
