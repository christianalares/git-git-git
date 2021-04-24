import { Box } from 'ink'
import React, { useEffect } from 'react'
import Header from '../components/Header'
import CreateBranchForm from '../components/CreateBranchForm'
import { useKeyboardNav } from '../store'
import keyboardNav from '../keyboardNav'

const CreateBranch = () => {
  const setNav = useKeyboardNav(state => state.set)

  useEffect(() => {
    setNav([keyboardNav.abortAndGoHome, keyboardNav.enterToCreateBranch])
  }, [])

  return (
    <Box flexDirection="column">
      <Header />
      <CreateBranchForm />
    </Box>
  )
}

export default CreateBranch
