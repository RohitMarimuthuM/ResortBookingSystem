import React, { Component } from "react";
import "./Video.css"; // Import your CSS file for styling

class VideoPlayer extends Component {
  render() {
    return (
      <><div className="video-container">
        <video controls autoPlay className="video">
          <source
            src="https://player.vimeo.com/external/330412624.sd.mp4?s=853ea7644708b7986c992689dd351b0413d7b3ca&profile_id=164&oauth2_token_id=57447761" // Replace with your video URL
            type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div><br></br></>
    );
  }
}

export default VideoPlayer;
