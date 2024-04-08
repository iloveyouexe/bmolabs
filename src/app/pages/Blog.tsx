import React from 'react';
import BlogList from '../../components/blog/BlogList';
import BlogPost from '../../components/blog/BlogPost';

const Blog: React.FC = () => {
  // Sample blog posts data
  const posts = [
    { id: '1', title: 'Post 1' },
    { id: '2', title: 'Post 2' },
    { id: '3', title: 'Post 3' },
  ];

  // Sample blog post data
  const samplePost = {
    title: 'Sample Blog Post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis odio. Sed id mauris vitae urna tincidunt viverra a in ante. Cras vehicula mattis est, et consequat nisi iaculis at. Nullam nec tristique lorem.',
    author: 'John Doe',
    date: 'April 10, 2024',
  };

  return (
    <div>
      <h1>Blog</h1>
      <p>Welcome to our blog!</p>
      <BlogList posts={posts} />
      <hr />
      <BlogPost post={samplePost} />
    </div>
  );
};

export default Blog;
