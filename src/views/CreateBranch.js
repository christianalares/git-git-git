import { Box, useInput } from 'ink'
import React, { useEffect } from 'react'
import Header from '../components/Header'
import CreateBranchForm from '../components/CreateBranchForm'
import useViews from '../hooks/useViews'
import useSettings from '../hooks/useSettings'

const CreateBranch = () => {
  const { setView } = useViews()
  const { disableKeyboardNav, enableKeyboardNav } = useSettings()

  useEffect(() => {
    disableKeyboardNav()

    return () => enableKeyboardNav()
  }, [])

  useInput((_input, key) => {
    if (key.escape) {
      setView('home')
    }
  })

  return (
    <Box flexDirection="column">
      <Header />
      <CreateBranchForm cancel={() => setView('home')} />
    </Box>
  )
}

export default CreateBranch
