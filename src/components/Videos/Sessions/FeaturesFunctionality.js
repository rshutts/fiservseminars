import React, { Component } from 'react';
import ReactPlayer from 'react-player'
 
class FeaturesFunctionality extends Component {
    render () {
        return (
          <div className='player-wrapper'>
            <ReactPlayer
              className='react-player'
              url='https://seminar-media.s3.amazonaws.com/Spring/2021/Videos/Day+1+%231-System+Features+and+Functionality.mp4'
              width='728px'
              height='400px'
              light='https://seminar-media.s3.amazonaws.com/Spring/2021/Videos/Thumbnails/System-Features-and-Functionality.png'
              controls={true}
              onPlay
              playing={true}
            />
          </div>
        )
    }
}
export default FeaturesFunctionality;