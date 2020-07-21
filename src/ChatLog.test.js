import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatLog from './ChatLog';

it ("Participant List render without crash", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <ChatLog />
    , div);
    ReactDOM.unmountComponentAtNode(div);
});

it ("Participants render without crash", () => {
    const tree = renderer.create(<ChatLog />).toJSON();
    expect(tree).toMatchSnapshot();
});
