import React from 'react';
import { Meta, Story } from '@storybook/react';
import { OptionSelector, OptionSelectorProps, OptionItem } from '../src';

const meta: Meta = {
  title: 'Marketing/OptionSelector',
  component: OptionSelector,
  argTypes: {
    isOutsideSA: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<OptionSelectorProps> = (args) => (
  <OptionSelector {...args} />
);

const basic: OptionItem = {
  id: '1',
  title: 'Move to Basic Collector',
  packageCode: 'BASIC-COLLECTOR',
  descriptions: [
    {
      id: '1',
      description:
        'This option allows you to keep your account but with a reduced collection of up to three artworks and with limited functionality.',
    },
    {
      id: '2',
      description: 'You can still upgrade or buy a report at any time.',
    },
    {
      id: '3',
      description:
        'If you move to Basic Collector, you need to decide which three artworks you want to keep on your profile as only up to three artworks are allowed.',
    },
    {
      id: '4',
      description: 'The Basic Collector package is Free.',
    },
  ],
  // linkText: 'See the Pricing for the options available',
  // linkUrl: 'https://test.capitalart.co/pricing',
  cta: 'Switch to Basic Collector',
};

const reportBasic: OptionItem = {
  id: '2',
  title: 'Move to Report-Only: Basic',
  packageCode: 'REPORT-ONLY-BASIC',
  mostPopular: true,
  descriptions: [
    {
      id: '1',
      description:
        'This option allows you to keep your account but you cannot edit your collection until you buy a report.',
    },
    {
      id: '2',
      description: 'You can still upgrade or buy a report at any time.',
    },
    {
      id: '3',
      description:
        'If you move to Report Only, you will not be able to make any further changes to collection until you buy the Report. Once you have purchased the report, you can then update your collection and request a report to be generated on your updated collection.',
    },
  ],
  linkText: 'See the Pricing for the options available',
  linkUrl: 'https://test.capitalart.co/pricing',
  cta: 'Switch to Report-Only: Basic',
};

const deleteAccount: OptionItem = {
  id: '3',
  title: 'Cancel and delete my account',
  packageCode: 'DELETE-ACCOUNT',
  descriptions: [
    {
      id: '1',
      description:
        'This option means you delete your account and would need to sign up again to use the service.',
    },
  ],
  cta: 'Delete my account',
  ctaColor: 'danger',
};

export const Default: Story<OptionSelectorProps> = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  gridColumnsXL: 3,
  gridColumnsLG: 3,
  gridColumnsMD: 2,
  heading: 'You have opted to cancel your subscription.',
  tagLine:
    'Your subscription will continue until the end of the current billing cycle which is [date]. Until then you can continue to use the service as normal. Thereafter, you have two options:',
  tiers: [basic, reportBasic, deleteAccount],
  onClick: function (option: OptionItem) {
    console.log({ option });
  },
};
