import React, { useEffect, useState } from 'react'
import TextInput from 'ink-text-input'
// import child_process from 'child_process'
import { Box, Text } from 'ink'
import { useCreateBranchForm, useMessage, useView } from '../store'
import git from '../utils/git'

const CreateBranchForm = () => {
  const input = useCreateBranchForm(state => state.input)
  const setInput = useCreateBranchForm(state => state.set)
  const setView = useView(({ set }) => set)
  const setMessage = useMessage(state => state.set)
  const unsetMessage = useMessage(state => state.unset)
  const [borderColor, setBorderColor] = useState('grey')

  useEffect(() => {
    unsetMessage()
  }, [input])

  const handleSubmit = async () => {
    if (input === '') {
      setBorderColor('red')
      setTimeout(() => {
        setBorderColor('grey')
      }, 200)
      return
    }

    try {
      await git.checkoutLocalBranch(input)
      setInput('')
      setView('home')
      setMessage('success', `Created branch "${input}"`)
    } catch (error) {
      setMessage('error', error.message)
    }
  }

  return (
    <>
      <Box
        paddingLeft="1"
        paddingRight="1"
        borderStyle="single"
        flexDirection="column"
        borderColor={borderColor}
      >
        <TextInput
          placeholder="Enter the new branch name (esc will cancel)"
          value={input}
          onChange={setInput}
          onSubmit={handleSubmit}
        />
      </Box>
    </>
  )
}

export default CreateBranchForm
