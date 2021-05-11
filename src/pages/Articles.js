import React, { Fragment } from "react";
import Sidenav from "../containers/SideNav";
import Articles from "../containers/ResourceCenter/Articles";
import { Header  } from 'semantic-ui-react'


const Article = () => (
  <div className="main-content articles-content">
    <div className="articles-container">
        <Header as='h2' className="header page-title">
            <i className='fa fa-fw fa-newspaper' style={{ fontSize: '1.5em', margin: '5px 10px 5px 5px' }}/>Resource Center: Session Collateral
        </Header>
      <div className="faq-sections">
        <Articles />  
      </div>
    </div>
  </div>
);
  
export default Article;