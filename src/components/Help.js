import React, { useEffect } from 'react'
import { Text } from 'ink'
import useSettings from '../hooks/useSettings'

const Help = () => {
  const { isKeyboardNavEnabled } = useSettings()

  const keyColor = isKeyboardNavEnabled ? 'white' : 'grey'

  return (
    <Text color={keyColor}>
      [c] <Text color="grey">Create new branch</Text> [r]{' '}
      <Text color="grey">Rename selected branch</Text> [d]{' '}
      <Text color="grey">Delete selected branch</Text> [q/esc/ctrl+c]{' '}
      <Text color="grey">Abort</Text>
    </Text>
  )
}

export default Help
