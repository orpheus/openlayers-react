import React, { useRef, useEffect, useState } from 'react'
import OlMap from 'ol/Map'
import View from 'ol/View'

export const MapContext = React.createContext(null)

function Map ({ options, children, ...rest }) {
  const map = useRef(null)
  const [init, setInit] = useState(false)

  useEffect(() => {
    map.current = new OlMap({
      target: 'map',
      ...options
    })
    setInit(true)
  }, [options])

  return (
    <MapContext.Provider value={{ map: map.current, init }}>
      <div className="map" id="map" style={{ width: '100%', height: '100%' }} {...rest}>
        {children}
      </div>
    </MapContext.Provider>
  )
}

const defaultOptions = {
  view: new View({
    center: [0, 0],
    zoom: 5
  })
}

Map.defaultProps = {
  options: defaultOptions
}

export default Map
