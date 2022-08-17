import { Button, Avatar } from "@mui/material";
import React, { useState } from "react";
import "../css/TweetBox.css";
import db from "../firebase";
import {
    selectUserName,
    selectUserPhoto,
    selectUserUsername,
} from "../features/userSlice";
import { useSelector } from "react-redux"

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const userPhoto = useSelector(selectUserPhoto)
  const userName = useSelector(selectUserName)
  const userEmail = useSelector(selectUserUsername)

  console.log(userPhoto)

  const getUsername = () => {
    let userUsername = []
    for(let i = 0; i < userEmail.length; i++) {
        if(userEmail[i] === '@'){
            break
        }else {
            userUsername.push(userEmail[i])
        }
    }
    return userUsername.join("")
  }

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: userName,
      username: getUsername(),
      verified: true,
      text: tweetMessage,
      avatar: userPhoto,
      image: tweetImage,
    });

    setTweetMessage("")
    setTweetImage("")
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={userPhoto}></Avatar>
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
