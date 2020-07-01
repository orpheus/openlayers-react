import KeyboardPanInteraction from 'ol/interaction/KeyboardPan'
import useInteraction from '../hooks/useInteraction'

/**
 * @return {null}
 */
export default function KeyboardPan ({
  options,
  events
}) {
  useInteraction({ Interaction: KeyboardPanInteraction, options, events })
  return null
}

const defaultOptions = {
  condition: undefined,
  duration: undefined,
  pixelDelta: undefined
}

const defaultEvents = {
  change: undefined,
  'change:active': undefined,
  error: undefined,
  propertychange: undefined
}

KeyboardPan.defaultProps = {
  options: defaultOptions,
  events: defaultEvents
}
