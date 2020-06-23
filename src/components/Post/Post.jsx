import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Post.scss";

const Post = ({ postInfo, userInfo }) => {
  const [follow, setFollow] = useState({
    status: false,
    classContentFollowing: "follow-btn is-following",
    classContentNotFollowing: "follow-btn",
    textNotFollowing: "Seguir",
    textFollowing: "Seguindo",
    text: "Seguir",
    classContent: "follow-btn",
  });

  const [likes, setLikes] = useState({
    count: 1,
    liked: false,
    classNotLiked: "far fa-heart",
    classLiked: "fas fa-heart",
    classContent: "far fa-heart",
  });

  const handleFollow = (e) => {
    if (follow.status) {
      setFollow({
        ...follow,
        status: false,
        text: follow.textNotFollowing,
        classContent: follow.classContentNotFollowing,
      });
    } else {
      setFollow({
        ...follow,
        status: true,
        text: follow.textFollowing,
        classContent: follow.classContentFollowing,
      });
    }
  };

  const handleLike = (e) => {
    if (likes.status) {
      setLikes({
        ...likes,
        status: false,
        classContent: likes.classNotLiked,
        count: likes.count - 1,
      });
    } else {
      setLikes({
        ...likes,
        status: true,
        classContent: likes.classLiked,
        count: likes.count + 1,
      });
    }
  };

  return (
    <article data-testid="post" className="post">
      {userInfo && (
        <header className="post__header">
          <div className="user">
            <Link to={`/users/${userInfo.id}`} className="user__thumb">
              <img src={userInfo.avatar} alt={userInfo.name} />
            </Link>
            <Link to={`/users/${userInfo.id}`} className="user__name">
              {userInfo.name}
            </Link>
          </div>
          <button className="post__context">
            <span onClick={handleFollow} className={follow.classContent}>
              {follow.text}
            </span>
          </button>
        </header>
      )}
      <figure className="post__figure">
        <img src={postInfo.imageUrl} alt="" />
      </figure>
      {userInfo && (
        <nav className="post__controls">
          <button onClick={handleLike} className="post__control">
            <i className={likes.classContent} />
          </button>
          <div className="post__status">
            <div className="user">
              <span>
                Curtido por
                <a href="/"> Santino Rowe</a>
                <a href="/">{`e outra${likes.count > 1 ? "s" : ""} ${
                  likes.count
                } pessoa${likes.count > 1 ? "s" : ""}`}</a>
              </span>
            </div>
          </div>
        </nav>
      )}
    </article>
  );
};

export default Post;
