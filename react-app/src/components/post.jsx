import React, { Component, useState } from "react";
import "../styles/post.css";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import Comments from "./comments";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function Post(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const [value, setValue] = useState(props.value);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="card mb-3" id="cardPost">
      <div className="card-body">
        <div className="top">
          <img
            src="/assets/profilePicture.png"
            alt=""
            className="userProfilePicture"
          />
          <button type="button" id="postUsernameButton">
            <span className="postUsername">Marek</span>
          </button>
          <span className="postDate">10 minutes ago</span>
          <div className="dropdown">
            <IconButton
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <MoreVertIcon id="moreVertIcon" />
            </IconButton>
            <div className="dropdown-menu" id="postDropdownMenu">
              <a className="dropdown-item" href="/">
                Delete
              </a>
              <a className="dropdown-item" href="/">
                Edit
              </a>
            </div>
          </div>
        </div>
        <div className="center">
          <span className="postContent">What a nice view!</span>
          <img src="/assets/sunset.jpg" alt="" className="postImage" />
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
          <span className="addShowComments">Add/show comments</span>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            id="showCommentsButton"
          >
            <ExpandMoreIcon />
          </IconButton>
          <Comments className={classes.root} in={expanded} />
        </div>
      </div>
    </div>
  );
}
