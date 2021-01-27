import React, { Component, useState, useEffect } from 'react'
import Marquee from "react-fast-marquee";

export default class ScrollingTicker extends Component {

  render() {
    return (
      <Marquee
        pauseOnHover="true"
        gradient="false"
        /* speed="10" */
        gradientWidth="0"
        style={{ color: '#ffffff' }}
      >
        <h1>
          If you have any questions regarding the event, email us at <a href="mailto:educationseminars@fiserv.com">educationseminars@fiserv.com</a>
        </h1>
      </Marquee>
    )
  }
}