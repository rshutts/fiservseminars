import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import { useMediaQuery } from 'react-responsive'
 
function BetterReporting2() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

  return (
    <div className='player-wrapper'>
      {isMobile ? (
        <ReactPlayer
          className='react-player'
          url='https://seminar-media.s3.amazonaws.com/Spring/2021/Videos/Day+1+%233-+Gaining+Customer+Clarity+-+Session+2.mp4'
          width='100%'
          height='100%'
          light='https://seminar-media.s3.amazonaws.com/Spring/2021/Videos/Thumbnails/BetterReporting2.png'
          controls={true}
          onPlay
          playing={true}
        />
      ) : (
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
      )
    }
    </div>
  )
}
export default BetterReporting2;