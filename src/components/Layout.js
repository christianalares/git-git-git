import { Box } from 'ink'
import React from 'react'
import { useMessage } from '../store'
import Header from './Header'
import Message from './Message'

const Layout = ({ children }) => {
  const { type: msgType, message: msg } = useMessage(({ type, message }) => ({ type, message }))

  return (
    <>
      <Box flexDirection="column">
        <Header />
        {children}
      </Box>
      {!!msg && !!msgType && <Message type={msgType} msg={msg} />}
    </>
  )
}

export default Layout
