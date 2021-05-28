import React, { Component } from "react";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import FavoriteIcon from "@material-ui/icons/Favorite";

export default function Comment(props) {
  const [value, setValue] = React.useState(props.value);

  return (
    <Card className={props.className} id="commentCard">
      <Collapse in={props.in} timeout="auto" unmountOnExit>
        <CardContent>
          <div className="dropdown">
            <IconButton
              type="button"
              id="commentOptions"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <MoreVertIcon id="moreVertIcon" />
            </IconButton>
            <div className="dropdown-menu dropdownComment" id="dropdownComment">
              <a className="dropdown-item" href="/">
                Delete
              </a>
              <a className="dropdown-item" href="/">
                Edit
              </a>
            </div>
          </div>
          <img
            src="/assets/profilePicture.png"
            alt=""
            className="commentProfilePicture"
          />
          <div className="commentContent">
            <h5>Anna</h5>
            <span>Beautiful view!</span>
          </div>
          <div className="bottom">
            <IconButton
              className="likeButton"
              onClick={() => setValue(value + 1)}
            >
              <ThumbUpAltIcon className="likeIcon" />
            </IconButton>
            <IconButton
              className="heartButton"
              onClick={() => setValue(value + 1)}
            >
              <FavoriteIcon className="heartIcon" />
            </IconButton>
            <span className="count">{value}</span>
          </div>
        </CardContent>
      </Collapse>
    </Card>
  );
}
