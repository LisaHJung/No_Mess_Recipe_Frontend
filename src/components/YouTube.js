import React from "react";
import YouTube from "react-youtube";
import "./YouTube.css";

class Youtube extends React.Component {
  VideoOnReady(event) {
    event.target.pauseVideo();
    console.log(event.target);
  }
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 1,
      },
    };

    const { videoId } = this.props;

    return (
      <YouTube
        className="youtube-video"
        containerClassName="youtube-container"
        videoId={videoId}
        opts={opts}
        onReady={this.VideoOnReady}
      />
    );
  }
}

export default Youtube;

// import React from 'react';

// import './App.css';
// import Video from "./Video"

// function App() {
//   return (
//     <div className="App">
//      <Video videoId='4aZr5hZXP_s'/>
//     </div>
//   );
// }

// export default App;
