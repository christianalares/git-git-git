import React, { useEffect, useState } from 'react'
import { Box, Text } from 'ink'
import TextInput from 'ink-text-input'
import { useBranches, useKeyboardNav, useRenameBranchForm, useView } from '../store'
import exec from '../utils/exec'
import keyboardNav from '../keyboardNav'

const RenameBranchForm = () => {
  const setView = useView(state => state.set)
  const setNav = useKeyboardNav(state => state.set)
  const input = useRenameBranchForm(state => state.input)
  const setInput = useRenameBranchForm(state => state.set)
  const highlightedBranch = useBranches(state => state.highlighted)
  const [borderColor, setBorderColor] = useState('grey')

  useEffect(() => {
    setInput(highlightedBranch)
  }, [])

  // useEffect(() => {
  //   if (input.length > 0) {
  //     setNav([keyboardNav.escapeToClearRenameForm])
  //   }
  // }, [input])

  const handleSubmit = () => {
    if (input === '') {
      setBorderColor('red')
      setTimeout(() => {
        setBorderColor('grey')
      }, 200)
      return
    }

    exec(`git branch -m ${highlightedBranch} ${input}`)
    setView('home')
    setInput('')
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
      {input.length > 0 && (
        <Box marginTop="1">
          <Text color="green">$ </Text>
          <Text color="white">
            git branch -m {highlightedBranch} {input}
          </Text>
        </Box>
      )}
    </>
  )
}

export default RenameBranchForm
