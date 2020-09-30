import React, { Fragment } from "react";
import { Card, Header, Grid } from 'semantic-ui-react'
import CustomSidenav from '../../components/SideNav'

const Articles = () => {
  return (
    <Fragment>
        <div className="next-steps my-5 content-wrapper">
            <CustomSidenav />
            <div className="main-content">
            <Grid columns={4} padded>
                <Header as='h2' className="header page-title">
                    <i className='fa fa-fw fa-newspaper' style={{ fontSize: '1.5em', margin: '5px 10px 5px 5px' }}/>Resource Center: Session Collateral
                </Header>
                <Grid.Row>
                    <Grid.Column className="article-block">
                        <Card>
                            <Card.Content>
                            <Card.Header className="card-header">User Defined Options Tips & Tricks</Card.Header>
                            <Card.Description>
                                <ul>
                                    <li>
                                        <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/UserDefinedOptionsTipsandTricksGuide.pdf" target="_blank">User Defined Options Tips & Tricks Guide</a>
                                    </li>
                                    <li>
                                        <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/UserDefinedOptionsTipsandTricksPPT.pdf" target="_blank">User Defined Options Tips & Tricks PPT</a>
                                    </li>
                                </ul>
                            </Card.Description>
                        </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content>
                                <Card.Header className="card-header">Loans Did You Know</Card.Header>
                                <Card.Description>
                                    <ul>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/LoansDYKGuide.pdf" target="_blank">Loans Did You Know Guide</a>
                                        </li>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/LoansDYKPPT.pdf" target="_blank">Loans Did You Know PPT</a>
                                        </li>
                                    </ul>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content>
                                <Card.Header className="card-header">Online Posting Features</Card.Header>
                                <Card.Description>
                                    <ul>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/OnlinePostingFeaturesGuide.pdf" target="_blank">Online Posting Features Guide</a>
                                        </li>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/OnlinePostingFeaturesPPT.pdf" target="_blank">Online Posting Features PPT</a>
                                        </li>
                                    </ul>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content>
                                <Card.Header className="card-header">Loan Parameters</Card.Header>
                                <Card.Description>
                                    <ul>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/LoanParametersGuide.pdf" target="_blank">Loan Parameters Guide</a>
                                        </li>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/LoanParametersPPT.pdf" target="_blank">Loan Parameters PPT</a>
                                        </li>
                                    </ul>
                                </Card.Description>
                            </Card.Content>
                        </Card>                      
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column className="article-block">     
                        <Card>
                            <Card.Content>
                                <Card.Header className="card-header">Employ I-32 Forms Design To Set Your Institution Apart</Card.Header>
                                <Card.Description>
                                    <ul>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/EmployI-32FormsDesignToSetyourInstitutionApartGuide.pdf" target="_blank">Employ I-32 Forms Design To Set Your Institution Apart Guide</a>
                                        </li>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/EmployI-32FormsDesignPPT.pdf" target="_blank">Employ I-32 Forms Design To Set Your Institution Apart PPT</a>
                                        </li>
                                    </ul>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content>
                                <Card.Header className="card-header">Deposit Parameters</Card.Header>
                                <Card.Description>
                                    <ul>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/DepositsParameterReviewGuide.pdf" target="_blank">Deposit Parameters Guide</a>
                                        </li>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/DepositParametersReviewPPT.pdf" target="_blank">Deposit Parameters PPT</a>
                                        </li>
                                    </ul>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content>
                                <Card.Header className="card-header">Loan Credit</Card.Header>
                                <Card.Description>
                                    <ul>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/LoanCreditGuide.pdf" target="_blank">Loan Credit Guide</a>
                                        </li>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/LoanCreditPPT.pdf" target="_blank">Loan Credit PPT</a>
                                        </li>
                                    </ul>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content>
                                <Card.Header className="card-header">Increase CDD-BSA Compliance With BPM</Card.Header>
                                <Card.Description>
                                    <ul>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/IncreaseCDD-BSAComplianceWithBPMGuide.pdf" target="_blank">Increase CDD-BSA Compliance With BPM Guide</a>
                                        </li>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/IncreaseCDD-BSAComplianceWithBPMPPT.pdf" target="_blank">Increase CDD-BSA Compliance With BPM PPT</a>
                                        </li>
                                    </ul>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column className="article-block">
                        <Card>
                            <Card.Content>
                                <Card.Header className="card-header">Precision Deposit & Operations 2020.1 & 2020.2</Card.Header>
                                <Card.Description>
                                    <ul>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/PrecisionRelease2020.1_2020.2DepositandOperations.pdf" target="_blank">Precision Deposit & Operations 2020.1 & 2020.2 PPT</a>
                                        </li>
                                    </ul>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content>
                                <Card.Header className="card-header">Precision Loans 2020.2 & 2020.3</Card.Header>
                                <Card.Description>
                                    <ul>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/PrecisionLoans2020.2&2020.3.pdf" target="_blank">Precision Loans 2020.2 & 2020.3 PPT</a>
                                        </li>
                                    </ul>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content>
                                <Card.Header className="card-header">Precision Roadmap</Card.Header>
                                <Card.Description>
                                    <ul>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/PrecisionRoadmap.pdf" target="_blank">Precision Roadmap PPT</a>
                                        </li>
                                    </ul>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content>
                                <Card.Header className="card-header">Precision Deposit & Operations 2020.1 & 2020.2 PPT</Card.Header>
                                <Card.Description>
                                    <ul>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/PrecisionLoans2020.2&2020.3.pdf" target="_blank">Precision Loans 2020.2 & 2020.3 PPT</a>
                                        </li>
                                    </ul>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column className="article-block">
                        <Card>
                            <Card.Content>
                                <Card.Header className="card-header">Contactless Assets</Card.Header>
                                <Card.Description>
                                    <ul>
                                        <li>
                                            <a href="https://www.fiserv.com/en/about-fiserv/resource-center/brochures/contactless-emvcards.html" target="_blank">Contactless Cards Fact Sheet</a>
                                        </li>
                                        <li>
                                            <a href="https://www.fiserv.com/en/about-fiserv/the-point/contactless-payments-rise-during-pandemic.html" target="_blank">Contactless Payments Rise During Pandemic</a>
                                        </li>
                                        <li>
                                            <a href="https://www.fiserv.com/en/about-fiserv/resource-center/brochures/card-manufacturing.html" target="_blank">Card manufacturing Brochure</a>
                                        </li>
                                    </ul>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content>
                                <Card.Header className="card-header">Source Advantage</Card.Header>
                                <Card.Description>
                                    <ul>
                                        <li>
                                            <a href="https://www.fiserv.com/resources/Branch_Supplies_Procurement_brochure.pdf" target="_blank">Branch Supplies Procurement Brochure</a>
                                        </li>
                                    </ul>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content>
                                <Card.Header className="card-header">Instant Issue Advantage</Card.Header>
                                <Card.Description>
                                    <ul>
                                        <li>
                                            <a href="https://www.fiserv.com/en/about-fiserv/resource-center/videos/voice-of-the-instant-issue-advantage-client-the-fiserv-experience.html" target="_blank">Voice of the Instant Issue Advantage Client: The Fiserv Experience</a>
                                        </li>
                                        <li>
                                            <a href="https://www.fiserv.com/en/about-fiserv/resource-center/videos/realizing-cost-efficiencies-and-generating-revenue-with-instant-.html" target="_blank">Realizing Cost Efficiencies and Generating Revenue With Instant Issue Advantage</a>
                                        </li>
                                    </ul>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content>
                                <Card.Header className="card-header">Statement Advantage</Card.Header>
                                <Card.Description>
                                    <ul>
                                        <li>
                                            <a href="https://www.fiserv.com/en/about-fiserv/resource-center/videos/statement-advantage.html" target="_blank">Statement Advantage™ - A Best-In-Class Multichannel Document Solution</a>
                                        </li>
                                        <li>
                                            <a href="https://www.fiserv.com/en/about-fiserv/resource-center/videos/voice-of-the-client-delivering-digital-communications-with-statement-advantage.html" target="_blank">Delivering Digital Communications with Statement Advantage<sup>TM</sup></a>
                                        </li>
                                        <li>
                                            <a href="https://www.fiserv.com/en/about-fiserv/resource-center/videos/creating-value-with-statement-advantage-testimonial.html" target="_blank">Creating Value with Statement Advantage<sup>TM</sup></a>
                                        </li>
                                        <li>
                                            <a href="https://www.fiserv.com/en/about-fiserv/resource-center/videos/enriching-your-transactional-communications.html" target="_blank">Enriching Your Transactional Communications</a>
                                        </li>
                                    </ul>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column className="article-block">
                        <Card>
                            <Card.Content>
                                <Card.Header className="card-header">Commercial Print and Direct Marketing Services</Card.Header>
                                <Card.Description><a href="https://www.fiserv.com/en/about-fiserv/resource-center/brochures/commercial-printing-and-production.html" target="_blank">Commercial Printing and Production Brochure</a></Card.Description>
                            </Card.Content>
                        </Card>  
                    </Grid.Column>
                </Grid.Row>  
            </Grid>
            </div>
        </div>
    </Fragment>
  );
};

export default Articles