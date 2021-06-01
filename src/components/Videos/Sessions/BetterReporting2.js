import React, { Component } from 'react';
import ReactPlayer from 'react-player'
 
class BetterReporting2 extends Component {
    render () {
        return (
          <div className='player-wrapper'>
            <ReactPlayer
              className='react-player'
              url='https://seminar-media.s3.amazonaws.com/Spring/2021/Videos/Day+1+%233-+Gaining+Customer+Clarity+-+Session+2.mp4'
              width='728px'
              height='400px'
              light='https://seminar-media.s3.amazonaws.com/Spring/2021/Videos/Thumbnails/BetterReporting2.png'
              controls={true}
              onPlay
              playing={true}
            />
          </div>
        )
    }
}
export default BetterReporting2;