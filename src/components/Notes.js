import React, { useContext, useReducer } from 'react';

import AddNote from '../notes/AddNote';
import NoteList from '../notes/NoteList';
import EditNote from '../notes/EditNote';
import NotesContext from '../context';
import notesReducer from '../reducer';

function Notes() {
  const initialState = useContext(NotesContext);
  const [state, dispatch] = useReducer(notesReducer, initialState);
  return (
    <NotesContext.Provider value={{ state, dispatch }}>
      {state.currentNote === null ? (
        <div>
          <div className="disclaimer-networking">
            <div style={{color: "red", textAlign: "center", fontWeight: "normal"}}>
              <h3 style={{fontWeight: "normal"}}>
                **If the video does not start with sound, please hover over the video and make sure the player is not on mute.**
              </h3>
              <h3 style={{fontWeight: "normal"}}>
                **If you are having any technical difficulties with the video, please visit the FAQ page on the left sidebar to help answer your questions.**
              </h3>
            </div>
            {/* <br/>
            <div>
              <p>
                <a href="https://urldefense.proofpoint.com/v2/url?u=https-3A__fiserventerprise.webex.com_fiserventerprise_k2_j.php-3FMTID-3Dt7fa8dea652004f624e1a2e50b81b1cf1&d=DwMGaQ&c=rE3mhBYFJfJGqQ7WI0-DPw&r=lD_m483ZNdrPoub1glQ0NI-p62b7YfEyJ2JEVPaf7E0&m=eL_OJA6ItHfgdTXuNYO04nDzrciyBkaShThVIkeVjTo&s=vXbER_VXbF9CEk6kTiaGZM4gaaO28hjFbujwcdZOx2U&e=" target="_blank">BPM Networking</a><br/>
                Session number: <b>131 082 7617</b><br/> 
                Session password: <b>cmUpXFd?855</b>
              </p>
              <p>
                <a href="https://urldefense.proofpoint.com/v2/url?u=https-3A__fiserventerprise.webex.com_fiserventerprise_k2_j.php-3FMTID-3Dt3efaaa7f350754f687c4919bf5e49984&d=DwMGaQ&c=rE3mhBYFJfJGqQ7WI0-DPw&r=lD_m483ZNdrPoub1glQ0NI-p62b7YfEyJ2JEVPaf7E0&m=M-DqMWVdSHP4W2T3BHd-Xlv4IQ16tBfVb2wOepeHMD8&s=TZYhwlMIItf9crCiHfo2fA_w24hiNZreCPVlbfMyUAM&e=" target="_blank">Deposit Networking</a><br/>
                Session number: <b>131 078 2233</b><br/>
                Session password: <b>5v2KwEgJC@9</b> 
              </p>
              <p>
                <a href="https://urldefense.proofpoint.com/v2/url?u=https-3A__fiserventerprise.webex.com_fiserventerprise_k2_j.php-3FMTID-3Dt0d19b04ae9021e6470d89555aab8ed84&d=DwMGaQ&c=rE3mhBYFJfJGqQ7WI0-DPw&r=lD_m483ZNdrPoub1glQ0NI-p62b7YfEyJ2JEVPaf7E0&m=h2b0TsUdPeTNVxH5Zs1rG9r_ArM47mS1ApFy9z8ODqU&s=RXre_uzBdOZszQarL7ZZ5hFsJGh-DHwBiqt9GzbXzn8&e=" target="_blank">Loan Networking</a><br/>
                Session number: <b>131 570 2566</b><br/>
                Session password: <b>mVghir6B*82</b>
              </p>
              <p>
                <a href="https://urldefense.proofpoint.com/v2/url?u=https-3A__fiserventerprise.webex.com_fiserventerprise_k2_j.php-3FMTID-3Dt7cd5c4ae1a21f5c5a4921936f909cda9&d=DwMGaQ&c=rE3mhBYFJfJGqQ7WI0-DPw&r=lD_m483ZNdrPoub1glQ0NI-p62b7YfEyJ2JEVPaf7E0&m=cjYr1X5Q0rz5TdPHXhrLJMqIW1TDZd3V3IV7Zx0bago&s=iRacLIu7xPAtBLQ-KbV_-M4x6nNWbN1ejgRo50ev2VM&e=" target="_blank">Business Online Networking</a><br/>
                Session number: <b>131 959 5773</b><br/>
                Session password: <b>jdHpdJa@455</b>
              </p>
            </div> */}
          </div>
          
        <AddNote />
        <NoteList />
        </div>
      ) : (
        <EditNote />
      )}
    </NotesContext.Provider>
  );
}

export default Notes;