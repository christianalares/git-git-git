import React from 'react'
import { Box, Text } from 'ink'

const ErrorMessage = ({ msg }) => {
  return (
    <Box marginTop="1">
      <Text color="red">{msg}</Text>
    </Box>
  )
}

export default ErrorMessage
