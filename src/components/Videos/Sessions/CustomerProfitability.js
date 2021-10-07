import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import { useMediaQuery } from 'react-responsive'
 
function CustomerProfitability() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

  return (
    <div className='player-wrapper'>
      {isMobile ? (
        <ReactPlayer
          className='react-player'
          url='https://seminar-media.s3.amazonaws.com/Spring/2021/Videos/Day+2+%233-+Customer+Profitability.mp4'
          width='100%'
          height='100%'
          light='https://seminar-media.s3.amazonaws.com/Spring/2021/Videos/Thumbnails/CustomerProfitability.png'
          controls={true}
          onPlay
          playing={true}
        />
      ) : (
        <ReactPlayer
          className='react-player'
          url='https://seminar-media.s3.amazonaws.com/Spring/2021/Videos/Day+2+%233-+Customer+Profitability.mp4'
          width='728px'
          height='400px'
          light='https://seminar-media.s3.amazonaws.com/Spring/2021/Videos/Thumbnails/CustomerProfitability.png'
          controls={true}
          onPlay
          playing={true}
        />
      )
    }
    </div>
  )
}
export default CustomerProfitability;