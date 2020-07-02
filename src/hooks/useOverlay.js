import Overlay from 'ol/Overlay'
import { useRef, useEffect } from 'react'

import { useMapContext } from './index'
import applyEvents, { removeEvents } from '../util/apply-events'

export default function useOverlay ({ options, events, element }) {
  const overlay = useRef(null)
  const { map, init } = useMapContext()

  useEffect(() => {
    if (init) {
      if (element) options.element = element
      overlay.current = new Overlay({
        ...options
      })
      map.addOverlay(overlay.current)
      applyEvents(overlay.current, events)
    }
    return () => {
      if (init) {
        removeEvents(overlay.current, events)
        map.removeOverlay(overlay.current)
      }
    }
  }, [map, init, options, events, element])

  return overlay?.current
}
