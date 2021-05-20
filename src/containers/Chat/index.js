import React, { useEffect, useState, Component, useRef } from 'react';
import ReactDOM from 'react-dom'

import API, { graphqlOperation } from '@aws-amplify/api';
import '@aws-amplify/pubsub';
import { Connect } from "aws-amplify-react";
import Amplify, { Auth, Storage } from 'aws-amplify';

import { Button, Dimmer, Segment } from 'semantic-ui-react'

import VideoPlayer from '../VideoPlayer';
import ReconnectingWebSocket from 'reconnecting-websocket';
import Popout from 'react-popout-v2';
import ScrollToBottom from 'react-scroll-to-bottom';
import Avatar from 'react-avatar';
import ChatProfileImage from './profileImage'

import { useFormFields } from "../../libs/hooksLib";
import { createMessage } from '../../graphql/mutations';
import { onCreateMessage } from '../../graphql/subscriptions';
import { messagesByChannelID } from '../../graphql/queries';
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
  const [isOpen, setOpen] = useState(false)

  const [show, setShow] = useState();

  useEffect(() => {
    async function getUsername() {
      const { username } = await Auth.currentAuthenticatedUser();
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
      console.log(user)
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
          {/* <Button
            onClick={() => setShow(!show)}
            className='dimmerShow'
          >Show Chat</Button> */}
          {/* <Segment>
          <Dimmer active className={`${show ? "show" : "noshow"}`} /> */}
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={message.author === username ? 'message me' : 'message'}>
                    {console.log(message.group)}
                    {message.group === '{group=[Fiserv]}' ?
                      <div>
                        
                        <h3>{message.author}<FaStar className="fiserv-user"/></h3>
                        {message.body}
                      </div>
                    :
                    <div>
                      <h3>{message.author}</h3>
                      {message.body}
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
                  {!isOpen && <FaExternalLinkAlt className='openPopup' onClick={() => setOpen(true)}>Open Popout</FaExternalLinkAlt>}
              </form>
            </div>{/* </Segment> */}
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
                      {/* <img src={image} height="50px"/>   */}
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