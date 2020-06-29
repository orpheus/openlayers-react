import { LineString, Point, Polygon } from 'ol/geom'
import Feature from 'ol/Feature'
import { layerTypeMap, LINE, POINT, POLYGON } from '../constants'

/**
 * Create an OpenLayer feature from feature data
 * @param {Object} featureData
 * @param {Array} featureData.polyCoords - poly coordinates for feature
 * @param layerType toDo: create layerType jsdoc type
 * @param {Function} [callback] - function to run after the feature has been created before it's return with the Feature passed as an argument
 * @returns {Feature|undefined}
 */
export default function createFeature (featureData, layerType, callback) {
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

  callback(feature)

  return feature
}
