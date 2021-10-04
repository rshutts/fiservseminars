import React, { Component } from 'react';
import ReactPlayer from 'react-player'
 
class RegulatoryReporting extends Component {
    render () {
        return (
          <div className='player-wrapper'>
            <ReactPlayer
              className='react-player'
              url='https://seminar-media.s3.amazonaws.com/Spring/2021/Videos/Day+3+%231-+Regulatory+Reporting.mp4'
              width='728px'
              height='400px'
              light='https://seminar-media.s3.amazonaws.com/Spring/2021/Videos/Thumbnails/RegulatoryReporting.png'
              controls={true}
              onPlay
              playing={true}
            />
          </div>
        )
    }
}
export default RegulatoryReporting;