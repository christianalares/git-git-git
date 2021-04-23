import React, { useState } from 'react'
import { useInput, Box, Text } from 'ink'
import Logo from './Logo'
import Help from './Help'

const Header = () => {
  const [showHelp, setShowHelp] = useState(true)

  useInput(input => {
    if (input === '?') {
      setShowHelp(prev => !prev)
    }
  })

  return (
    <Box paddingLeft="1" paddingRight="1" borderStyle="single" flexDirection="column">
      <Text>
        <Logo />
        {!showHelp && (
          <>
            <Text> -</Text> <Text color="grey">Press ? to toggle help info</Text>
          </>
        )}
      </Text>
      {showHelp && <Help />}
    </Box>
  )
}

export default Header
