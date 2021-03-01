import React, { Component } from 'react';


class Left extends Component {
  render() {
      return (
        <section className='left'>
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
              Now is the time to join Fiserv experts and industry peers for this year’s Precision Executive Knowledge Exchange. Optimize your organization’s performance and drive home valuable software and procedural insights during this comprehensive three-day seminar. Fiserv experts facilitate interactive presentations and discussions designed to inform, educate, and empower. Leverage this virtual venue to learn more about the software you use every day and share your best practices and software tips all while building a diverse network of executive relationships.
            </p>
            <p>
              The 2021 Precision Executive Knowledge Exchange is the affordable and informative training solution your organization deserves. Broaden executive awareness of the features available in Precision so that you can better lead your teams, drive revenue, and improve customer relationships. Register Now and begin your institution’s journey towards efficiency!
            </p>
            {/* <h2><a href="https://forms.office.com/Pages/ResponsePage.aspx?id=HzqHEY1MDUWN--N6LiVX-NLq3J1hqdlHjCimOyYPw2tUNUJQTllLNjNaU1VHSjcyUjVXVVVWNVpNRSQlQCN0PWcu" target="_blank" rel="noopener noreferrer">Premier Education Seminar Survey</a></h2>
            <p>We are committed to providing educational opportunities that support your success. <span style={{ color: "#ff6600"}}>Please tell us how we can strengthen your learning experience by completing a brief survey at any point during the seminar.</span></p> */}
           {/*  
              We are offering each Simulive session twice, once from 8 a.m. - 12 p.m. Central Time and a repeat session from 1 p.m. - 5 p.m. Central Time on the following days:
              <br/> */}
            <h2>
              Seminar Dates:
            </h2>
              <ul>
                <li>
                  April 20, 21, and 22, 2021
                </li>
                <li>
                  May 18, 19, and 20, 2021
                </li>
              </ul>
            <h2>
              Standard registration fee:
            </h2>
              <ul>
                <li>
                  $1,500 per financial institution
                </li>
                {/* <li>
                  $850 for <strong>2</strong> connections*
                </li>
                <li>
                  $1,750 for <strong>3</strong> or more connections*
                </li> */}
              </ul>
              <strong>*Note: The $1,500 per institution cost includes all three days with unlimited connections. Each user will need to register individually.</strong>
         </div>
        </section>
      );
    }
}

export default Left;
