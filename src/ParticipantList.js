import React from 'react';
import Participant from './Participant';
import store from './store';

class ParticipantList extends React.Component {
  render() {
    const participants = store.participants.map(participant => {
      return <Participant 
        id={participant.id}
        avatar={participant.avatar}
        name={participant.name}
        inSession={participant.inSession}
        onStage={participant.onStage}
      />
    });
    
    return (
      <ul className="ParticipantList">
          {participants}
      </ul>
    );
  }
}

export default ParticipantList;