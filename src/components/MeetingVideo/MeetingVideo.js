import React  from 'react';
import Clock from 'react-live-clock';
import ReactPlayer from 'react-player'
 
function MeetingVideo() {
    const clock = <Clock />
    {console.log("Clock", clock)}
    return (
        <div>
            <ReactPlayer url='https://fiservseminars-media.s3.amazonaws.com/Videos/Abiliti.mp4' controls='true'/>  
            <Clock format={'h:mm:ss a'} ticking={true} timezone={'US/Central'} />
        </div>
        
    );
  }
  
  export default MeetingVideo;