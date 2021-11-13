import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ToggleSwitch, ToggleSwitchProps } from '../src';

const meta: Meta = {
  title: 'Input/Toggle Switch',
  component: ToggleSwitch,
  argTypes: {
    onClick: { action: 'clicked' },
    enabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
  decorators: [
    (Story) => (
      <div id="tailwind-root">
        <Story />
      </div>
    ),
  ],
};

export default meta;

const Template: Story<ToggleSwitchProps> = (args) => <ToggleSwitch {...args} />;

export const Default = Template.bind({});
Default.args = {
  enabled: false,
};
