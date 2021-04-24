import React, { useState } from 'react'
import TextInput from 'ink-text-input'
// import child_process from 'child_process'
import { Box, Text } from 'ink'
import { useCreateBranchForm, useView } from '../store'

const CreateBranchForm = () => {
  const input = useCreateBranchForm(state => state.input)
  const setInput = useCreateBranchForm(state => state.set)
  const setView = useView(({ set }) => set)

  const handleSubmit = async () => {
    if (input === '') {
      return
    }

    // child_process.execSync(`git checkout -b ${input}`, {
    //   stdio: 'inherit',
    // })
    console.log('should create branch', input)
    setView('home')
  }

  return (
    <>
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
      {input.length > 0 && (
        <Box marginTop="1">
          <Text color="green">$ </Text>
          <Text color="white">git checkout -b {input}</Text>
        </Box>
      )}
    </>
  )
}

export default CreateBranchForm
