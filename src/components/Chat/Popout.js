import React from "react";
import Popout from "react-popout";
import ReactDOM from "react-dom";

import './Popout.css'

class ChatPopout extends React.Component {
  constructor(props) {
    super(props);
    this.popout = this.popout.bind(this);
    this.popoutClosed = this.popoutClosed.bind(this);
    this.state = { isPoppedOut: false };
  }

  popout() {
    this.setState({ isPoppedOut: true });
  }

  popoutClosed() {
    this.setState({ isPoppedOut: false });
  }

  render() {
    if (this.state.isPoppedOut) {
      return (
        <Popout
          url="popout.html"
          title="Window title"
          onClosing={this.popoutClosed}
        >
          <div>Popped out content!</div>
        </Popout>
      );
    } else {
      var popout = (
        <button
          onClick={this.popout}
          className="buttonGlyphicon glyphicon glyphicon-export"
        >
          Open
        </button>
      );
      return (
        <div>
          <strong>Section {popout}</strong>
          <div>Inline content</div>
        </div>
      );
    }
  }
}

export default ChatPopout;