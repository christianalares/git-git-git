import { Text } from 'ink'
import React, { useEffect } from 'react'
import { useBranches, useMessage } from '../store'

const ConfirmDeleteBranch = () => {
  const highlightedBranch = useBranches(state => state.highlighted)
  const unsetMessage = useMessage(state => state.unset)

  useEffect(() => {
    unsetMessage()
  }, [])

  return (
    <Text>
      Are you sure you want to delete <Text color="yellow">{highlightedBranch}</Text>?
    </Text>
  )
}

export default ConfirmDeleteBranch
