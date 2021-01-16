import { Avatar, Button } from "@material-ui/core";
import React from "react";
import "./TweetBox.css";

function TweetBox() {
  return (
    <div className="TweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1087785458942332933/KzTIVZTb_400x400.jpg" />
        </div>
        <Button>Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
