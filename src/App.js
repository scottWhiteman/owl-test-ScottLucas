import React from 'react';
import logo from './logo.svg';
import './App.css';
import ParticipantList from './ParticipantList';
import Stage from './Stage';
import store from './store';
import Participant from './Participant';
import ChatLog from './ChatLog';

function App() {
  return (
    <div className="App">
      <div className="ParticipantContainer">
        <ParticipantList />
        <ChatLog />
      </div>
      <Stage participants={store.participants}/>
      
    </div>
  );
}

export default App;
