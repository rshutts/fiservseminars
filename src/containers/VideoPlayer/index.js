   
import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
 
class VideoJS extends Component {
    player = {}
    state = {
        video: {
            src: "https://ca351d1575ab.us-east-1.playback.live-video.net/api/video/v1/us-east-1.076005434014.channel.1wx80PMLCGDh.m3u8",
            poster: "https://fiservseminars-media.s3.amazonaws.com/no-video.png"
        }
    }
    render() {
        return (
            <div className="player-wrapper">
                <header>
                    <h1>Video</h1>
                </header>
                <div className="aspect-169 pos-relative full-width full-height">
                  <VideoPlayer
                    className="main-video-player"
                    controls={true}
                    hideControls={['playbackrates']}
                    src={this.state.video.src}
                    poster={this.state.video.poster}
                    /* onReady={this.onPlayerReady.bind(this)} */
                    preload
                    autoplay
                />
                </div>
                
                <div style={{color: "red", textAlign: "center", fontWeight: "normal"}}>
                  <h3 style={{fontWeight: "normal"}}>
                    **If the video does not start with sound, please hover over the video and make sure the player is not on mute.**
                  </h3>
                </div>
            </div>
        );
    }
}
export default VideoJS;
