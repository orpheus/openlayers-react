import { TileWMS } from 'ol/source'

export default new TileWMS({
  url: process.env.GEOSERVER_URL,
  serverType: 'geoserver',
  zIndex: 0,
  params: {
    LAYERS: 'Tulum_Ben:Tulum10cm',
    VERSION: '1.3.0'
  }
})
