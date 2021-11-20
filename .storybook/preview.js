import React from 'react';
import '../tailwind.css';

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};

//decorators: [(Story) => <div id="tailwind-root">{Story()}</div>],

export const decorators = [(Story) => <div id="tailwind-root">{Story()}</div>];
