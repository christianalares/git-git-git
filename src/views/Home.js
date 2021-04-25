import React, { useEffect } from 'react'
import { Box, Text } from 'ink'
import BranchList from '../components/BranchList'
import { useBranches, useMessage, useKeyboardNav } from '../store'
import keyboardNav from '../keyboardNav'
import Layout from '../components/Layout'

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
  }, [branches])

  return (
    <Layout>
      <BranchList />
    </Layout>
  )
}

export default Home
