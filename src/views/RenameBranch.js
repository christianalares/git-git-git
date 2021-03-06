import React, { useEffect } from 'react'
import { useKeyboardNav, useRenameBranchForm } from '../store'
import keyboardNav from '../keyboardNav'
import RenameBranchForm from '../components/RenameBranchForm'
import Layout from '../components/Layout'

const RenameBranch = () => {
  const setNav = useKeyboardNav(state => state.set)
  const input = useRenameBranchForm(state => state.input)

  useEffect(() => {
    if (input.length > 0) {
      setNav([keyboardNav.escapeToClearRenameForm, keyboardNav.enterToRenameBranch])
    } else {
      setNav([keyboardNav.abortAndGoHome])
    }
  }, [input])

  return (
    <Layout>
      <RenameBranchForm />
    </Layout>
  )
}

export default RenameBranch
