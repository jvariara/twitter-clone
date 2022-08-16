import React, { useEffect, useState } from "react";
import "../css/Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import db from "../firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />

      {posts.map((post) => (
        <Post
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
      <Post
        displayName="Justin"
        username="justinvariara"
        verified={true}
        text="It is working!"
        avatar="https://i.pinimg.com/originals/ac/41/98/ac419828d83bfe67621bda852c3672b1.jpg"
        image="https://media.giphy.com/media/tEcIyVc6ukQV2eb86t/giphy.gif"
      />
    </div>
  );
}

export default Feed;
