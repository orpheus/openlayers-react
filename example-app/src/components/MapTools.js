import React from 'react'
import { FakeStoreContext } from './FakeStore'
import Interactions from 'rol/interactions/interactions'

export default function MapTools () {
  const { store } = React.useContext(FakeStoreContext)
  const { activeTool, layerType } = store
  // connected to store
  return <Interactions id={'map-tools'}>
    {activeTool === 'Draw' && <interaction.Draw options={{ type: layerType }}/>}
    {activeTool === 'Modify' && <interaction.Modify />}
  </Interactions>
}
