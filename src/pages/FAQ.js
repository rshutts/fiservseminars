import React from "react";
import FAQs from "../containers/FAQs/FAQs";
import { Header  } from 'semantic-ui-react'

const FAQ = () => (
  <div className="main-content faq-content">
    <div className="faq-container">
      <Header as='h2' className="header page-title faq">
        <i className='fa fa-fw fa-users' style={{ fontSize: '1.5em', margin: '5px 10px 5px 5px' }}/>FAQs
      </Header>
      <div className="faq-sections">
        <FAQs />  
      </div>
    </div>
  </div>
);
  
export default FAQ;