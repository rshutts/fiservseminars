import React, { useState } from "react";
import { speakerData } from '../../components/Data/SpeakerData'
import { Button } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion'
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

export default function SpeakerBios() {

  const [selectedVal, selectionChange] = useState("");
  const [selectedChild, selectionChild] = useState("");

  return (
    <div className="App">
      <div className="speaker-bios row">
        {speakerData &&
          speakerData.map(p => {
            return (    
                <CardDeck>
                    <Card>
                    <Card.Img variant="top" style={{ width: '150px'}} src={p.img} />
                        <Card.Body>
                            <Card.Title>
                                {p.name}
                            </Card.Title>
                            {p.questions &&
                                p.questions.map(c => {
                                return (
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Toggle as={Button} variant="link" eventKey={c.key}>
                                        {c.question}
                                    </Accordion.Toggle>
                                    {c.answer &&
                                    c.answer.map(g => {
                                        return (
                                            <Accordion.Collapse eventKey={c.key}>
                                                <Card.Body>{g.value}</Card.Body>
                                            </Accordion.Collapse>
                                        );
                                    })}  
                                </Accordion>
                            );
                        })}
                        </Card.Body>
                    </Card>
                </CardDeck>   
            );
          })}
      </div>
    </div>
  );
}