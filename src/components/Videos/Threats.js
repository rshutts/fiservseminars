import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
 
class Threats extends Component {
    player = {}
    state = {
        video: {
            src: "https://fiservseminars-media.s3.amazonaws.com/Videos/Threats+From+Beyond+Your+Four+Walls+An+Intelligence-Based+Approach+To+Reducing+Your+Third-Party+Cyber+Risk-20200812+1802-1+(1).mp4",
            poster: "https://fiservseminars-media.s3.amazonaws.com/VideoOverlay.png"
        }
    }

    render() {
        return (
            <div className="live-video-session">
                <VideoPlayer
                    controls={true}
                    src={this.state.video.src}
                    poster={this.state.video.poster}
                    width="450"
                    height="300"
                />
            </div>
        );
    }
}
export default Threats;