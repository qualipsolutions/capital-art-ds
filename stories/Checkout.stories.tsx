import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Checkout, CheckoutProps } from '../src';

const meta: Meta = {
  title: 'Marketing/Checkout',
  component: Checkout,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<CheckoutProps> = (args) => <Checkout {...args} />;

export const Default: Story<CheckoutProps> = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  title: 'Checkout',
  // subtitle: `If you're not satisfied, contact us within the first 14 days and
  // we'll send you a full refund.`,
  packageTitle: 'Premium Collector',
  subPackageTitle: 'For individuals.',
  frequency: 'Semi-annually',
  price: 'R2,399',
  amount: 2399,
  paymentButtonText: 'Complete Payment',
  membershipUrlText: 'Learn about our terms of service',
  membershipUrl: '#pablo',
  features: [
    'Up to 99 artworks',
    'Securely manage your collection',
    'Collection Gallery',
    'Quarterly Collection Report',
  ],
  onCompletePayment: function (props) {
    console.log(props);
  },
};

export const Empty: Story<CheckoutProps> = Template.bind({});
Empty.storyName = 'Empty';
Empty.args = {
  // title: 'Simple no-tricks pricing',
  // subtitle: `If you're not satisfied, contact us within the first 14 days and
  // we'll send you a full refund.`,
  // packageTitle: 'Lifetime Membership',
  // subPackageTitle:
  //   'Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus eturquidem assumenda.',
  // priceHeading: 'Pay once, own it forever',
  // price: '$349',
  // amount: '349',
  // paymentButtonText: 'Complete Payment',
  // membershipUrlText: 'Learn about our terms of service',
  // membershipUrl: '#',
  // features: [
  //   'Private forum access',
  //   'Member resources',
  //   'Entry to annual conference',
  //   'Official member t-shirt',
  // ],
};
