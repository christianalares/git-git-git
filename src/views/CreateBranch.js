import React, { useEffect } from 'react'
import CreateBranchForm from '../components/CreateBranchForm'
import { useCreateBranchForm, useKeyboardNav } from '../store'
import keyboardNav from '../keyboardNav'
import Layout from '../components/Layout'

const CreateBranch = () => {
  const setNav = useKeyboardNav(state => state.set)
  const input = useCreateBranchForm(state => state.input)

  useEffect(() => {
    if (input.length > 0) {
      setNav([keyboardNav.escapeToClearCreateForm, keyboardNav.enterToCreateBranch])
    } else {
      setNav([keyboardNav.abortAndGoHome])
    }
  }, [input])

  return (
    <Layout>
      <CreateBranchForm />
    </Layout>
  )
}

export default CreateBranch
