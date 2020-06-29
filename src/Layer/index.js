import Layers from './Layers'
import TileLayer from './Tile'
import VectorLayer from './Vector'

const layers = {
  tile: TileLayer,
  vector: VectorLayer
}

module.exports = {
  layers,
  Layers,
  TileLayer,
  VectorLayer
}
