import React from "react";
import { videoData } from '../../components/Videos/Sessions/2021/Precision/Fall/VideoData'
import { Button } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion'
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

import ReactPlayer from 'react-player'
import { useMediaQuery } from 'react-responsive'

export default function ArchivedVideos() {

const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  
return (
    <div className="App">
      <div className="speaker-bios row">
        {videoData &&
          videoData.map(p => {
            return (  
                <div className='player-wrapper'>
                    {isMobile ? (
                        <ReactPlayer
                        className='react-player'
                        url={p.url}
                        width='100%'
                        height='100%'
                        light={p.img}
                        controls={true}
                        onPlay
                        playing={true}
                        />
                    ) : (
                        <ReactPlayer
                        className='react-player'
                        url={p.url}
                        width='728px'
                        height='400px'
                        light={p.img}
                        controls={true}
                        onPlay
                        playing={true}
                    />
                    )
                }
                </div>  
            );
          })}
      </div>
    </div>
  );
}