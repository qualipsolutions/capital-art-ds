import React from 'react';
import { CheckIcon, XIcon } from '@heroicons/react/outline';
import classnames from 'classnames';

export interface OptionItem {
  id: string;
  title: string;
  packageCode: string;
  descriptions: { id: string; description: string }[];
  features?: { id: string; name: string; lineThrough?: boolean }[];
  cta: string;
  ctaColor?: CTAColor;
  linkText?: string;
  linkUrl?: string;
  mostPopular?: boolean;
}

type CTAColor = 'primary' | 'danger';
type GridColumn = 1 | 2 | 3 | 4 | 5;

export interface OptionSelectorProps {
  heading: string;
  tagLine: string;
  gridColumnsMD: GridColumn;
  gridColumnsXL: GridColumn;
  gridColumnsLG: GridColumn;
  tiers: OptionItem[];
  onClick: (OptionItem: OptionItem) => void;
}

const OptionSelector = ({
  heading,
  tagLine,
  gridColumnsXL = 3,
  gridColumnsLG = 3,
  gridColumnsMD = 2,
  tiers = [],
  onClick,
}: OptionSelectorProps) => {
  return (
    <div className="tailwind">
      <div className=" mx-auto px-4 bg-white sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          {heading && (
            <h2 className="relative self-center font-extrabold text-gray-700 text-3xl sm:text-4xl sm:leading-none sm:tracking-tight lg:text-4xl">
              {heading}
            </h2>
          )}
        </div>

        {tagLine && (
          <div className="mt-10 sm:flex sm:flex-col sm:align-center">
            <h2 className="text-2xl text-gray-600 relative self-center ">
              {tagLine}
            </h2>
          </div>
        )}

        {/* Tiers */}
        <div className="flex items-center justify-center">
          <div
            className={classnames(
              `mt-14 space-y-12 md:space-y-0 md:grid md:gap-x-8 md:gap-y-8 lg:grid-cols-3 xl:grid-cols-5`,
              {
                'md:grid-cols-1': gridColumnsMD === 1,
                'md:grid-cols-2': gridColumnsMD === 2,
                'md:grid-cols-3': gridColumnsMD === 3,
                'md:grid-cols-4': gridColumnsMD === 4,
                'md:grid-cols-5': gridColumnsMD === 5,

                'lg:grid-cols-1': gridColumnsLG === 1,
                'lg:grid-cols-2': gridColumnsLG === 2,
                'lg:grid-cols-3': gridColumnsLG === 3,
                'lg:grid-cols-4': gridColumnsLG === 4,
                'lg:grid-cols-5': gridColumnsLG === 5,

                'xl:grid-cols-1': gridColumnsXL === 1,
                'xl:grid-cols-2': gridColumnsXL === 2,
                'xl:grid-cols-3': gridColumnsXL === 3,
                'xl:grid-cols-4': gridColumnsXL === 4,
                'xl:grid-cols-5': gridColumnsXL === 5,
              }
            )}
          >
            {tiers.map((tier) => {
              const ctaColor = tier?.ctaColor ?? 'primary';
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

                    {tier.descriptions.map((item) => (
                      <p key={item.id} className="mt-6 text-gray-500">
                        {item.description}
                      </p>
                    ))}

                    {/* Feature list */}
                    <ul role="list" className="mt-6 space-y-6">
                      {tier?.features?.map((feature) => (
                        <li key={feature.id} className="flex">
                          {feature.name &&
                            (feature.lineThrough ? (
                              <XIcon
                                className="flex-shrink-0 w-6 h-6 text-red-500"
                                aria-hidden="true"
                              />
                            ) : (
                              <CheckIcon
                                className="flex-shrink-0 w-6 h-6 text-indigo-500"
                                aria-hidden="true"
                              />
                            ))}

                          {feature.lineThrough ? (
                            <span className="ml-3 text-gray-500 line-through">
                              {feature.name}
                            </span>
                          ) : (
                            <span className="ml-3 text-gray-500">
                              {feature.name}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {tier.linkText && (
                    <p className="mt-4 text-sm">
                      <a
                        href={tier.linkUrl}
                        target="_blank"
                        className="font-medium text-gray-500 underline"
                      >
                        {tier.linkText}
                      </a>
                    </p>
                  )}

                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      const OptionSelectorProps = {
                        ...tier,
                      };
                      onClick(OptionSelectorProps);
                    }}
                    className={classnames(
                      'mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium',
                      {
                        'bg-indigo-500 text-white hover:bg-indigo-600':
                          ctaColor === 'primary' && tier.mostPopular,
                        'bg-indigo-50 text-indigo-700 hover:bg-indigo-100':
                          ctaColor === 'primary' && !tier.mostPopular,
                        'bg-rose-500 hover:bg-rose-600 text-white':
                          ctaColor === 'danger',
                      }
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
    </div>
  );
};

export default OptionSelector;
