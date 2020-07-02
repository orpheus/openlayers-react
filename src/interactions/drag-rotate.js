import DragRotateInteraction from 'ol/interaction/DragRotate'
import useInteraction from '../hooks/useInteraction'

/**
 * @return {null}
 */
export default function DragRotate ({
  options,
  events
}) {
  useInteraction({ Interaction: DragRotateInteraction, options, events })
  return null
}

const defaultOptions = {
  condition: undefined,
  duration: undefined
}

const defaultEvents = {
  change: undefined,
  'change:active': undefined,
  error: undefined,
  propertychange: undefined
}

DragRotate.defaultProps = {
  options: defaultOptions,
  events: defaultEvents
}
