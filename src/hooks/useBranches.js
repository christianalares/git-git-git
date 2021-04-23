import { useContext } from 'react'
import { branchesContext } from '../providers/BranchesProvider'

const useBranches = () => useContext(branchesContext)

export default useBranches
