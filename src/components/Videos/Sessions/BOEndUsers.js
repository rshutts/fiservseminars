import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
 
class BOEndUsers extends Component {
    player = {}
    state = {
        video: {
            src: "https://fiservseminars-media.s3.amazonaws.com/Videos/Meetings/Premier/day3/End+User-EDU.mp4",
            poster: "https://fiservseminars-media.s3.amazonaws.com/VideoOverlay.png"
        }
    }
 
    render() {
        return (
            <div className="live-video-session">
                <VideoPlayer
                    controls={true}
                    hideControls={['playbackrates']}
                    src={this.state.video.src}
                    poster={this.state.video.poster}
                    width="450"
                    height="300"
                    preload
                />
            </div>
        );
    }
}
export default BOEndUsers;