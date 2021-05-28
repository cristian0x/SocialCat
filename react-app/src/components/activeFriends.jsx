import React, { Component } from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import "../styles/activeFriends.css";

class ActiveFriends extends Component {
  render() {
    return (
      <div className="mainContainer">
        <div className="activeUser" id="heading">
          <h5>Active friends</h5>
        </div>
        <div className="activeUser">
          <FiberManualRecordIcon className="onlineIcon" />
          <h5>Frank</h5>
        </div>
        <div className="activeUser">
          <FiberManualRecordIcon className="onlineIcon" />
          <h5>Kate</h5>
        </div>
        <div className="activeUser">
          <FiberManualRecordIcon className="onlineIcon" />
          <h5>Maria</h5>
        </div>
        <div className="activeUser">
          <FiberManualRecordIcon className="onlineIcon" />
          <h5>John</h5>
        </div>
        <div className="activeUser">
          <FiberManualRecordIcon className="onlineIcon" />
          <h5>Nicole</h5>
        </div>
        <div className="activeUser">
          <FiberManualRecordIcon className="onlineIcon" />
          <h5>Evelyn</h5>
        </div>
        <div className="activeUser">
          <FiberManualRecordIcon className="onlineIcon" />
          <h5>James</h5>
        </div>
        <div className="activeUser">
          <FiberManualRecordIcon className="onlineIcon" />
          <h5>William</h5>
        </div>
        <div className="activeUser">
          <FiberManualRecordIcon className="onlineIcon" />
          <h5>Edward</h5>
        </div>
        <div className="activeUser">
          <FiberManualRecordIcon className="onlineIcon" />
          <h5>Abby</h5>
        </div>
        <div className="activeUser">
          <FiberManualRecordIcon className="onlineIcon" />
          <h5>Rachel</h5>
        </div>
        <div className="activeUser">
          <FiberManualRecordIcon className="onlineIcon" />
          <h5>Vanessa</h5>
        </div>
        <div className="activeUser">
          <FiberManualRecordIcon className="offlineIcon" />
          <h5>Peter</h5>
        </div>
        <div className="activeUser">
          <FiberManualRecordIcon className="offlineIcon" />
          <h5>Mark</h5>
        </div>
        <div className="activeUser">
          <FiberManualRecordIcon className="offlineIcon" />
          <h5>Anna</h5>
        </div>
        <div className="activeUser">
          <FiberManualRecordIcon className="offlineIcon" />
          <h5>Robert</h5>
        </div>
        <div className="activeUser">
          <FiberManualRecordIcon className="offlineIcon" />
          <h5>Bart</h5>
        </div>
        <div className="activeUser">
          <FiberManualRecordIcon className="offlineIcon" />
          <h5>Matthew</h5>
        </div>
      </div>
    );
  }
}

export default ActiveFriends;
