import React, { useState } from 'react'
import TextInput from 'ink-text-input'
// import child_process from 'child_process'
import { Box, useInput } from 'ink'
import useViews from '../hooks/useViews'

const CreateBranchForm = () => {
  const [input, setInput] = useState('')
  const { setView } = useViews()

  useInput((_input, key) => {
    if (key.esc) {
      setView('home')
    }
  })

  const handleSubmit = async () => {
    // child_process.execSync(`git checkout -b ${input}`, {
    //   stdio: 'inherit',
    // })
    console.log('should create branch', input)
    setView('home')
  }

  return (
    <Box
      paddingLeft="1"
      paddingRight="1"
      borderStyle="single"
      flexDirection="column"
      borderColor="grey"
    >
      <TextInput
        placeholder="Enter the new branch name (esc will cancel)"
        value={input}
        onChange={setInput}
        onSubmit={handleSubmit}
      />
    </Box>
  )
}

export default CreateBranchForm
