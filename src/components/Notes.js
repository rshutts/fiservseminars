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
                <a href="https://urldefense.proofpoint.com/v2/url?u=https-3A__emeraldconnect.webex.com_emeraldconnect_k2_j.php-3FMTID-3Dt5c57190a7c0aaf5d4604c2a4c70fdd29&d=DwMGaQ&c=rE3mhBYFJfJGqQ7WI0-DPw&r=lD_m483ZNdrPoub1glQ0NI-p62b7YfEyJ2JEVPaf7E0&m=rmeJUmqTkE3lzc31hwcqO-Lrwvfcmsgqecw4pNg5hQ8&s=U1saRugs4rcD9bjUKB_sLoWj1voRtaK1WbThtLmLLrw&e=" target="_blank">Loans Networking</a><br/>
                Session number: <b>126 021 6335</b><br/> 
                Session password: <b>DPtTMxhq346</b>
              </p>
              <p>
                <a href="https://urldefense.proofpoint.com/v2/url?u=https-3A__emeraldconnect.webex.com_emeraldconnect_k2_j.php-3FMTID-3Dt72a695bb584ae13124802b0c53b1336b&d=DwMGaQ&c=rE3mhBYFJfJGqQ7WI0-DPw&r=lD_m483ZNdrPoub1glQ0NI-p62b7YfEyJ2JEVPaf7E0&m=PZRX3xEN7Fqmj96-fly0D6p5wVJPXfpEeKDchqeILdA&s=HvgwH2-oRkZ8FkvZ9mUtKRQOkBw0-jlk5bbuZj4Wk6s&e=" target="_blank">Deposit Networking</a><br/>
                Session number: <b>126 571 4823</b><br/>
                Session password: <b>77UPjEp5mM4</b> 
              </p>
              <p>
                <a href="https://urldefense.proofpoint.com/v2/url?u=https-3A__fiserventerprise.webex.com_fiserventerprise_k2_j.php-3FMTID-3Dtbdc4430fbc33d7c93f8c93ec5ba360bd&d=DwMGaQ&c=rE3mhBYFJfJGqQ7WI0-DPw&r=lD_m483ZNdrPoub1glQ0NI-p62b7YfEyJ2JEVPaf7E0&m=YaMZdcmifKCUiDuUKcy_lQSAJlbszXcP9tSjV_fzJ6g&s=36HkgNpkEODftGbC2SmzLj943YkR_a0gNpH81ITsU6E&e=" target="_blank">BPM Networking</a><br/>
                Session number: <b>131 364 7794</b><br/>
                Session password: <b>8mKEKhqJ*95</b>
              </p>
              <p>
                <a href="https://urldefense.proofpoint.com/v2/url?u=https-3A__fiserventerprise.webex.com_fiserventerprise_k2_j.php-3FMTID-3Dt49fa0160982be316598454fa5da23a82&d=DwMGaQ&c=rE3mhBYFJfJGqQ7WI0-DPw&r=lD_m483ZNdrPoub1glQ0NI-p62b7YfEyJ2JEVPaf7E0&m=4N-uQ5_WrnOZnlX5vGOZazpJ-r-ZvCP9IZLm0a1YihE&s=pCzxVoxfdrXmpD8D825LvwmWtVbeJlm3yxh8oYjnYf0&e=" target="_blank">Business Online Networking</a><br/>
                Session number: <b>131 063 1507</b><br/>
                Session password: <b>JnV8u2ENM$8</b>
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