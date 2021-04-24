import React, { useEffect, useState } from 'react'
import SelectInput from 'ink-select-input'
import { Box, Text } from 'ink'
import { useBranches, useView } from '../store'
import exec from '../utils/exec'
import ErrorMessage from './ErrorMessage'

const BranchList = () => {
  const fetchBranches = useBranches(state => state.fetch)
  const branches = useBranches(state => state.branches)
  const setHighlightedBranch = useBranches(state => state.setHighlighted)
  const error = useBranches(state => state.error)
  const [errorMessage, setErrorMessage] = useState('')
  const [infoMessage, setInfoMessage] = useState('')
  const setView = useView(state => state.set)

  useEffect(() => {
    fetchBranches()
  }, [])

  // console.log(branches)

  const handleSelect = async ({ value, isCurrent }) => {
    if (isCurrent) {
      setInfoMessage('')
      setErrorMessage("You're already on that branch")
      return
    }

    exec(`git checkout ${value}`)
    await fetchBranches()
    setInfoMessage(`Changed branch to: ${value}`)
  }

  if (error) {
    return <Text>{error}</Text>
  }

  if (branches.length === 0) {
    return <ErrorMessage msg="You have no branches" />
  }

  return (
    <>
      <SelectInput
        items={branches}
        onSelect={handleSelect}
        onHighlight={highlighted => {
          setHighlightedBranch(highlighted.value)
          setErrorMessage('')
          setInfoMessage('')
        }}
      />
      {!!errorMessage && <ErrorMessage msg={errorMessage} />}
      {!!infoMessage && (
        <Box marginTop="1">
          <Text color="green">{infoMessage}</Text>
        </Box>
      )}
    </>
  )
}

export default BranchList
