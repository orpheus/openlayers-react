import MouseWheelZoomInteraction from 'ol/interaction/MouseWheelZoom'
import useInteraction from '../hooks/useInteraction'

/**
 * @return {null}
 */
export default function MouseWheelZoom ({
  options,
  events
}) {
  useInteraction({ Interaction: MouseWheelZoomInteraction, options, events })
  return null
}

const defaultOptions = {
  condition: undefined,
  maxDelta: undefined,
  duration: undefined,
  timeout: undefined,
  useAnchor: undefined
}

const defaultEvents = {
  change: undefined,
  'change:active': undefined,
  error: undefined,
  propertychange: undefined
}

MouseWheelZoom.defaultProps = {
  options: defaultOptions,
  events: defaultEvents
}
