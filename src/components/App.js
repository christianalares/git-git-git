import React from 'react'
import useViews from '../hooks/useViews'
import Home from '../views/Home'
import CreateBranch from '../views/CreateBranch'

const App = () => {
  const { view } = useViews()
  // const [showCreateBranchForm, setShowCreateBranchForm] = useState(false)
  // const [isKeyboardNavEnabled, setIsKeyboardNavEnabled] = useState(true)

  // useInput(input => {
  //   if (isKeyboardNavEnabled) {
  //     if (input === 'q' && !showCreateBranchForm) {
  //       process.exit(0)
  //     }

  //     if (input === 'c') {
  //       setShowCreateBranchForm(true)
  //     }
  //   }
  // })

  if (view === 'home') {
    return <Home />
  }

  if (view === 'createBranch') {
    return <CreateBranch />
  }

  return null
}

export default App
