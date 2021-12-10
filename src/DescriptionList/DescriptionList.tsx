import * as React from 'react';
import classnames from 'classnames';

export interface NameValuePair {
  name: string;
  value?: string;
  heading?: boolean;
}
export interface DescriptionListProps {
  list: NameValuePair[];
}

const DescriptionList = ({ list = [] }: DescriptionListProps) => (
  <div>
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
          key={name}
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
);

export default DescriptionList;
