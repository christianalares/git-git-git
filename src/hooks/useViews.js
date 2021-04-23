import { useContext } from 'react'
import { viewsContext } from '../providers/ViewsProvider'

const useViews = () => useContext(viewsContext)

export default useViews
