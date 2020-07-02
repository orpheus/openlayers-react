import { LineString, Point, Polygon } from 'ol/geom'
import Feature from 'ol/Feature'
import { layerTypeMap, LINE, POINT, POLYGON } from '../constants'

export default function createFeature ({
  layerType,
  featureData,
  callback
}) {
  const type = layerTypeMap[layerType]
  if (!type) return

  let geometry
  switch (type) {
    case POLYGON:
      geometry = new Polygon(featureData.polyCoords)
      break
    case LINE:
      geometry = new LineString(featureData.polyCoords)
      break
    case POINT:
      geometry = new Point(featureData.polyCoords)
      break
    default:
      throw Error('Layer Type not recognized')
  }

  const feature = new Feature({
    geometry
  })

  if (callback) callback(feature, featureData)

  return feature
}
