import React, { useEffect, useState, Component, useRef } from 'react';
import ReactDOM from 'react-dom'

import { Connect } from "aws-amplify-react";
import { Auth, Storage } from 'aws-amplify';
import Amplify from '@aws-amplify/core';
import API, { graphqlOperation } from '@aws-amplify/api';
import '@aws-amplify/pubsub';

import { Button, Dimmer, Segment } from 'semantic-ui-react'

import ReconnectingWebSocket from 'reconnecting-websocket';
import Popout from 'react-popout-v2';
import ScrollToBottom from 'react-scroll-to-bottom';
import Avatar from 'react-avatar';
import ChatProfileImage from './profileImage'
/* import { Picker } from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css' */

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
  });
  const [messages, setMessages] = useState([]);
  const [messageBody, setMessageBody] = useState('');
  const messagesEndRef = useRef(null);
  /* const [userGroup, setUserGroup] = useState({
    group: "",
  }); */
/*   const [emojiPickerState, SetEmojiPicker] = useState(false); */

  const [connection, setConnection] = useState(null);

  const [isOpen, setOpen] = useState(false)

  const [show, setShow] = useState();

  
  /* let emojiPicker;
  if (emojiPickerState) {
    emojiPicker = (
      <Picker
        title="Pick your emoji…"
        emoji="point_up"
        onSelect={emoji => setMessageBody(messageBody + emoji.native)}
        onClick={closePicker}
      />
    );
  } */

  const onLoad = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log(user)
      setProfile({
        username: user.username
      });
     /*  setUserGroup({
        group: user.signInUserSession.accessToken.payload["cognito:groups"],
      }); */
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
      };
    }, [messages]);
  
    const handleChange = (event) => {
    setMessageBody(event.target.value);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
  
    const input = {
      channelID: '1',
      author: 'Dave',
      body: messageBody.trim()
    };
  
    try {
      setMessageBody('');
      await API.graphql(graphqlOperation(createMessage, { input }))
    } catch (error) {
      console.warn(error);
    }
  };
  
  /* function triggerPicker(event) {
    event.preventDefault();
    SetEmojiPicker(!emojiPickerState);
  } */

  /* function closePicker(event) {
    event.preventDefault();
    SetEmojiPicker(emojiPickerState);
  } */
  return (
    <div className="container">
      <div className="messages">
        <div className="messages-scroller">
        {messages.map((message) => (
          <div
            key={message.id}
            className={message.author === 'Dave' ? 'message me' : 'message'}>{message.body}</div>
        ))}
        </div>
      </div>
      <div className="chat-bar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="messageBody"
            placeholder="Type your message here"
            onChange={handleChange}
            value={messageBody}
          />
        </form>
      </div>
    </div>
  );
};

  export default Chat