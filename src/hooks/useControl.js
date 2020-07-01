import { useEffect, useRef } from 'react'
import useMapContext from './useMapContext'
import applyEvents, { removeEvents } from '../util/applyEvents'

export default function useControl ({ Control, options, events }) {
  const { map, init } = useMapContext()
  const control = useRef(null)

  useEffect(() => {
    if (init) {
      control.current = new Control({
        ...options
      })
      map.addControl(control.current)
      applyEvents(control.current, events)
    }

    return () => {
      if (init) {
        removeEvents(control.current, events)
        map.removeControl(control.current)
      }
    }
  }, [map, options, events, init, Control])

  return control?.current
}
