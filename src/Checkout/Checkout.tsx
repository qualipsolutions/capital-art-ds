import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid';

export interface CheckoutProps {
  title: string;
  subtitle?: string;
  packageTitle: string;
  subPackageTitle: string;
  features: string[];
  frequency: string;
  price: string;
  amount: number;
  amountInCents: number;
  currency: string;
  subscription: boolean;
  membershipUrlText?: string;
  membershipUrl?: string;
  paymentButtonText: string;
  onCompletePayment?: (props: CheckoutProps) => void;
}

const Checkout = (props: CheckoutProps) => {
  return (
    <div className="bg-gray-100">
      <div className="pt-12 sm:pt-16 lg:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
              {props.title}
            </h2>
            <p className="mt-4 text-xl text-gray-600">{props.subtitle}</p>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-100" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
              <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  {props.packageTitle}
                </h3>
                <p className="mt-6 text-base text-gray-500">
                  {props.subPackageTitle}
                </p>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600">
                      What's included
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  <ul
                    role="list"
                    className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5"
                  >
                    {props.features?.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start lg:col-span-1"
                      >
                        <div className="flex-shrink-0">
                          <CheckCircleIcon
                            className="h-5 w-5 text-green-400"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                <p className="text-lg leading-6 font-medium text-gray-900">
                  {props.frequency}
                </p>
                <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                  <span>{props.price}</span>
                  <span className="ml-3 text-xl font-medium text-gray-500">
                    {props.currency}
                  </span>
                </div>
                <p className="mt-4 text-sm">
                  <a
                    href={props.membershipUrl}
                    className="font-medium text-gray-500 underline"
                  >
                    {props.membershipUrlText}
                  </a>
                </p>
                {props.paymentButtonText && (
                  <div className="mt-6">
                    <div className="rounded-md shadow">
                      <a
                        href="#"
                        className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600"
                        onClick={(e) => {
                          e.preventDefault();
                          props.onCompletePayment?.(props);
                        }}
                      >
                        {props.paymentButtonText}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
