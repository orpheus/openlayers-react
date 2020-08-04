import React from 'react'
import { FakeStoreContext } from './FakeStore'

const block = {
  height: 70,
  width: 70,
  border: '1px solid white',
  cursor: 'pointer'
}
export default function Toolbar () {
  const { store, setStore } = React.useContext(FakeStoreContext)

  function setActiveTool (tool) {
    console.log('SET ACTIVE TOOL: ', tool)
    setStore(prev => ({
      ...prev,
      activeTool: store.activeTool === tool ? undefined : tool
    }))
  }

  return <div style={{
    width: 70,
    color: 'white',
    background: 'black',
    position: 'fixed',
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <div style={block} onClick={() => setActiveTool('Draw')}>
      DRAW
    </div>
  </div>
}
