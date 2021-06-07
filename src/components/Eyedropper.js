import React, { Component } from 'react'
import EyeDropper from 'react-eyedropper'

export default class Eyedrop extends Component {
  state = {
    r: 255,
    g: 255,
    b: 255
  }
  setColor = ({ r, g, b }) => {
    this.setState({ r, g, b })
  }
  render() {
    const {r, g, b} = this.state
    return (
      <div>
        <div className="main">
          <div className="container first">rgb(106, 0, 0)</div>
          <div className="container second">rgb(106, 124, 0)</div>
          <div className="container third">rgb(106, 124, 138)</div>
          <div className="container fourth">rgb(15, 124, 138)</div>
          <div className="container fifth">rgb(15, 44, 138)</div>
          <div className="container sixth">rgb(219, 238, 97)</div>
          <div className="container seventch">gradient</div>
        </div>
          <div className="result">
            <div className="container " style={{backgroundColor: `rgb(${r}, ${g}, ${b})`}}>rgb({r}, {g}, {b})</div>
          </div>
        <div className="eye-drop-container">
          <EyeDropper initializedColor={this.setColor}/>
        </div>
        <div id="container">
		      <img src="https://s3.us-east-2.amazonaws.com/fiservseminars-media.com/logo.png" id="sample"/>
	      </div>
      </div>
    )
  }
}


