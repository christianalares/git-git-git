import { useContext } from 'react'
import { settingsContext } from '../providers/SettingsProvider'

const useSettings = () => useContext(settingsContext)

export default useSettings
