import { Button, Avatar } from "@mui/material";
import React, { useState } from "react";
import "../css/TweetBox.css";
import db from "../firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Justin Variara",
      username: "justinvariara",
      verified: true,
      text: tweetMessage,
      avatar: "",
      image: tweetImage,
    });

    setTweetMessage("")
    setTweetImage("")
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar></Avatar>
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => e.target.value}
          className="tweetBox__inputImg"
          placeholder="OPTIONAL: Enter image URL"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetBtn"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
