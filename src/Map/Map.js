import React, { useRef, useEffect, useState } from 'react'
import OlMap from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'

import { fromLonLat } from 'ol/proj'

export const LAS_MAP_PROJECTION = 'EPSG:4326'
export const lonLat = [parseFloat('-87.458832'), parseFloat('20.213287')]
export const webMercatorCenter = fromLonLat(lonLat, LAS_MAP_PROJECTION)

export const defaultView = new View({
  center: webMercatorCenter,
  zoom: 14,
  projection: LAS_MAP_PROJECTION
})

export const MapContext = React.createContext(null)

function Map ({ children }) {
  const map = useRef()
  const mapDiv = useRef()
  const [init, setInit] = useState(false)

  useEffect(() => {
    map.current = new OlMap({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        })
      ],
      view: defaultView
    })
    setInit(true)
  }, [])

  return (
    <MapContext.Provider value={{ map: map.current, init }}>
      <div className="map" id="map" ref={mapDiv}>
        {children}
      </div>
    </MapContext.Provider>
  )
}

export default Map
