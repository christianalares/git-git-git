import React from 'react'
import { render } from 'ink'
import SettingsProvider from './providers/SettingsProvider'
import ViewsProvider from './providers/ViewsProvider'
import BranchesProvider from './providers/BranchesProvider'
import App from './components/App'

const Index = () => {
  return (
    <ViewsProvider>
      <SettingsProvider>
        <BranchesProvider>
          <App />
        </BranchesProvider>
      </SettingsProvider>
    </ViewsProvider>
  )
}

render(<Index />)
