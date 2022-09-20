import React from "react";
import "../css/Widgets.css";
import SearchIcon from "@mui/icons-material/Search";
import {
  TwitterShareButton,
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>

      <div className="widgets__widget--container">
        <h2>What's Happening</h2>

        <TwitterTweetEmbed tweetId={"1565318587736285184"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="twitter"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://twitter.com/twitter"}
          // options={{ text: "#reactjs is awesome", via: "" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
