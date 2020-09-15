import React from 'react'
import { Row, Col } from "reactstrap"
import { Link } from "gatsby"
import Meetings from "./meetings"
import Notes from '../components/notes'

const SectionRight = () => {
    if (window.location.href === "http://localhost:8000/app/meetings" || window.location.href === "https://test.fiservseminars.com/meetings") {
        return (
            <section className="right meetings">
                <Notes/>
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