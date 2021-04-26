import React from 'react'
import figures from 'figures'
import { Box, Text } from 'ink'

const Message = ({ type, msg }) => {
  if (type === 'success') {
    return (
      <Box marginTop="1" paddingLeft="1" paddingRight="1">
        <Text color="green">{figures.tick}</Text>
        <Text> </Text>
        <Text color="#b3fdb3">{msg}</Text>
      </Box>
    )
  }

  if (type === 'error') {
    return (
      <Box marginTop="1" paddingLeft="1" paddingRight="1">
        <Text color="red">{figures.cross}</Text>
        <Text> </Text>
        <Text color="#ff8f8f">{msg}</Text>
      </Box>
    )
  }
  return null
}

export default Message
