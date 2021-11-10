import React, { Fragment, Component } from "react";
import { Card, Accordion, Icon, Segment, Header, Tab, Container } from 'semantic-ui-react'
import { Button } from 'reactstrap'
import SideNav from '../components/SideNav'
import SafeDepositBox from '../components/Videos/Sessions/2021/Premier/Fall/SafeDepositBox'
import AccountClosingProcedures from '../components/Videos/Sessions/2021/Premier/Fall/AccountClosingProcedures'
import DidYouKnow from '../components/Videos/Sessions/2021/Premier/Fall/DidYouKnow'
import Empathy from '../components/Videos/Sessions/2021/Premier/Fall/Empathy'
import LoanPayoffs from '../components/Videos/Sessions/2021/Premier/Fall/LoanPayoffs'
import LoanEscrowAnalysis from '../components/Videos/Sessions/2021/Premier/Fall/LoanEscrowAnalysis'
import LoanEnhancements from '../components/Videos/Sessions/2021/Premier/Fall/LoanEnhancements'
import Feedback from '../components/Videos/Sessions/2021/Premier/Fall/Feedback'
import PremierUI from '../components/Videos/Sessions/2021/Premier/Fall/PremierUI'
import BPMTipsTricks from '../components/Videos/Sessions/2021/Premier/Fall/BPMTipsTricks'
import TrainingBestPractices from '../components/Videos/Sessions/2021/Premier/Fall/TrainingBestPractices'

class Archived extends Component{
    state = { activeIndex: 0 };

    handleRangeChange = e => this.setState({ activeIndex: e.target.value });
    handleTabChange = (e, { activeIndex }) => this.setState({ activeIndex });

    render() {
        const { activeIndex } = this.state;
        const panes = [
            {
              menuItem: "Day 1",
              render: () => (
                <Tab.Pane>
                  <Segment className="archive-segment">
                        <Card.Group itemsPerRow={2}>
                            <Card className="video-cards"> 
                                <SafeDepositBox/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Safe Deposit Box Specifications &amp; Best Practices</Card.Header>
                                    </div>
                                </Card.Content>
                            </Card>
                            <Card className="video-cards">
                                <AccountClosingProcedures/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Account Closing Procedures</Card.Header>
                                    </div>
                                </Card.Content>
                            </Card> 
                        </Card.Group>
                        <Card.Group itemsPerRow={2}>
                            <Card className="video-cards">
                                <DidYouKnow/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Did You Know: Forgotten Gems</Card.Header>
                                    </div>
                                </Card.Content>
                            </Card>
                            <Card className="video-cards">
                                <Empathy/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Empathy: An Overlooked Best Practice</Card.Header>
                                    </div>
                                </Card.Content>
                            </Card>
                        </Card.Group>
                    </Segment>
                </Tab.Pane>
              )
            },
            {
              menuItem: "Day 2",
              render: () => (
                <Tab.Pane>
                  <Segment className="archive-segment">
                        <Card.Group itemsPerRow={2}>
                            <Card className="video-cards"> 
                                <LoanPayoffs/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Loan Payoffs</Card.Header>
                                    </div>
                                </Card.Content>
                            </Card>
                            <Card className="video-cards">
                                <LoanEscrowAnalysis/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Loan Escrow Analysis</Card.Header>
                                    </div>
                                </Card.Content>
                            </Card> 
                        </Card.Group>
                        <Card.Group itemsPerRow={2}>
                            <Card className="video-cards">
                                <LoanEnhancements/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Loan Enhancements</Card.Header>
                                    </div>
                                </Card.Content>
                            </Card>
                            <Card className="video-cards">
                                <Feedback/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Feedback that Matters</Card.Header>
                                    </div>
                                </Card.Content>
                            </Card>
                        </Card.Group>
                    </Segment>
                </Tab.Pane>
              )
            },
            {
              menuItem: "Day 3",
              render: () => (
                <Tab.Pane>
                  <Segment className="archive-segment">
                        <Card.Group itemsPerRow={2}>
                            <Card className="video-cards"> 
                                <PremierUI/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Premier UI</Card.Header>
                                    </div>
                                </Card.Content>
                            </Card>
                            <Card className="video-cards">
                                <BPMTipsTricks/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">BPM Tips &amp; Tricks for Administrators</Card.Header>
                                    </div>
                                </Card.Content>
                            </Card> 
                        </Card.Group>
                        <Card.Group itemsPerRow={2}>
                            <Card className="video-cards">
                                <TrainingBestPractices/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Training Best Practices: Making it Stick</Card.Header>
                                    </div>
                                </Card.Content>
                            </Card>
                        </Card.Group>
                    </Segment>
                </Tab.Pane>
              )
            }
          ];
          return (
            <div className="main-content archived">
                <div className="archived-container">
                    <Header as='h2' className="header page-title">
                        <i className='fa fa-fw fa-file-archive' style={{ fontSize: '1.5em', margin: '5px 10px 5px 5px' }}/>Archived: Learning Sessions
                    </Header>
                    <Tab
                        panes={panes}
                        activeIndex={activeIndex}
                        onTabChange={this.handleTabChange}
                        className="archive-section"
                    />
                </div>
            </div>
        );
    }
  }

export default Archived