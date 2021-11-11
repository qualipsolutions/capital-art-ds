import React from 'react';
import { Switch } from '@headlessui/react';

export interface ToggleSwitchProps {
  enabled: boolean;
  onChange: (value: Boolean) => void;
  switchH?: number;
  switchW?: number;
  toggleTranslateX?: number;
  toggleH?: number;
  toggleW?: number;
}

const ToggleSwitch = ({
  enabled,
  onChange,
  switchH = 6,
  switchW = 11,
  toggleTranslateX = 5,
  toggleH = 5,
  toggleW = 5,
}: ToggleSwitchProps) => (
  <Switch
    checked={enabled}
    onChange={onChange}
    className={`${enabled ? 'bg-green-500' : 'bg-gray-400'}
          relative inline-flex flex-shrink-0 h-${switchH} w-${switchW} border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
  >
    <span className="sr-only">Switch</span>
    <span
      aria-hidden="true"
      className={`${
        enabled ? `translate-x-${toggleTranslateX}` : 'translate-x-0'
      }
            pointer-events-none inline-block h-${toggleH} w-${toggleW} rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
    />
  </Switch>
);

export default ToggleSwitch;
