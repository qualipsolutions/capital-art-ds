import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Pricing, PricingProps } from '../src';

const meta: Meta = {
  title: 'Marketing/Pricing',
  component: Pricing,
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
  decorators: [
    (Story) => (
      <div id="tailwind-root">
        <Story />
      </div>
    ),
  ],
};

export default meta;

const Template: Story<PricingProps> = (args) => <Pricing {...args} />;

const basic = {
  title: 'Basic Collector',
  semiPrice: 'Free',
  annualPrice: 'Free',
  semiOtherPrice: 'Free',
  annualOtherPrice: 'Free',
  currency: '',
  currencyOther: '',
  description: 'For individuals to trial a version with limited functionality.',
  features: [
    { id: '10', name: 'Up to 3 artworks' },
    { id: '20', name: 'Securely manage your collection' },
  ],
  cta: 'Sign up',
  mostPopular: false,
  subscription: false,
};

const premium = {
  title: 'Premium Collector',
  semiPrice: '2,399',
  annualPrice: '3,828',
  semiOtherPrice: '239.99',
  annualOtherPrice: '379.99',
  currency: 'R ',
  currencyOther: '$ ',
  // description: 'For individuals.',
  description: 'For individuals.',
  features: [
    { id: '30', name: 'Up to 99 artworks' },
    { id: '40', name: 'Securely manage your collection' },
    { id: '50', name: 'Collection Gallery' },
    { id: '60', name: 'Quarterly Collection Report' },
  ],
  cta: 'Sign up',
  mostPopular: true,
  subscription: true,
};
const reportA = {
  title: 'Report-Only: Basic',
  semiPrice: '1,699',
  annualPrice: '1,699',
  semiOtherPrice: '169.99',
  annualOtherPrice: '169.99',
  currency: 'R ',
  currencyOther: '$ ',
  description: 'For individuals looking for reports on an adhoc basis.',
  features: [
    { id: '70', name: 'Up to 49 artworks' },
    { id: '80', name: 'Securely manage your collection' },
  ],
  cta: 'Sign up',
  mostPopular: false,
  subscription: false,
};
const reportB = {
  title: 'Report-Only: Premium',
  semiPrice: '3,399',
  annualPrice: '3,399',
  semiOtherPrice: '339.99',
  annualOtherPrice: '339.99',
  currency: 'R ',
  currencyOther: '$ ',
  description: 'For individuals looking for reports on an adhoc basis.',
  features: [
    { id: '90', name: '50 to 99 artworks' },
    { id: '100', name: 'Securely manage your collection' },
  ],
  cta: 'Sign up',
  mostPopular: false,
  subscription: false,
};
const enterprise = {
  title: 'Pro Collector',
  semiPrice: 'Contact us',
  annualPrice: 'Contact us',
  semiOtherPrice: 'Contact us',
  annualOtherPrice: 'Contact us',
  currency: '',
  currencyOther: '',
  description: 'For individuals with 100 artworks or more.',
  features: [
    { id: '110', name: '100 or more artworks' },
    { id: '120', name: 'Securely manage your collection' },
    { id: '130', name: 'Collection Gallery' },
    { id: '140', name: 'Quarterly Collection Report' },
  ],
  cta: 'Contact us',
  mostPopular: false,
  subscription: false,
};

export const Default = Template.bind({});
Default.storyName = 'Semi-annually ZAR';
Default.args = {
  isOutsideSA: false,
  annualDiscount: '20',
  tiers: [basic, premium, reportA, reportB, enterprise],
  onClick: function (tier) {
    console.log({ tier });
  },
};
