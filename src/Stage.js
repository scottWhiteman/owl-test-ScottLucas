import React from 'react';
import Participant from './Participant';
import './Stage.css';

class Stage extends React.Component {
    static defaultProps = {
        participants: []
    };

    render() {
        const {participants} = this.props
        return (
            <div id="Stage">
                {participants.map(participant => (
                    <Participant 
                        id={participant.id}
                        avatar={participant.avatar}
                        name={participant.name}
                        onStage={participant.onStage}
                    />
                ))}
            </div>
        );
    }
}

export default Stage;