import React, { useState } from 'react';
import { CheckIcon } from '@heroicons/react/outline';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

export interface PriceTier {
  title: string;
  price?: number;
  semiPrice: string;
  annualPrice: string;
  semiOtherPrice: string;
  annualOtherPrice: string;
  currency: string;
  currencyOther: string;
  description: string;
  features: { id: string; name: string }[];
  cta: string;
  mostPopular: boolean;
  subscription: boolean;
}

export interface PricingProps {
  tiers: PriceTier[];
  annualDiscount: string;
  isOutsideSA: boolean;
  onClick: (priceTier: PriceTier) => void;
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

const Pricing = ({
  tiers = [],
  annualDiscount,
  isOutsideSA = false,
  onClick,
}: PricingProps) => {
  const [isAnnualBilling, setIsAnnualBilling] = useState(false);

  return (
    <div className="tailwind">
      <div className=" mx-auto py-24 px-4 bg-white sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h2 className="relative self-center font-extrabold text-gray-700 text-3xl sm:text-4xl sm:leading-none sm:tracking-tight lg:text-6xl">
            Keep your art collection well organised.
          </h2>
          <h2 className="relative self-center text-3xl font-extrabold text-indigo-500 sm:text-4xl sm:leading-none sm:tracking-tight lg:text-6xl">
            Start free.
          </h2>
        </div>

        {/* Billing Type */}
        <div className="mt-10 sm:flex sm:flex-col sm:align-center">
          <div className="relative self-center mt-6 rounded-lg p-0.5 flex sm:mt-8 flex-wrap items-center justify-center space-y-4 sm:space-y-0">
            <div className="flex">
              <div className="">
                <h2 className="mr-6 leading-6 font-light text-gray-500">
                  Semi-annually
                </h2>
              </div>
              <div className="">
                <ToggleSwitch
                  enabled={isAnnualBilling}
                  onChange={(value: boolean) => setIsAnnualBilling(value)}
                  enabledBackgroundColor="bg-gray-300"
                />
              </div>
              <div className="">
                <h2 className="ml-6 leading-6 font-light text-gray-500">
                  Annually
                </h2>
              </div>
            </div>
            <div className="">
              {annualDiscount && (
                <h3 className="sm:ml-6 p-2 pl-6 pr-6 inline-flex rounded-full text-sm font-medium tracking-wide bg-gray-100 text-black">
                  {`Save ${annualDiscount}% with annual plans`}
                </h3>
              )}
            </div>
          </div>
        </div>

        <div className="mt-20 sm:flex sm:flex-col sm:align-center">
          <h2 className="text-2xl text-indigo-500 font-bold relative self-center ">
            Find the subscription that makes the most sense for you.
          </h2>
        </div>

        {/* Tiers */}
        <div className="mt-14 space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-8 lg:grid-cols-3 xl:grid-cols-5">
          {tiers.map((tier) => {
            let price = '';
            let currency = '';
            let frequency = '';
            if (isAnnualBilling) {
              if (isOutsideSA) {
                price = tier.annualOtherPrice;
                currency = tier.currencyOther;
                frequency = '/annually';
              } else {
                price = tier.annualPrice;
                currency = tier.currency;
                frequency = '/annually';
              }
            } else {
              if (isOutsideSA) {
                price = tier.semiOtherPrice;
                currency = tier.currencyOther;
                frequency = '/semi-annually';
              } else {
                price = tier.semiPrice;
                currency = tier.currency;
                frequency = '/semi-annually';
              }
            }

            if (!tier.subscription) {
              frequency = '';
            }

            return (
              <div
                key={tier.title}
                className="relative p-6 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {tier.title}
                  </h3>
                  {tier.mostPopular ? (
                    <p className="absolute top-0 py-1.5 px-4 bg-indigo-500 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                      Most popular
                    </p>
                  ) : null}
                  <p className="mt-4 flex flex-wrap items-baseline text-gray-900">
                    <span className="text-3xl font-bold tracking-tight">
                      {currency}
                      {price}
                    </span>
                    <span className="ml-1 text-sm font-thin">{frequency}</span>
                  </p>
                  <p className="mt-6 text-gray-500">{tier.description}</p>

                  {/* Feature list */}
                  <ul role="list" className="mt-6 space-y-6">
                    {tier.features.map((feature) => (
                      <li key={feature.id} className="flex">
                        {feature.name && (
                          <CheckIcon
                            className="flex-shrink-0 w-6 h-6 text-indigo-500"
                            aria-hidden="true"
                          />
                        )}
                        <span className="ml-3 text-gray-500">
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    let billingPrice = price === 'Free' ? '0' : price;
                    onClick({
                      ...tier,
                      currency,
                      price: Number(billingPrice?.replace(/,/gi, '')),
                    });
                  }}
                  className={classNames(
                    tier.mostPopular
                      ? 'bg-indigo-500 text-white hover:bg-indigo-600'
                      : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100',
                    'mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium'
                  )}
                >
                  {tier.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
