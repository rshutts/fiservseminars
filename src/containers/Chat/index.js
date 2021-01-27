import React, { useEffect, useState, Component } from 'react';

import Amplify from '@aws-amplify/core';
import API, { graphqlOperation } from '@aws-amplify/api';
import '@aws-amplify/pubsub';
import { Connect } from "aws-amplify-react";
import { Auth } from "aws-amplify";

import VideoPlayer from '../VideoPlayer';
import ReconnectingWebSocket from 'reconnecting-websocket';

import { createMessage } from '../../graphql/mutations';
import { onCreateMessage } from '../../graphql/subscriptions';
import { messagesByChannelId } from '../../graphql/queries';

import './Chat.css';

import config from '../../aws-config';

Amplify.configure({
  "aws_appsync_graphqlEndpoint": "https://qssh4niq5bgujocnsbpv2zg7am.appsync-api.us-east-1.amazonaws.com/graphql",
  "aws_appsync_region": "us-east-1",
  "aws_appsync_authenticationType": "AMAZON_COGNITO_USER_POOLS",
  Auth: {
    region: config.aws_cognito_region,
    userPoolId: config.aws_user_pools_id,
    identityPoolId: config.aws_cognito_identity_poll_id,
    userPoolWebClientId: config.aws_user_pools_client_id
  },    
});

const Chat = props => {
  const [username, setState] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageBody, setMessageBody] = useState('');

  useEffect(() => {
    async function getUsername() {
      const { username } = await Auth.currentAuthenticatedUser();
      setState(username);
    }
    getUsername();
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
      body: messageBody.trim()
    };
    console.log(username)
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

return (
  <div className='main full-width full-height'>
    <div className='content-wrapper mg-2'>
      <VideoPlayer videoStream={config.PLAYBACK_URL}/>
      <div className="col-wrapper">
        <header>
          <h1>Chat</h1>
        </header>
        <div className="container chat-wrapper pos-absolute pd-t-1 top-0 bottom-0">
          <div className="messages">
            <div className="messages-scroller">
              {messages.map((message) => (
              
                <div
                  key={message.id}
                  className={message.author === username ? 'message me' : 'message'}>
                    <h1>{message.author}</h1>
                    {message.body}
                </div>
              ))}
            </div>
          </div>
          <div className="chat-bar">
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
      </div>
    </div>
  </div>
  );
}

  export default Chat