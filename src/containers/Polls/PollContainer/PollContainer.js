import React from 'react'
import Poll from './Poll'
import "./Poll.css"
import CreatePoll from './CreatePoll'
/* import UtilBox from './_UtilBox' */

const PollContainer = ({ polls, controls}) => {

    return (
        <div className="poll-container">
            {polls ? polls.map(p => (
                <Poll poll={p} key={p._id} controls={controls} />
            )) : <p>No polls found.</p>}
            <CreatePoll/>
        </div>    
    )
}

export default PollContainer
