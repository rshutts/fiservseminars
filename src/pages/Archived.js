import React, { Fragment, Component } from "react";
import { Card, Accordion, Icon, Segment, Header, Tab, Container } from 'semantic-ui-react'
import { Button } from 'reactstrap'
import SideNav from '../components/SideNav'
import DatabaseCleanup from '../components/Videos/Sessions/2021/Precision/Fall/DatabaseCleanup'
import DormantAndInactiveAccounts from '../components/Videos/Sessions/2021/Precision/Fall/DormantAndInactiveAccounts'
import CleanUpQuickBites from '../components/Videos/Sessions/2021/Precision/Fall/CleanUpQuickBites'
import HiddenGemsforLoans1 from '../components/Videos/Sessions/2021/Precision/Fall/HiddenGemsforLoans1'
import HiddenGemsforLoans2 from '../components/Videos/Sessions/2021/Precision/Fall/HiddenGemsforLoans2'
import EssentialsParticipationLoans from '../components/Videos/Sessions/2021/Precision/Fall/EssentialsParticipationLoans'
import PrecisionReleases from '../components/Videos/Sessions/2021/Precision/Fall/PrecisionReleases'
import PrecisionRoadmap from '../components/Videos/Sessions/2021/Precision/Fall/PrecisionRoadmap'
import PrecisionUI from '../components/Videos/Sessions/2021/Precision/Fall/PrecisionUI'

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
                                <DatabaseCleanup/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Database Cleanup</Card.Header>
                                    </div>
                                </Card.Content>
                            </Card>
                            <Card className="video-cards">
                                <DormantAndInactiveAccounts/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Handling Dormant &amp; Inactive Accounts</Card.Header>
                                    </div>
                                </Card.Content>
                            </Card> 
                        </Card.Group>
                        <Card.Group itemsPerRow={2}>
                            <Card className="video-cards">
                                <CleanUpQuickBites/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Clean-Up Quick Bites</Card.Header>
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
                                <HiddenGemsforLoans1/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Hidden Gems for Loans - Session 1</Card.Header>
                                    </div>
                                </Card.Content>
                            </Card>
                            <Card className="video-cards">
                                <HiddenGemsforLoans2/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Hidden Gems for Loans - Session 2</Card.Header>
                                    </div>
                                </Card.Content>
                            </Card> 
                        </Card.Group>
                        <Card.Group itemsPerRow={2}>
                            <Card className="video-cards">
                                <EssentialsParticipationLoans/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Essentials for Participation Loans</Card.Header>
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
                                <PrecisionReleases/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Precision Releases</Card.Header>
                                    </div>
                                </Card.Content>
                            </Card>
                            <Card className="video-cards">
                                <PrecisionRoadmap/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Precision Roadmap</Card.Header>
                                    </div>
                                </Card.Content>
                            </Card> 
                        </Card.Group>
                        <Card.Group itemsPerRow={2}>
                            <Card className="video-cards">
                                <PrecisionUI/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Precision UI</Card.Header>
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