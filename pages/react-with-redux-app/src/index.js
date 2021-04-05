import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Provider} from "react-redux"; 
import {createStore} from "redux";

import App from './App';

const initialState=[
  "Toyota land cruiser 300",
  "Nissan 300 zx"
]

function autoList(state=initialState, action) { 
  console.log(action)
  if(action.type==="ADD_AUTO") { 
    return[
      ...state,
      action.payload 
    ] 
  }
  return state;
}

const store=createStore(autoList);

ReactDOM.render(
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('root')
);

