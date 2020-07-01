import PinchZoomInteraction from 'ol/interaction/PinchZoom'
import useInteraction from '../hooks/useInteraction'

/**
 * @return {null}
 */
export default function PinchZoom ({
  options,
  events
}) {
  useInteraction({ Interaction: PinchZoomInteraction, options, events })
  return null
}

const defaultOptions = {
  duration: undefined
}

const defaultEvents = {
  change: undefined,
  'change:active': undefined,
  error: undefined,
  propertychange: undefined
}

PinchZoom.defaultProps = {
  options: defaultOptions,
  events: defaultEvents
}
