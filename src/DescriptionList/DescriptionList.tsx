import * as React from 'react';
import classnames from 'classnames';

export interface NameValuePair {
  name: string;
  value?: string;
  heading?: boolean;
}
export interface DescriptionListProps {
  title: string;
  subTitle: string;
  list: NameValuePair[];
}

const DescriptionList = ({
  title,
  subTitle,
  list = [],
}: DescriptionListProps) => (
  <div className="bg-white shadow overflow-hidden sm:rounded-lg">
    <div className="px-4 py-5 sm:px-6">
      <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">{subTitle}</p>
    </div>
    <div className="border-t border-gray-200">
      <dl>
        {list.length === 0 && (
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Data not available
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"></dd>
          </div>
        )}
        {list.map(({ name, value, heading }, index) => (
          <div
            className={classnames(
              ' px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6',
              {
                'bg-white': index % 2 === 0,
                'bg-gray-50': index % 2 > 0,
              }
            )}
          >
            {heading ? (
              <dt className="text-md font-semibold text-gray-500">{name}</dt>
            ) : (
              <dt className="text-sm font-medium text-gray-500">{name}</dt>
            )}
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </div>
);

export default DescriptionList;
