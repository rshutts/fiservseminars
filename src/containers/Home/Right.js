import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import Button from "react-bootstrap/Button";
// import Notes from '../components/notes'

class Right extends Component{
    state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state
    return (
        <section className="right">
        <div>
            <div className="meetingContent">
        <h1>
            Agenda
        </h1>
        <h2 className="agenda-subheader">*** NOTE: All agenda and topics are listed in CST and subject to change.</h2>
    
      <Accordion fluid styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Button id="qsLoginBtn" className="toggle-buttons">
            Day 1<Icon name='dropdown' />
          </Button>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
            <h3 className="meetingTitle">
                Safe Deposit Box Specifications &amp; Best Practices
            </h3>
            <p>
                @ 9:00 – 9:45 a.m. &amp;<br/> 1:00 – 1:45 p.m.
            </p>
        </Accordion.Content>
        <Accordion.Content active={activeIndex === 0}>
            <h3 className="meetingTitle">
                Account Closing Procedures
            </h3>
            <p>
                @ 10:00 – 10:45 a.m. &amp;<br/> 2:00 – 2:45 p.m.
            </p>
        </Accordion.Content>
        <Accordion.Content active={activeIndex === 0}>
            <h3 className="meetingTitle">
                Did You Know: Forgotten Gems
            </h3>
            <p>
                @ 11:00 – 11:45 a.m. &amp;<br/> 3:00 – 3:45 p.m.
            </p>
        </Accordion.Content>
        <Accordion.Content active={activeIndex === 0}>
            <h3 className="meetingTitle">
                Empathy: An Overlooked Best Practice
            </h3>
            <p>
                @ 12:00 – 12:45 a.m. &amp;<br/> 4:00 – 4:45 p.m.
            </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Button id="qsLoginBtn" className="toggle-buttons">
            Day 2<Icon name='dropdown' />
          </Button>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
            <h3 className="meetingTitle">
                Loan Payoffs
            </h3>
            <p>
                @ 9:00 – 9:45 a.m. &amp;<br/> 1:00 – 1:45 p.m.
            </p>
        </Accordion.Content>
        <Accordion.Content active={activeIndex === 1}>
            <h3 className="meetingTitle">
                Loan Escrow Analysis
            </h3>
            <p>
                @ 10:00 – 10:45 a.m. &amp;<br/> 2:00 – 2:45 p.m.
            </p>
        </Accordion.Content>
        <Accordion.Content active={activeIndex === 1}>
            <h3 className="meetingTitle">
                Loan Enhancements
            </h3>
            <p>
                @ 11:00 – 11:45 a.m. &amp;<br/> 3:00 – 3:45 p.m.
            </p>
        </Accordion.Content>
        <Accordion.Content active={activeIndex === 1}>
            <h3 className="meetingTitle">
                Feedback that Matters
            </h3>
            <p>
                @ 12:00 – 12:45 a.m. &amp;<br/> 4:00 – 4:45 p.m.
            </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Button id="qsLoginBtn" className="toggle-buttons">
            Day 3<Icon name='dropdown' />
          </Button>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
            <h3 className="meetingTitle">
                Premier UI
            </h3>
            <p>
                @ 9:00 – 9:45 a.m. &amp;<br/> 1:00 – 1:45 p.m.
            </p>
        </Accordion.Content>
        <Accordion.Content active={activeIndex === 2}>
            <h3 className="meetingTitle">
                BPM Tips &amp; Tricks for Administrators
            </h3>
            <p>
                @ 10:00 – 10:45 a.m. &amp;<br/> 2:00 – 2:45 p.m.
            </p>
        </Accordion.Content>
        <Accordion.Content active={activeIndex === 2}>
            <h3 className="meetingTitle">
                Networking
            </h3>
            <p>
                @ 11:00 – 11:45 a.m. &amp;<br/> 3:00 – 3:45 p.m.
            </p>
        </Accordion.Content>
        <Accordion.Content active={activeIndex === 2}>
            <h3 className="meetingTitle">
                Training Best Practices: Making it Stick
            </h3>
            <p>
                @ 12:00 – 12:45 a.m. &amp;<br/> 4:00 – 4:45 p.m.
            </p>
        </Accordion.Content>
      </Accordion>
        </div>
    </div>
    </section>
    )
  }
}

export default Right;