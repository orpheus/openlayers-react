import PointerInteraction from 'ol/interaction/Pointer'
import useInteraction from '../hooks/useInteraction'

/**
 * @return {null}
 */
export default function Pointer ({
  options,
  events
}) {
  useInteraction({ Interaction: PointerInteraction, options, events })
  return null
}

const defaultOptions = {
  handleDownEvent: undefined,
  handleDragEvent: undefined,
  handleEvent: undefined,
  handleMoveEvent: undefined,
  handleUpEvent: undefined,
  stopDown: undefined
}

const defaultEvents = {
  change: undefined,
  'change:active': undefined,
  error: undefined,
  propertychange: undefined
}

Pointer.defaultProps = {
  options: defaultOptions,
  events: defaultEvents
}
