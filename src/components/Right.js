import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import { Button } from 'reactstrap'
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
        <h2 className="agenda-subheader">All times are CST</h2>
    
      <Accordion fluid styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Button id="qsLoginBtn" className="toggle-buttons">
            Day 1 <Icon name='dropdown' />
          </Button>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
            <h3 className="meetingTitle">
                Deposits: Did You Know
            </h3>
            <p>
                @ 8:15 - 9:00 a.m. &amp;<br/> 1:15 - 2:00 p.m.
            </p>
        </Accordion.Content>
        <Accordion.Content active={activeIndex === 0}>
            <h3 className="meetingTitle">
                Address Management
            </h3>
            <p>
                @ 9:15 - 10:00 a.m. &amp;<br/> 2:15 - 3:00 p.m.
            </p>
        </Accordion.Content>
        <Accordion.Content active={activeIndex === 0}>
            <h3 className="meetingTitle">
                Inactive and Dormant Account Processing
            </h3>
            <p>
                @ 10:15 - 11:00 a.m. &amp;<br/> 3:15 - 4:00 p.m.
            </p>
        </Accordion.Content>
        <Accordion.Content active={activeIndex === 0}>
            <h3 className="meetingTitle">
                Exception Item Manager (EIM): Making Decisions Easier
            </h3>
            <p>
                @ 11:15 - 12:00 p.m. &amp;<br/> 4:15 - 5:00 p.m.
            </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Button id="qsLoginBtn" className="toggle-buttons">
          Day 2 <Icon name='dropdown' />
          </Button>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
            <h3 className="meetingTitle">
                Loan Fees &amp; Charges 
            </h3>
            <p>
                @ 8:15 - 9:00 a.m. &<br/> 1:15 - 2:00 p.m.
            </p>
        </Accordion.Content>
        <Accordion.Content active={activeIndex === 1}>
            <h3 className="meetingTitle">
                Loan Payment &amp; Payoff Processing 
            </h3>
            <p>
                @ 9:15 - 10:00 a.m. &amp;<br/> 2:15 - 3:00 p.m.
            </p>
        </Accordion.Content>
        <Accordion.Content active={activeIndex === 1}>
            <h3 className="meetingTitle">
                Loan Payment Schedules &amp; Billing 
            </h3>
            <p>
                @ 10:15 - 11:00 a.m. &amp;<br/> 3:15 - 4:00 p.m.
            </p>
        </Accordion.Content>
        <Accordion.Content active={activeIndex === 1}>
            <h3 className="meetingTitle">
                Streamlined Processing Using the Transaction Management System (TMS) 
            </h3>
            <p>
                @ 11:15 - 12:00 p.m. &amp;<br/> 4:15 - 5:00 p.m.
            </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Button id="qsLoginBtn" className="toggle-buttons">
            Day 3 <Icon name='dropdown' />
          </Button>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
            <h3 className="meetingTitle">
                Employ I-32 Forms Design to Set Your Institution Apart
            </h3>
            <p>
                @ 8:15 - 9:00 a.m. &amp;<br/> 1:15 - 2:00 p.m.
            </p>
        </Accordion.Content>
        <Accordion.Content active={activeIndex === 2}>
            <h3 className="meetingTitle">
                BPM-Increase CDD-BSA Compliance With BPM
            </h3>
            <p>
                @ 9:15 - 10:00 a.m. &amp;<br/> 2:15 - 3:00 p.m.
            </p>
        </Accordion.Content>
        <Accordion.Content active={activeIndex === 2}>
            <h3 className="meetingTitle">
                Business Online End User
            </h3>
            <p>
                @ 10:15 - 11:00 a.m. &amp;<br/> 3:15 - 4:00 p.m.
            </p>
        </Accordion.Content>
        <Accordion.Content active={activeIndex === 2}>
            <h3 className="meetingTitle">
                Networking/Happy Hour
            </h3>
            <p>
                @ 11:15 - 12:00 p.m. &amp;<br/> 4:15 - 5:00 p.m.
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