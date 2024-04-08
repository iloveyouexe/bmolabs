import React from 'react';
import { useParams } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  // Other fields
}

const SingleBlogPost: React.FC<{ posts: BlogPost[] }> = ({ posts }) => {
  const { id } = useParams<{ id: string }>();

  // Find the post with the matching ID
  const post = posts.find(post => post.id === id);

  // If post not found, return a message or handle accordingly
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      {/* Render other details of the post */}
    </div>
  );
};

export default SingleBlogPost;
