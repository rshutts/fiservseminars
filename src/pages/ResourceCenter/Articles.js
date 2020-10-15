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
                        <Card className="survey-card">
                            <Card.Content>
                                <Card.Header className="card-header">Surveys</Card.Header>
                                <div className="survey-descriptions">
                                    <Card.Description>
                                        <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=HzqHEY1MDUWN--N6LiVX-GqWRC3FgYxBrytGu3gWNnRUMFdYWk4yVzE0MDM5Q1RTM0xXMFI0SUZZRS4u" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bold", fontSize: "16px"}}>Premier Survey</a>
                                        <p style={{ width: "80%"}}><br/>Or copy and paste the following URL into your browser:&nbsp; https://forms.office.com/Pages/ResponsePage.aspx?id=HzqHEY1MDUWN--N6LiVX-GqWRC3FgYxBrytGu3gWNnRUMFdYWk4yVzE0MDM5Q1RTM0xXMFI0SUZZRS4u</p>
                                        <p><b>Note: The survey is available now.</b></p>
                                    </Card.Description>
                                    <Card.Description>
                                        <a href="https://s2.userzoom.com/uz/install/C513S365_57?host=s2.userzoom.com#gdpr_welcome_page" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bold", fontSize: "16px"}}>Premier Usability Study</a>
                                        <p><br/>Or copy and paste the following URL into your browser: https://s2.userzoom.com/uz/install/C513S365_57?host=s2.userzoom.com#gdpr_welcome_page</p>
                                        <p><b>Note: The usability study will go live on Monday October 5, 2020 and close after the end of the day Friday October 16, 2020.</b></p>
                                    </Card.Description> 
                                </div>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column className="article-block">
                        {/* <Card>
                            <Card.Content>
                            <Card.Header className="card-header">User Defined Options Tips & Tricks</Card.Header>
                            <Card.Description>
                                <ul>
                                    <li>
                                        <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/UserDefinedOptionsTipsandTricksGuide.pdf" target="_blank" rel="noopener noreferrer">User Defined Options Tips & Tricks Guide</a>
                                    </li>
                                    <li>
                                        <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/UserDefinedOptionsTipsandTricksPPT.pdf" target="_blank" rel="noopener noreferrer">User Defined Options Tips & Tricks PPT</a>
                                    </li>
                                </ul>
                            </Card.Description>
                        </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content>
                                <Card.Header className="card-header">Employ I-32 Forms Design To Set Your Institution Apart</Card.Header>
                                <Card.Description>
                                    <ul>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/EmployI-32FormsDesignToSetyourInstitutionApartGuide.pdf" target="_blank" rel="noopener noreferrer">Employ I-32 Forms Design To Set Your Institution Apart Guide</a>
                                        </li>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/EmployI-32FormsDesignPPT.pdf" target="_blank" rel="noopener noreferrer">Employ I-32 Forms Design To Set Your Institution Apart PPT</a>
                                        </li>
                                    </ul>
                                </Card.Description>
                            </Card.Content>
                        </Card> */}
                        <Card>
                            <Card.Content>
                                <Card.Header className="card-header">Increase CDD-BSA Compliance With BPM</Card.Header>
                                <Card.Description>
                                    <ul>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/IncreaseCDD-BSAComplianceWithBPM.pdf" target="_blank" rel="noopener noreferrer">Increase CDD-BSA Compliance With BPM Guide</a>
                                        </li>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/IncreaseCDD-BSAComplianceWithBPMPPT.pdf" target="_blank" rel="noopener noreferrer">Increase CDD-BSA Compliance With BPM PPT</a>
                                        </li>
                                    </ul>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        
                        <Card>
                            <Card.Content>
                                <Card.Header className="card-header">Contactless Assets</Card.Header>
                                <Card.Description>
                                    <ul>
                                        <li>
                                            <a href="https://www.fiserv.com/en/about-fiserv/resource-center/brochures/contactless-emvcards.html" target="_blank" rel="noopener noreferrer">Contactless Cards Fact Sheet</a>
                                        </li>
                                        <li>
                                            <a href="https://www.fiserv.com/en/about-fiserv/the-point/contactless-payments-rise-during-pandemic.html" target="_blank" rel="noopener noreferrer">Contactless Payments Rise During Pandemic</a>
                                        </li>
                                        <li>
                                            <a href="https://www.fiserv.com/en/about-fiserv/resource-center/brochures/card-manufacturing.html" target="_blank" rel="noopener noreferrer">Card manufacturing Brochure</a>
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
                                            <a href="https://www.fiserv.com/en/about-fiserv/resource-center/videos/voice-of-the-instant-issue-advantage-client-the-fiserv-experience.html" target="_blank" rel="noopener noreferrer">Voice of the Instant Issue Advantage Client: The Fiserv Experience</a>
                                        </li>
                                        <li>
                                            <a href="https://www.fiserv.com/en/about-fiserv/resource-center/videos/realizing-cost-efficiencies-and-generating-revenue-with-instant-.html" target="_blank" rel="noopener noreferrer">Realizing Cost Efficiencies and Generating Revenue With Instant Issue Advantage</a>
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
                                            <a href="https://www.fiserv.com/en/about-fiserv/resource-center/videos/statement-advantage.html" target="_blank" rel="noopener noreferrer">Statement Advantage™ - A Best-In-Class Multichannel Document Solution</a>
                                        </li>
                                        <li>
                                            <a href="https://www.fiserv.com/en/about-fiserv/resource-center/videos/voice-of-the-client-delivering-digital-communications-with-statement-advantage.html" target="_blank" rel="noopener noreferrer">Delivering Digital Communications with Statement Advantage<sup>TM</sup></a>
                                        </li>
                                        <li>
                                            <a href="https://www.fiserv.com/en/about-fiserv/resource-center/videos/creating-value-with-statement-advantage-testimonial.html" target="_blank" rel="noopener noreferrer">Creating Value with Statement Advantage<sup>TM</sup></a>
                                        </li>
                                        <li>
                                            <a href="https://www.fiserv.com/en/about-fiserv/resource-center/videos/enriching-your-transactional-communications.html" target="_blank" rel="noopener noreferrer">Enriching Your Transactional Communications</a>
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
                                <Card.Header className="card-header">Inactive &amp; Dormant Accounts</Card.Header>
                                <Card.Description>
                                    <ul>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/InactiveandDormantAccounts.pdf" target="_blank" rel="noopener noreferrer">Inactive &amp; Dormant Accounts Guide</a>
                                        </li>
                                        <li>
                                            <a href="" target="_blank" rel="noopener noreferrer">Inactive &amp; Dormant Accounts PPT</a>
                                        </li>
                                    </ul>
                                </Card.Description>
                            </Card.Content>
                        </Card> 
                        <Card>
                            <Card.Content>
                                <Card.Header className="card-header">Employ I-32 Forms Design To Set Your Institution Apart</Card.Header>
                                <Card.Description>
                                    <ul>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/EmployI-32FormsDesignToSetyourInstitutionApartGuide.pdf" target="_blank" rel="noopener noreferrer">Employ I-32 Forms Design To Set Your Institution Apart Guide</a>
                                        </li>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/EmployI-32FormsDesignPPT.pdf" target="_blank" rel="noopener noreferrer">Employ I-32 Forms Design PPT</a>
                                        </li>
                                    </ul>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content>
                                <Card.Header className="card-header">Address Management</Card.Header>
                                <Card.Description>
                                    <ul>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/AddressManagement.pdf" target="_blank" rel="noopener noreferrer">Address Management Guide</a>
                                        </li>
                                        <li>
                                            <a href="" target="_blank" rel="noopener noreferrer">Address Management PPT</a>
                                        </li>
                                    </ul>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content>
                                <Card.Header className="card-header">EIM Decision Plans</Card.Header>
                                <Card.Description>
                                    <ul>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/EIMDecisionPlans.pdf" target="_blank" rel="noopener noreferrer">EIM Decision Plans Guide</a>
                                        </li>
                                        <li>
                                            <a href="" target="_blank" rel="noopener noreferrer">EIM Decision Plans PPT</a>
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
                                <Card.Header className="card-header">Loan Fees &amp; Charges</Card.Header>
                                <Card.Description>
                                    <ul>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/LoanFees&Charges.pdf" target="_blank" rel="noopener noreferrer">Loan Fees &amp; Charges Guide</a>
                                        </li>
                                        <li>
                                            <a href="" target="_blank" rel="noopener noreferrer">Loan Fees &amp; Charges PPT</a>
                                        </li>
                                    </ul>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content>
                                <Card.Header className="card-header">Loan Payment &amp; Payoff Processing</Card.Header>
                                <Card.Description>
                                    <ul>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/PremierLoans2020.2&2020.3.pdf" target="_blank" rel="noopener noreferrer">Loan Payment &amp; Payoff Processing Guide</a>
                                        </li>
                                    </ul>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content>
                                <Card.Header className="card-header">Loan Payment Schedules &amp; Billing</Card.Header>
                                <Card.Description>
                                    <ul>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/LoanPaymentSchedulesandBilling.pdf" target="_blank" rel="noopener noreferrer">Loan Payment Schedules &amp; Billing Guide</a>
                                        </li>
                                    </ul>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content>
                                <Card.Header className="card-header">Streamlined Processing Using TMS</Card.Header>
                                <Card.Description>
                                    <ul>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/StreamlinedProcessingusingTMS.pdf" target="_blank" rel="noopener noreferrer">Streamlined Processing Using TMS Guide</a>
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
                                <Card.Header className="card-header">Deposits Did You Know</Card.Header>
                                <Card.Description>
                                    <ul>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/DepositsDidYouKnow.pdf" target="_blank" rel="noopener noreferrer">IDeposits Did You Know Guide</a>
                                        </li>
                                        <li>
                                            <a href="" target="_blank" rel="noopener noreferrer">Deposits Did You Know PPT</a>
                                        </li>
                                    </ul>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content>
                                <Card.Header className="card-header">Demystifying AI</Card.Header>
                                <Card.Description>
                                    <ul>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/VirtualBankingAssistantBrochure.pdf" target="_blank" rel="noopener noreferrer">Virtual Banking Assistant Brochure</a>
                                        </li>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/Seminar/VirtualBankingAssistant-AI-drivenConversationalExperiencesOnePager.pdf" target="_blank" rel="noopener noreferrer">Virtual Banking Assistant One Pager</a>
                                        </li>
                                    </ul>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content>
                                <Card.Header className="card-header">BO End User</Card.Header>
                                <Card.Description>
                                    <ul>
                                        <li>
                                            <a href="https://virtualtrainer.fiservapps.com/TrainGuides/2020/BOEndUser.pdf" target="_blank" rel="noopener noreferrer">BO End User Guide</a>
                                        </li>
                                    </ul>
                                </Card.Description>
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
