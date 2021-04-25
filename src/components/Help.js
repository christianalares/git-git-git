import React, { Fragment } from 'react'
import { Box, Text, useInput } from 'ink'
import { useKeyboardNav } from '../store'

const modifierKeys = ['escape', 'enter']

const Help = () => {
  const commands = useKeyboardNav(state => state.commands)
  useInput((input, key) => {
    commands.forEach(cmd => {
      if (Array.isArray(cmd.key)) {
        cmd.key.forEach(k => {
          if ((modifierKeys.includes(k) && key[k]) || k === input) {
            cmd.fn()
          }
        })
      } else if ((modifierKeys.includes(cmd.key) && key[cmd.key]) || cmd.key === input) {
        cmd.fn()
      }
    })
  })

  return (
    <Box flexDirection="column">
      <Text color="white">
        {commands.map(({ key, label }) => (
          <Fragment key={key}>
            [{Array.isArray(key) ? key.join('/') : key}] <Text color="grey">{label}</Text>{' '}
          </Fragment>
        ))}
      </Text>
    </Box>
  )
}

export default Help
