import React, { useEffect } from 'react'
import { Box } from 'ink'
import Header from '../components/Header'
import { useKeyboardNav, useRenameBranchForm } from '../store'
import keyboardNav from '../keyboardNav'
import RenameBranchForm from '../components/RenameBranchForm'

const RenameBranch = () => {
  const setNav = useKeyboardNav(state => state.set)
  const input = useRenameBranchForm(state => state.input)

  useEffect(() => {
    if (input.length > 0) {
      setNav([keyboardNav.escapeToClearRenameForm, keyboardNav.enterToRenameBranch])
    } else {
      setNav([keyboardNav.abortAndGoHome])
    }
  }, [input])

  return (
    <Box flexDirection="column">
      <Header />
      <RenameBranchForm />
    </Box>
  )
}

export default RenameBranch
