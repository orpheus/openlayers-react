import React from 'react'

export const FakeStoreContext = React.createContext(null)
export default function FakeStore ({ children }) {
  const [store, setStore] = React.useState({
    activeTool: undefined,
    layerType: 'Polygon'
  })

  return <FakeStoreContext.Provider value={{ store, setStore }}>
    {children}
  </FakeStoreContext.Provider>
}
