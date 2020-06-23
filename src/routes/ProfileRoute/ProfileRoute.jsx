import React, { useState, useEffect } from "react";

import UserProfile from "../../containers/UserProfile";
import UserPosts from "../../containers/UserPosts";

import Api from "../../services/api";

import Loading from "../../components/Loading";

const ProfileRoute = (props) => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  const { pathname } = window.location;
  const param = pathname.split("/")[2];

  useEffect(() => {
    Api.get(`users/${param}`, (result) => setUser(result));
  }, [param]);

  useEffect(() => {
    Api.get(`users/${param}/posts`, (result) => {
      setPosts([...posts, ...result]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param]);

  return (
    <>
      <div data-testid="profile-route">
        {posts.length === 0 ? (
          <Loading />
        ) : (
          <>
            <UserProfile
              avatar={user.avatar}
              name={user.name}
              username={user.username}
            />
            <UserPosts user={user} posts={posts} />
          </>
        )}
      </div>
    </>
  );
};

export default ProfileRoute;
