import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Participant from './Participant';

it ("Participants render without crash", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <Participant 
            id={800}
            name={"Joey"}
            avatar={"https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1"}
            inSession={false}
            onStage={false}
        />
    , div);
    ReactDOM.unmountComponentAtNode(div);
});

it ("Renders Participant to UI", () => {
    const tree = renderer.create(<Participant 
        id={800}
        name={"Joey"}
        avatar={"https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1"}
        inSession={false}
        onStage={false}
    />).toJSON();
    expect(tree).toMatchSnapshot();
});