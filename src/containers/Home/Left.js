import React, { Component } from 'react';


class Left extends Component {
  render() {
      return (
        <section className='left home'>
          <div>
            <div className="greetings">
              <img
              class='mb-3 app-logo'
              src='https://seminar-media.s3.amazonaws.com/Spring/2021/home-banner.png'
              alt='2021 Precision Spring Conference'
              width=''
            />
            </div>
            
            <h1>Introduction</h1>
            <p>
              Now is the time to join Fiserv experts and industry peers for this year’s Precision Knowledge Exchange. Optimize your organization’s performance and drive home valuable software and procedural insights during this comprehensive three-day seminar. Fiserv experts facilitate interactive presentations and discussions designed to inform, educate, and empower. Leverage this virtual venue to learn more about the software you use every day and share your best practices and software tips all while building a diverse network of relationships.
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
                  1 Connection- $450
                </li>
                <li>
                  2 Connection- $750
                </li>
                <li>
                  3+ Connection- $1,500
                </li>
              </ul>
            <h3>Standard:</h3>
              <ul>
                <li>
                  1 Connection- $500
                </li>
                <li>
                  2 Connection- $800
                </li>
                <li>
                  3+ Connection- $1,750
                </li>
              </ul>
              <strong>*Note: *Please register each user individually; your bank will be invoiced following the conclusion of the seminars.</strong>
         </div>
        </section>
      );
    }
}

export default Left;
