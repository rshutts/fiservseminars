import React from 'react'
import { FaBan } from 'react-icons/fa';
import PollContainer from '../../PollContainer/PollContainer';

const Popup = ({setPopup, polls}) => {

    console.log(polls)
    
    return (
        <div className="popupScreen">
            <div className="popup">
                <FaBan className="cancel" onClick={() => setPopup(false)} />
                <h3>Your Polls ({polls.length})</h3>
                <PollContainer polls={polls} controls={true} />

            </div>
        </div>
    )
}

export default Popup
