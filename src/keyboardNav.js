import { useBranches, useCreateBranchForm, useMessage, useRenameBranchForm, useView } from './store'
import git from './utils/git'

const createShortcut = (key, label, fn) => {
  return { key, label, fn }
}

const keyboardNav = {
  createBranch: createShortcut('c', 'Create new branch', () => {
    useView.getState().set('createBranch')
  }),
  abortAndGoHome: createShortcut('escape', 'Abort and go back', () => {
    useCreateBranchForm.getState().set('')
    setTimeout(() => {
      useView.getState().set('home')
    }, 0)
  }),
  enterToCreateBranch: createShortcut('enter', 'Create branch', () => {}),
  escapeToClearCreateForm: createShortcut('escape', 'Clear form', () => {
    useCreateBranchForm.getState().set('')
  }),
  renameBranch: createShortcut('r', 'Rename selected branch', () => {
    useView.getState().set('renameBranch')
  }),
  enterToRenameBranch: createShortcut('enter', 'Rename branch', () => {}),
  escapeToClearRenameForm: createShortcut('escape', 'Clear form', () => {
    useRenameBranchForm.getState().set('')
  }),
  deleteBranch: createShortcut('d', 'Delete selected branch', () => {
    useView.getState().set('deleteBranch')
  }),
  confirmDeleteBranch: createShortcut('y', 'Yes, delete', async () => {
    const { highlighted } = useBranches.getState()
    try {
      await git.deleteLocalBranch(highlighted)
      useMessage.getState().set('success', `Deleted branch "${highlighted}"`)
    } catch (err) {
      useMessage.getState().set('error', err.message)
    } finally {
      useView.getState().set('home')
    }
  }),
  dismissDeleteBranch: createShortcut(['n', 'escape'], 'No, go back', () => {
    useView.getState().set('home')
  }),
  quit: createShortcut('q', 'Quit', () => {
    process.exit(0)
  }),
}

export default keyboardNav
