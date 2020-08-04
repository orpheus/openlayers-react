import View from 'ol/View'
import { fromLonLat } from 'ol/proj'

export const MAP_PROJECTION = 'EPSG:4326'
export const lonLat = [parseFloat('-87.458832'), parseFloat('20.213287')]
export const webMercatorCenter = fromLonLat(lonLat, MAP_PROJECTION)

const TulumView = new View({
  center: webMercatorCenter,
  zoom: 16,
  projection: MAP_PROJECTION
})

export default TulumView
