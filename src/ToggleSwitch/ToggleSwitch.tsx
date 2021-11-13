import React from 'react';
import { Switch } from '@headlessui/react';

export interface ToggleSwitchProps {
  enabled: boolean;
  onChange: (value: boolean) => void;
  backgroundColor?: string;
  enabledBackgroundColor?: string;
}

const ToggleSwitch = ({
  enabled,
  onChange,
  enabledBackgroundColor = 'bg-green-500',
  backgroundColor = 'bg-gray-300',
}: ToggleSwitchProps) => (
  <div className="tailwind">
    <Switch
      checked={enabled}
      onChange={onChange}
      className={`${enabled ? enabledBackgroundColor : backgroundColor}
          relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">Switch</span>
      <span
        aria-hidden="true"
        className={`${enabled ? `translate-x-5` : 'translate-x-0'}
            pointer-events-none inline-block h-5 w-5 rounded-full bg-indigo-500 shadow transform ring-0 transition ease-in-out duration-200`}
      />
    </Switch>
  </div>
);

export default ToggleSwitch;
