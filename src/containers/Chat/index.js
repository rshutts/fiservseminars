import React, { useEffect, useState, Component, useRef } from 'react';
import ReactDOM from 'react-dom'

import API, { graphqlOperation } from '@aws-amplify/api';
import '@aws-amplify/pubsub';
import { Connect } from "aws-amplify-react";
import Amplify, { Auth, Storage } from 'aws-amplify';

import VideoPlayer from '../VideoPlayer';
import ReconnectingWebSocket from 'reconnecting-websocket';
import Popout from 'react-popout-v2';
import ScrollToBottom from 'react-scroll-to-bottom';
import Avatar from 'react-avatar';
import ChatProfileImage from './profileImage'

import { useFormFields } from "../../libs/hooksLib";
import { onError } from "../../libs/errorLib";
import { createMessage } from '../../graphql/mutations';
import { onCreateMessage } from '../../graphql/subscriptions';
import { messagesByChannelID } from '../../graphql/queries';

import './Chat.css';

import config from '../../aws-config';

const Chat = props => {
  const [username, setState] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageBody, setMessageBody] = useState('');
  const messagesEndRef = useRef(null);
  const [profile, setProfile] = useState({
    id: "",
    name: "",
  });
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    async function getUsername() {
      const { username } = await Auth.currentAuthenticatedUser();
      setState(username);
    }
    getUsername();
  }, [])

  const onLoad = async () => {
    try {
      await Auth.currentAuthenticatedUser();
      const user = await Auth.currentUserInfo()  
      setProfile({
        id: user.id,
        name: user.attributes.name,
      });
    }
    catch(e) {
      if (e !== 'No current user') {
        onError(e);
      }
    }
  }
  
  useEffect(() => {
    onLoad();
  }, []);

  useEffect(() => {
    API
      .graphql(graphqlOperation(messagesByChannelID, {
        channelID: '1',
        sortDirection: 'ASC'
      }))
      .then((response) => {
        const items = response?.data?.messagesByChannelID?.items;

        if (items) {
          setMessages(items);
        }
      })
  }, []);

  useEffect(() => {
    const subscription = API
      .graphql(graphqlOperation(onCreateMessage))
      .subscribe({
        next: (event) => {
          setMessages([...messages, event.value.data.onCreateMessage]);
        }
      });

    return () => {
      subscription.unsubscribe();
    }
  }, [messages]);

  const handleChange = (event) => {
    setMessageBody(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    
    const input = {
      channelID: '1',
      author: (username),
      body: messageBody.trim()
    };

    try {
      setMessageBody('');
      await API.graphql(graphqlOperation(createMessage, { input }))
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
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
  })

  const [image, setImage] = useState([]);

  let fileInput = React.createRef();

  useEffect(() => {
    onPageRendered();
  }, []);

  const onPageRendered = async () => {
    getProfilePicture();
  };
  
  const getProfilePicture = () => {
    Storage.get(`profile.png`, {level: 'protected'})
      .then(url => {
        var myRequest = new Request(url);
        fetch(myRequest).then(function(response) {
          if (response.status === 200) {
            setImage(url);
          }
          console.log(url)
        });
      })
      .catch(err => console.log(err));    
  };
  
return (
  <div className='main full-width full-height'>
    <div className='content-wrapper mg-2'>
      <div className="col-wrapper">
        <header>
          <h1>Chat</h1>
        </header>
          <div className="chat-wrapper pos-absolute pd-t-1 top-0 bottom-0">
          <ScrollToBottom>
          <div className="messages-scroller messages">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={message.author === username ? 'message me' : 'message'}>
                    <ChatProfileImage/>
                    <div>
                      <h3>{message.author}</h3>
                      {message.body}
                    </div>
                </div>
              ))}
              <div className="chat-bar composer">
                <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="message"
                  placeholder="Type your message here..."
                  onChange={handleChange}
                  value={messageBody} />
              </form>
            </div>
          </div>
        </ScrollToBottom>
        <>
          {!isOpen && <button onClick={() => setOpen(true)}>Open Popout</button>}
          {isOpen && (
          <Popout
            id={'ex2'}
            url={'/chat-popout?room=Fiserv'}
            reactDom={ReactDOM}
            containerId="chat-popout-window"
            children={
              <div>
              <header>
                <h1>Chat</h1>
              </header>
              <div className="chat-wrapper pos-absolute pd-t-1 top-0 bottom-0">
                <ScrollToBottom>
                <div className="messages-scroller messages">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={message.author === username ? 'message me' : 'message'}>
                      <img src={image} height="50px"/>  
                      <div>
                        <h3>{message.author}</h3>
                        {message.body}
                      </div>
                  </div>
                ))}
                <div className="chat-bar composer">
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="message"
                      placeholder="Type your message here..."
                      onChange={handleChange}
                      value={messageBody} />
                  </form>
                </div>
              </div>
            </ScrollToBottom>
          </div>
          </div>
          }
            closeOnParentUnload={true}
            onClose={() => setOpen(false)}
          />
          )}
        </>
      </div>
      </div>
    </div>
  </div>
  );
}

  export default Chat