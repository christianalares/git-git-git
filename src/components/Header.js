import React, { useState } from 'react'
import { useInput, Box, Text } from 'ink'
import Logo from './Logo'
import Help from './Help'

const Header = () => {
  return (
    <Box paddingLeft="1" paddingRight="1" borderStyle="single" flexDirection="column">
      <Logo />
      <Help />
    </Box>
  )
}

export default Header
