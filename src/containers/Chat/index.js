import React, { useEffect, useState, Component, useRef } from 'react';
import ReactDOM from 'react-dom'

import API, { graphqlOperation } from '@aws-amplify/api';
import '@aws-amplify/pubsub';
import { Connect } from "aws-amplify-react";
import Amplify, { Auth, Storage } from 'aws-amplify';

import VideoPlayer from '../VideoPlayer';
import ProfileImage from './profileImage';
import ReconnectingWebSocket from 'reconnecting-websocket';
import Popout from 'react-popout-v2'

import { useFormFields } from "../../libs/hooksLib";
import { onError } from "../../libs/errorLib";
import { createMessage } from '../../graphql/mutations';
import { onCreateMessage } from '../../graphql/subscriptions';
import { messagesByChannelId } from '../../graphql/queries';

import './Chat.css';

import config from '../../aws-config';

const Chat = props => {
  const [username, setState] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageBody, setMessageBody] = useState('');
  const messagesEndRef = useRef(null);
  const [userID, setUser] = useState({
    id: "",
  });
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    async function getUsername() {
      const { username } = await Auth.currentAuthenticatedUser();
      setState(username);
    }
    getUsername();
  }, [])
  
  useEffect(() => {
    async function getUser() {
      const user = await Auth.currentUserInfo();
      setUser({
        userID: user.id,
      });console.log(user.id)
    }
    getUser();
  }, [])

  useEffect(() => {
    API
      .graphql(graphqlOperation(messagesByChannelId, {
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
      user: (userID),
      body: messageBody.trim()
    };

    try {
      setMessageBody('');
      await API.graphql(graphqlOperation(createMessage, { input }))
    } catch (error) {
      console.warn(error);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages]);

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
    Storage.get(`profile.png`, {level: 'private'})
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
                  <div ref={messagesEndRef} />
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
            <>
            {!isOpen && <button onClick={() => setOpen(true)}>Open Popout</button>}
            {isOpen && (
            <Popout
              id={'ex2'}
              url={'#/popout'}
              reactDom={ReactDOM}
              children={
                <p>New popout</p>
              }
              closeOnParentUnload={true}
              onClose={() => setOpen(false)}
            />
          
            )}
            </>
          </div>
        </div>
        {/* {username === 'strasserra04' &&
          <h1>Hi</h1>
        } */}
      </div>
    </div>
  </div>
  );
}

  export default Chat