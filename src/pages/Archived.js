import React, { Fragment, Component } from "react";
import { Card, Accordion, Icon, Segment, Header, Tab, Container } from 'semantic-ui-react'
import { Button } from 'reactstrap'
import SideNav from '../components/SideNav'
import DepositParams from '../components/Videos/Sessions/DepositParams'
import UserDefinedOptions from '../components/Videos/Sessions/UserDefinedOptions'
import OnlinePosting from '../components/Videos/Sessions/OnlinePosting'
import DepositsOther from '../components/Videos/Sessions/DepositsOther'
import LoanParams from '../components/Videos/Sessions/LoanParams'
import LoanCredit from '../components/Videos/Sessions/LoanCredit'
import LoansDidYouKnow from '../components/Videos/Sessions/LoansDidYouKnow'
import Loans from '../components/Videos/Sessions/Loans'
import Forms from '../components/Videos/Sessions/I-32Forms'
import CDD from '../components/Videos/Sessions/CDD'
import PrecisionRoadmap from "../components/Videos/Sessions/PrecisionRoadmap";

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
                                <DepositParams/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Deposit Parameters Review</Card.Header>
                                    </div>
                                </Card.Content>
                            </Card>
                            <Card className="video-cards">
                                <UserDefinedOptions/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">User Defined Options: Tips and Tricks</Card.Header>
                                    </div>
                                </Card.Content>
                            </Card> 
                        </Card.Group>
                        <Card.Group itemsPerRow={2}>
                            <Card className="video-cards">
                                <OnlinePosting/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Online Posting Features</Card.Header>
                                    </div>
                                </Card.Content>
                            </Card>
                            <Card className="video-cards">
                                <DepositsOther/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Precision 2020.1 and 2020.2 Deposits & Other</Card.Header>
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
                                <LoanParams/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Loan Parameters</Card.Header>
                                    </div>
                                </Card.Content>
                            </Card>
                            <Card className="video-cards">
                                <LoanCredit/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Loan Credit</Card.Header>
                                    </div>
                                </Card.Content>
                            </Card> 
                        </Card.Group>
                        <Card.Group itemsPerRow={2}>
                            <Card className="video-cards">
                                <LoansDidYouKnow/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Loans: Did You Know</Card.Header>
                                    </div>
                                </Card.Content>
                            </Card>
                            <Card className="video-cards">
                                <Loans/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Precision 2020.2 and 2020.3 Loans</Card.Header>
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
                                <Forms/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Employ I-32 Forms Design to Set Your Institution Apart</Card.Header>
                                    </div>
                                </Card.Content>
                            </Card>
                            <Card className="video-cards">
                                <CDD/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Increase CDD/BSA Compliance With BPM</Card.Header>
                                    </div>
                                </Card.Content>
                            </Card> 
                        </Card.Group>
                        <Card.Group itemsPerRow={2}>
                            <Card className="video-cards">
                                <PrecisionRoadmap/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Precision Roadmap</Card.Header>
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
            <Fragment>
                <div className="next-steps my-5 content-wrapper">
                    <SideNav />
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
                </div>
            </Fragment>
        );
    }
  }

export default Archived