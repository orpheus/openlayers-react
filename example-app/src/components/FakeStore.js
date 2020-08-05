import React, { createContext, useState } from 'react'

export const FakeStoreContext = createContext(null)
export default function FakeStore ({ children }) {
  const [store, setStore] = useState({
    activeTool: undefined,
    layerType: 'Polygon'
  })

  return <FakeStoreContext.Provider value={{ store, setStore }}>
    {children}
  </FakeStoreContext.Provider>
}
