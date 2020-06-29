import Layers from './Layers'
import TileLayer from './Tile'
import VectorLayer from './Vector'

const layer = {
  Tile: TileLayer,
  Vector: VectorLayer
}

module.exports = {
  layer,
  Layers,
  TileLayer,
  VectorLayer
}
