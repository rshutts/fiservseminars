import React, { Fragment, Component } from "react";
import { Card, Accordion, Icon, Segment, Header, Tab, Container } from 'semantic-ui-react'
import { Button } from 'reactstrap'
import SideNav from '../components/SideNav'
import Deposits from '../components/Videos/Sessions/Deposits'
import Address from '../components/Videos/Sessions/Address'
import PES from '../components/Videos/Sessions/PES'
import EIM from '../components/Videos/Sessions/EIM'
import LoanFees from '../components/Videos/Sessions/LoanFees'
import LoanPayment from '../components/Videos/Sessions/LoanPayment'
import LoanScheduling from '../components/Videos/Sessions/LoanScheduling'
import TMS from '../components/Videos/Sessions/TMS'
import Forms from '../components/Videos/Sessions/I-32Forms'
import CDD from '../components/Videos/Sessions/CDD'
import BOEndUsers from "../components/Videos/Sessions/BOEndUsers";

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
                                <Deposits/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Deposits: Did You Know?</Card.Header>
                                    </div>
                                </Card.Content>
                            </Card>
                            <Card className="video-cards">
                                <Address/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Address Management</Card.Header>
                                    </div>
                                </Card.Content>
                            </Card> 
                        </Card.Group>
                        <Card.Group itemsPerRow={2}>
                            <Card className="video-cards">
                                <PES/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Inactive and Dormant Account Processing</Card.Header>
                                    </div>
                                </Card.Content>
                            </Card>
                            <Card className="video-cards">
                                <EIM/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Exception Item Manager (EIM): Making Decisions Easier</Card.Header>
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
                                <LoanFees/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Loan Fees & Charges</Card.Header>
                                    </div>
                                </Card.Content>
                            </Card>
                            <Card className="video-cards">
                                <LoanPayment/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Loan Payment & Payoff Processing</Card.Header>
                                    </div>
                                </Card.Content>
                            </Card> 
                        </Card.Group>
                        <Card.Group itemsPerRow={2}>
                            <Card className="video-cards">
                                <LoanScheduling/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Loan Payment Schedules & Billing</Card.Header>
                                    </div>
                                </Card.Content>
                            </Card>
                            <Card className="video-cards">
                                <TMS/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Streamlined Processing Using the Transaction Management System (TMS)</Card.Header>
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
                                        <Card.Header className="card-header">BPM-Increase CDD-BSA Compliance With BPM</Card.Header>
                                    </div>
                                </Card.Content>
                            </Card> 
                        </Card.Group>
                        <Card.Group itemsPerRow={2}>
                            <Card className="video-cards">
                                <BOEndUsers/>
                                <Card.Content className="video-content">
                                    <div className="video-description">
                                        <Card.Header className="card-header">Business Online End User</Card.Header>
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