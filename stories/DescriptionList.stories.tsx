import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DescriptionList, DescriptionListProps } from '../src';

const meta: Meta = {
  title: 'Data Display/Description Lists',
  component: DescriptionList,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<DescriptionListProps> = (args) => (
  <DescriptionList {...args} />
);

export const Default: Story<DescriptionListProps> = Template.bind({});
Default.args = {
  list: [
    { name: 'General', heading: true },
    { name: 'First Name', value: 'Tshepo' },
    { name: 'Last Name', value: 'Mgaga' },
    { name: 'Contact Details', heading: true },
    { name: 'Email', value: 'tshepo.mgaga@gmail.com' },
    { name: 'Contact No', value: '078 075 8158' },
  ],
};
