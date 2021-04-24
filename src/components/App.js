import React from 'react'
import { useView } from '../store'
import Home from '../views/Home'
import CreateBranch from '../views/CreateBranch'
import RenameBranch from '../views/RenameBranch'

const App = () => {
  const view = useView(state => state.view)

  if (view === 'home') {
    return <Home />
  }

  if (view === 'createBranch') {
    return <CreateBranch />
  }

  if (view === 'renameBranch') {
    return <RenameBranch />
  }

  return null
}

export default App
