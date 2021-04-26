import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer  from './store/reducers';
import App from './App';
import thunk from 'redux-thunk';

let store:any;
class Polling extends Component< any, any >{
  constructor(props: any ) {
    super(props);
    store = createStore(reducer, applyMiddleware(thunk));
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default Polling;