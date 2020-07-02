import KeyboardZoomInteraction from 'ol/interaction/KeyboardZoom'
import useInteraction from '../hooks/useInteraction'

/**
 * @return {null}
 */
export default function KeyboardZoom ({
  options,
  events
}) {
  useInteraction({ Interaction: KeyboardZoomInteraction, options, events })
  return null
}

const defaultOptions = {
  condition: undefined,
  duration: undefined,
  delta: undefined
}

const defaultEvents = {
  change: undefined,
  'change:active': undefined,
  error: undefined,
  propertychange: undefined
}

KeyboardZoom.defaultProps = {
  options: defaultOptions,
  events: defaultEvents
}
