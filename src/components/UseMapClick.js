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
    // dynamically render different map click logic containers
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
