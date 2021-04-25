import React, { useEffect } from 'react'
import { useKeyboardNav, useRenameBranchForm } from '../store'
import keyboardNav from '../keyboardNav'
import ConfirmDeleteBranch from '../components/ConfirmDeleteBranch'
import Layout from '../components/Layout'

const RenameBranch = () => {
  const setNav = useKeyboardNav(state => state.set)
  const input = useRenameBranchForm(state => state.input)

  useEffect(() => {
    setNav([keyboardNav.confirmDeleteBranch, keyboardNav.dismissDeleteBranch])
  }, [input])

  return (
    <Layout>
      <ConfirmDeleteBranch />
    </Layout>
  )
}

export default RenameBranch
