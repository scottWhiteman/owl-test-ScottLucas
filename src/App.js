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
      <Stage participants={store.participants}/>
      <ChatLog />
    </div>
  );
}

export default App;
