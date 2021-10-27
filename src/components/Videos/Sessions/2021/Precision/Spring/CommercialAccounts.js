import React, { Component } from 'react';
import ReactPlayer from 'react-player'
 
class CommercialAccounts extends Component {
    render () {
        return (
          <div className='player-wrapper'>
            <ReactPlayer
              className='react-player'
              url='https://seminar-media.s3.amazonaws.com/Spring/2021/Videos/Day+3+%232-+Commercial+Accounts.mp4'
              width='728px'
              height='400px'
              light='https://seminar-media.s3.amazonaws.com/Spring/2021/Videos/Thumbnails/CommercialAccounts.png'
              controls={true}
              onPlay
              playing={true}
            />
          </div>
        )
    }
}
export default CommercialAccounts;