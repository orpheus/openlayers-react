import React, { useRef, useEffect, useState } from 'react'
import OlMap from 'ol/Map'
import View from 'ol/View'
import applyEvents, { removeEvents } from '../util/applyEvents'

export const MapContext = React.createContext(null)

function Map ({
  options,
  children,
  events,
  context,
  style,
  ...rest
}) {
  const map = useRef(null)
  const [init, setInit] = useState(false)

  useEffect(() => {
    map.current = new OlMap({
      target: 'map',
      ...options
    })
    applyEvents(map.current, events)
    setInit(true)

    return () => {
      removeEvents(map.current, events)
    }
  }, [options, events])

  return (
    <MapContext.Provider value={{ map: map.current, init, ...context }}>
      <div className="map" id="map" style={{ width: '100%', height: '100%', ...style }} {...rest}>
        {children}
      </div>
    </MapContext.Provider>
  )
}

const defaultOptions = {
  controls: undefined,
  pixelRation: undefined,
  interactions: undefined,
  keyboardEventTarget: undefined,
  layers: undefined,
  maxTilesLoading: undefined,
  moveTolerance: undefined,
  overlays: undefined,
  target: undefined,
  view: new View({
    center: [0, 0],
    zoom: 5
  })
}

const defaultEvents = {
  change: undefined,
  'change:layerGroup': undefined,
  'change:size': undefined,
  'change:target': undefined,
  'change:view': undefined,
  click: undefined,
  dblclick: undefined,
  moveend: undefined,
  movestart: undefined,
  pointerdrag: undefined,
  pointermove: undefined,
  postcompose: undefined,
  postrender: undefined,
  precompose: undefined,
  propertychange: undefined,
  rendercomplete: undefined,
  singleclick: undefined
}

Map.defaultProps = {
  options: defaultOptions,
  events: defaultEvents
}

export default Map
