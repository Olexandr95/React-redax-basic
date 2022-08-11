import React from "react";
import { postObj } from "./post-objects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./post-scss.scss";
import { useState } from "react";
import MapPosts from "../addNewPost/mapPost";
import PostForm from "../addNewPost/postForm";

const Posts = () => {
  const [isActive, setActive] = useState(true);
  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <div>
      <div className="post-btn">
        <button className="post-new-btn hide" onClick={toggleClass}>
          {!isActive ? "+add New Post" : "Cloose Form"}
        </button>
      </div>
      <div className={isActive ? "show" : "hide"}>
        <PostForm />
      </div>
      <MapPosts />
      <h2 style={{ color: "white" }}>Prew HomeWork</h2>
      {postObj.map((user, index) => (
        <div className="main-conteiner" key={index}>
          <div>
            <img
              src={user.photo}
              alt={user.name}
              className="left-side-img"
            ></img>
          </div>
          <div className="right-side-content">
            <div className="content-tittle">
              <div>
                <span className="autor-name">{user.name}</span>
                <span className="autor-nickname-date">
                  {user.nickname} {user.date}
                </span>
              </div>
              <div className="autor-angle-down">
                <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
              </div>
            </div>
            <div className="content-main">
              <p className="content-main-title">{user.content}</p>
              <img
                src={user.image}
                alt={user.content}
                className="content-main-img"
              ></img>
            </div>
            <div className="content-footer-icons">
              <div className="comment-icon">
                <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
                <span>{user.comments}</span>
              </div>
              <div className="repost-icon">
                <FontAwesomeIcon icon={faRetweet}></FontAwesomeIcon>
                <span>{user.reposts}</span>
              </div>
              <div className="like-icon">
                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                <span>{user.likes}</span>
              </div>
              <div className="share-icon">
                <FontAwesomeIcon icon={faArrowUpFromBracket}></FontAwesomeIcon>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
