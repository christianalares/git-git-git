import React from 'react'
import { render } from 'ink'
import App from './components/App'
import BranchesProvider from './providers/BranchesProvider'

render(
  <BranchesProvider>
    <App />
  </BranchesProvider>
)
