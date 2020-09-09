import React from 'react'
import { Row, Col } from "reactstrap"
import { Link } from "react-router-dom";
import Meetings from "../Utils/Meetings"

const SectionRight = () => {
    if (window.location.href === "http://localhost:3000/meetings" || window.location.href === "https://test.fiservseminars.com/meetings") {
        return (
            <section className="right meetings">
                <h1>
                    Notes
                </h1>
               <textarea className="meetingNotes">
                    
                </textarea>
                <Link className="note-save">Save Notes</Link> 
            </section>
        )
    } else {
        return (
            <section className="right">
                <div>
                    <div className="meetingContent">
                        <h1>
                            Meetings
                        </h1>
                    </div>
                    <div className="meetings">
                        <Row className="">
                            {Meetings.map((col, i) => (
                            <Col key={i} md={5} className="meetingContent">
                                <h3 className="meetingTitle">
                                    {col.title}
                                </h3>
                                <p>
                                    {col.date} @ {col.time} 
                                </p>
                            </Col>
                            ))}
                        </Row>
                    </div> 
                </div>
            </section>
        )
    };     
}

export default SectionRight