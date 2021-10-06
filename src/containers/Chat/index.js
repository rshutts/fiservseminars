import React, { useEffect, useState, Component, useRef } from 'react';
import ReactDOM from 'react-dom'

import { Connect } from "aws-amplify-react";
import Amplify, { API, Auth, PubSub, Storage, graphqlOperation } from 'aws-amplify';
import '@aws-amplify/pubsub';

import { Button, Dimmer, Segment } from 'semantic-ui-react'

import useWebSocket from 'react-use-websocket';

import Popout from 'react-popout-v2';
import ScrollToBottom from 'react-scroll-to-bottom';
import Avatar from 'react-avatar';
/* import InputEmoji from 'react-input-emoji' */
import ChatProfileImage from './profileImage'

import { useFormFields } from "../../libs/hooksLib";
import { createMessage } from '../../graphql/mutations';
import { onCreateMessage } from '../../graphql/subscriptions';
import { messagesByChannelID } from '../../graphql/queries';

import Error from "../../components/Error";

import './Chat.css';
import { FaStar, FaExternalLinkAlt } from 'react-icons/fa'

import config from '../../aws-config';

function Chat(props) {
  const [profile, setProfile] = useState({
    username: "",
    group: ""
  });
  const [messages, setMessages] = useState([]);
  const [messageBody, setMessageBody] = useState('');
  const messagesEndRef = useRef(null);

  const [connection, setConnection] = useState(null);
  const [isOpen, setOpen] = useState(false)
  const [show, setShow] = useState();
  const [ text, setText ] = useState('')
  
  const socketUrl = 'wss://2cy33jj671.execute-api.us-east-1.amazonaws.com/production';

  const onLoad = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log(user)
      setProfile({
        username: user.username,
        group: user.signInUserSession.accessToken.payload['cognito:groups'][0]
      });
    } catch(e) {
 
    }
    
  }
  useEffect(()=>{
    onLoad();
    }, []);


  useEffect(() => {
    API
      .graphql(graphqlOperation(messagesByChannelID, {
        channelID: '1',
        sortDirection: 'ASC',
        limit: '1000000'
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
      author: (profile.username),
      authorGroup: (profile.group),
      body: messageBody.trim()
    };

    try {
      setMessageBody('');
      await API.graphql(graphqlOperation(createMessage, { input }))
    } catch (error) {
      console.warn(error);
    }
  };

return (
  <div className='main full-width full-height'>
    <div className='content-wrapper mg-2'>
      <div className="col-wrapper">
        <header>
          <h1>Chat</h1>
        </header>
          <div className="chat-wrapper pos-absolute pd-t-1 top-0 bottom-0">
          <ScrollToBottom className="react-scroll-to-bottom--scroll">
          <div className="messages-scroller messages">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={message.author === profile.username ? 'message me' : 'message'}>
                    {console.log(profile.group)}
                    <div>
                      { message.authorGroup === "Fiserv" ?
                        <h3>{message.author}*</h3>
                      :
                        <h3>{message.author}</h3>
                      }
                      { console.log(message.author)}
                      {message.body}
                    </div>
                </div>
              ))}
              <div className="chat-bar composer">
                <form onSubmit={handleSubmit}>
                {/* <InputEmoji
                  value={text}
                  onChange={setText}
                  cleanOnEnter
                  onEnter={handleOnEnter}
                  placeholder="Type a message"
                /> */}
                <input
                  type="text"
                  name="message"
                  placeholder="Type your message here..."
                  onChange={handleChange}
                  value={messageBody} />
                  <FaStar className="fiserv-employee"/>Fiserv
                  {!isOpen && <FaExternalLinkAlt className='openPopup' onClick={() => setOpen(true)}>Open Popout</FaExternalLinkAlt>}
              </form>
            </div>
          </div>
          
        </ScrollToBottom>
        <>
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
                    className={message.author === profile.username ? 'message me' : 'message'}>
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
