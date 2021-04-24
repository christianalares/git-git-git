import React from 'react'
import { useView } from '../store'
import Home from '../views/Home'
import CreateBranch from '../views/CreateBranch'

const App = () => {
  const view = useView(state => state.view)

  if (view === 'home') {
    return <Home />
  }

  if (view === 'createBranch') {
    return <CreateBranch />
  }

  return null
}

export default App
