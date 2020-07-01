import React from 'react'
import {
  Map,
  Layers,
  layer,
  UseMapClick,
  Interactions,
  interaction,
  Controls,
  control,
  Overlays,
  Overlay,
  Toolbar,
  Interface,
  FakeStore,
  MapTools
} from 'rol'
import { TulumTile, TulumView } from '../../../../src/presets'

import lasLayers from '../../../../mockData/layers'
import lasFeatures from '../../../../mockData/features'
import createStyle from '../../../../src/helpers/createStyle'

function Map1 () {
  // typically our logic would go here for each child component: BAD
  // now we can create components with top level access to our map
  return <FakeStore>
    <Map options={{ view: TulumView, controls: [] }}>
      <Layers id={'map1-layers'}>
        <layer.Tile />
        <layer.Tile options={{ source: TulumTile }} />
        {lasLayers.map(_layer => {
          return <layer.Vector
            key={_layer.id}
            features={lasFeatures[_layer.id]}
            layerData={_layer}
            options={{ style: createStyle(_layer.defaultStyle) }}
          />
        })}
      </Layers>
      <Interactions id={'interactions'}>
        <interaction.DragRotate />
      </Interactions>
      <Controls>
        <control.ZoomSlider />
        <control.FullScreen />
      </Controls>
      <Overlays>
        <Overlay options={{ position: [-87.46380561, 20.21145352] }} />
      </Overlays>
      <UseMapClick />
      <Interface>
        <Toolbar />
      </Interface>
      <MapTools />
    </Map>
  </FakeStore>
}

export default Map1
