import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlogList from '../components/blog/BlogList';
import BlogPost from '../components/blog/BlogPost';
import { fetchPostsRequest } from '../state/actions/postActions';
import { selectPosts } from '../state/selectors';

const Blog: React.FC = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts); 

  useEffect(() => {
    dispatch(fetchPostsRequest()); 
  }, [dispatch]);

 
  const samplePost = useSelector((state) => selectPostById(state, '1'));

  return (
    <div>
      <h1>Blog</h1>
      <p>Welcome to our blog!</p>
      {posts.length > 0 ? (
        <BlogList posts={posts} />
      ) : (
        <p>Loading posts...</p>
      )}
      <hr />
      {samplePost && <BlogPost post={samplePost} />}
    </div>
  );
};

export default Blog;
