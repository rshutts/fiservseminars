import React from 'react'
import Iframe from 'react-iframe'

const SectionLeft = () => {
    if (window.location.href === "http://localhost:8000/app/meetings" || window.location.href === "https://test.fiservseminars.com/meetings") {
        return (
            <section className="left meetings">
                <div>
                    <h1>
                        Video Feed
                    </h1>
                    <Iframe url="https://www.youtube.com/embed/28MfzZ1mtF4"
                        width="560px"
                        height="315px"
                        id="myId"
                        className="myClassname"
                        display="initial"
                        position="relative"/>
                    </div> 
                <div className="chat">
                    <h1>
                        Live Chat
                    </h1>
                    <div className="chat-window">
                </div>
            </div>   
            </section>
            
        ) 
    } else {
        return (
            <section className="left">
                <div>
                    <h1>Introduction</h1>
                        <div className="welcome-video">
                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Cpcv-g9TEPI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    <p>We are better together. Join Fiserv experts and your peers for interactive presentations and discussions that provide the necessary insight to become more efficient. Use this virtual venue to learn more about the software you use every day and share your best practices and software tips all while building a diverse network of professional relationships.</p>
                    <p>This fall, the Precision Education Seminars are three days of interactive sessions that provide the ideal setting to gain new perspectives and make valuable connections with peers and Fiserv experts. During the three days you will experience a Simulive training event, On-Demand recordings including a look into the new User Interface (UI) and Abiliti for online banking, a virtual social hour, a chance to win awesome prizes, a few special video surprises and access to the electronic version of the meeting material.</p>
                </div>
            </section>
            
        ); 
    }  
}

export default SectionLeft