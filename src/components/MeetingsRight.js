import React from 'react'
import { Link } from "gatsby"

const SectionBottom = () => {
    return (
        <section className="bottom meetings">
            <div className="chat">
                <h1>
                    Chat
                </h1>
                <div className="chat-window">

                </div>
            </div>
            <div className="notes">
                <h1>
                    Notes
                </h1>
                <textarea className="meetingNotes"/>
                <Link className="note-save">Save Notes</Link> 
            </div>
        </section>
   
    )
}

export default SectionBottom