'use client'

import { useTheme } from 'next-themes';

import { Switch } from "@headlessui/react";

import { useState, Fragment } from 'react'
import { RadioGroup } from '@headlessui/react'
import { FaCheck } from 'react-icons/fa';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const plans = ['Dark', 'Light', 'System']

export default function RadioTheme() {
  const [plan, setPlan] = useState(plans[0]);
  const { theme, setTheme } = useTheme();

  return (
    <div className="w-full my-2">
      <div className="w-full max-w-md">
      <RadioGroup value={plan} onChange={setPlan}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            {plans.map((plan) => (
              <RadioGroup.Option
                key={plan}
                value={plan}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 '
                      : ''
                  }
                  ${
                    checked ? 'bg-secondary bg-opacity-75 text-secondary-2' : 'text-primary-2'
                  }
                  border border-accent-4 relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? 'text-primary-2' : 'text-secondary-2'
                            }`}
                          >
                            {plan}
                          </RadioGroup.Label>

                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-secondary">
                          <AiOutlineCheckCircle className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

