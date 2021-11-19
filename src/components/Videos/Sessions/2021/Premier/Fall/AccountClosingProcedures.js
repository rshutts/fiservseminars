import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import { useMediaQuery } from 'react-responsive'
 
function AccountClosingProcedures() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

  return (
    <div className='player-wrapper'>
      {isMobile ? (
        <ReactPlayer
          className='react-player'
          url='https://d2vqeoj3f0fgvp.cloudfront.net/Fall/2021/Premier/session-videos/Account+Closing+Procedures.mp4'
          width='100%'
          height='100%'
          light='https://d2vqeoj3f0fgvp.cloudfront.net/Fall/2021/Premier/documents/images/closing-deposit-accounts.png'
          controls={true}
          onPlay
          playing={true}
        />
      ) : (
        <ReactPlayer
          className='react-player'
          url='https://d2vqeoj3f0fgvp.cloudfront.net/Fall/2021/Premier/session-videos/Account+Closing+Procedures.mp4'
          width='728px'
          height='400px'
          light='https://d2vqeoj3f0fgvp.cloudfront.net/Fall/2021/Premier/documents/images/closing-deposit-accounts.png'
          controls={true}
          onPlay
          playing={true}
        />
      )
    }
    </div>
  )
}
export default AccountClosingProcedures;
