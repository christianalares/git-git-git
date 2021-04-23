import React, { useState, useEffect } from 'react'
import simpleGit from 'simple-git'
import { render, Text, useApp, useInput } from 'ink'
import SelectInput from 'ink-select-input'

const thisFolder = process.cwd()

const git = simpleGit({
  baseDir: thisFolder,
})

const App = () => {
  const [branches, setBranches] = useState([])
  const [error, setError] = useState('')
  const { exit } = useApp()

  useEffect(() => {
    git.branchLocal(async (_commands, output) => {
      if (!output) {
        setError(`😕 This folder (${thisFolder}) is not a git repository.`)
        exit()
      } else {
        const branchItems = output.all.map((branch, i) => ({
          label: `${i + 1}) ${branch}`,
          value: branch,
        }))
        setBranches(branchItems)
      }
    })
  }, [])

  useInput((input, key) => {
    if (input === 'q') {
      exit()
    }
  })

  if (error) {
    return <Text>{error}</Text>
  }

  if (branches.length === 0) {
    return null
  }

  return (
    <>
      <Text color="green">These are your local branches</Text>
      <SelectInput
        items={branches}
        onSelect={a => {
          console.log(a)
        }}
      />
    </>
  )
}

render(<App />)
