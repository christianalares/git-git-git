import React, { useEffect } from 'react'
import SelectInput from 'ink-select-input'
import { Text } from 'ink'
import { useBranches, useMessage } from '../store'
import git from '../utils/git'
import Message from './Message'

const BranchList = () => {
  const fetchBranches = useBranches(state => state.fetch)
  const branches = useBranches(state => state.branches)
  const setHighlightedBranch = useBranches(state => state.setHighlighted)
  const error = useBranches(state => state.error)
  const setMessage = useMessage(state => state.set)
  const unsetMessage = useMessage(state => state.unset)

  useEffect(() => {
    fetchBranches()
  }, [])

  const handleSelect = async ({ value, isCurrent }) => {
    if (isCurrent) {
      setMessage('error', "You're already on that branch")
      return
    }

    try {
      await git.checkout(value)
      setMessage('success', `Changed to branch "${value}"`)
      fetchBranches()
    } catch (err) {
      setMessage('error', err.message)
    }
  }

  if (error) {
    return <Text>{error}</Text>
  }

  if (branches.length === 0) {
    return <Message type="error" message="You have no branches" />
  }

  return (
    <SelectInput
      items={branches}
      onSelect={handleSelect}
      onHighlight={highlighted => {
        setHighlightedBranch(highlighted.value)
        unsetMessage()
      }}
    />
  )
}

export default BranchList
