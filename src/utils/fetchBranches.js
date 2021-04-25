import chalk from 'chalk'
import git from './git'

const thisFolder = process.cwd()

const getBranchName = (branch, current) =>
  `${branch === current ? `${branch} ${chalk.italic('(current)')}` : branch}`

const fetchBranches = () => {
  return new Promise((resolve, reject) => {
    git.branchLocal(async (_commands, output) => {
      if (!output) {
        reject(new Error(`😕 This folder (${thisFolder}) is not a git repository.`))
      } else {
        const branchItems = output.all.map((branch, i) => ({
          label: `${i + 1}) ${getBranchName(branch, output.current)}`,
          value: branch,
          isCurrent: branch === output.current,
        }))
        resolve(branchItems)
      }
    })
  })
}

export default fetchBranches
