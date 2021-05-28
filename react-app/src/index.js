import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/navbar";
import Share from "./components/share";
import Posts from "./components/posts";
import Post from "./components/post";
import Comment from "./components/comment";
import ActiveFriends from "./components/activeFriends";
import ChatIcon from "@material-ui/icons/Chat";
import GroupIcon from "@material-ui/icons/Group";
import EventIcon from "@material-ui/icons/Event";

ReactDOM.render(
  <>
    <NavBar />
    <div className="container">
      <div className="row">
        <div className="col" id="leftCol">
          <div id="leftColChat">
            <ChatIcon className="chatIcon" />
            <h5>Chat</h5>
          </div>
          <div id="leftColGroups">
            <GroupIcon className="groupIcon" />
            <h5>Groups</h5>
          </div>
          <div id="leftColEvents">
            <EventIcon className="eventIcon" />
            <h5>Events</h5>
          </div>
        </div>
        <div className="col middle" id="scrollable">
          <Share />
          <Posts />
          <div className="App">
            <button type="button" className="seeMorePostsButton">
              See more posts
            </button>
          </div>
        </div>
        <div className="col" id="activeFriends">
          <ActiveFriends className="fixed-right" />
        </div>
      </div>
    </div>
  </>,
  document.getElementById("root")
);
