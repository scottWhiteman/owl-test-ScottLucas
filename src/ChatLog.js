import React from 'react';
import store from './store';

class ChatLog extends React.Component {
  generateLog() {
    return store.chatEvents.map(chatEvent => {
      let currentUser = store.participants.find(participant => chatEvent.participantId === participant.id).name;

      console.log(currentUser);

      if (chatEvent.type === 'message') {
        let time = new Date(chatEvent.timestamp);
        let timeString = `${time.getHours().toString()}:${time.getMinutes().toString()}`;

        return (
          <div>
            <p>{currentUser} {timeString}</p>
            <p>{chatEvent.message}</p>
          </div>
        );
      } else {
        return (
          <div>
            <p>{currentUser} gave a {chatEvent.type}.</p>
          </div>
        );
      }
    })
  }
  
  render() {
    const elems = this.generateLog();
    console.log(elems);
    
    return (
      <div>
        {elems}
      </div>
    );
  }
}

export default ChatLog;