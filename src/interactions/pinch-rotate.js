import PinchRotateInteraction from 'ol/interaction/PinchRotate'
import useInteraction from '../hooks/useInteraction'

/**
 * @return {null}
 */
export default function PinchRotate ({
  options,
  events
}) {
  useInteraction({ Interaction: PinchRotateInteraction, options, events })
  return null
}

const defaultOptions = {
  duration: undefined,
  threshold: undefined
}

const defaultEvents = {
  change: undefined,
  'change:active': undefined,
  error: undefined,
  propertychange: undefined
}

PinchRotate.defaultProps = {
  options: defaultOptions,
  events: defaultEvents
}
