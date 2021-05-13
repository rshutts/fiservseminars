import React, { Component } from "react";
import { Accordion, Icon } from 'semantic-ui-react'
import "./FAQs.css";

export default class FAQS extends Component {
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
            <div>
                <Accordion fluid styled className="faq-accordion">
                    <Accordion.Title
                    active={activeIndex === 0}
                    index={0}
                    onClick={this.handleClick}
                    className="faq-title"
                    >
                    <Icon name='dropdown' />
                    What browser should I use for optimal seminar experience?
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0} className="faq-content">
                    <p>
                        Google Chrome is the preferred browser. Firefox and Microsoft Edge are ideal.
                    </p>
                    </Accordion.Content>

                    <Accordion.Title
                    active={activeIndex === 1}
                    index={1}
                    onClick={this.handleClick}
                    className="faq-title"
                    >
                    <Icon name='dropdown' />
                    I am not seeing any video, what should I do?
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 1} className="faq-content">
                    <p>
                        Please ensure your bank has this website whitelisted; <b>https://player.live-video.net/1.0.0/amazon-ivs-videojs-tech.min.js</b>
                    </p>
                    </Accordion.Content>
                    <Accordion.Title
                    active={activeIndex === 2}
                    index={2}
                    onClick={this.handleClick}
                    className="faq-title"
                    >
                    <Icon name='dropdown' />
                    How do I ask a question?
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 2} className="faq-content">
                    <p>
                        In the Learning Sessions tab- Please click on “Enter the Chat Room Now” button and click join. 
                    </p>
                    </Accordion.Content>
                    <Accordion.Title
                    active={activeIndex === 3}
                    index={3}
                    onClick={this.handleClick}
                    className="faq-title"
                    >
                    <Icon name='dropdown' />
                    How do I take part in the Network Session on day 3?
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 3} className="faq-content">
                    <p>
                        The Networking Session will be a live Webex meeting. Login information will be sent the day before as well as displayed in the Learning Sessions tab. You will be able to talk and chat live with a Fiserv expert. 
                    </p>
                    </Accordion.Content>
                    <Accordion.Title
                    active={activeIndex === 4}
                    index={4}
                    onClick={this.handleClick}
                    className="faq-title"
                    >
                    <Icon name='dropdown' />
                    Will these sessions be recorded to watch at a later date?
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 4} className="faq-content">
                    <p>
                        Yes, you will have access to this site until July 31<sup>st</sup>. 
                    </p>
                    </Accordion.Content>
                    <Accordion.Title
                    active={activeIndex === 5}
                    index={5}
                    onClick={this.handleClick}
                    className="faq-title"
                    >
                    <Icon name='dropdown' />
                        How does my institution get unlimited connections?
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 5} className="faq-content">
                    <p>
                        Please have each user register individually. 
                    </p>
                    </Accordion.Content>
                    <Accordion.Title
                    active={activeIndex === 6}
                    index={6}
                    onClick={this.handleClick}
                    className="faq-title"
                    >
                    <Icon name='dropdown' />
                    I have additional questions. Who should I reach out to?
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 6} className="faq-content">
                    <p>
                        Please reach out to <a href="mailto:educationseminars@fiserv.com">educationseminars@fiserv.com</a> 
                    </p>
                    </Accordion.Content>
                </Accordion>
            </div>
        )
    }
}