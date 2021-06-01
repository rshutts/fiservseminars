import React, { Fragment, Component } from "react";
import { Card, Accordion, Icon, Segment, Header, Tab, Container } from 'semantic-ui-react'
import Button from "react-bootstrap/Button";
import FeaturesFunctionality from '../components/Videos/Sessions/FeaturesFunctionality'
import BetterReporting1 from '../components/Videos/Sessions/BetterReporting1'
import BetterReporting2 from '../components/Videos/Sessions/BetterReporting2'
import MaximizingRevenue from '../components/Videos/Sessions/MaximizingRevenue'
import AnalyzingRevenue from '../components/Videos/Sessions/AnalyzingRevenue'
import CustomerProfitability from '../components/Videos/Sessions/CustomerProfitability'
import RegulatoryReporting from '../components/Videos/Sessions/RegulatoryReporting'
import CommercialAccounts from '../components/Videos/Sessions/CommercialAccounts'

import '../containers/VideoPlayer/VideoPlayer.css';

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
                                <FeaturesFunctionality/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">System Features and Functionality - Making It Easy</Card.Header>
                                    </div>
                                </Card.Content>
                            </Card>
                            <Card className="video-cards">
                                <BetterReporting1/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Gaining Customer Clarity Through Better Reporting - Session 1</Card.Header>
                                    </div>
                                </Card.Content>
                            </Card> 
                        </Card.Group>
                        <Card.Group itemsPerRow={2}>
                            <Card className="video-cards">
                                <BetterReporting2/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Gaining Customer Clarity Through Better Reporting - Session 2</Card.Header>
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
                                <MaximizingRevenue/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Maximizing Revenue</Card.Header>
                                    </div>
                                </Card.Content>
                            </Card>
                            <Card className="video-cards">
                                <AnalyzingRevenue/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Tracking, Measuring, and Analyzing Revenue</Card.Header>
                                    </div>
                                </Card.Content>
                            </Card> 
                        </Card.Group>
                        <Card.Group itemsPerRow={2}>
                            <Card className="video-cards">
                                <CustomerProfitability/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Customer Profitability</Card.Header>
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
                                <RegulatoryReporting/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Tools for Effective Regulatory Reporting and Tracking</Card.Header>
                                    </div>
                                </Card.Content>
                            </Card>
                            <Card className="video-cards">
                                <CommercialAccounts/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Commercial Accounts: Building Relationships and Revenue</Card.Header>
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