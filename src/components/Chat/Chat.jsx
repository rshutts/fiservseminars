import React, { Component } from 'react';
import * as config from '../../config';
import ReconnectingWebSocket from 'reconnecting-websocket';

// Components
import VideoPlayer from '../videoPlayer/VideoPlayer';
/* import Contactless from "../../components/Videos/Contactless"; */
import SignIn from './SignIn';

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      metadataId: null,
      showSignIn: false,
      username: '',
      message: '',
      messages: [],
      connection: null,
    };
    this.chatRef = React.createRef();
    this.messagesEndRef = React.createRef();
  }
  
  componentDidMount() {
    const options = {
        minUptime: 50000,
        connectionTimeout: 40000,
        maxRetries: Infinity,
        maxEnqueuedMessages: Infinity,
    };
    const connection = new ReconnectingWebSocket(config.CHAT_WEBSOCKET, [], options);
    connection.onopen = (event) => {
      console.log('WebSocket is now open.');
    };

    connection.onclose = (event) => {
      console.log('WebSocket is now closed.');
    };

    connection.onerror = (event) => {
      console.error('WebSocket error observed:', event);
    };

    connection.onmessage = (event) => {
      // append received message from the server to the DOM element
      const messages = this.state.messages;
      const data = event.data.split('::');
      const username = data[0];
      const message = data.slice(1).join('::'); // in case the message contains the separator '::'

      messages.push({
        timestamp: Date.now(),
        username,
        message,
      });

      this.setState({ messages });
    };

    this.setState({ connection });
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  updateUsername = (username) => {
    this.setState({ username, showSignIn: false }, () =>
      this.chatRef.current.focus()
    );
  };

  handleOnClick = () => {
    const { username } = this.state;
    if (!username) {
      this.setState({ showSignIn: true });
    }
  };

  handleChange = (e) => {
    this.setState({ message: e.target.value });
  };

  handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      // keyCode 13 is carriage return
      const { username, message, connection } = this.state;
      if (message) {
        const data = `{
          "action": "sendmessage",
          "data": "${username}::${message
          .replace(/\\/g, '\\\\')
          .replace(/"/g, '\\"')}"
        }`;
        connection.send(data);

        this.setState({ message: '' });
      }
    }
  };

  parseUrls = (userInput) => {
    var urlRegExp = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g;
    let formattedMessage = userInput.replace(urlRegExp, (match) => {
      let formattedMatch = match;
      if (!match.startsWith('http')) {
        formattedMatch = `http://${match}`;
      }
      return `<a href=${formattedMatch} class="chat-line__link" target="_blank" rel="noopener noreferrer">${match}</a>`;
    });
    return formattedMessage;
  };

  renderMessages = () => {
    const { messages } = this.state;
    return messages.map((message) => {
      let formattedMessage = this.parseUrls(message.message);
      return (
        <div className='chat-line' key={message.timestamp}>
          <p className='username'>
            {message.username}
          </p>
          <p className="message-bubble" dangerouslySetInnerHTML={{ __html: formattedMessage }}>
          </p>
        </div>
      );
    });
  };

  setMetadataId = (metadataId) => {
    this.setState({ metadataId });
  };

  render() {
    const { username, message, showSignIn } = this.state;
    return (
      <React.Fragment>
        <div className='main full-width full-height'>
          <div className='content-wrapper mg-2'>
            {/* <Contactless/> */}
            <VideoPlayer
              setMetadataId={this.setMetadataId}
              videoStream={config.PLAYBACK_URL}
            />
            <div className="col-wrapper">
              <header>
                <h1>Chat</h1>
              </header>
              <div className='chat-wrapper pos-absolute pd-t-1 top-0 bottom-0'>
              
                <div className='messages'>
                  {this.renderMessages()}
                  <div ref={this.messagesEndRef} />
                </div>  
                <div className='composer'>
                {showSignIn && <SignIn updateUsername={this.updateUsername} />}
                  {!username && (
                    <fieldset>
                      <button
                        onClick={this.handleOnClick}
                        className='btn-primary btn btn--primary full-width rounded chat-signon'
                      >
                        ENTER THE CHAT ROOM NOW
                      </button>
                    </fieldset>
                  )}
                  {username && (
                    <input
                    ref={this.chatRef}
                    className={`rounded ${!username ? 'hidden' : ''}`}
                    type='text'
                    placeholder='Enter your message'
                    value={message}
                    maxLength={510}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                  />
                  )}  
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Chat;
