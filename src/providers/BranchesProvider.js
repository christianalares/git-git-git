import { useApp } from 'ink'
import React, { createContext, useState, useEffect } from 'react'
import chalk from 'chalk'
import simpleGit from 'simple-git'

const thisFolder = process.cwd()

const git = simpleGit({
  baseDir: thisFolder,
})

export const branchesContext = createContext()

const getBranchName = (branch, current) =>
  `${branch === current ? `${branch} ${chalk.italic('(current)')}` : branch}`

const BranchesProvider = ({ children }) => {
  const [branches, setBranches] = useState([])
  const [error, setError] = useState('')
  // const { exit } = useApp()

  const fetchBranches = () => {
    return new Promise((resolve, reject) => {
      git.branchLocal(async (_commands, output) => {
        if (!output) {
          setError(`😕 This folder (${thisFolder}) is not a git repository.`)
          reject()
          process.exit()
        } else {
          const branchItems = output.all.map((branch, i) => ({
            label: `${i + 1}) ${getBranchName(branch, output.current)}`,
            value: branch,
          }))
          setBranches(branchItems)
          resolve(branches)
        }
      })
    })
  }

  useEffect(() => {
    fetchBranches()
  }, [])

  return (
    <branchesContext.Provider
      value={{
        branches,
        error,
        fetchBranches,
      }}
    >
      {children}
    </branchesContext.Provider>
  )
}

export default BranchesProvider
