import React, { Fragment, useState } from 'react';
import Sidenav from "../components/SideNav";
import Chat from '../components/Chat/Chat';
import LiveVideo from '../components/LiveVideos/livevideo'
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading";
import Notes from '../components/Notes'
import { Header  } from 'semantic-ui-react'

const Meetings = () => {
  const [password1, setPassword1] = useState({ shown: true });
  const [password2, setPassword2] = useState({ shown: true });
  const [password3, setPassword3] = useState({ shown: true });

  const [session1] = useState({ shown: true });
  
  return (
    <Fragment>
      <div className="next-steps my-5 content-wrapper">
        <Sidenav />
        <div className="main-content">
          <div className="meetings-container">
            <Header as='h2' className="header page-title meetings">
              <i className='fa fa-fw fa-users' style={{ fontSize: '1.5em', margin: '5px 10px 5px 5px' }}/>Learning Sessions
            </Header>
            <div className="meetings-sections">
              <section className='left meetings'>
                <div className='meeting-video'>
                    <Chat />
                </div>
                <div className='chat'>
                  /*<div>
                    <p className="networking">Please join us at 11:15 a.m CST and/or 4:15 p.m. CST for a networking session. Connect with Fiserv experts and collaborate with your peers. Please click the link below to access the networking. Look forward to collaborating soon.</p>
                      <ul>
                        <li>
                          <a href="https://fiserventerprise.webex.com/mw3300/mywebex/default.do?service=7&main_url=%2Ftc3300%2Ftrainingcenter%2Fdefault.do%3Fsiteurl%3Dfiserventerprise%26main_url%3D%252Ftc3300%252Fe.do%253FAT%253DMI%2526%2526Host%253DQUhTSwAAAAQlBDE7fg1N57HIe8OnteGvX1Vv48X1vh7Va_gXbepktR4Jb1H-Oys0tDCsjamtcwqNFFbzc8o1HP-q4wEpe0Lp0%2526UID%253D1602813116%2526MTID%253Dt2927ad9d7fddcb0cd1afe43888635c58%2526siteurl%253Dfiserventerprise%2526confID%253D174473345958463409%2526ticket%253D4832534b00000004c59870b9b578e5e650237f5608d05e56b184c0e96d0fb91877dfa10d49c67aae&siteurl=fiserventerprise" target="_blank">Loan Networking</a>
                            <ul>
                              <li><b>Password:</b> PpWKpmA*576</li>
                              <li><b>SessionID:</b> 131 711 2914</li>
                            </ul>
                        </li>
                        <br/>
                        <li>
                          <a href="https://fiserventerprise.webex.com/mw3300/mywebex/default.do?service=7&main_url=%2Ftc3300%2Ftrainingcenter%2Fdefault.do%3Fsiteurl%3Dfiserventerprise%26main_url%3D%252Ftc3300%252Fe.do%253FAT%253DMI%2526%2526Host%253DQUhTSwAAAAQa1TQNtVGGOyCuFe2qpEvCafgTBxIJZ81AeliYylRX6XMbcKKNpcrurdHEK7_Ul9X43lRAwnRTx8uXT9AB-pqJ0%2526UID%253D1602962036%2526MTID%253Dt69bac292a8c2b4668c174b1fa87064af%2526siteurl%253Dfiserventerprise%2526confID%253D174475428467099082%2526ticket%253D4832534b00000004abf37523357db9aa9b3a775ffbbd895966de3a95b5896aa6d4ddc76741228dc5&siteurl=fiserventerprise" target="_blank">Deposit Networking</a>
                          <ul>
                            <li><b>Password:</b> M&VyenkN@89</li>
                            <li><b>SessionID:</b> 131 863 5863</li>
                          </ul>
                        </li>
                        <br/>
                        <li>
                          <a href="https://fiserventerprise.webex.com/mw3300/mywebex/default.do?service=7&main_url=%2Ftc3300%2Ftrainingcenter%2Fdefault.do%3Fsiteurl%3Dfiserventerprise%26main_url%3D%252Ftc3300%252Fe.do%253FAT%253DMI%2526%2526Host%253DQUhTSwAAAARxz-8e15ly2RquFjgnwIyn0EdSC7uVxy1YPMWVNvnMf3RJof_3ugf5MrEm7UPQ6TVTxeYHzNPdfrcDtGKMZ8Vt0%2526UID%253D1603023941%2526MTID%253Dtc463345d3e597ae7be4699f8901e2855%2526siteurl%253Dfiserventerprise%2526confID%253D174476023065265357%2526ticket%253D4832534b00000004c3809b4409fe71701867375a8885d0939b5668516ec3910f80abafdee7addeed&siteurl=fiserventerprise" target="_blank">BPM Networking</a>
                          <ul>
                            <li><b>Password:</b> edCxiRw@856</li>
                            <li><b>SessionID:</b> 131 311 2254</li>
                          </ul>
                        </li>
                      </ul>
                  </div>*/              
                <Notes />
                </div>
              </section>
            </div>
            
          </div>
            
        </div>
      </div>
    </Fragment>
  )
  
}

export default withAuthenticationRequired(Meetings, {
  onRedirecting: () => <Loading />,
});
