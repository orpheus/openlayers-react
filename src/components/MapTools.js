import React from 'react'
import { interaction, Interactions } from '../Interactions'
import { FakeStoreContext } from './FakeStore'

export default function MapTools () {
  const { store } = React.useContext(FakeStoreContext)
  const { activeTool, layerType } = store
  // connected to store
  return <Interactions id={'map-tools'}>
    {activeTool === 'Draw' && <interaction.Draw options={{ type: layerType }}/>}
    {activeTool === 'Modify' && <interaction.Modify />}
  </Interactions>
}
