import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Stage from './Stage';

it ("Participant List render without crash", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <Stage />
    , div);
    ReactDOM.unmountComponentAtNode(div);
});

it ("Participants render without crash", () => {
    const tree = renderer.create(<Stage />).toJSON();
    expect(tree).toMatchSnapshot();
});
