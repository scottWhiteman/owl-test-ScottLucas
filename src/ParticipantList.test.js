import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ParticipantList from './Participant';

it ("Participant List render without crash", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <ParticipantList />
    , div);
    ReactDOM.unmountComponentAtNode(div);
});

it ("Participants render without crash", () => {
    const tree = renderer.create(<ParticipantList />).toJSON();
    expect(tree).toMatchSnapshot();
});
