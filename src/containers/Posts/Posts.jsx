import React from "react";

import Post from "../../components/Post";

const Posts = ({ posts, getUserHandler }) => {
  return (
    <div data-testid="posts" className="container">
      <section className="feed">
        {posts.map((post) => (
          <Post postInfo={post} userInfo={getUserHandler(post.userId)} />
        ))}
      </section>
    </div>
  );
};

export default Posts;