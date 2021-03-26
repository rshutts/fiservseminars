import React from 'react'
/* import CancelIcon from '@material-ui/icons/Cancel'; */
import "./Popup.css"
import PollContainer from './PollContainer/PollContainer';
import { getPolls } from '../../utils/redux/Actions';

const Popup = ({setPopup, polls}) => {

    console.log(polls)
    
    return (
        <div className="main-content-profile">
           {/* <div className="popupScreen">
                <div className="popup"> */}
                    {/* <CancelIcon className="cancel" onClick={() => setPopup(false)} /> */}
                    <h3>Your Polls</h3>
                    <PollContainer polls={polls} controls={true} />
              {/*   </div>
            </div>  */}
        </div>
        
    )
}

export default Popup
