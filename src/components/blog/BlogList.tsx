import React from 'react';
import { Link } from 'react-router-dom';

interface Blog {
  id: string;
  title: string;
}

interface Props {
  posts: Blog[];
}

const BlogList = ({ posts }: Props) => {
  return (
    <div>
      <h2>Latest Blog Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
