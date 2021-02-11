import React, { Component } from 'react';


class Left extends Component {
  render() {
      return (
        <section className='left'>
          <div>
            <div className="greetings">
              <img
              class='mb-3 app-logo'
              src='https://seminar-media.s3.amazonaws.com/spring-home-banner.png'
              alt='2020 Premier Fall Conference'
              width=''
            />
            </div>
            
            <h1>Introduction</h1>
            <p>
              We are better together. Join Fiserv experts and your peers for
              interactive presentations and discussions that provide the
              necessary insight to become more efficient. Use this virtual venue
              to learn more about the software you use every day and share your
              best practices and software tips all while building a diverse
              network of professional relationships.
            </p>
            <p>
              This fall, the Premier Education Seminars are three days of
              interactive sessions that provide the ideal setting to gain new
              perspectives and make valuable connections with peers and Fiserv
              experts. During the three days you will experience a Simulive
              training event, On-Demand recordings including a look into the new
              User Interface (UI) and Abiliti for online banking, a virtual
              social hour, a chance to win awesome prizes, a few special video
              surprises and access to the electronic version of the meeting
              material.
            </p>
            <h2><a href="https://forms.office.com/Pages/ResponsePage.aspx?id=HzqHEY1MDUWN--N6LiVX-NLq3J1hqdlHjCimOyYPw2tUNUJQTllLNjNaU1VHSjcyUjVXVVVWNVpNRSQlQCN0PWcu" target="_blank" rel="noopener noreferrer">Premier Education Seminar Survey</a></h2>
            <p>We are committed to providing educational opportunities that support your success. <span style={{ color: "#ff6600"}}>Please tell us how we can strengthen your learning experience by completing a brief survey at any point during the seminar.</span></p>
            <p>
              We are offering each Simulive session twice, once from 8 a.m. - 12 p.m. Central Time and a repeat session from 1 p.m. - 5 p.m. Central Time on the following days:
              <br/>
              <ul>
                <li>
                  October 21, 22 and 23, 2020
                </li>
                <li>
                  November 17, 18 and 19, 2020
                </li>
              </ul>
            </p>
            <p>
              Standard registration fee after September 18:
              <br/>
              <ul>
                <li>
                  $500 per connection
                </li>
                <li>
                  $850 for <strong>2</strong> connections*
                </li>
                <li>
                  $1,750 for <strong>3</strong> or more connections*
                </li>
              </ul>
                <strong>*SimuLive and On-Demand Recordings available through February 28, 2021</strong>
            </p>
         </div>
        </section>
      );
    }
}

export default Left;
