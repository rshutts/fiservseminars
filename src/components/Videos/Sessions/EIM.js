import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
 
class EIM extends Component {
    player = {}
    state = {
        video: {
            src: "http://d1cuz6w3aa44cz.cloudfront.net/EIM+Decision+Plans+Final+10012020.mp4",
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
export default EIM;