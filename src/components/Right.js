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
        <h2 className="agenda-subheader">*** Please note all times listed are CST</h2>
    
      <Accordion fluid styled>
        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Button id="qsLoginBtn" className="toggle-buttons">
            Day 1: Efficiency, Customer Reporting<Icon name='dropdown' />
          </Button>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
            <h3 className="meetingTitle">
                Systems Features and Functionality – Making It Easy
            </h3>
            <p>
                @ 9:00 – 9:45 a.m. &amp;<br/> 1:00 – 1:45 p.m.
            </p>
        </Accordion.Content>
        <Accordion.Content active={activeIndex === 1}>
            <h3 className="meetingTitle">
                Gaining Customer Clarity Through Better Reporting (Session I)
            </h3>
            <p>
                @ 10:00 – 10:45 a.m. &amp;<br/> 2:00 – 2:45 p.m.
            </p>
        </Accordion.Content>
        <Accordion.Content active={activeIndex === 1}>
            <h3 className="meetingTitle">
                Gaining Customer Clarity Through Better Reporting (Session II)
            </h3>
            <p>
                @ 11:00 – 11:45 a.m. &amp;<br/> 3:00 – 3:45 p.m.
            </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 0}
          index={1}
          onClick={this.handleClick}
        >
          <Button id="qsLoginBtn" className="toggle-buttons">
            Day 2:  Revenue, Tracking, &amp; Analysis <Icon name='dropdown' />
          </Button>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
            <h3 className="meetingTitle">
                Maximizing Revenue
            </h3>
            <p>
                @ 9:00 – 9:45 a.m. &amp;<br/> 1:00 – 1:45 p.m.
            </p>
        </Accordion.Content>
        <Accordion.Content active={activeIndex === 0}>
            <h3 className="meetingTitle">
                Tracking, Measuring, &amp; Analyzing Revenue
            </h3>
            <p>
                @ 10:00 – 10:45 a.m. &amp;<br/> 2:00 – 2:45 p.m.
            </p>
        </Accordion.Content>
        <Accordion.Content active={activeIndex === 0}>
            <h3 className="meetingTitle">
                Customer Profitability
            </h3>
            <p>
                @ 11:00 – 11:45 a.m. &amp;<br/> 3:00 – 3:45 p.m.
            </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Button id="qsLoginBtn" className="toggle-buttons">
            Day 3:  Regulatory Tracking, Commercial Accounts <Icon name='dropdown' />
          </Button>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
            <h3 className="meetingTitle">
                Tools for Effective Regulatory Reporting &amp; Tracking
            </h3>
            <p>
                @ 9:00 – 9:45 a.m. &amp;<br/> 1:00 – 1:45 p.m.
            </p>
        </Accordion.Content>
        <Accordion.Content active={activeIndex === 2}>
            <h3 className="meetingTitle">
                Commercial Accounts – Building Relationships &amp; Revenue
            </h3>
            <p>
                @ 10:00 – 10:45 a.m. &amp;<br/> 2:00 – 2:45 p.m.
            </p>
        </Accordion.Content>
        <Accordion.Content active={activeIndex === 2}>
            <h3 className="meetingTitle">
                Executive Networking Session
            </h3>
            <p>
                @ 11:00 – 11:45 a.m. &amp;<br/> 3:00 – 3:45 p.m.
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
