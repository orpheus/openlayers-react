import { useEffect, useRef } from 'react'
import useMapContext from './useMapContext'
import applyEvents, { removeEvents } from '../util/apply-events'

export default function useLayer ({ Layer, options, events }) {
  const { map, init } = useMapContext()
  const layer = useRef(null)

  useEffect(() => {
    if (init) {
      layer.current = new Layer({
        ...options
      })
      map.addLayer(layer.current)
      applyEvents(layer.current, events)
    }

    return () => {
      if (init) {
        removeEvents(layer.current, events)
        map.removeLayer(layer.current)
      }
    }
  }, [map, options, events, init, Layer])

  return layer?.current
}
