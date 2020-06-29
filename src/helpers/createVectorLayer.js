import { Vector as VectorSource } from 'ol/source'
import { GeoJSON } from 'ol/format'
import { Vector as VectorLayer } from 'ol/layer'

import createVectorStyle from '../helpers/createStyle'

export default function createVectorLayer (options = {}, features) {
  // console.log(features)
  const source = new VectorSource({
    format: new GeoJSON(),
    features
  })
  const layer = new VectorLayer({
    source,
    style: createVectorStyle(options.defaultStyle),
    ...options
  })
  return { source, layer }
}
