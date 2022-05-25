import React, { Fragment, Component } from "react";
import { Card, Accordion, Icon, Segment, Header, Tab, Container } from 'semantic-ui-react'
import { Button } from 'reactstrap'
import SideNav from '../components/SideNav'
<<<<<<< HEAD
import DatabaseCleanup from '../components/Videos/Sessions/2021/Precision/Fall/DatabaseCleanup'
import DormantAndInactiveAccounts from '../components/Videos/Sessions/2021/Precision/Fall/DormantAndInactiveAccounts'
import CleanUpQuickBites from '../components/Videos/Sessions/2021/Precision/Fall/CleanUpQuickBites'
import HiddenGemsforLoans1 from '../components/Videos/Sessions/2021/Precision/Fall/HiddenGemsforLoans1'
import HiddenGemsforLoans2 from '../components/Videos/Sessions/2021/Precision/Fall/HiddenGemsforLoans2'
import EssentialsParticipationLoans from '../components/Videos/Sessions/2021/Precision/Fall/EssentialsParticipationLoans'
import PrecisionReleases from '../components/Videos/Sessions/2021/Precision/Fall/PrecisionReleases'
import PrecisionRoadmap from '../components/Videos/Sessions/2021/Precision/Fall/PrecisionRoadmap'
import PrecisionUI from '../components/Videos/Sessions/2021/Precision/Fall/PrecisionUI'
=======
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
>>>>>>> premier-seminar

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
<<<<<<< HEAD
                                <DatabaseCleanup/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Database Cleanup</Card.Header>
=======
                                <SafeDepositBox/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Safe Deposit Box Specifications &amp; Best Practices</Card.Header>
>>>>>>> premier-seminar
                                    </div>
                                </Card.Content>
                            </Card>
                            <Card className="video-cards">
<<<<<<< HEAD
                                <DormantAndInactiveAccounts/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Handling Dormant &amp; Inactive Accounts</Card.Header>
=======
                                <AccountClosingProcedures/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Account Closing Procedures</Card.Header>
>>>>>>> premier-seminar
                                    </div>
                                </Card.Content>
                            </Card> 
                        </Card.Group>
                        <Card.Group itemsPerRow={2}>
                            <Card className="video-cards">
<<<<<<< HEAD
                                <CleanUpQuickBites/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Clean-Up Quick Bites</Card.Header>
=======
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
>>>>>>> premier-seminar
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
<<<<<<< HEAD
                                <HiddenGemsforLoans1/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Hidden Gems for Loans - Session 1</Card.Header>
=======
                                <LoanPayoffs/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Loan Payoffs</Card.Header>
>>>>>>> premier-seminar
                                    </div>
                                </Card.Content>
                            </Card>
                            <Card className="video-cards">
<<<<<<< HEAD
                                <HiddenGemsforLoans2/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Hidden Gems for Loans - Session 2</Card.Header>
=======
                                <LoanEscrowAnalysis/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Loan Escrow Analysis</Card.Header>
>>>>>>> premier-seminar
                                    </div>
                                </Card.Content>
                            </Card> 
                        </Card.Group>
                        <Card.Group itemsPerRow={2}>
                            <Card className="video-cards">
<<<<<<< HEAD
                                <EssentialsParticipationLoans/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Essentials for Participation Loans</Card.Header>
=======
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
>>>>>>> premier-seminar
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
<<<<<<< HEAD
                                <PrecisionReleases/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Precision Releases</Card.Header>
=======
                                <PremierUI/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Premier UI</Card.Header>
>>>>>>> premier-seminar
                                    </div>
                                </Card.Content>
                            </Card>
                            <Card className="video-cards">
<<<<<<< HEAD
                                <PrecisionRoadmap/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Precision Roadmap</Card.Header>
=======
                                <BPMTipsTricks/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">BPM Tips &amp; Tricks for Administrators</Card.Header>
>>>>>>> premier-seminar
                                    </div>
                                </Card.Content>
                            </Card> 
                        </Card.Group>
                        <Card.Group itemsPerRow={2}>
                            <Card className="video-cards">
<<<<<<< HEAD
                                <PrecisionUI/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Precision UI</Card.Header>
=======
                                <TrainingBestPractices/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Training Best Practices: Making it Stick</Card.Header>
>>>>>>> premier-seminar
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