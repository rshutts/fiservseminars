import React from 'react'
import { Row, Col } from "reactstrap"
import Meetings from "../Utils/Meetings"

const SectionRight = () => {
    return (
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
    ) 
}

export default SectionRight