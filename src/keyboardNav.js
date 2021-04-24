import { useBranches, useCreateBranchForm, useRenameBranchForm, useView } from './store'
import exec from './utils/exec'

const createInputNav = (input, label, fn) => ({
  input,
  label,
  fn,
})

const createKeyNav = (key, label, fn) => ({
  key,
  label,
  fn,
})

const keyboardNav = {
  createBranch: createInputNav('c', 'Create new branch', () => {
    useView.getState().set('createBranch')
  }),
  abortAndGoHome: createKeyNav('escape', 'Abort and go back', () => {
    useCreateBranchForm.getState().set('')
    setTimeout(() => {
      useView.getState().set('home')
    }, 0)
  }),
  enterToCreateBranch: createInputNav('enter', 'Create branch', () => {}),
  renameBranch: createInputNav('r', 'Rename selected branch', () => {
    useView.getState().set('renameBranch')
    // const { value } = useBranches.getState().highlighted
    // exec(`git checkout ${value}`)
  }),
  enterToRenameBranch: createInputNav('enter', 'Rename branch', () => {}),
  escapeToClearRenameForm: createKeyNav('escape', 'Clear form', () => {
    useRenameBranchForm.getState().set('')
  }),
  deleteBranch: createInputNav('d', 'Delete selected branch', () => {
    console.log('delete selected branch')
  }),
  quit: createInputNav('q', 'Quit', () => {
    process.exit(0)
  }),
}

export default keyboardNav
