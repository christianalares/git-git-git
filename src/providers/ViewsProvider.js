import React, { createContext, useState } from 'react'

export const viewsContext = createContext()

const ViewsProvider = ({ children }) => {
  const [view, setView] = useState('home')

  return (
    <viewsContext.Provider
      value={{
        view,
        setView,
      }}
    >
      {children}
    </viewsContext.Provider>
  )
}

export default ViewsProvider
