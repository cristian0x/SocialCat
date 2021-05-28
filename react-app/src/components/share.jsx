import React, { Component } from "react";
import "../styles/share.css";
import SendIcon from "@material-ui/icons/Send";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import IconButton from "@material-ui/core/IconButton";

class Share extends Component {
  render() {
    return (
      <div className="card mb-3" id="card">
        <div className="card-body" id="card-body">
          <div className="top">
            <img
              src="/assets/profilePicture.png"
              alt=""
              className="profileSharePicture"
            />
            <input placeholder="What's up?" className="shareInput" />
          </div>
          <IconButton type="button" className="shareButton">
            <SendIcon className="shareIcon" />
          </IconButton>
        </div>
        <button type="button" id="AddAPhotoButton">
          <AddAPhotoIcon id="AddAPhotoIcon" />
        </button>
      </div>
    );
  }
}

export default Share;
