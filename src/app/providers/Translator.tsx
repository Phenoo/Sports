'use client'
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';

import React from 'react'

const Translator = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
  return (
    <I18nextProvider i18n={i18n}>
        {children}
    </I18nextProvider>
  )
}

export default Translator