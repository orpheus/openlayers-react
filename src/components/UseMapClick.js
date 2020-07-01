import React, { useEffect } from 'react'
import useInterface from '../hooks/useInterface'
import applyEvents, { removeEvents } from '../util/applyEvents'
import createStyle from '../helpers/createStyle'

/**
 * @return {null|Component}
 */
export default function UseMapClick () {
  const interfaceProps = useInterface()

  if (interfaceProps.init) {
    return <MapClickDefault {...interfaceProps} />
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
          color: '#ff231e',
          fill: true
        }))
      }
    }

    applyEvents(map, { click })

    return () => {
      removeEvents(map, { click })
    }
  }, [map])
  return null
}
