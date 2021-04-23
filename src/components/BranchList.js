import React from 'react'
import SelectInput from 'ink-select-input/build'
import { Text } from 'ink'
import useBranches from '../hooks/useBranches'

const BranchList = () => {
  const { branches, error } = useBranches()

  if (error) {
    return <Text>{error}</Text>
  }

  if (branches.length === 0) {
    return (
      <Text color="grey">
        You have no branches. Press <Text color="white">[c]</Text> to create one
      </Text>
    )
  }

  return (
    <SelectInput
      items={branches}
      onSelect={a => {
        console.log(a)
      }}
    />
  )
}

export default BranchList
