import { useCreateBranchForm, useView } from './store'

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
  abortCreateBranch: createKeyNav('escape', 'Abort and go back', () => {
    useCreateBranchForm.getState().set('')
    setTimeout(() => {
      useView.getState().set('home')
    }, 0)
  }),
  enterToCreateBranch: createInputNav('enter', 'Create branch', () => {}),
  renameBranch: createInputNav('r', 'Rename selected branch', () => {
    console.log('rename selected branch')
  }),
  deleteBranch: createInputNav('d', 'Delete selected branch', () => {
    console.log('delete selected branch')
  }),
  exit: createInputNav('q', 'Abort', () => {
    process.exit(0)
  }),
}

export default keyboardNav
