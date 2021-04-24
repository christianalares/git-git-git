import React, { useEffect } from 'react'
import { Box } from 'ink'
import Header from '../components/Header'
import BranchList from '../components/BranchList'
import { useBranches, useKeyboardNav } from '../store'
import keyboardNav from '../keyboardNav'

const Home = () => {
  const setNav = useKeyboardNav(state => state.set)
  const branches = useBranches(state => state.branches)

  useEffect(() => {
    setNav([
      keyboardNav.createBranch,
      keyboardNav.renameBranch,
      keyboardNav.deleteBranch,
      keyboardNav.quit,
    ])
  }, [])

  // useEffect(() => {
  //   if (branches.length === 0) {
  //     setNav([keyboardNav.createBranch, keyboardNav.quit])
  //   } else {
  //     setNav([
  //       keyboardNav.createBranch,
  //       keyboardNav.renameBranch,
  //       keyboardNav.deleteBranch,
  //       keyboardNav.quit,
  //     ])
  //   }
  // }, [branches])

  return (
    <Box flexDirection="column">
      <Header />
      <BranchList />
    </Box>
  )
}

export default Home
