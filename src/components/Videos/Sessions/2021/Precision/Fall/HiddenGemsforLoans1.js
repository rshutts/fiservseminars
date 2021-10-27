import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import { useMediaQuery } from 'react-responsive'
 
function HiddenGemsforLoans1() {

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

    return (
      <div className='player-wrapper'>
        {isMobile ? (
          <ReactPlayer
            className='react-player'
            url='https://d2vqeoj3f0fgvp.cloudfront.net/Fall/2021/Videos/Hidden+Gems+for+Loans+-+Session+1.mp4'
            width='728px'
            height='100%'
            light='https://d2vqeoj3f0fgvp.cloudfront.net/Fall/2021/Videos/hidden-gems-1.png'
            controls={true}
            onPlay
            playing={true}
          />
        ) : (
          <ReactPlayer
            className='react-player'
            url='https://d2vqeoj3f0fgvp.cloudfront.net/Fall/2021/Videos/Hidden+Gems+for+Loans+-+Session+1.mp4'
            width='728px'
            height='400px'
            light='https://d2vqeoj3f0fgvp.cloudfront.net/Fall/2021/Videos/hidden-gems-1.png'
            controls={true}
            onPlay
            playing={true}
          />
      )
    }
    </div>
  )
}
export default HiddenGemsforLoans1;