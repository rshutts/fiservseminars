import React, { useEffect, useState, Component, useRef } from 'react';
import ReactDOM from 'react-dom'

import API, { graphqlOperation } from '@aws-amplify/api';
import '@aws-amplify/pubsub';
import { Connect } from "aws-amplify-react";
import Amplify, { Auth, Storage } from 'aws-amplify';

import { Button, Dimmer, Segment } from 'semantic-ui-react'

import ReconnectingWebSocket from 'reconnecting-websocket';
import Popout from 'react-popout-v2';
import ScrollToBottom from 'react-scroll-to-bottom';
import Avatar from 'react-avatar';
import ChatProfileImage from './profileImage'
import { Picker } from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'

import { useFormFields } from "../../libs/hooksLib";
import { createMessage } from '../../graphql/mutations';
import { onCreateMessage } from '../../graphql/subscriptions';
import { messagesByChannelID } from '../../graphql/queries';
/* import { listMessages } from '../../graphql/queries'; */

import Error from "../../components/Error";

import './Chat.css';
import { FaStar, FaExternalLinkAlt } from 'react-icons/fa'

import config from '../../aws-config';

const Chat = props => {
  const [username, setState] = useState(null);
  const [userGroup, setUserGroup] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageBody, setMessageBody] = useState('');
  const messagesEndRef = useRef(null);
  const [profile, setProfile] = useState({
    id: "",
    name: "",
    group: ""
  });
  const [emojiPickerState, SetEmojiPicker] = useState(false);

  const [connection, setConnection] = useState(null);

  const [isOpen, setOpen] = useState(false)

  const [show, setShow] = useState();

  let emojiPicker;
  if (emojiPickerState) {
    emojiPicker = (
      <Picker
        title="Pick your emoji…"
        emoji="point_up"
        onSelect={emoji => setMessageBody(messageBody + emoji.native)}
        onClick={closePicker}
      />
    );
  }

  useEffect(() => {
    async function getUsername() {
      const user = await Auth.currentUserInfo();
      console.log(user);
      const username = user.username
      setState(username);
    }
    getUsername();
  }, [])

  useEffect(() => {
    async function getUserGroup() {
      const user = await Auth.currentUserInfo();
      const group = await Auth.currentSession();
      const userGroup = group.accessToken.payload['cognito:groups'];
      setUserGroup(userGroup);
      console.log(userGroup)
    }
    getUserGroup();
  }, [])

  const onLoad = async () => {
    try {
      await Auth.currentAuthenticatedUser();
      const user = await Auth.currentUserInfo()  
      
      {!user.attributes.group ?
        setProfile({
          id: user.id,
          name: user.attributes.name,
          group: 'User'
        })
      :
        setProfile({
          id: user.id,
          name: user.attributes.name,
          group: user.attributes.group
        })
      };
    }
    catch(e) {
      if (e !== 'No current user') {
        Error(e);
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
      group: (userGroup),
      body: messageBody.trim()
    };

    try {
      setMessageBody('');
      await API.graphql(graphqlOperation(createMessage, { input }))
    } catch (error) {
      console.warn(error);
    }
  };
  
  function triggerPicker(event) {
    event.preventDefault();
    SetEmojiPicker(!emojiPickerState);
  }

  function closePicker(event) {
    /* event.preventDefault(); */
    SetEmojiPicker(emojiPickerState);
  }
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
                  className={message.author === username ? 'message me' : 'message'}>
                    {message.group === '[Fiserv]' ?
                      <div>
                        
                        <h3>{message.author}<FaStar className="fiserv-user"/></h3>
                        {message.body}
                      </div>
                    :
                    <div>
                      <h3>{message.author}</h3>
                      {message.body}
                      {console.log(message.group)}
                    </div>
                  }
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
                  <FaStar className="fiserv-employee"/>Fiserv
                  {!isOpen && <FaExternalLinkAlt className='openPopup' onClick={() => setOpen(true)}>Open Popout</FaExternalLinkAlt>}
              </form>
              {emojiPicker}
              <button
            class="ma4 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
            onClick={triggerPicker}
          >
            Add an Emoji!
            <span role="img" aria-label="">
              😁
            </span>
          </button>
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
                    className={message.author === username ? 'message me' : 'message'}>
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