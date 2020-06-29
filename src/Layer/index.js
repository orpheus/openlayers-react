import Layers from './Layers'
import TileLayer from './Tile'
import VectorLayer from './Vector'

const layer = {
  tile: TileLayer,
  vector: VectorLayer
}

module.exports = {
  layer,
  Layers,
  TileLayer,
  VectorLayer
}
