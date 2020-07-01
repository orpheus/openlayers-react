import React, { useEffect } from 'react'

import applyEvents, { removeEvents } from '../util/applyEvents'
import createStyle from '../helpers/createStyle'
import useMapContext from '../hooks/useMapContext'

/**
 * @return {null|Component}
 */
export default function UseMapClick () {
  const { map, init } = useMapContext()

  if (init) {
    // dynamically render different map click logic containers
    return <MapClickDefault map={map} />
  }

  return null
}

/**
 * @return {null}
 */
export function MapClickDefault ({ map }) {
  useEffect(() => {
    function click (e) {
      const [feature] = e.target.getFeaturesAtPixel(e.pixel)
      if (feature) {
        feature.setStyle(createStyle({
          color: '#56fffc',
          fill: true
        }))
      }
    }

    function dblclick (e) {
      e.preventDefault()
      const [feature] = e.target.getFeaturesAtPixel(e.pixel)
      if (feature) {
        feature.setStyle(undefined)
      }
    }

    applyEvents(map, { click, dblclick })

    return () => {
      removeEvents(map, { click, dblclick })
    }
  }, [map])
  return null
}
