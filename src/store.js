import create from 'zustand'

export const useView = create(set => ({
  view: 'home',
  set: view => set(() => ({ view })),
}))

export const useKeyboardNav = create(set => ({
  commands: [],
  set: commands => set({ commands }),
}))

export const useCreateBranchForm = create(set => ({
  input: '',
  set: input => set(() => ({ input })),
}))
