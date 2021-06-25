import React from "react";
import ReactDOM from "react-dom";
import "../styles/profile.css";
import NavBar from "../components/navbar";
import Posts from "../components/posts";

export const Profile = () => {
  return (
    <>
      <NavBar />
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <img
            src="/assets/profilePicture.png"
            alt=""
            className="profileImage"
          />
          <h1 className="display-4">username</h1>
          <p className="lead">Hello everybody!</p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col" id="leftCol"></div>
          <div className="col middle">
            <Posts />
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};
