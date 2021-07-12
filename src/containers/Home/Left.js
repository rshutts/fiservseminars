import React, { Component } from 'react';


class Left extends Component {
  render() {
      return (
        <section className='left home'>
          <div>
            <div className="greetings">
              <img
              class='mb-3 app-logo'
              src='https://seminar-media.s3.amazonaws.com/Fall/2021/fall-header.png'
              alt='2021 Precision Fall Conference'
              width=''
            />
            </div>
            
            <h1>Introduction</h1>
            <p>
              Now is the ideal time to focus on professional development and optimization of your organization’s performance. Collaborate with Fiserv experts and industry peers for this year’s Fall Education Seminars. This year’s event will provide participants with valuable software and procedural insights throughout the comprehensive three-day seminar. Fiserv experts facilitate interactive presentations and discussions designed to inform, educate, and empower. Attendees will leverage a dynamic, virtual venue while learning about Precision software and best practices all while building a diverse network of professional relationships.
            </p>
            <p>
              The 2021 Precision Fall Education Seminar is the affordable and convenient training solution your organization deserves. Concerned about documenting all of the amazing information the seminars have to offer? This year’s participant’s will gain access to unlimited recordings for three months after the event concludes. Fiserv is also offering unlimited connections for one, low price. Register Now and begin your institution’s journey towards efficiency!
            </p>
            <h2>
              Seminar Dates:
            </h2>
              <ul>
                <li>
                  September 21, 22, and 23, 2021
                </li>
                <li>
                  October 19, 20, and 21, 2021
                </li>
              </ul>
            <h2>
              Registration Fee
            </h2>
            <br />
            <h3>Early Bird - August 20<sup>th</sup>:</h3>
              <ul>
                <li>
                  1 Connection - $450
                </li>
                <li>
                  2 Connections - $750
                </li>
                <li>
                  3+ Connections - $1,500
                </li>
              </ul>
            <h3>Standard:</h3>
              <ul>
                <li>
                  1 Connection - $500
                </li>
                <li>
                  2 Connections - $800
                </li>
                <li>
                  3+ Connections - $1,750
                </li>
              </ul>
              <strong>*Note: *Please register each user individually; your bank will be invoiced following the conclusion of the seminars.</strong>
         </div>
        </section>
      );
    }
}

export default Left;
