import React from 'react'
import { Box, Text } from 'ink'

const Message = ({ type, msg }) => {
  if (type === 'success') {
    return (
      <Box marginTop="1" paddingLeft="1" paddingRight="1">
        <Text>👍 </Text>
        <Text color="green">{msg}</Text>
      </Box>
    )
  }

  if (type === 'error') {
    return (
      <Box marginTop="1" paddingLeft="1" paddingRight="1">
        <Text>👎 </Text>
        <Text color="red">{msg}</Text>
      </Box>
    )
  }
  return null
}

export default Message
