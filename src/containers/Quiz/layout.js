/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";

const Layout = props => {
  return (
    <>
      <div>
        <Container id="contentContainer">
          <Row>
            <Col>
              {" "}
              <Jumbotron>
               
                <span className="quizTitle">Kwizz</span>

                <p className="quizDescription">
                  Become thé Kwizz Guru amongst colleagues, friends and family.
                </p>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col>
              {" "}
              <main>{props.children}</main>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Layout;
