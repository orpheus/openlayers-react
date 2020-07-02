import DragPanInteraction from 'ol/interaction/DragPan'
import useInteraction from '../hooks/useInteraction'

/**
 * @return {null}
 */
export default function DragPan ({
  options,
  events
}) {
  useInteraction({ Interaction: DragPanInteraction, options, events })
  return null
}

const defaultOptions = {
  condition: undefined,
  kinetic: undefined
}

const defaultEvents = {
  change: undefined,
  'change:active': undefined,
  error: undefined,
  propertychange: undefined
}

DragPan.defaultProps = {
  options: defaultOptions,
  events: defaultEvents
}
