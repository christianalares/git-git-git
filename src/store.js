import create from 'zustand'
import fetchBranches from './utils/fetchBranches'

export const useView = create(set => ({
  view: 'home',
  set: view => set(() => ({ view })),
}))

export const useBranches = create(set => ({
  branches: [],
  highlighted: '',
  error: '',
  fetch: async () => {
    try {
      const branches = await fetchBranches()
      set(() => ({
        branches,
        highlighted: branches.find(b => b.isCurrent)?.value,
      }))
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err.message)
      process.exit(0)
    }
  },
  setHighlighted: highlighted => set({ highlighted }),
}))

export const useKeyboardNav = create(set => ({
  commands: [],
  set: commands => set({ commands }),
}))

export const useCreateBranchForm = create(set => ({
  input: '',
  set: input => set(() => ({ input })),
}))

export const useRenameBranchForm = create(set => ({
  input: '',
  set: input => set(() => ({ input })),
}))

export const useMessage = create(set => ({
  message: '',
  type: '', // 'error' | 'success'
  set: (type, message) =>
    set(() => ({
      message: message.includes('fatal: ') ? message.split('fatal: ')[1] : message,
      type,
    })),
  unset: () => set(() => ({ message: '', type: '' })),
}))
