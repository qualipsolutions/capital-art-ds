import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Pricing, PricingProps, CheckoutProps, PriceTier } from '../src';

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
};

export default meta;

const Template: Story<PricingProps> = (args) => <Pricing {...args} />;

const basic = {
  id: '1',
  title: 'Basic Collector',
  packageCode: 'BASIC-COLLECTOR',
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
    { id: '30', name: 'Quarterly collection report', lineThrough: true },
  ],
  mostPopular: false,
  subscription: false,
  cta: 'Sign up',
};

const premium = {
  id: '2',
  title: 'Premium Collector',
  packageCode: 'PREMIUM-COLLECTOR',
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
  mostPopular: true,
  subscription: true,
  cta: 'Sign up',
};
const reportA = {
  id: '3',
  title: 'Report-Only: Basic',
  packageCode: 'REPORT-ONLY-BASIC',
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
  mostPopular: false,
  subscription: false,
  cta: 'Sign up',
};
const reportB = {
  id: '4',
  title: 'Report-Only: Premium',
  packageCode: 'REPORT-ONLY-PREMIUM',
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
  mostPopular: false,
  subscription: false,
  cta: 'Sign up',
};
const enterprise = {
  id: '5',
  title: 'Pro Collector',
  packageCode: 'PRO-COLLECTOR',
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
  mostPopular: false,
  subscription: false,
  cta: 'Contact us',
};

export const Default: Story<PricingProps> = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  isOutsideSA: false,
  gridColumnsXL: 5,
  gridColumnsLG: 3,
  gridColumnsMD: 2,
  annualDiscount: '20',
  heading: 'Keep your art collection well organised.',
  subHeading: 'Start free.',
  tagLine: 'Find the option that makes the most sense for you.',
  tiers: [basic, premium, reportA, reportB, enterprise],
  onClick: function (priceTier: PriceTier, checkout: CheckoutProps) {
    console.log({ priceTier, checkout });
  },
};

export const UpgradeFromBasic: Story<PricingProps> = Template.bind({});
UpgradeFromBasic.storyName = 'Upgrade From Basic';
UpgradeFromBasic.args = {
  isOutsideSA: false,
  annualDiscount: '20',
  gridColumnsXL: 4,
  gridColumnsLG: 3,
  gridColumnsMD: 2,
  // heading: 'Keep your art collection well organised.',
  // subHeading: 'Start free.',
  tagLine: 'Find the option that makes the most sense for you.',
  tiers: [
    { ...premium, cta: 'Upgrade' },
    { ...reportA, cta: 'Buy' },
    { ...reportB, cta: 'Buy' },
    enterprise,
  ],
  onClick: function (priceTier: PriceTier, checkout: CheckoutProps) {
    console.log({ priceTier, checkout });
  },
};

export const UpgradeFromReportOnlyBasic: Story<PricingProps> = Template.bind(
  {}
);
UpgradeFromReportOnlyBasic.storyName = 'Upgrade From Report Only Basic';
UpgradeFromReportOnlyBasic.args = {
  isOutsideSA: false,
  annualDiscount: '20',
  gridColumnsLG: 3,
  gridColumnsXL: 3,
  gridColumnsMD: 2,
  // heading: 'Keep your art collection well organised.',
  // subHeading: 'Start free.',
  tagLine: 'Find the option that makes the most sense for you.',
  tiers: [
    { ...premium, cta: 'Upgrade' },
    { ...reportB, cta: 'Buy' },
    enterprise,
  ],
  onClick: function (priceTier: PriceTier, checkout: CheckoutProps) {
    console.log({ priceTier, checkout });
  },
};

export const UpgradeFromReportOnlyPremium: Story<PricingProps> = Template.bind(
  {}
);
UpgradeFromReportOnlyPremium.storyName = 'Upgrade From Report Only Premium';
UpgradeFromReportOnlyPremium.args = {
  isOutsideSA: false,
  annualDiscount: '20',
  gridColumnsXL: 2,
  gridColumnsLG: 2,
  gridColumnsMD: 2,
  // heading: 'Keep your art collection well organised.',
  // subHeading: 'Start free.',
  tagLine: 'Find the option that makes the most sense for you.',
  tiers: [{ ...premium, cta: 'Upgrade' }, enterprise],
  onClick: function (priceTier: PriceTier, checkout: CheckoutProps) {
    console.log({ priceTier, checkout });
  },
};

export const PriceOnly: Story<PricingProps> = Template.bind({});
PriceOnly.storyName = 'Price Only';
PriceOnly.args = {
  isOutsideSA: false,
  annualDiscount: '20',
  showFrequencyToggle: true,
  gridColumnsXL: 2,
  gridColumnsLG: 2,
  gridColumnsMD: 2,
  // heading: 'Keep your art collection well organised.',
  // subHeading: 'Start free.',
  // tagLine: 'Find the option that makes the most sense for you.',
  tiers: [{ ...premium, cta: 'Upgrade' }, enterprise],
  onClick: function (priceTier: PriceTier, checkout: CheckoutProps) {
    console.log({ priceTier, checkout });
  },
};

export const OnePrice: Story<PricingProps> = Template.bind({});
OnePrice.storyName = 'One Price';
OnePrice.args = {
  isOutsideSA: false,
  annualDiscount: '20',
  showFrequencyToggle: true,
  gridColumnsXL: 1,
  gridColumnsLG: 1,
  gridColumnsMD: 1,
  // heading: 'Keep your art collection well organised.',
  // subHeading: 'Start free.',
  // tagLine: 'Find the option that makes the most sense for you.',
  tiers: [{ ...premium, cta: 'Upgrade' }],
  onClick: function (priceTier: PriceTier, checkout: CheckoutProps) {
    console.log({ priceTier, checkout });
  },
};
