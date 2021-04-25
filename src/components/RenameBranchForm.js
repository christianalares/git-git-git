import React, { useEffect, useState } from 'react'
import { Box } from 'ink'
import TextInput from 'ink-text-input'
import { useBranches, useMessage, useRenameBranchForm, useView } from '../store'
import git from '../utils/git'

const RenameBranchForm = () => {
  const setView = useView(state => state.set)
  const setMessage = useMessage(state => state.set)
  const unsetMessage = useMessage(state => state.unset)
  const input = useRenameBranchForm(state => state.input)
  const setInput = useRenameBranchForm(state => state.set)
  const highlightedBranch = useBranches(state => state.highlighted)
  const [borderColor, setBorderColor] = useState('grey')

  useEffect(() => {
    setInput(highlightedBranch)
  }, [])

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
      await git.branch(['-m', highlightedBranch, input])
      setView('home')
      setInput('')
    } catch (err) {
      setMessage('error', err.message)
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

export default RenameBranchForm
