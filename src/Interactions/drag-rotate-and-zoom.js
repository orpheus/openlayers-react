import DragRotateAndZoomInteraction from 'ol/interaction/DragRotateAndZoom'
import useInteraction from '../hooks/useInteraction'

/**
 * @return {null}
 */
export default function DragRotateAndZoom ({
  options,
  events
}) {
  useInteraction({ Interaction: DragRotateAndZoomInteraction, options, events })
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

DragRotateAndZoom.defaultProps = {
  options: defaultOptions,
  events: defaultEvents
}
