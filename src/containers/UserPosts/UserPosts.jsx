import React from "react";

import Post from "../../components/Post";

import "./UserPosts.scss";

const UserPosts = ({ user, posts }) => (
  <div data-testid="user-posts" className="container">
    <section className="user-posts">
      {posts.map((post) => (
        <Post key={post.id} postInfo={post} />
      ))}
    </section>
  </div>
);

export default UserPosts;
