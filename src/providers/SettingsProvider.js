import React, { createContext, useState } from 'react'
import { useInput } from 'ink'
import useViews from '../hooks/useViews'

export const settingsContext = createContext()

const SettingsProvider = ({ children }) => {
  const [isKeyboardNavEnabled, setIsKeyboardNavEnabled] = useState(true)
  const { setView } = useViews()

  const enableKeyboardNav = () => setIsKeyboardNavEnabled(true)
  const disableKeyboardNav = () => setIsKeyboardNavEnabled(false)

  useInput(input => {
    if (isKeyboardNavEnabled) {
      if (input === 'q') {
        process.exit(0)
      }

      if (input === 'c') {
        setView('createBranch')
      }
    }
  })

  return (
    <settingsContext.Provider
      value={{
        isKeyboardNavEnabled,
        enableKeyboardNav,
        disableKeyboardNav,
      }}
    >
      {children}
    </settingsContext.Provider>
  )
}

export default SettingsProvider
