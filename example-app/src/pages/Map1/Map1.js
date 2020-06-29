import React from 'react'
import { Map, Layers, layer } from 'rol'
import { TulumTile, TulumView } from '../../../../src/mlg'

import lasLayers from '../../../../mockData/layers'
import lasFeatures from '../../../../mockData/features'
import createStyle from '../../../../src/helpers/createStyle'

function Map1 () {
  return <Map options={{ view: TulumView, controls: [] }}>
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
  </Map>
}

export default Map1
