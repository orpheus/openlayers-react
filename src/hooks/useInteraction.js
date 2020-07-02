import { useEffect, useRef } from 'react'
import useMapContext from './useMapContext'
import applyEvents, { removeEvents } from '../util/apply-events'

export default function useInteraction ({ Interaction, options, events }) {
  const { map, init } = useMapContext()
  const interaction = useRef(null)

  useEffect(() => {
    if (init) {
      interaction.current = new Interaction({
        ...options
      })
      map.addInteraction(interaction.current)
      applyEvents(interaction.current, events)
    }

    return () => {
      if (init) {
        removeEvents(interaction.current, events)
        map.removeInteraction(interaction.current)
      }
    }
  }, [map, options, events, init, Interaction])

  return interaction?.current
}
