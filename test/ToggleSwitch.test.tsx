import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as ToggleSwitch } from '../stories/ToggleSwitch.stories';

describe('ToggleSwitch', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ToggleSwitch enabled={true} onChange={(value) => value} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
