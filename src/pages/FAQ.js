import React, { Fragment } from "react";
import Sidenav from "../components/SideNav";
import FAQS from "../components/FAQs";
import { Header  } from 'semantic-ui-react'


const FAQ = () => (
    <Fragment>
      <div className="next-steps my-5 content-wrapper">
        <Sidenav />
        <div className="main-content faq-content">
          <div className="faq-container">
            <Header as='h2' className="header page-title faq">
              <i className='fa fa-fw fa-users' style={{ fontSize: '1.5em', margin: '5px 10px 5px 5px' }}/>FAQs
            </Header>
          <div className="faq-sections">
            <FAQS />  
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  );
  
export default FAQ;