import React from 'react';

class Participant extends React.Component {
  isInSession(inSession, onStage) {
    if (onStage) {
      return <p>on stage</p>;
    } else if (inSession) {
      return <p>in session</p>
    }
    return <p>left session</p>;
  }
  
  render() {
    return (
      <li className="Participant" id={this.props.id}>
        <img src={this.props.avatar} alt="this user's avatar"/>
        <div className="UserStatus">
          <p>{this.props.name}</p>
          {this.isInSession(this.props.inSession, this.props.onStage)}
        </div>
      </li>
    )
  }
}

export default Participant;