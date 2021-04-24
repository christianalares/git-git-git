import React, { useEffect } from 'react'
import { Box } from 'ink'
import Header from '../components/Header'
import BranchList from '../components/BranchList'
import { useKeyboardNav } from '../store'
import keyboardNav from '../keyboardNav'

const Home = () => {
  const setNav = useKeyboardNav(state => state.set)

  useEffect(() => {
    setNav([
      keyboardNav.createBranch,
      keyboardNav.renameBranch,
      keyboardNav.deleteBranch,
      keyboardNav.exit,
    ])
  }, [])

  return (
    <Box flexDirection="column">
      <Header />
      <BranchList />
    </Box>
  )
}

export default Home
