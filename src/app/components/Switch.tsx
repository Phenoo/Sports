'use client'

import { useTheme } from 'next-themes';

import { Switch } from "@headlessui/react";

import { useState, Fragment } from 'react'
import { RadioGroup } from '@headlessui/react'
import { FaCheck } from 'react-icons/fa';

const plans = ['Dark', 'Light', 'System']

function MyRadioGroup() {
  const [plan, setPlan] = useState(plans[0])

  return (
    <RadioGroup value={plan} onChange={setPlan}>
      <RadioGroup.Label>Plan</RadioGroup.Label>
      {plans.map((plan) => (
        <RadioGroup.Option key={plan} value={plan} as={Fragment}>
          {({ active, checked }) => (
            <li
              className={`${
                active ? 'bg-blue-500 text-white' : 'bg-white text-black'
              }`}
            >
              {checked && <FaCheck />}
              {plan}
            </li>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  )
}

const SwitchToggle = () => {
  const [enabled, setEnabled] = useState(false);
  const { theme, setTheme } = useTheme();
  

  return (
    <div className="py-4 flex flex-col items-center">
      <Switch.Group>

        <Switch
          checked={enabled}
          onChange={setEnabled}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className={` bg-secondary
            relative inline-flex h-[48px] w-[104px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">Use setting</span>
          <span className='text-green absolute'>welcome</span>
          <span
            aria-hidden="true"
            className={`${enabled ? "translate-x-9 " : "translate-x-0"}
              pointer-events-none inline-block h-[24px] w-[24px] bg-primary transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>

      </Switch.Group>
    </div>
  );
};

export default SwitchToggle;