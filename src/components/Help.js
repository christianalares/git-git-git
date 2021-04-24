import React, { Fragment } from 'react'
import { Box, Text, useInput } from 'ink'
import { useKeyboardNav } from '../store'

const Help = () => {
  const commands = useKeyboardNav(state => state.commands)

  useInput((input, key) => {
    commands.forEach(cmd => {
      if ((cmd.input && cmd.input === input) || (cmd.key && key[cmd.key])) {
        cmd.fn()
      }
    })
  })

  return (
    <Box>
      <Text color="white">
        {commands.map(({ input, key, label }) => (
          <Fragment key={input || key}>
            [{input || key}] <Text color="grey">{label}</Text>{' '}
          </Fragment>
        ))}
      </Text>
    </Box>
  )
}

export default Help
