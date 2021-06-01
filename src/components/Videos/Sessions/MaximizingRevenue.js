import React, { Component } from 'react';
import ReactPlayer from 'react-player'
 
class MaximizingRevenue extends Component {
    render () {
        return (
          <div className='player-wrapper'>
            <ReactPlayer
              className='react-player'
              url='https://seminar-media.s3.amazonaws.com/Spring/2021/Videos/Day+2+%231-+Maximizing+Revenue.mp4'
              width='728px'
              height='400px'
              light='https://seminar-media.s3.amazonaws.com/Spring/2021/Videos/Thumbnails/MaximizingRevenue.png'
              controls={true}
              onPlay
              playing={true}
            />
          </div>
        )
    }
}
export default MaximizingRevenue;