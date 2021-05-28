import React, { Component } from "react";
import Comment from "./comment";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";

class Comments extends Component {
  state = {
    comment: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
    ],
  };

  render() {
    return (
      <div>
        <IconButton className="addCommentButton">
          <AddIcon className="addIcon" />
        </IconButton>
        {this.state.comment.map((comment) => (
          <Comment
            key={comment.id}
            className={this.props.className}
            in={this.props.in}
            value={comment.value}
          />
        ))}
      </div>
    );
  }
}

export default Comments;
