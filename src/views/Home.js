import React from 'react'
import { Box } from 'ink'
import Header from '../components/Header'
import BranchList from '../components/BranchList'

const Home = () => {
  return (
    <Box flexDirection="column">
      <Header />
      <BranchList />
    </Box>
  )
}

export default Home
